import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ConnectPage } from './pages/ConnectPage';
import { CourseReviewsPage } from './pages/CourseReviewsPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

const routes = {
  '/': HomePage,
  '/projects': ProjectsPage,
  '/course-reviews': CourseReviewsPage,
  '/connect': ConnectPage,
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
    <div className="min-h-screen bg-cream text-stone-800 antialiased transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100">
      <Navbar activeRoute={route} />
      <main className="mx-auto min-h-[calc(100vh-9rem)] max-w-4xl px-5 pb-16 pt-28 sm:px-6 lg:px-8">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
