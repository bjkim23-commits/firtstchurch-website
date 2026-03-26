import { useState } from 'react'

const navItems = [
  { label: '홈', href: '#', active: true },
  { label: '교회소개', href: '#about' },
  { label: '예배/설교', href: '#sermons' },
  { label: '교회소식', href: '#news' },
  { label: '오시는 길', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div>
          <h1 className="text-lg font-bold text-primary tracking-tight">
            뉴저지제일한인교회
          </h1>
          <span className="text-[11px] text-gray-400 -mt-1 block tracking-wide">
            The First Korean Church of NJ
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium relative py-1.5 transition-colors ${
                item.active
                  ? 'text-gray-900 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-accent'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="메뉴"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
