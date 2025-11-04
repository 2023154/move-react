import { HeroSlider } from '../components/HeroSlider'
import { LanguageButtons } from '../components/LanguageButtons'
import { YoutubeEmbed } from '../components/YoutubeEmbed'
import coverImage from '../images/capaprincipal2png.png'

export function HomeScreen({ slides, ctaLink, languages, currentLanguage, onSelectLanguage, loading }) {
  const sliderSlides = slides.map((slide) => ({ ...slide, ctaLink: slide.ctaLink ?? ctaLink ?? '#courses' }))
  const primarySlide = sliderSlides[0] ?? {}
  const primaryTitle = primarySlide.title ?? 'MOVE: transforme sua mudança internacional com autonomia'
  const primaryDescription = primarySlide.description ?? 'Organize documentos, finanças e cronograma da sua mudança com clareza, suporte e materiais atualizados.'
  return (
    <section id="home" className="pt-24">
      <div className="relative w-full">
        <img
          src={coverImage}
          alt="Capa principal MOVE"
          className="h-[360px] w-full border border-white/10 object-cover object-center shadow-2xl md:h-[420px]"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="w-full max-w-5xl">
            <div className="max-w-xl rounded-[2.5rem] border border-white/40 bg-night/70 px-6 py-8 text-slate-100 shadow-2xl backdrop-blur-sm md:px-10 md:py-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-move-green [text-shadow:_0_0_1px_rgb(255_255_255_/_20%),_0_0_1px_rgb(255_255_255_/_20%)] relative">
                {primarySlide.tagline ?? 'Seu plano MOVE começa aqui'}
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                {primaryTitle}
              </h2>
              <p className="mt-3 text-sm text-slate-100/90 md:text-base">
                {primaryDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      <LanguageButtons languages={languages} active={currentLanguage} onSelect={onSelectLanguage} loading={loading} />
      <YoutubeEmbed videoId="32zxszhtm4o" />
      <HeroSlider slides={sliderSlides} />
    </section>
  )
}
