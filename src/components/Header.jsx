import { FiHelpCircle, FiHome, FiGlobe } from 'react-icons/fi'
import { FaCircleHalfStroke } from 'react-icons/fa6'
import logo from '../images/Logo Design for MOVE Initiative.png'

const navItems = [
  { href: '#home', icon: FiHome, labelKey: 'home' },
  { href: '#details', icon: FiGlobe, labelKey: 'details' },
  { href: '#faq', icon: FiHelpCircle, labelKey: 'faq' }
]

export function Header({ labels, onThemeToggle }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-move-gray-light/10 bg-metallic-dark backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm sm:text-base">
        <div className="flex items-center">
          <img src={logo} alt="MOVE Logo" className="h-14 w-auto" />
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ href, icon: Icon, labelKey }) => (
            <a key={href} href={href} className="flex items-center gap-2 text-move-gray-light hover:text-move-gold transition">
              <Icon className="text-lg" />
              <span>{labels?.[labelKey]}</span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={onThemeToggle}
          className="metallic-effect rounded-full border border-move-gray-light/10 bg-metallic-green p-2 text-move-beige transition hover:text-move-gold"
          aria-label="Toggle theme"
        >
          <FaCircleHalfStroke className="text-lg" />
        </button>
      </div>
    </header>
  )
}
