import PageBanner from '../components/PageBanner'
import { Clock, MapPin, Users } from 'lucide-react'

export default function KoreanYouth() {
  return (
    <>
      <PageBanner title="한어대학청년부" subtitle="함께 성장하는 청년 공동체" image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {[
              { icon: Clock, label: '예배시간', value: '주일 오후 1:30' },
              { icon: MapPin, label: '장소', value: '본당' },
              { icon: Users, label: '대상', value: '대학생 & 청년' },
            ].map(item => {
              const Icon = item.icon
              return (
                <div key={item.label} className="border border-gray-200 rounded-xl p-6 text-center">
                  <Icon size={20} className="mx-auto mb-3 text-[#C8963E]" />
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              )
            })}
          </div>
          <p className="text-gray-600 leading-relaxed">한어대학청년부는 대학생과 청년들이 한국어로 예배하고 교제하는 공동체입니다. 매주 주일 오후 예배와 함께 소그룹 성경공부, 친교 활동, 봉사 프로젝트 등을 통해 신앙과 삶이 함께 성장할 수 있도록 돕고 있습니다.</p>
        </div>
      </section>
    </>
  )
}
