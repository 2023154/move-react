import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { BottomNav } from './components/BottomNav'
import { HomeScreen } from './screens/Home'
import { SalesSections } from './components/SalesSections'
import { Footer } from './components/Footer'
import { baseContent, languages } from './data/content'
import { useAutoTranslate } from './hooks/useAutoTranslate'

const getInitialLang = () => {
  if (typeof navigator === 'undefined') return 'pt'
  const browserLang = (navigator.language || 'pt').toLowerCase()
  if (browserLang.startsWith('pt')) return 'pt'
  if (browserLang.startsWith('es')) return 'es'
  if (browserLang.startsWith('fr')) return 'fr'
  if (browserLang.startsWith('it')) return 'it'
  if (browserLang.startsWith('zh')) return 'zh-CN'
  if (browserLang.startsWith('mn')) return 'mn'
  if (browserLang.startsWith('en')) return 'en'
  return 'pt'
}

const readStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

const writeStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore storage failures (Safari private mode, etc.)
  }
}

export default function App() {
  const [language, setLanguage] = useState(() => readStorage('language', getInitialLang()))
  const { content, loading } = useAutoTranslate(baseContent, language)

  useEffect(() => {
    document.documentElement.lang = language
    writeStorage('language', language)
  }, [language])

  const navLabels = useMemo(() => content.nav, [content])

  return (
    <div className="min-h-screen bg-gradient-to-b from-night via-surface to-night text-slate-100">
      <Header labels={navLabels} />

      <main className="pb-32">
        <HomeScreen
          slides={content.hero.slides}
          ctaLink={content.hero.ctaLink}
          languages={languages}
          currentLanguage={language}
          onSelectLanguage={setLanguage}
          loading={loading}
        />
        <SalesSections sales={content.sales} />
      </main>

      <Footer footer={content.footer} />
      <BottomNav />
    </div>
  )
}
