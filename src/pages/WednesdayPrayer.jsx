import PageBanner from '../components/PageBanner'
import { PlayCircle } from 'lucide-react'

const items = [
  { date: '2026.03.19', title: '기도의 능력', verse: '야고보서 5:13-18' },
  { date: '2026.03.12', title: '찬양으로 승리하라', verse: '역대하 20:21-22' },
  { date: '2026.03.05', title: '주를 바라보는 삶', verse: '히브리서 12:1-3' },
  { date: '2026.02.26', title: '성령의 열매', verse: '갈라디아서 5:22-26' },
]

export default function WednesdayPrayer() {
  return (
    <>
      <PageBanner title="수요찬양기도회" subtitle="매주 수요일 오후 7:30" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-center text-gray-500 mb-12">찬양과 기도로 하나님께 나아가는 시간입니다.</p>
          <div className="space-y-0">
            {items.map((s, i) => (
              <div key={i} className="flex items-center gap-5 py-5 border-b border-gray-100 hover:bg-[#FAFAF7] -mx-4 px-4 rounded-lg transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E] flex-shrink-0">
                  <PlayCircle size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-0.5">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.verse}</p>
                </div>
                <span className="text-sm text-gray-400 flex-shrink-0">{s.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
