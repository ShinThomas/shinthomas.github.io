import { profile, skills, socialLinks } from '../data/portfolio';

export function HomePage() {
  return (
    <section className="max-w-3xl">
      <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
        hi, i'm Thomas.
      </h1>
      <p className="mt-3 text-sm font-medium text-stone-500 dark:text-stone-400">
        Currently @Pfizer and @Przytycki Lab + @Bradham Lab
      </p>

      <div className="mt-5 space-y-2 text-lg leading-8 text-stone-600 dark:text-stone-300">
        <p>I study Data Science & Statistics at Boston University</p>
        <p>I'm interested in biotech, pharma, sports, ml, and math</p>
        <p>thshin[at]bu[dot]edu</p>
      </div>

      <div className="mt-9 flex flex-wrap gap-3 text-sm font-medium text-stone-600 dark:text-stone-300">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            className="icon-link"
            href={href}
            aria-label={label}
            title={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-sm font-medium text-stone-500 dark:text-stone-400">currently using</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
