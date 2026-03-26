const sermons = [
  {
    date: '2026.03.22',
    title: '믿음으로 나아가는 삶',
    verse: '히브리서 11:1-6 | 강상석 담임목사',
  },
  {
    date: '2026.03.15',
    title: '사랑의 능력',
    verse: '고린도전서 13:1-13 | 강상석 담임목사',
  },
  {
    date: '2026.03.08',
    title: '새로운 시작',
    verse: '이사야 43:18-19 | 강상석 담임목사',
  },
]

export default function RecentSermons() {
  return (
    <section id="sermons" className="py-24 md:py-32 bg-warm">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">
          최근 설교
        </h2>
        <p className="text-center text-gray-500 mb-16">
          생명의 말씀을 들으실 수 있습니다
        </p>

        <div className="max-w-[720px] mx-auto">
          {sermons.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 ${
                i < sermons.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <span className="flex-shrink-0 text-sm font-semibold text-primary min-w-[100px]">
                {s.date}
              </span>
              <div>
                <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.verse}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors group"
          >
            설교 더보기
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
