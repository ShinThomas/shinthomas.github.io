import { useMemo, useState } from 'react';
import type { CourseReview } from '../data/portfolio';
import { courseReviews } from '../data/portfolio';

type CourseFilter = 'All' | CourseReview['category'];

const filters: CourseFilter[] = ['All', 'Data Science', 'Statistics', 'Math', 'Writing', 'Other'];

function courseId(course: CourseReview) {
  return `${course.code}-${course.semester}`;
}

function DotRating({ label, value }: { label: string; value: number }) {
  return (
    <div className="dot-rating">
      <span aria-hidden="true">{label}</span>
      <span className="sr-only">
        {label}: {value} out of 5
      </span>
      <span className="rating-dots" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <span className={index < value ? 'dot filled' : 'dot'} key={index} />
        ))}
      </span>
    </div>
  );
}

function Ratings({ course }: { course: CourseReview }) {
  return (
    <div className="course-ratings">
      <DotRating label="Difficulty" value={course.difficulty} />
      <DotRating label="Learning" value={course.learningValue} />
      <DotRating label="Enjoyment" value={course.enjoyment} />
    </div>
  );
}

export function CourseReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<CourseFilter>('All');
  const [openCourseId, setOpenCourseId] = useState<string | null>(null);

  const visibleCourses = useMemo(() => {
    if (activeFilter === 'All') {
      return courseReviews;
    }

    return courseReviews.filter((course) => course.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="page-fade" aria-labelledby="courses-title">
      <header className="section-header course-header">
        <h1 id="courses-title">Course Reviews</h1>
        <p>Fun and not fun classes</p>
      </header>

      <nav className="course-filters" aria-label="Course category filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className="filter-button"
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => {
              setActiveFilter(filter);
              setOpenCourseId(null);
            }}
          >
            {filter}
          </button>
        ))}
      </nav>

      <div className="course-list">
        {visibleCourses.map((course) => {
          const id = courseId(course);
          const isOpen = openCourseId === id;

          return (
            <article className="course-row" key={id}>
              <button
                className="course-summary"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-details`}
                onClick={() => setOpenCourseId(isOpen ? null : id)}
              >
                <span className="course-main">
                  <span className="course-code">{course.code}</span>
                  <span>
                    <span className="course-name">{course.name}</span>
                    <span className="course-professor">Professor: {course.professor}</span>
                  </span>
                </span>
                <span className="course-meta">
                  <span>{course.semester}</span>
                  <span>{course.concentration}</span>
                </span>
                <Ratings course={course} />
              </button>

              <div
                className="course-details-shell"
                id={`${id}-details`}
                aria-hidden={!isOpen}
                data-open={isOpen}
              >
                <div className="course-details">
                  <div>
                    <h2>Covered Material</h2>
                    <ul>
                      {course.coveredMaterial.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
