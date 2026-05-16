import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { RoutePath } from '../App';
import { navigation, profile } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

type NavbarProps = {
  activeRoute: RoutePath;
};

export function Navbar({ activeRoute }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-cream/90 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-950/85">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          className="font-display text-base font-semibold tracking-tight text-stone-900 dark:text-stone-50"
          href="#/"
          aria-label={`${profile.name} home`}
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = activeRoute === item.href.replace('#', '');

            return (
              <a
                key={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-lavender-100 text-stone-900 dark:bg-stone-800 dark:text-stone-50'
                    : 'text-stone-600 hover:bg-white/60 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-white'
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            className="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white/80 text-stone-700 shadow-sm transition md:hidden dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
            type="button"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-stone-200 bg-cream px-4 py-3 shadow-soft md:hidden dark:border-stone-800 dark:bg-stone-950">
          <div className="mx-auto grid max-w-4xl gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-stone-700 transition hover:bg-white/75 dark:text-stone-200 dark:hover:bg-stone-900"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
