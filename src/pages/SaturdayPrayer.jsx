import PageBanner from '../components/PageBanner'
import { PlayCircle } from 'lucide-react'

const items = [
  { date: '2026.06.27', title: '새 힘을 얻는 기도', verse: '이사야 40:31' },
  { date: '2026.06.20', title: '하나님의 임재 안에서', verse: '시편 16:11' },
  { date: '2026.06.13', title: '간구의 기도', verse: '빌립보서 4:6-7' },
  { date: '2026.06.06', title: '주님의 은혜를 구하라', verse: '히브리서 4:16' },
  { date: '2026.05.30', title: '성령의 불을 구하라', verse: '사도행전 2:1-4' },
  { date: '2026.05.23', title: '고요한 새벽의 기도', verse: '마가복음 1:35' },
  { date: '2026.05.16', title: '감사함으로 나아가라', verse: '시편 100:1-5' },
  { date: '2026.05.09', title: '어두운 새벽을 밝히는 말씀', verse: '시편 119:105' },
  { date: '2026.05.02', title: '하나님이 우리의 피난처', verse: '시편 46:1-3' },
  { date: '2026.04.25', title: '부활의 아침', verse: '요한복음 20:1-10' },
  { date: '2026.04.18', title: '인내로 달려가는 믿음', verse: '히브리서 12:1-3' },
  { date: '2026.04.11', title: '하나님의 선하심', verse: '시편 34:8' },
  { date: '2026.04.04', title: '주의 이름을 부르는 자', verse: '로마서 10:13' },
  { date: '2026.03.28', title: '소망 중에 기도하라', verse: '로마서 12:12' },
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
