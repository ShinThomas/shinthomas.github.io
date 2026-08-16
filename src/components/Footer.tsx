import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Data science, statistics, and useful problems.</p>
      </div>
    </footer>
  );
}
