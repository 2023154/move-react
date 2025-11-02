import ReactCountryFlag from 'react-country-flag'

export function LanguageButtons({ languages, active, onSelect, loading }) {
  return (
    <div className="mt-6 flex justify-center gap-2">
      {languages.map(({ code, flag, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => onSelect(code)}
          className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            active === code ? 'border-accent bg-accent text-night shadow-glow' : 'border-white/10 bg-white/5 text-slate-200 hover:border-accent hover:text-accent'
          }`}
        >
          <ReactCountryFlag svg countryCode={flag} className="text-base" />
          <span className="tracking-wide">{label}</span>
        </button>
      ))}
      {loading && (
        <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
          <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
          Translating...
        </span>
      )}
    </div>
  )
}
