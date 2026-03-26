import PageBanner from '../components/PageBanner'
import { MapPin, Phone, Mail, Car, Train, Bus } from 'lucide-react'

export default function Directions() {
  return (
    <>
      <PageBanner title="찾아오시는길" subtitle="뉴저지제일한인교회를 방문해 주세요" />
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-[#F2F0EB] rounded-xl h-[400px] flex flex-col items-center justify-center text-gray-400">
              <MapPin size={48} className="mb-4 text-[#C8963E]" />
              <p className="font-medium">지도 영역</p>
              <p className="text-sm mt-2">2681 JFK Blvd, Jersey City, NJ 07306</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-8">연락처</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E] flex-shrink-0"><MapPin size={18} /></div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">주소</h4>
                    <p className="text-sm text-gray-500">2681 John F Kennedy Blvd<br />Jersey City, NJ 07306</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E] flex-shrink-0"><Phone size={18} /></div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">전화</h4>
                    <p className="text-sm text-gray-500">201-333-2121 / 201-332-4585</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#C8963E]/[0.08] rounded-full flex items-center justify-center text-[#C8963E] flex-shrink-0"><Mail size={18} /></div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">이메일</h4>
                    <p className="text-sm text-gray-500">goodchurchbbs@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation */}
          <div className="mt-20">
            <h3 className="text-center text-xl font-bold mb-12">교통편 안내</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: Car, title: '자가용', desc: 'Holland Tunnel에서 JFK Blvd 방면 좌회전, 교회 주차장 이용 가능' },
                { icon: Train, title: '지하철 / PATH', desc: 'Journal Square역에서 JFK Blvd 방면 도보 10분' },
                { icon: Bus, title: '버스', desc: 'NJ Transit 버스 이용, JFK Blvd 정류장 하차' },
              ].map(t => {
                const Icon = t.icon
                return (
                  <div key={t.title} className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] transition-all">
                    <div className="w-12 h-12 mx-auto mb-4 bg-[#1B3A5C]/[0.06] rounded-full flex items-center justify-center text-[#1B3A5C]"><Icon size={20} /></div>
                    <h4 className="font-semibold mb-2">{t.title}</h4>
                    <p className="text-sm text-gray-500">{t.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
