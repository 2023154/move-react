import { FaFacebook, FaGithub, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa6'

const iconMap = {
  FaGithub: FaGithub,
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaYoutube: FaYoutube,
  FaWhatsapp: FaWhatsapp
}

export function Footer({ footer }) {
  return (
    <footer className="bg-slate-50 py-10 border-t border-slate-100" id="footer">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900">{footer.title}</h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-6 text-base">
          {footer.links.map(({ label, url, icon }) => {
            const Icon = iconMap[icon] ?? FaInstagram;
            return (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-brand-primary hover:border-brand-primary hover:shadow-xl"
                >
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
