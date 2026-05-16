import { projects } from '../data/portfolio';

export function ProjectsPage() {
  return (
    <section>
      <header className="page-header">
        <p className="eyebrow">Projects</p>
        <h1 className="page-title">Selected work.</h1>
        <p className="page-description">
          Projects spanning applied machine learning, data engineering, sports analytics,
          bioinformatics, and research-oriented software.
        </p>
      </header>

      <div className="grid gap-3">
        {projects.map((project) => (
          <article className="quiet-row" key={project.title}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h2 className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50">
                {project.title}
              </h2>
              <span className="shrink-0 text-sm font-medium text-stone-500 dark:text-stone-400">
                {project.dateRange}
              </span>
            </div>
            <p className="mt-2 leading-7 text-stone-600 dark:text-stone-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
