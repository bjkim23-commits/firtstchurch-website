import PageBanner from '../components/PageBanner'

export default function About() {
  return (
    <>
      <PageBanner title="교회소개" subtitle="뉴저지제일한인교회를 소개합니다" image="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?w=1920&q=80" />
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          {/* 비전 */}
          <div className="max-w-[720px] mx-auto text-center mb-20">
            <p className="text-lg text-[#1B3A5C] font-medium mb-6 p-6 bg-[#FAFAF7] rounded-xl border-l-4 border-[#C8963E]">
              "여호와를 경외하는 것이 지식의 근본이거늘" — 잠언 1:7
            </p>
            <p className="text-gray-600 leading-relaxed">
              뉴저지제일한인교회는 1970년대 뉴저지 Jersey City에 세워진 한인 교회로,
              복음을 전하고 이웃을 사랑하며 하나님 나라를 확장하는 것을 사명으로 삼고 있습니다.
              강상석 담임목사의 인도 아래, 주일예배를 비롯한 다양한 예배와 사역을 통해 성도들이 함께 성장하고 있습니다.
            </p>
          </div>

          {/* 비전 4가지 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {[
              { title: '예배', desc: '하나님께 영과 진리로 드리는 참된 예배를 지향합니다.' },
              { title: '말씀', desc: '성경 말씀을 깊이 연구하고 삶에 적용하는 공동체입니다.' },
              { title: '선교', desc: '지역사회와 세계를 향해 복음을 전하는 교회입니다.' },
              { title: '교제', desc: '그리스도 안에서 서로 사랑하고 섬기는 공동체입니다.' },
            ].map(v => (
              <div key={v.title} className="border border-gray-200 rounded-xl p-8 text-center hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all">
                <h3 className="text-[#1B3A5C] text-lg font-bold mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* 연혁 */}
          <h3 className="text-center text-xl font-bold mb-12">교회 연혁</h3>
          <div className="max-w-[560px] mx-auto">
            {[
              { year: '1970s', title: '교회 설립', desc: 'Jersey City에서 한인 이민 교회로 시작' },
              { year: '1990s', title: '교회 성장', desc: '성도 수 증가 및 교육관 확장' },
              { year: '2010s', title: '미디어 사역', desc: '온라인 예배 및 설교 방송 시작' },
              { year: '2020s', title: '다음세대 사역 확장', desc: '유아부, 유초등부, 청년부 활성화' },
            ].map(item => (
              <div key={item.year} className="flex gap-6 pb-8 pl-7 border-l-2 border-gray-200 relative">
                <div className="absolute left-[-5px] top-1 w-2 h-2 bg-[#C8963E] rounded-full" />
                <div>
                  <span className="text-lg font-bold text-[#1B3A5C]">{item.year}</span>
                  <h4 className="font-semibold mt-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
