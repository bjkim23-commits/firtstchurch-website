import PageBanner from '../components/PageBanner'
import { PlayCircle } from 'lucide-react'

const items = [
  { date: '2026.03.22', title: '새벽에 주를 찾으리', verse: '시편 63:1-8' },
  { date: '2026.03.15', title: '여호와를 앙망하는 자', verse: '이사야 40:28-31' },
  { date: '2026.03.08', title: '은밀한 중에 보시는 하나님', verse: '마태복음 6:5-8' },
]

export default function SaturdayPrayer() {
  return (
    <>
      <PageBanner title="토요새벽기도회" subtitle="매주 토요일 오전 6:00" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-center text-gray-500 mb-12">새벽을 깨우며 하나님께 기도하는 시간입니다.</p>
          {items.map((s, i) => (
            <div key={i} className="flex items-center gap-5 py-5 border-b border-gray-100 hover:bg-[#FAFAF7] -mx-4 px-4 rounded-lg transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E] flex-shrink-0"><PlayCircle size={18} /></div>
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-0.5">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.verse}</p>
              </div>
              <span className="text-sm text-gray-400 flex-shrink-0">{s.date}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
