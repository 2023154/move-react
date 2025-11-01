import { HeroSlider } from '../components/HeroSlider'
import { LanguageButtons } from '../components/LanguageButtons'

export function HomeScreen({ slides, ctaLink, languages, currentLanguage, onSelectLanguage, loading }) {
  const sliderSlides = slides.map((slide) => ({ ...slide, ctaLink: slide.ctaLink ?? ctaLink ?? '#courses' }))
  return (
    <section id="home" className="pt-24">
      <HeroSlider slides={sliderSlides} />
      <LanguageButtons languages={languages} active={currentLanguage} onSelect={onSelectLanguage} loading={loading} />
    </section>
  )
}
