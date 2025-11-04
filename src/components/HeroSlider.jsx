export function HeroSlider({ slides }) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-8 scrollbar-hide md:gap-6 md:px-6">
        {slides.map((slide) => (
          <section
            key={slide.id ?? slide.title}
            className="relative min-w-[90%] snap-center rounded-[2.5rem] border border-move-gray-light/10 bg-metallic-dark p-6 text-move-gray-light shadow-2xl metallic-effect transition-transform duration-300 ease-out hover:-translate-y-1 md:min-w-[70%]"
          >
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night/60">
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.imageAlt ?? slide.title}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                )}
                {slide.price?.main && (
                  <div className="absolute bottom-4 right-4 rounded-full bg-metallic-green px-4 py-2 text-move-beige shadow-glow metallic-effect">
                    <span className="text-sm font-semibold">{slide.price.main}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                {slide.tagline && <span className="text-xs uppercase tracking-[0.35em] text-move-green">{slide.tagline}</span>}
                <div>
                  <h1 className="text-3xl font-semibold md:text-4xl">{slide.title}</h1>
                  {slide.description && <p className="mt-3 text-balance text-sm text-slate-200 md:text-base">{slide.description}</p>}
                </div>

                {Array.isArray(slide.features) && slide.features.length > 0 && (
                  <ul className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
                    {slide.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/5 p-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-move-green" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.price?.note && (
                  <p className="text-xs font-medium uppercase tracking-wide text-move-green">
                    {slide.price.note}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                  {slide.price?.main && (
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-4xl font-bold md:text-5xl"
                        style={{
                          background: 'linear-gradient(to bottom, #C2A46B, #9F845A)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          textShadow: '0 0 10px rgba(194, 164, 107, 0.6), 0 0 20px rgba(194, 164, 107, 0.4)',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {slide.price.main}
                      </span>
                      <span className="text-xs uppercase tracking-[0.4em] text-white">MOVE</span>
                    </div>
                  )}
                  <a
                    href={slide.ctaLink ?? '#courses'}
                    className="inline-flex items-center gap-2 rounded-full bg-move-green metallic-effect px-6 py-3 text-sm font-semibold uppercase tracking-wide text-move-beige shadow-glow transition hover:bg-move-gold hover:text-move-gray-dark"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-night via-night/50 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-night via-night/30 to-transparent" aria-hidden />
    </div>
  )
}
