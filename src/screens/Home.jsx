import { HeroSlider } from '../components/HeroSlider'
import coverImage from '../images/imagemPrincipal.png'

export function HomeScreen({ slides, ctaLink, loading }) {
  const sliderSlides = slides.map((slide) => ({ ...slide, ctaLink: slide.ctaLink ?? ctaLink ?? '#courses' }))
  const primarySlide = sliderSlides[0] ?? {}
  const primaryTitle = primarySlide.title ?? 'We boost your Digital Presence with Strategy'
  const primaryDescription = primarySlide.description ?? 'We create professional websites, custom systems, traffic management and support for your company to grow digitally.'

  return (
    <section id="home" className="relative bg-white text-zinc-950">
      <div className="relative h-[60vh] min-h-[500px] max-h-[800px] w-full overflow-hidden">
        <img
          src={coverImage}
          alt="Main Cover"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-white"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-5xl text-center">
            <div className="animate-in fade-in zoom-in duration-1000 mx-auto inline-block rounded-[3.5rem] border border-white/30 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-20">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-inset ring-white/20">
                 {primarySlide.badge ?? '✨ LEADER IN DIGITAL TRANSFORMATION'}
              </span>
              <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
                {primarySlide.title1} <br />
                <span className="italic">
                  {primarySlide.title2}
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-white md:text-2xl">
                {primaryDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 px-4 pb-12 pt-4 md:space-y-12 md:px-8 md:pb-16 md:pt-6">
        <HeroSlider slides={sliderSlides} />
      </div>
    </section>
  )
}
