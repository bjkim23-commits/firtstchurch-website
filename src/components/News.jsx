const news = [
  {
    badge: '공지',
    badgeColor: 'bg-primary',
    title: '2026년 부활절 연합예배 안내',
    desc: '4월 5일(일) 오전 10시, 부활절 연합예배가 진행됩니다. 성도님들의 많은 참여 부탁드립니다.',
    date: '2026.03.20',
  },
  {
    badge: '행사',
    badgeColor: 'bg-accent',
    title: '봄 성경학교 참가자 모집',
    desc: '4월 중 어린이 봄 성경학교를 진행합니다. 참가 신청은 교육부로 문의해 주세요.',
    date: '2026.03.18',
  },
  {
    badge: '새가족',
    badgeColor: 'bg-primary-light',
    title: '새가족 등록 안내',
    desc: '처음 방문하신 분들을 환영합니다. 예배 후 친교실에서 새가족 등록을 도와드립니다.',
    date: '2026.03.15',
  },
]

export default function News() {
  return (
    <section id="news" className="py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">
          교회 소식
        </h2>
        <p className="text-center text-gray-500 mb-16">
          뉴저지제일한인교회의 소식을 전합니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {news.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-7 transition-all hover:border-transparent hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${item.badgeColor}`}
              >
                {item.badge}
              </span>
              <h3 className="font-semibold text-base mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
              <span className="block mt-4 text-xs text-gray-400">
                {item.date}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors group"
          >
            소식 더보기
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
