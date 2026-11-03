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
