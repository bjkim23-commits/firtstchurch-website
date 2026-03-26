import PageBanner from '../components/PageBanner'
import { Clock, MapPin, Users, BookOpen } from 'lucide-react'

export default function KoreanSchool() {
  return (
    <>
      <PageBanner title="한글학교" subtitle="우리말, 우리 문화를 배우는 곳" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {[
              { icon: Clock, label: '수업시간', value: '토요일 오전 10:00 ~ 오후 12:30' },
              { icon: MapPin, label: '장소', value: '교육관' },
              { icon: Users, label: '대상', value: '유치부~중고등부' },
              { icon: BookOpen, label: '과목', value: '한국어, 한국 역사, 문화' },
            ].map(item => {
              const Icon = item.icon
              return (
                <div key={item.label} className="border border-gray-200 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E] flex-shrink-0"><Icon size={18} /></div>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-gray-600 leading-relaxed">한글학교는 재미 한인 자녀들이 한국어와 한국 문화를 배울 수 있도록 매주 토요일에 운영됩니다. 체계적인 교육 커리큘럼과 다양한 문화 활동을 통해 아이들이 자연스럽게 한국어를 익히고 정체성을 키워나갈 수 있도록 돕습니다.</p>
        </div>
      </section>
    </>
  )
}
