import { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  Menu, X, MapPin, Phone, Mail, Clock,
  ChevronDown, User, LogIn
} from 'lucide-react'

const NAV = [
  {
    label: '교회소개', children: [
      { label: '교회소개', to: '/about' },
      { label: '담임목사', to: '/pastor' },
      { label: '섬기는분', to: '/staff' },
      { label: '새가족등록안내', to: '/new-family' },
      { label: '찾아오시는길', to: '/directions' },
    ],
  },
  {
    label: '예배와말씀', children: [
      { label: '예배안내', to: '/worship' },
      { label: '주일설교', to: '/sunday-sermon' },
      { label: '수요찬양기도회', to: '/wednesday-prayer' },
      { label: 'English Ministry', to: '/english-sermon' },
    ],
  },
  {
    label: '다음세대', children: [
      { label: '유아부', to: '/nursery' },
      { label: '유초등부', to: '/elementary' },
      { label: '한어대학청년부', to: '/korean-youth' },
      { label: 'English Ministry', to: '/english-ministry' },
      { label: '한글학교', to: '/korean-school' },
    ],
  },
  {
    label: '나눔터', children: [
      { label: '중보기도', to: '/prayer-request' },
      { label: '새가족소개', to: '/new-family-intro' },
      { label: '포토갤러리', to: '/gallery' },
      { label: '주보', to: '/bulletin' },
    ],
  },
]

const FOOTER_LINKS = [
  { label: '교회소개', to: '/about' },
  { label: '예배안내', to: '/worship' },
  { label: '주일설교', to: '/sunday-sermon' },
  { label: '찾아오시는길', to: '/directions' },
  { label: '중보기도', to: '/prayer-request' },
  { label: '주보', to: '/bulletin' },
]

function DropdownMenu({ label, children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()
  const isActive = children.some(c => location.pathname === c.to)

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium py-1.5 transition-colors ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-2 z-50">
          {children.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-4 py-2.5 text-sm transition-colors ${location.pathname === item.to ? 'text-[#1B3A5C] font-semibold bg-[#FAFAF7]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="block">
          <h1 className="text-lg font-bold text-[#1B3A5C] tracking-tight">뉴저지제일한인교회</h1>
          <span className="text-[11px] text-gray-400 -mt-1 block tracking-wide">The First Korean Church of NJ</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link to="/" className={`text-sm font-medium py-1.5 transition-colors ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>홈</Link>
          {NAV.map(item => (
            <DropdownMenu key={item.label} label={item.label} children={item.children} />
          ))}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
            <Link to="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1">
              <LogIn size={14} /> 로그인
            </Link>
          </div>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="메뉴">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white border-b border-gray-200 px-6 pb-6 max-h-[80vh] overflow-y-auto">
          <Link to="/" className="block py-3 text-base font-semibold text-gray-900 border-b border-gray-100">홈</Link>
          {NAV.map(group => (
            <div key={group.label} className="py-3 border-b border-gray-100">
              <div className="text-xs font-semibold text-[#C8963E] uppercase tracking-wider mb-2">{group.label}</div>
              {group.children.map(item => (
                <Link key={item.to} to={item.to} className="block py-2 text-sm text-gray-600 hover:text-gray-900">{item.label}</Link>
              ))}
            </div>
          ))}
          <div className="pt-4 flex gap-3">
            <Link to="/login" className="flex-1 text-center py-2.5 text-sm font-semibold border border-gray-200 rounded-lg text-gray-700">로그인</Link>
            <Link to="/register" className="flex-1 text-center py-2.5 text-sm font-semibold bg-[#1B3A5C] text-white rounded-lg">회원가입</Link>
          </div>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-[#111827] text-white/60 pt-16 pb-8">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.08]">
          <div>
            <h3 className="text-white font-semibold text-base mb-4">뉴저지제일한인교회</h3>
            <div className="space-y-2.5 text-sm">
              <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#C8963E]" /> 2681 John F Kennedy Blvd<br />Jersey City, NJ 07306</p>
              <p className="flex items-center gap-2"><Phone size={14} className="flex-shrink-0 text-[#C8963E]" /> 201-333-2121 / 201-332-4585</p>
              <p className="flex items-center gap-2"><Mail size={14} className="flex-shrink-0 text-[#C8963E]" /> goodchurchbbs@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">바로가기</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map(link => (
                <li key={link.to}><Link to={link.to} className="text-sm text-white/50 hover:text-[#E8C87A] transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 flex items-center gap-2">
              <Clock size={14} className="text-[#C8963E]" /> 예배시간
            </h4>
            <div className="space-y-1.5 text-sm">
              <p>주일예배 1부: 오전 9:00</p>
              <p>주일예배 2부: 오전 10:30</p>
              <p>수요찬양기도회: 오후 8:00</p>
              <p>금요기도: 오후 8:00</p>
            </div>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">회원</h4>
            <div className="space-y-2.5">
              <Link to="/login" className="block text-sm text-white/50 hover:text-[#E8C87A] transition-colors">로그인</Link>
              <Link to="/register" className="block text-sm text-white/50 hover:text-[#E8C87A] transition-colors">회원가입</Link>
              <Link to="/new-family" className="block text-sm text-white/50 hover:text-[#E8C87A] transition-colors">새가족등록</Link>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 text-xs text-white/30">&copy; 2026 뉴저지제일한인교회. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
