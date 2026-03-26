import PageBanner from '../components/PageBanner'
import { Clock, MapPin, Users } from 'lucide-react'

export default function Elementary() {
  return (
    <>
      <PageBanner title="유초등부" subtitle="말씀 위에 세워지는 다음세대" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {[
              { icon: Clock, label: '예배시간', value: '주일 오전 11:00' },
              { icon: MapPin, label: '장소', value: '교육관 2층' },
              { icon: Users, label: '대상', value: '유치부~초등 6학년' },
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
          <p className="text-gray-600 leading-relaxed">유초등부는 유치부와 초등학생을 대상으로 예배, 성경공부, 찬양, 특별활동을 진행합니다. 아이들이 하나님의 말씀을 즐겁게 배우고 신앙의 기초를 다질 수 있도록 다양한 프로그램을 운영하고 있습니다.</p>
        </div>
      </section>
    </>
  )
}
