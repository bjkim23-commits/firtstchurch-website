import PageBanner from '../components/PageBanner'

const families = [
  { name: '김OO 집사', date: '2026.03.22', from: 'Jersey City, NJ' },
  { name: '이OO 성도', date: '2026.03.15', from: 'Fort Lee, NJ' },
  { name: '박OO 성도', date: '2026.03.08', from: 'Palisades Park, NJ' },
  { name: '최OO 집사', date: '2026.03.01', from: 'Edgewater, NJ' },
  { name: '정OO 성도', date: '2026.02.22', from: 'Hackensack, NJ' },
]

export default function NewFamilyIntro() {
  return (
    <>
      <PageBanner title="새가족소개" subtitle="새롭게 함께하는 가족들을 소개합니다" image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-center text-gray-500 mb-12">뉴저지제일한인교회에 새롭게 등록하신 분들을 환영합니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {families.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 flex items-center gap-4 hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all">
                <div className="w-14 h-14 bg-[#F2F0EB] rounded-full flex items-center justify-center text-2xl flex-shrink-0">👤</div>
                <div>
                  <h3 className="font-semibold text-sm">{f.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">등록일: {f.date}</p>
                  <p className="text-xs text-gray-400">{f.from}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
