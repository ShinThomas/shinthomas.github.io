import { useEffect, useRef, useState } from 'react';
import type { ProjectItem } from '../data/portfolio';
import { projects } from '../data/portfolio';

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<Element | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    dialogRef.current?.focus();
    document.body.classList.add('modal-open');

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      const dialog = dialogRef.current;

      if (dialog?.contains(document.activeElement)) {
        if (event.key === 'Home') {
          event.preventDefault();
          dialog.scrollTop = 0;
          return;
        }

        if (event.key === 'End') {
          event.preventDefault();
          dialog.scrollTop = dialog.scrollHeight;
          return;
        }

        if (event.key === 'PageDown') {
          event.preventDefault();
          dialog.scrollTop += dialog.clientHeight * 0.85;
          return;
        }

        if (event.key === 'PageUp') {
          event.preventDefault();
          dialog.scrollTop -= dialog.clientHeight * 0.85;
          return;
        }
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');

      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose}>
          Close
        </button>

        <p className="meta-line">{project.dateRange}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>

        <ul className="detail-list">
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        <div className="tools-section">
          <h3>Tools &amp; Concepts</h3>
          <p>{project.tools.join(' · ')}</p>
        </div>
      </div>
    </div>
  );
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="page-fade" aria-labelledby="projects-title">
      <header className="section-header">
        <h1 id="projects-title">Projects</h1>
        <p>Cool stuff I've worked on</p>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <button
            className="project-index-item"
            key={project.title}
            type="button"
            aria-haspopup="dialog"
            onClick={() => setSelectedProject(project)}
          >
            <span className="project-row-top">
              <span className="project-title">{project.title}</span>
              <span className="project-arrow" aria-hidden="true">
                +
              </span>
            </span>
            <span className="project-date">{project.dateRange}</span>
            <span className="project-summary">{project.shortDescription}</span>
          </button>
        ))}
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  );
}
