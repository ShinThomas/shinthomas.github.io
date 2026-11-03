// Set this to the supplied PDF path, for example '/resume.pdf'.
const resumePath = '';

if (resumePath) {
  for (const placeholder of document.querySelectorAll('[data-resume]')) {
    const link = document.createElement('a');
    link.href = resumePath;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Resume ↗';
    placeholder.replaceWith(link);
  }
}

const hero = document.querySelector('.hero');
if (hero) {
  const header = document.querySelector('header');
  const syncHeaderHeight = () => hero.style.setProperty('--header-height', header.offsetHeight + 'px');
  syncHeaderHeight();
  new ResizeObserver(syncHeaderHeight).observe(header);
}

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const narrow = matchMedia('(width < 1024px)');

function setMenu(open, restoreFocus = false) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.firstElementChild.textContent = open ? '×' : '☰';
  document.body.classList.toggle('menu-open', open);
  if (restoreFocus) menu.focus();
}

menu.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !narrow.matches) return;
  setMenu(false);
  if (link.hash && link.pathname === location.pathname) {
    document.getElementById(link.hash.slice(1))?.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false, true);
});
narrow.addEventListener('change', () => setMenu(false));

// Align the heading's layout box, even while its reveal is translating it.
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link?.hash || link.pathname !== location.pathname || event.defaultPrevented ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const heading = document.getElementById(link.hash.slice(1));
  if (!heading) return;
  event.preventDefault();
  const moving = heading.closest('[data-reveal-heading]');
  const shift = moving ? parseFloat(getComputedStyle(moving).translate.split(' ')[1]) || 0 : 0;
  const margin = parseFloat(getComputedStyle(heading).scrollMarginTop) || 0;
  history.pushState(null, '', link.hash);
  heading.focus({ preventScroll: true });
  window.scrollTo({ top: window.scrollY + heading.getBoundingClientRect().top - shift - margin });
});

const motion = matchMedia('(prefers-reduced-motion: no-preference)');
const revealTargets = document.querySelectorAll('[data-reveal], [data-reveal-heading]');
const timeline = document.querySelector('.timeline');
let frame = 0;
let lineProgress = 0;
let lastFrame = 0;

function updateMotion(now) {
  frame = 0;
  const viewport = window.innerHeight;
  for (const target of revealTargets) {
    const trigger = target.dataset.reveal === 'timeline' ? .8 : .85;
    const translate = getComputedStyle(target).translate.split(' ');
    const y = parseFloat(translate[1]) || 0;
    const anchor = target.matches('.education-section') ? target.querySelector('h2') : target;
    target.classList.toggle('revealed', anchor.getBoundingClientRect().top - y <= viewport * trigger);
  }

  if (timeline) {
    const rect = timeline.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (viewport * .6 - rect.top) / (rect.height + viewport * .2)));
    lineProgress += (progress - lineProgress) * Math.min(1, (now - lastFrame) / 125);
    timeline.style.setProperty('--line-progress', lineProgress);
    if (Math.abs(progress - lineProgress) > .001) scheduleMotion();
  }
  lastFrame = now;
}

function scheduleMotion() {
  if (motion.matches && !frame) frame = requestAnimationFrame(updateMotion);
}

window.addEventListener('scroll', scheduleMotion, { passive: true });
window.addEventListener('resize', scheduleMotion);
window.addEventListener('pageshow', scheduleMotion);
motion.addEventListener('change', scheduleMotion);
document.fonts.ready.then(scheduleMotion);
scheduleMotion();
document.documentElement.classList.add('motion-ready');

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function reviewEntry(review, index) {
  const row = element('li', '', 'entry');
  const number = element('span', String(index + 1).padStart(2, '0'), 'index');
  number.setAttribute('aria-hidden', 'true');
  const content = element('div');
  content.append(
    element('p', review.code, 'eyebrow'),
    element('h2', review.title),
    element('p', 'Professor: ' + review.professor, 'muted')
  );
  const ratings = element('p', '', 'ratings');
  ratings.append(
    element('strong', 'Enjoyment: ' + review.enjoyment + '/5'),
    element('strong', 'Difficulty: ' + review.difficulty + '/5 (higher is more difficult)')
  );
  const topics = element('ul');
  review.topics.forEach(topic => topics.append(element('li', topic)));
  content.append(ratings, topics);
  row.append(number, content);
  return row;
}

