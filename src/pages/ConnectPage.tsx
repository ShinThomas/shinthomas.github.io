import { profile } from '../data/portfolio';

export function ConnectPage() {
  return (
    <section>
      <header className="page-header">
        <p className="eyebrow">Connect</p>
        <h1 className="page-title">Let's connect.</h1>
        <p className="page-description">
          If you are a prospective employer and would like to see my resume please message me.
        </p>
      </header>

      <form
        className="connect-form max-w-2xl"
        action={`mailto:${profile.email}`}
        method="post"
        encType="text/plain"
      >
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" id="name" name="name" type="text" required />

        <label className="form-label mt-5" htmlFor="email">
          Email
        </label>
        <input className="form-input" id="email" name="email" type="email" required />

        <label className="form-label mt-5" htmlFor="message">
          Message
        </label>
        <textarea className="form-input min-h-36 resize-y" id="message" name="message" required />

        <button className="btn-primary mt-6" type="submit">
          Send message
        </button>
      </form>
    </section>
  );
}
