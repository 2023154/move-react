export function CourseCard({ course, comingSoonNote }) {
  const isComingSoon = course.status !== 'available'
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-glow ${
        isComingSoon ? 'opacity-80' : ''
      }`}
    >
      <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <img src={course.image} alt={course.title} className="h-44 w-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-accent md:text-xl">{course.title}</h3>
      <p className="mt-3 text-sm text-slate-300 md:text-base">
        {isComingSoon ? comingSoonNote : course.description}
      </p>
      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
          {course.price}
        </span>
        {isComingSoon && (
          <span className="text-xs uppercase tracking-wide text-slate-400">Coming soon</span>
        )}
      </div>
    </article>
  )
}