const reviewContent = document.querySelector('#review-content');
if (reviewContent) {
  try {
    const response = await fetch('/course-reviews/reviews.json');
    if (!response.ok) throw new Error('Course reviews could not be loaded');
    const reviews = await response.json();
    if (reviews.length) {
      const list = element('ol', '', 'entries');
      reviews.forEach((review, index) => list.append(reviewEntry(review, index)));
      reviewContent.replaceChildren(list);
    }
  } catch {
    reviewContent.replaceChildren(element('p', 'Course reviews are temporarily unavailable.', 'empty muted'));
  }
}

const pixelField = document.createElement('div');
pixelField.className = 'pixel-field';
pixelField.setAttribute('aria-hidden', 'true');
const pixels = document.createElement('canvas');
pixelField.append(pixels);
document.body.prepend(pixelField);

const pixelBoundary = document.querySelector('.home-footer') || document.querySelector('main');
const pixelMotion = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
const pixelContext = pixels.getContext('2d');
const pixelAccent = getComputedStyle(document.body).getPropertyValue('--accent').trim();
const cellSize = 18;
const doodles = [
  ['11111', '10001', '10101', '10001', '11111'],
  ['01010', '11111', '11111', '01110', '00100'],
  ['00001', '00101', '00101', '10101', '10101'],
];
let pixelEnd = 0;
let pointer;
let sprite;
let activation;
let replayingLink = false;
const pointerPath = [];
const followDelay = 110;
let trailCell;
let route = [];
let drawing;
let pixelFrame;
let lastMove = 0;
let design = 0;
let built = false;

function sizePixelField() {
  const bounds = pixelBoundary.getBoundingClientRect();
  pixelEnd = scrollY + (pixelBoundary.matches('.home-footer') ? bounds.top : bounds.bottom);
  pixelField.style.height = pixelEnd + 'px';
  const scale = Math.min(devicePixelRatio || 1, 2);
  const width = Math.round(innerWidth * scale);
  const height = Math.round(innerHeight * scale);
  if (pixels.width !== width || pixels.height !== height) {
    pixels.width = width;
    pixels.height = height;
  }
  pixelContext?.setTransform(scale, 0, 0, scale, 0, 0);
  schedulePixels();
}

function schedulePixels() {
  if (pixelContext) pixelFrame ??= requestAnimationFrame(drawPixels);
}

function openSpace(x, y, padding, obstacles) {
  return x >= padding && x < document.documentElement.clientWidth - padding &&
    y >= padding && y < innerHeight - padding && scrollY + y < pixelEnd - 100 &&
    obstacles.every(box => x < box.left - padding || x > box.right + padding ||
      y < box.top - padding || y > box.bottom + padding);
}

