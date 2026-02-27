import { HeroSlider } from '../components/HeroSlider'
import coverImage from '../images/imagemPrincipal.png'

export function HomeScreen({ slides, ctaLink, loading }) {
  const sliderSlides = slides.map((slide) => ({ ...slide, ctaLink: slide.ctaLink ?? ctaLink ?? '#courses' }))
  const primarySlide = sliderSlides[0] ?? {}
  const primaryTitle = primarySlide.title ?? 'Impulsionamos sua Presença Digital com Estratégia'
  const primaryDescription = primarySlide.description ?? 'Criamos websites profissionais, sistemas personalizados, gestão de tráfego e suporte para sua empresa crescer no digital.'

  return (
    <section id="home" className="relative bg-white text-zinc-950">
      <div className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full overflow-hidden">
        <img
          src={coverImage}
          alt="Main Cover"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold leading-tight text-zinc-950 md:text-6xl lg:text-7xl">
              {primaryTitle}
            </h1>
            <p className="mt-4 text-lg text-zinc-600 font-bold md:text-xl">
              {primaryDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 px-4 pb-12 pt-4 md:space-y-12 md:px-8 md:pb-16 md:pt-6">
        <HeroSlider slides={sliderSlides} />
      </div>
    </section>
  )
}
