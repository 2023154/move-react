import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa6'

const iconMap = {
  FaGithub: FaGithub,
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaYoutube: FaYoutube
}

export function Footer({ footer }) {
  return (
    <footer className="bg-night/80 py-12" id="footer">
      <div className="mx-auto max-w-5xl px-4 text-center text-slate-300">
        <h2 className="text-2xl font-semibold text-move-green">{footer.title}</h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-6 text-base">
          {footer.links.map(({ label, url, icon }) => {
            const Icon = iconMap[icon] ?? FaGithub
            return (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-move-gold hover:text-move-gold"
                >
                  <Icon className="text-lg" />
                  <span>{label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
