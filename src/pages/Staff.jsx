import { useState } from 'react'
import PageBanner from '../components/PageBanner'

const categories = ['전체', '부목사', '교육전도사', '장로']

const staffMembers = [
  { name: '김 부목사', role: '부목사', category: '부목사', desc: '교회 행정 및 심방 사역 담당' },
  { name: '박 부목사', role: '부목사', category: '부목사', desc: '선교 및 전도 사역 담당' },
  { name: '이 전도사', role: '교육전도사', category: '교육전도사', desc: '유초등부 및 주일학교 담당' },
  { name: '최 전도사', role: '교육전도사', category: '교육전도사', desc: '청년부 및 대학부 담당' },
  { name: '정 장로', role: '장로', category: '장로', desc: '재정위원회 담당' },
  { name: '한 장로', role: '장로', category: '장로', desc: '시설관리위원회 담당' },
  { name: '오 장로', role: '장로', category: '장로', desc: '선교위원회 담당' },
]

export default function Staff() {
  const [filter, setFilter] = useState('전체')
  const filtered = filter === '전체' ? staffMembers : staffMembers.filter(s => s.category === filter)

  return (
    <>
      <PageBanner title="섬기는분" subtitle="교회를 섬기는 분들을 소개합니다" />
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mb-16">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-[#1B3A5C] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >{cat}</button>
            ))}
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(member => (
              <div key={member.name} className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all">
                <div className="w-20 h-20 mx-auto mb-5 bg-[#F2F0EB] rounded-full flex items-center justify-center text-3xl text-gray-400">👤</div>
                <h3 className="font-semibold text-base mb-1">{member.name}</h3>
                <p className="text-[#C8963E] font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-sm text-gray-500">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
