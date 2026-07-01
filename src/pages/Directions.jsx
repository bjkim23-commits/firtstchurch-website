import PageBanner from '../components/PageBanner'
import { MapPin, Phone, Mail, Car, Train, Bus } from 'lucide-react'

export default function Directions() {
  return (
    <>
      <PageBanner title="찾아오시는길" subtitle="뉴저지제일한인교회를 방문해 주세요" />
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden h-[400px] border border-gray-200">
              <iframe
                title="교회 위치"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.277!2d-74.0666!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257c4b5e0c0c3%3A0x1!2s2681+John+F+Kennedy+Blvd%2C+Jersey+City%2C+NJ+07306!5e0!3m2!1sko!2sus!4v1"
              />
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
