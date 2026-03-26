import { Link } from 'react-router-dom'
import { Sun, Music, Moon, Heart, BookOpen, PlayCircle, ChevronRight } from 'lucide-react'

const HERO_IMG = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80'

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

const news = [
  { badge: '공지', bg: 'bg-[#1B3A5C]', title: '2026년 부활절 연합예배 안내', desc: '4월 5일(일) 오전 10시, 부활절 연합예배가 진행됩니다.', date: '2026.03.20', img: 'https://images.unsplash.com/photo-1519491050282-cf00e2cb4eb6?w=800&q=80' },
  { badge: '행사', bg: 'bg-[#C8963E]', title: '봄 성경학교 참가자 모집', desc: '4월 중 어린이 봄 성경학교를 진행합니다.', date: '2026.03.18', img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80' },
  { badge: '새가족', bg: 'bg-[#2A5A8C]', title: '새가족 등록 안내', desc: '처음 방문하신 분들을 환영합니다.', date: '2026.03.15', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2440]/90 via-[#1B3A5C]/80 to-[#2A5A8C]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(200,150,62,0.15)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-[680px] px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.25] tracking-tight mb-5">하나님의 사랑으로<br />세상을 품는 교회</h2>
          <p className="text-lg md:text-xl font-light opacity-80 mb-10">뉴저지제일한인교회에 오신 것을 환영합니다</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8963E] text-white text-sm font-semibold rounded-full hover:bg-amber-700 hover:scale-[1.02] transition-all">
              <BookOpen size={16} /> 교회 소개
            </Link>
            <Link to="/worship" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:scale-[1.02] transition-all">
              <PlayCircle size={16} /> 예배 안내
            </Link>
          </div>
        </div>
      </section>

      {/* Worship Info */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">예배 안내</h2>
          <p className="text-center text-gray-500 mb-16">함께 예배하며 하나님을 만나는 시간</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => {
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

      {/* Recent Sermons */}
      <section className="py-24 md:py-32 bg-[#FAFAF7]">
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
            <Link to="/sunday-sermon" className="inline-flex items-center text-sm font-semibold text-[#1B3A5C] hover:text-[#2A5A8C] transition-colors group">
              설교 더보기 <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1080px] mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">교회 소식</h2>
          <p className="text-center text-gray-500 mb-16">뉴저지제일한인교회의 소식을 전합니다</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {news.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-transparent hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
                <div className="h-44 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${item.bg}`}>{item.badge}</span>
                  <h3 className="font-semibold text-base mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  <span className="block mt-4 text-xs text-gray-400">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/bulletin" className="inline-flex items-center text-sm font-semibold text-[#1B3A5C] hover:text-[#2A5A8C] transition-colors group">
              소식 더보기 <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
