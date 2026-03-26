import PageBanner from '../components/PageBanner'
import { BookOpen } from 'lucide-react'

export default function Pastor() {
  return (
    <>
      <PageBanner title="담임목사" subtitle="강상석 담임목사를 소개합니다" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-48 h-60 bg-[#F2F0EB] rounded-xl flex items-center justify-center text-gray-400 flex-shrink-0 mx-auto md:mx-0">
              <span className="text-6xl">👤</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1B3A5C] mb-1">강상석 담임목사</h3>
              <p className="text-[#C8963E] font-semibold text-sm mb-6">Senior Pastor, Rev. Kang Sang-seok</p>
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>강상석 목사는 뉴저지제일한인교회의 담임목사로서 말씀 중심의 설교와 목양 사역을 통해 성도들을 인도하고 있습니다.</p>
                <p>주일예배 설교를 비롯하여 수요찬양기도회, 토요새벽기도회 등을 통해 성도들에게 생명의 말씀을 전하고 있습니다.</p>
              </div>
              <div className="mt-8 p-6 bg-[#FAFAF7] rounded-xl">
                <h4 className="font-semibold text-sm text-[#1B3A5C] mb-3 flex items-center gap-2"><BookOpen size={16} /> 담임목사의 글</h4>
                <p className="text-sm text-gray-600 italic">"기도의 응답이 지체될 때에도 하나님을 신뢰하며 인내하는 것이 참된 믿음입니다."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
