import { useState } from 'react'
import {
  Sun, Music, Moon, Heart, ChevronRight,
  Menu, X, MapPin, Phone, Mail, Clock,
  BookOpen, Users, PlayCircle
} from 'lucide-react'

/* ─── Unsplash Images ─── */
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80',
  worship: 'https://images.unsplash.com/photo-1519491050282-cf00e2cb4eb6?w=800&q=80',
  community: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
  bible: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
}

/* ─── Data ─── */
const navItems = [
  { label: '홈', href: '#', active: true },
  { label: '교회소개', href: '#about' },
  { label: '예배/설교', href: '#sermons' },
  { label: '교회소식', href: '#news' },
  { label: '오시는 길', href: '#contact' },
]

const services = [
  { icon: Sun, title: '주일예배', time: '매주 일요일 오전 11:00', location: '본당' },
  { icon: Music, title: '수요찬양기도회', time: '매주 수요일 오후 7:30', location: '본당' },
  { icon: Moon, title: '토요새벽기도회', time: '매주 토요일 오전 6:00', location: '소예배실' },
  { icon: Heart, title: '금요기도회', time: '매주 금요일 오후 8:00', location: '본당' },
]

const sermons = [
  { date: '2026.03.22', title: '믿음으로 나아가는 삶', verse: '히브리서 11:1-6 | 강상석 담임목사' },
  { date: '2026.03.15', title: '사랑의 능력', verse: '고린도전서 13:1-13 | 강상석 담임목사' },
  { date: '2026.03.08', title: '새로운 시작', verse: '이사야 43:18-19 | 강상석 담임목사' },
]

const newsItems = [
  { badge: '공지', badgeColor: 'bg-[#1B3A5C]', title: '2026년 부활절 연합예배 안내', desc: '4월 5일(일) 오전 10시, 부활절 연합예배가 진행됩니다. 성도님들의 많은 참여 부탁드립니다.', date: '2026.03.20', image: IMAGES.worship },
  { badge: '행사', badgeColor: 'bg-[#C8963E]', title: '봄 성경학교 참가자 모집', desc: '4월 중 어린이 봄 성경학교를 진행합니다. 참가 신청은 교육부로 문의해 주세요.', date: '2026.03.18', image: IMAGES.bible },
  { badge: '새가족', badgeColor: 'bg-[#2A5A8C]', title: '새가족 등록 안내', desc: '처음 방문하신 분들을 환영합니다. 예배 후 친교실에서 새가족 등록을 도와드립니다.', date: '2026.03.15', image: IMAGES.community },
]

const footerLinks = [
  { label: '교회소개', href: '#about' },
  { label: '예배/설교', href: '#sermons' },
  { label: '교회소식', href: '#news' },
  { label: '오시는 길', href: '#contact' },
]

/* ─── Header ─── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between h-16">
        <div>
          <h1 className="text-lg font-bold text-[#1B3A5C] tracking-tight">뉴저지제일한인교회</h1>
          <span className="text-[11px] text-gray-400 -mt-1 block tracking-wide">The First Korean Church of NJ</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}
              className={`text-sm font-medium relative py-1.5 transition-colors ${
                item.active
                  ? 'text-gray-900 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-[#C8963E]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >{item.label}</a>
          ))}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="메뉴">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-6 pb-4">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >{item.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

/* ─── Hero (with Unsplash background) ─── */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2440]/90 via-[#1B3A5C]/80 to-[#2A5A8C]/70" />
      </div>
      {/* Decorative overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(200,150,62,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(42,90,140,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-[680px] px-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.25] tracking-tight mb-5">
          하나님의 사랑으로<br />세상을 품는 교회
        </h2>
        <p className="text-lg md:text-xl font-light opacity-80 mb-10">뉴저지제일한인교회에 오신 것을 환영합니다</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#about" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8963E] text-white text-sm font-semibold rounded-full hover:bg-amber-700 hover:scale-[1.02] transition-all">
            <BookOpen size={16} /> 교회 소개
          </a>
          <a href="#sermons" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:scale-[1.02] transition-all">
            <PlayCircle size={16} /> 예배 안내
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Worship Info ─── */
function WorshipInfo() {
  return (
    <section id="worship" className="py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">예배 안내</h2>
        <p className="text-center text-gray-500 mb-16">함께 예배하며 하나님을 만나는 시간</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="group border border-gray-200 rounded-xl p-8 text-center transition-all hover:border-transparent hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-5 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.time}</p>
                <p className="text-xs text-gray-400 mt-1">{s.location}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Recent Sermons ─── */
function RecentSermons() {
  return (
    <section id="sermons" className="py-24 md:py-32 bg-[#FAFAF7]">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">최근 설교</h2>
        <p className="text-center text-gray-500 mb-16">생명의 말씀을 들으실 수 있습니다</p>
        <div className="max-w-[720px] mx-auto">
          {sermons.map((s, i) => (
            <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 ${i < sermons.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <span className="flex-shrink-0 text-sm font-semibold text-[#1B3A5C] min-w-[100px]">{s.date}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.verse}</p>
              </div>
              <PlayCircle size={18} className="hidden sm:block text-gray-300 flex-shrink-0" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-sm font-semibold text-[#1B3A5C] hover:text-[#2A5A8C] transition-colors group">
            설교 더보기 <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── News (with images) ─── */
function News() {
  return (
    <section id="news" className="py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">교회 소식</h2>
        <p className="text-center text-gray-500 mb-16">뉴저지제일한인교회의 소식을 전합니다</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsItems.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-transparent hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
              <div className="h-44 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${item.badgeColor}`}>{item.badge}</span>
                <h3 className="font-semibold text-base mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                <span className="block mt-4 text-xs text-gray-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-sm font-semibold text-[#1B3A5C] hover:text-[#2A5A8C] transition-colors group">
            소식 더보기 <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#111827] text-white/60 pt-16 pb-8">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/[0.08]">
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
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-[#E8C87A] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4 flex items-center gap-2">
              <Clock size={14} className="text-[#C8963E]" /> 예배시간
            </h4>
            <div className="space-y-1.5 text-sm">
              <p>주일예배: 오전 11:00</p>
              <p>수요찬양기도회: 오후 7:30</p>
              <p>토요새벽기도회: 오전 6:00</p>
              <p>금요기도회: 오후 8:00</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 text-xs text-white/30">&copy; 2026 뉴저지제일한인교회. All rights reserved.</div>
      </div>
    </footer>
  )
}

/* ─── App (Single File Component) ─── */
export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <WorshipInfo />
        <RecentSermons />
        <News />
      </main>
      <Footer />
    </div>
  )
}
