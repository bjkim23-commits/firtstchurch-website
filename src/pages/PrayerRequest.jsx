import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { Heart } from 'lucide-react'

const requests = [
  { id: 1, name: '김OO', date: '2026.03.24', content: '아버지의 건강 회복을 위해 기도 부탁드립니다.' },
  { id: 2, name: '이OO', date: '2026.03.22', content: '자녀들의 학업과 신앙 성장을 위해 기도해 주세요.' },
  { id: 3, name: '박OO', date: '2026.03.20', content: '새 직장에서의 적응과 좋은 동료를 만나게 해 주세요.' },
  { id: 4, name: '최OO', date: '2026.03.18', content: '가정의 화목과 믿음의 성장을 위해 기도합니다.' },
]

export default function PrayerRequest() {
  return (
    <>
      <PageBanner title="중보기도" subtitle="함께 기도하는 공동체" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-center text-gray-500 mb-12">서로를 위해 기도하며 하나님의 은혜를 나눕니다.</p>

          <div className="space-y-4 mb-16">
            {requests.map(r => (
              <div key={r.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold">{r.name}</span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <p className="text-sm text-gray-600">{r.content}</p>
                <button className="mt-3 flex items-center gap-1 text-xs text-[#C8963E] font-medium hover:text-amber-700 transition-colors">
                  <Heart size={12} /> 기도합니다
                </button>
              </div>
            ))}
          </div>

          <div className="bg-[#FAFAF7] rounded-xl p-8">
            <h3 className="font-bold text-base mb-4">기도 요청하기</h3>
            <textarea className="w-full border border-gray-200 rounded-lg p-4 text-sm resize-none h-28 focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="기도 제목을 작성해 주세요..." />
            <button className="mt-3 px-6 py-2.5 bg-[#1B3A5C] text-white text-sm font-semibold rounded-full hover:bg-[#2A5A8C] transition-colors">기도 요청</button>
          </div>
        </div>
      </section>
    </>
  )
}