function drawPixels(now) {
  pixelFrame = undefined;
  pixelContext.save();
  pixelContext.resetTransform();
  pixelContext.clearRect(0, 0, pixels.width, pixels.height);
  pixelContext.restore();
  if (activation) return drawActivation(now);
  if (!pixelMotion.matches || !pointer) return;
  const obstacles = [...document.querySelectorAll('header, h1, h2, h3, main p, .panel, .entries, .empty, .credentials')]
    .map(node => node.getBoundingClientRect());
  if (!openSpace(pointer.x, pointer.y, 0, [])) {
    resetPixels();
    return;
  }

  const paused = now - lastMove > 230;
  const snap = value => Math.floor(value / cellSize) * cellSize + cellSize / 2;
  const playbackTime = now - followDelay;
  while (pointerPath.length > 1 && pointerPath[1].time <= playbackTime) pointerPath.shift();
  const [from, to] = pointerPath;
  const fraction = to ? Math.max(0, Math.min(1, (playbackTime - from.time) / (to.time - from.time))) : 0;
  sprite = to ? {
    x: from.x + (to.x - from.x) * fraction,
    y: from.y + (to.y - from.y) * fraction,
  } : from;
  const settling = pointerPath.length > 1;

  if (sprite) {
    const cell = {x: snap(sprite.x), y: snap(sprite.y + scrollY) - scrollY};
    if (!trailCell || Math.abs(sprite.x - trailCell.x) > 11 || Math.abs(sprite.y - trailCell.y) > 11) {
      if (trailCell) route.push({...trailCell, time: now});
      route = route.slice(-15);
      trailCell = cell;
    }
  }

  if (sprite && trailCell && paused && !settling && !drawing && !built) {
      const origin = [-2, 2, -4, 4, -6, 6].flatMap(dy => [-3, 3, 0].map(dx => ({
        x: trailCell.x + dx * cellSize, y: trailCell.y + dy * cellSize,
      }))).find(point => openSpace(point.x, point.y, 23, obstacles));
      if (origin) {
        const pattern = doodles[design++ % doodles.length];
        const dots = pattern.flatMap((row, rowIndex) => [...row].flatMap((pixel, column) =>
          pixel === '1' ? [{x: origin.x + (column - 2) * 7, y: origin.y + (rowIndex - 2) * 7}] : []));
        drawing = {dots, time: now, trace: [...route, trailCell, origin]};
        built = true;
      }
  }

  function dot(x, y, size, opacity) {
    pixelContext.globalAlpha = opacity;
    pixelContext.fillStyle = pixelAccent;
    pixelContext.fillRect(x - size / 2, y - size / 2, size, size);
  }

  for (const point of route) {
    const alpha = .62 * Math.max(0, 1 - (now - point.time) / 650);
    dot(point.x, point.y, 3, alpha);
  }
  if (drawing) {
    const age = now - drawing.time;
    const buildTime = drawing.dots.length * 48;
    const pulseTime = 480;
    const dissolve = Math.max(0, age - buildTime - pulseTime - 330);
    const alpha = Math.max(0, 1 - dissolve / 420);
    drawing.dots.forEach((point, index) => {
      if (age >= index * 48) dot(point.x, point.y, 5, alpha * (age >= buildTime + pulseTime ? 1 : .82));
    });
    const progress = (age - buildTime) / pulseTime;
    if (progress >= 0 && progress < 1) {
      pixelContext.strokeStyle = pixelAccent;
      pixelContext.lineWidth = 2;
      const nodes = drawing.trace;
      for (let index = 1; index < nodes.length; index++) {
        const glow = Math.max(0, 1 - Math.abs(index - progress * nodes.length) / 3);
        if (!glow) continue;
        const from = nodes[index - 1], to = nodes[index];
        pixelContext.globalAlpha = glow;
        pixelContext.beginPath();
        pixelContext.moveTo(from.x, from.y);
        pixelContext.lineTo(to.x, from.y);
        pixelContext.lineTo(to.x, to.y);
        pixelContext.stroke();
        dot(to.x, to.y, 6, glow);
      }
    }
    if (alpha === 0) drawing = undefined;
  }

  pixelContext.globalCompositeOperation = 'destination-out';
  for (const box of obstacles) pixelContext.fillRect(box.left - 5, box.top - 5, box.width + 10, box.height + 10);
  pixelContext.globalCompositeOperation = 'source-over';
  if (sprite) drawBuddy(sprite, Math.sign(pointer.x - sprite.x), now);
  pixelContext.globalAlpha = 1;
  if (settling || (!built && now - lastMove < 1600) || drawing || route.some(point => now - point.time < 650)) schedulePixels();
}

function resetPixels() {
  pointer = sprite = trailCell = drawing = undefined;
  pointerPath.length = 0;
  route = [];
  built = false;
  schedulePixels();
}

function trackPointer(event) {
  if (activation || !pixelMotion.matches || event.pointerType === 'touch') return;
  if (event.pageY >= pixelEnd - 100) return resetPixels();
  const x = event.clientX;
  const y = event.clientY;
  if (pointer?.x === x && pointer?.y === y) return;
  const time = performance.now();
  if (pointer && time - lastMove > 20) {
    pointerPath.push({...pointer, time: time - 1});
  }
  pointer = {x, y};
  pointerPath.push({...pointer, time});
  lastMove = time;
  built = false;
  schedulePixels();
}

