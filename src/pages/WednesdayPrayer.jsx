import PageBanner from '../components/PageBanner'
import { PlayCircle } from 'lucide-react'

const items = [
  { date: '2026.06.25', title: '성령을 따라 행하라', verse: '갈라디아서 5:16-25' },
  { date: '2026.06.18', title: '하나님의 전신갑주', verse: '에베소서 6:10-18' },
  { date: '2026.06.11', title: '믿음으로 구하라', verse: '야고보서 1:5-8' },
  { date: '2026.06.04', title: '주 안에서 기뻐하라', verse: '빌립보서 4:4-7' },
  { date: '2026.05.28', title: '하나님을 사랑하는 자', verse: '로마서 8:28-30' },
  { date: '2026.05.21', title: '성령의 도우심', verse: '로마서 8:26-27' },
  { date: '2026.05.14', title: '그리스도 안에서의 평안', verse: '요한복음 16:33' },
  { date: '2026.05.07', title: '포도나무와 가지', verse: '요한복음 15:1-8' },
  { date: '2026.04.30', title: '보혜사 성령', verse: '요한복음 14:16-17' },
  { date: '2026.04.23', title: '부활의 능력', verse: '빌립보서 3:10-11' },
  { date: '2026.04.16', title: '고난 중에 얻는 위로', verse: '고린도후서 1:3-7' },
  { date: '2026.04.09', title: '십자가의 도', verse: '고린도전서 1:18-25' },
  { date: '2026.04.02', title: '주님의 마지막 만찬', verse: '누가복음 22:14-20' },
  { date: '2026.03.26', title: '용서와 화해', verse: '에베소서 4:31-32' },
  { date: '2026.03.19', title: '기도의 능력', verse: '야고보서 5:13-18' },
  { date: '2026.03.12', title: '찬양으로 승리하라', verse: '역대하 20:21-22' },
  { date: '2026.03.05', title: '주를 바라보는 삶', verse: '히브리서 12:1-3' },
  { date: '2026.02.26', title: '성령의 열매', verse: '갈라디아서 5:22-26' },
]

export default function WednesdayPrayer() {
  return (
    <>
      <PageBanner title="수요찬양기도회" subtitle="매주 수요일 오후 8:00" />
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
