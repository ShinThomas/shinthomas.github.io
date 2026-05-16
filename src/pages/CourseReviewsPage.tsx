import { courseReviews } from '../data/portfolio';

function Rating({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 rounded-lg bg-peach-50 px-3 py-2 text-sm leading-5 text-stone-600 dark:bg-stone-900 dark:text-stone-300">
      <span className="block font-semibold text-stone-800 dark:text-stone-100">{label}</span>
      <span>{value}/5</span>
    </div>
  );
}

export function CourseReviewsPage() {
  return (
    <section>
      <header className="page-header">
        <p className="eyebrow">Course Reviews</p>
        <h1 className="page-title">Course Notes and Ratings</h1>
        <p className="page-description">
          A personal log of courses I have taken, with quick notes on topics, difficulty, learning,
          and enjoyment.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {courseReviews.map((course) => (
          <article className="course-card" key={`${course.code}-${course.semester}`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-stone-500 dark:text-stone-400">
                  {course.semester}
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-stone-900 dark:text-stone-50">
                  {course.code}
                </h2>
                <p className="mt-1 text-stone-600 dark:text-stone-300">{course.name}</p>
                <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                  Professor: {course.professor}
                </p>
              </div>
              <span className="w-fit rounded-full bg-lavender-100 px-3 py-1 text-xs font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-200">
                {course.concentration}
              </span>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">
                Covered Material
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-stone-600 dark:text-stone-300">
                {course.coveredMaterial.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid gap-2 min-[420px]:grid-cols-3">
              <Rating label="Difficulty" value={course.difficulty} />
              <Rating label="Learning" value={course.learningValue} />
              <Rating label="Enjoyment" value={course.enjoyment} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
