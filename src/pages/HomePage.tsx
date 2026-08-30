import type { FormEvent } from 'react';
import { useState } from 'react';
import { socialLinks } from '../data/portfolio';

const contactLinks = socialLinks.filter(({ label }) =>
  ['GitHub', 'LinkedIn', 'Instagram'].includes(label),
);

export function HomePage() {
  const [formStatus, setFormStatus] = useState('');

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus('This form is ready to connect, but no delivery service is set up yet.');
  }

  return (
    <article className="page-fade home-page" aria-labelledby="home-title">
      <header className="home-intro">
        <h1 id="home-title">Hi, I'm Thomas.</h1>
        <p>
          I'm currently a senior at Boston University studying Data Science and Statistics. I'm
          interested in machine learning, biology and healthcare, applied research, and using data
          to understand interesting problems.
        </p>
        <p className="home-work">Currently @ Przytycki Lab · Previously @ Pfizer</p>
      </header>

      <p className="home-breadth">
        I've worked on projects involving machine learning, statistics, product data, sports
        analytics, clinical trials, computer vision, and more. I'm naturally curious and love
        exploring different kinds of problems, especially when there's something new for me to learn
        along the way.
      </p>

      <section className="home-outside">
        <p>
          Outside of my computer, I'm a huge sports fan and spend too much time restaurant hopping.
          Follow my Beli journey (@shinthomas) if you want to see where I've been eating. Please
          send me a message below if you want to connect!
        </p>
      </section>

      <section className="home-contact" aria-labelledby="contact-title">
        <div className="home-contact-links">
          <h2 id="contact-title">Contact</h2>
          <nav aria-label="Social links">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Icon size={15} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label>
            <span>Name</span>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />
          </label>

          <label>
            <span>Email</span>
            <input
              id="contact-reply"
              name="replyTo"
              type="text"
              inputMode="email"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea id="contact-message" name="message" rows={5} required />
          </label>

          <button type="submit">Send message</button>
          {formStatus ? <p role="status">{formStatus}</p> : null}
        </form>
      </section>
    </article>
  );
}
