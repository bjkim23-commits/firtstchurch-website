import { Link } from 'react-router-dom'
import { sermonsForHome } from '../data/sundaySermons'

const sermons = sermonsForHome()

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
            <a
              key={`${s.date}-${s.title}`}
              href={s.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`유튜브에서 설교 보기: ${s.title}`}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 text-inherit no-underline rounded-lg -mx-2 px-2 transition-colors hover:bg-stone-100/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                i < sermons.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <span className="flex-shrink-0 text-sm font-semibold text-primary min-w-[100px]">
                {s.date}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.verse}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/sunday-sermon"
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
          </Link>
        </div>
      </div>
    </section>
  )
}
