import PageBanner from '../components/PageBanner'
import { Heart, Clock, MapPin, Users } from 'lucide-react'

export default function Nursery() {
  return (
    <>
      <PageBanner title="유아부" subtitle="하나님의 사랑 안에서 자라나는 아이들" image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {[
              { icon: Clock, label: '예배시간', value: '주일 오전 9:00 · 10:30' },
              { icon: MapPin, label: '장소', value: '교육관 1층' },
              { icon: Users, label: '대상', value: '영아~5세' },
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
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">유아부는 영아부터 5세까지의 아이들이 하나님의 사랑을 경험하고, 찬양과 율동, 성경 이야기를 통해 믿음의 씨앗을 심는 곳입니다. 부모님이 안심하고 예배에 집중할 수 있도록 헌신된 교사들이 사랑으로 돌봅니다.</p>
          </div>
        </div>
      </section>
    </>
  )
}
