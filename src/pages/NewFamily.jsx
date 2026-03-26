import PageBanner from '../components/PageBanner'
import { Heart, Users, BookOpen, Clock } from 'lucide-react'

const steps = [
  { icon: Heart, title: '환영', desc: '예배에 처음 오신 분은 안내위원이 자리를 안내해 드립니다.' },
  { icon: Users, title: '등록', desc: '예배 후 1층 친교실에서 새가족 등록 카드를 작성해 주세요.' },
  { icon: BookOpen, title: '새가족 교육', desc: '4주간의 새가족반 과정을 통해 교회 생활을 안내해 드립니다.' },
  { icon: Clock, title: '정착', desc: '구역 배정을 통해 성도님들과 교제하며 함께 성장합니다.' },
]

export default function NewFamily() {
  return (
    <>
      <PageBanner title="새가족등록안내" subtitle="첫번째 방문을 환영합니다" image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80" />
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-16">
            <p className="text-gray-600 leading-relaxed">
              뉴저지제일한인교회는 처음 방문하시는 분들을 진심으로 환영합니다.
              예배 후 친교실에서 점심 식사를 함께하며 교제할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="relative border border-gray-200 rounded-xl p-8 text-center hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] transition-all">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#C8963E] rounded-full text-white text-xs font-bold flex items-center justify-center">{i + 1}</div>
                  <div className="w-12 h-12 mx-auto mb-5 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
