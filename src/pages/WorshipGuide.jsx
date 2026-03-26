import PageBanner from '../components/PageBanner'

const worshipTimes = [
  { name: '주일예배', time: '일요일 오전 11:00', place: '본당', target: '전 성도' },
  { name: '주일학교', time: '일요일 오전 11:00', place: '교육관', target: '유치부~중고등부' },
  { name: '수요찬양기도회', time: '수요일 오후 7:30', place: '본당', target: '전 성도' },
  { name: '토요새벽기도회', time: '토요일 오전 6:00', place: '소예배실', target: '전 성도' },
  { name: '금요기도회', time: '금요일 오후 8:00', place: '본당', target: '전 성도' },
  { name: 'English Ministry', time: '일요일 오전 11:00', place: '2층 예배실', target: '영어권 성도' },
]

export default function WorshipGuide() {
  return (
    <>
      <PageBanner title="예배안내" subtitle="하나님을 만나는 예배의 시간" image="https://images.unsplash.com/photo-1519491050282-cf00e2cb4eb6?w=1920&q=80" />
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1B3A5C] text-white">
                  <th className="text-left px-6 py-4 font-semibold text-sm">예배</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">시간</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm">장소</th>
                  <th className="text-left px-6 py-4 font-semibold text-sm hidden sm:table-cell">대상</th>
                </tr>
              </thead>
              <tbody>
                {worshipTimes.map((w, i) => (
                  <tr key={w.name} className={`border-b border-gray-100 hover:bg-[#FAFAF7] transition-colors ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                    <td className="px-6 py-4 font-medium text-sm">{w.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{w.time}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{w.place}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">{w.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
