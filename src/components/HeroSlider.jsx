export function HeroSlider({ slides }) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide">
        {slides.map((slide, index) => (
          <section
            key={index}
            className="relative flex min-h-[70vh] min-w-full snap-center items-center justify-center bg-gradient-to-br from-night via-surface to-night px-4 py-16"
            style={slide.image ? {
              backgroundImage: `linear-gradient(135deg, rgba(11, 17, 32, 0.85), rgba(11, 17, 32, 0.6)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } : undefined}
          >
            <div className="glass-panel max-w-2xl rounded-3xl border border-white/10 bg-black/40 p-8 text-center shadow-2xl backdrop-blur">
              <h1 className="text-4xl font-semibold uppercase tracking-widest text-accent md:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-4 text-base text-slate-200 md:text-lg">{slide.subtitle}</p>
              <a
                href={slide.ctaLink ?? '#courses'}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold uppercase tracking-wide text-night shadow-glow transition hover:bg-emerald-500"
              >
                {slide.cta}
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
