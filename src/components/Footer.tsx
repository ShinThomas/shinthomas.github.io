import { profile, socialLinks } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-cream py-8 dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-5 text-sm text-stone-500 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-4">
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
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
