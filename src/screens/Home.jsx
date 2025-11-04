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
    <section id="home" className="bg-night">
      {/* Imagem Principal */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[650px] w-full overflow-hidden">
        <img
          src={coverImage}
          alt="Main Cover"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              {primaryTitle}
            </h1>
            <p className="mt-4 text-lg text-slate-200 drop-shadow-md md:text-xl">
              {primaryDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Botões de Idioma */}
      <div className="py-6">
        <LanguageButtons languages={languages} active={currentLanguage} onSelect={onSelectLanguage} loading={loading} />
      </div>

      {/* Vídeo do YouTube */}
      <div className="py-6">
        <YoutubeEmbed videoId="32zxszhtm4o" />
      </div>

      {/* Slider de Cards */}
      <div className="py-6">
        <HeroSlider slides={sliderSlides} />
      </div>
    </section>
  )
}