addEventListener('pointermove', trackPointer, {passive: true});
document.documentElement.addEventListener('pointerenter', trackPointer, {passive: true});
document.documentElement.addEventListener('pointerleave', resetPixels);
addEventListener('scroll', () => {
  if (!pointer) return;
  trailCell = drawing = undefined;
  route = [];
  built = false;
  lastMove = performance.now();
  schedulePixels();
}, {passive: true});
pixelMotion.addEventListener('change', resetPixels);
addEventListener('resize', sizePixelField);
new ResizeObserver(sizePixelField).observe(document.body);
sizePixelField();

function drawBuddy(sprite, look, now) {
    pixelContext.fillStyle = pixelAccent;
    pixelContext.globalAlpha = .9;
    const silhouette = ['01110', '11111', '11111', '01110', '01010'];
    silhouette.forEach((row, rowIndex) => [...row].forEach((pixel, column) => {
      if (pixel !== '1') return;
      pixelContext.fillRect(sprite.x + (column - 2) * 4 - 2, sprite.y + (rowIndex - 2) * 4 - 2, 4, 4);
    }));
    pixelContext.globalAlpha = 1;
    pixelContext.fillStyle = getComputedStyle(document.documentElement).backgroundColor;
    const blink = now % 2700 > 2580;
    for (const eye of [-5, 3]) pixelContext.fillRect(sprite.x + eye + look, sprite.y - 4, 3, blink ? 1 : 4);
  }

function clearActivation() {
  activation = undefined;
  pixels.classList.remove('pixel-nav-overlay');
  pixelField.append(pixels);
  resetPixels();
}

function finishActivation() {
  const link = activation.link;
  clearActivation();
  replayingLink = true;
  try { link.click(); } finally { replayingLink = false; }
}

function drawActivation(now) {
  const {link, start, from} = activation;
  const elapsed = now - start;
  if (elapsed >= 380 || !pixelMotion.matches || !link.getClientRects().length) {
    finishActivation();
    return;
  }

  const range = document.createRange();
  range.selectNodeContents(link);
  const bounds = range.getBoundingClientRect();
  const left = bounds.left - 6, top = bounds.top - 6;
  const right = bounds.right + 6, bottom = bounds.bottom + 6;
  const points = [];
  for (const [x1, y1, x2, y2] of [[left, top, right, top], [right, top, right, bottom],
    [right, bottom, left, bottom], [left, bottom, left, top]]) {
    const count = Math.ceil(Math.hypot(x2 - x1, y2 - y1) / 4);
    for (let i = 0; i < count; i++) points.push([x1 + (x2 - x1) * i / count, y1 + (y2 - y1) * i / count]);
  }
  const progress = Math.min(1, elapsed / 150);
  const pulse = (elapsed - 150) / 230 * points.length;
  pixelContext.fillStyle = pixelAccent;
  points.slice(0, Math.ceil(progress * points.length)).forEach(([x, y], index) => {
    pixelContext.globalAlpha = .28 + .72 * Math.max(0, 1 - Math.abs(index - pulse) / 5);
    pixelContext.fillRect(Math.round(x) - 1, Math.round(y) - 1, 3, 3);
  });
  const x = right + 16 < innerWidth - 10 ? right + 16 : left - 16;
  const y = (top + bottom) / 2;
  const hop = Math.min(1, elapsed / 95);
  sprite = {x: from.x + (x - from.x) * hop, y: from.y + (y - from.y) * hop - 7 * Math.sin(Math.PI * hop)};
  drawBuddy(sprite, Math.sign(bounds.left - sprite.x), now);
  schedulePixels();
}

navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || replayingLink || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  if (!pixelContext || !pixelMotion.matches || event.pointerType === 'touch') {
    if (activation) clearActivation();
    return;
  }
  event.preventDefault();
  event.stopImmediatePropagation();
  const bounds = link.getBoundingClientRect();
  activation = {link, start: performance.now(), from: sprite || {x: bounds.left, y: bounds.bottom + 14}};
  pixels.classList.add('pixel-nav-overlay');
  document.body.append(pixels);
  schedulePixels();
}, {capture: true});
