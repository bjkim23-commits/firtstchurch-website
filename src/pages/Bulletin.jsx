import PageBanner from '../components/PageBanner'
import { FileText, Download } from 'lucide-react'

const bulletins = [
  { date: '2026년 3월 22일', title: '사순절 다섯째 주일', id: 1 },
  { date: '2026년 3월 15일', title: '사순절 넷째 주일', id: 2 },
  { date: '2026년 3월 8일', title: '사순절 셋째 주일', id: 3 },
  { date: '2026년 3월 1일', title: '사순절 둘째 주일', id: 4 },
  { date: '2026년 2월 22일', title: '사순절 첫째 주일', id: 5 },
  { date: '2026년 2월 15일', title: '주현절 후 여섯째 주일', id: 6 },
]

export default function Bulletin() {
  return (
    <>
      <PageBanner title="주보" subtitle="매주 발행되는 교회 주보" />
      <section className="py-24">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="space-y-3">
            {bulletins.map(b => (
              <div key={b.id} className="flex items-center gap-4 p-5 border border-gray-200 rounded-xl hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:border-transparent transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-[#1B3A5C]/[0.06] rounded-lg flex items-center justify-center text-[#1B3A5C] flex-shrink-0 group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
                  <FileText size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{b.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{b.date}</p>
                </div>
                <Download size={16} className="text-gray-300 group-hover:text-[#C8963E] transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
