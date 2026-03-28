import PageBanner from '../components/PageBanner'
import { PlayCircle } from 'lucide-react'
import { sundaySermons } from '../data/sundaySermons'

export default function SundaySermon() {
  return (
    <>
      <PageBanner title="주일설교" subtitle="강상석 담임목사 | 주일예배 설교" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-0">
            {sundaySermons.map(s => (
              <a
                key={`${s.date}-${s.title}`}
                href={s.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`유튜브에서 설교 보기: ${s.title}`}
                className="flex items-center gap-5 py-5 border-b border-gray-100 hover:bg-[#FAFAF7] -mx-4 px-4 rounded-lg transition-colors cursor-pointer group text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A5C]"
              >
                <div className="w-10 h-10 bg-[#1B3A5C]/[0.06] rounded-full flex items-center justify-center text-[#1B3A5C] flex-shrink-0 group-hover:bg-[#1B3A5C] group-hover:text-white transition-colors">
                  <PlayCircle size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base mb-0.5 truncate">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.verse}</p>
                </div>
                <div className="text-right flex-shrink-0 hidden sm:block">
                  <span className="text-sm font-medium text-[#1B3A5C]">{s.date}</span>
                  <span className="block text-xs text-[#C8963E] mt-0.5">{s.tag}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
