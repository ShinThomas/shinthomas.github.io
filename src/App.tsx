import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CourseReviewsPage } from './pages/CourseReviewsPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

const routes = {
  '/': HomePage,
  '/projects': ProjectsPage,
  '/course-reviews': CourseReviewsPage,
};

export type RoutePath = keyof typeof routes;

function getRouteFromHash(): RoutePath {
  const route = window.location.hash.replace('#', '') || '/';
  return route in routes ? (route as RoutePath) : '/';
}

export default function App() {
  const [route, setRoute] = useState<RoutePath>(getRouteFromHash);
  const Page = routes[route];

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="site-shell">
      <Navbar activeRoute={route} />
      <main className="site-main">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
