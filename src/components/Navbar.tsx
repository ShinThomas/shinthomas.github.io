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
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a
          className="site-name"
          href="#/"
          aria-label={`${profile.name} home`}
          onClick={() => setIsOpen(false)}
        >
          {profile.name}
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => {
            const isActive = activeRoute === item.href.replace('#', '');

            return (
              <a
                key={item.href}
                className="nav-link"
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
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
            className="menu-button"
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mobile-nav">
          <div className="mobile-nav-inner">
            {navigation.map((item) => {
              const isActive = activeRoute === item.href.replace('#', '');

              return (
                <a
                  key={item.href}
                  className="mobile-nav-link"
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
