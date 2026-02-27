export function HeroSlider({ slides }) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-2 scrollbar-hide md:gap-6 md:px-6">
        {slides.map((slide) => (
          <section
            key={slide.id ?? slide.title}
            className="relative min-w-[90%] snap-center rounded-[2.5rem] border border-slate-200 bg-white p-6 text-zinc-950 shadow-xl transition-transform duration-300 ease-out hover:-translate-y-1 md:min-w-[70%]"
          >
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-100">
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.imageAlt ?? slide.title}
                    className="h-full w-full object-cover object-center opacity-80"
                    loading="lazy"
                  />
                )}
                {slide.price?.main && (
                  <div className="absolute bottom-4 right-4 rounded-full bg-brand-primary px-4 py-2 text-white shadow-lg">
                    <span className="text-sm font-bold">{slide.price.main}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                {slide.tagline && <span className="text-xs font-bold uppercase tracking-[0.35em] text-brand-primary">{slide.tagline}</span>}
                <div>
                  <h1 className="text-3xl font-extrabold text-zinc-950 md:text-4xl">{slide.title}</h1>
                  {slide.description && <p className="mt-3 text-balance text-sm text-zinc-700 md:text-base">{slide.description}</p>}
                </div>

                {Array.isArray(slide.features) && slide.features.length > 0 && (
                  <ul className="grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
                    {slide.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.price?.note && (
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-primary">
                    {slide.price.note}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                  {slide.price?.main && (
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-4xl font-black md:text-5xl text-brand-primary"
                        style={{
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {slide.price.main}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">AGENCY</span>
                    </div>
                  )}
                  <a
                    href={slide.ctaLink ?? '#courses'}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-slate-900 px-8 py-4 text-base font-black uppercase text-white shadow-md transition-all duration-300 hover:bg-white hover:text-slate-900"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/50 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/30 to-transparent" aria-hidden />
    </div>
  )
}
