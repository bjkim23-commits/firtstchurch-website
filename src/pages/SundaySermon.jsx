import PageBanner from '../components/PageBanner'
import { PlayCircle } from 'lucide-react'

const sermons = [
  { date: '2026.03.22', title: '믿음으로 나아가는 삶', verse: '히브리서 11:1-6', tag: '주일예배' },
  { date: '2026.03.15', title: '사랑의 능력', verse: '고린도전서 13:1-13', tag: '주일예배' },
  { date: '2026.03.08', title: '새로운 시작', verse: '이사야 43:18-19', tag: '주일예배' },
  { date: '2026.03.01', title: '감사의 삶', verse: '데살로니가전서 5:16-18', tag: '주일예배' },
  { date: '2026.02.22', title: '하나님의 인도하심', verse: '시편 23:1-6', tag: '주일예배' },
  { date: '2026.02.15', title: '주의 말씀은 내 발의 등', verse: '시편 119:105-112', tag: '주일예배' },
]

export default function SundaySermon() {
  return (
    <>
      <PageBanner title="주일설교" subtitle="강상석 담임목사 | 주일예배 설교" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-0">
            {sermons.map((s, i) => (
              <div key={i} className="flex items-center gap-5 py-5 border-b border-gray-100 hover:bg-[#FAFAF7] -mx-4 px-4 rounded-lg transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#1B3A5C]/[0.06] rounded-full flex items-center justify-center text-[#1B3A5C] flex-shrink-0 group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
                  <PlayCircle size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base mb-0.5 truncate">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.verse}</p>
                </div>
                <div className="text-right flex-shrink-0 hidden sm:block">
                  <span className="text-sm font-medium text-[#1B3A5C]">{s.date}</span>
                  <span className="block text-xs text-[#C8963E] mt-0.5">{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
