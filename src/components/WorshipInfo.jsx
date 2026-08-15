const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '주일예배',
    time: '1부 오전 9:00 · 2부 오전 10:30',
    location: '본당',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: '수요찬양기도회',
    time: '매주 수요일 오후 8:00',
    location: '본당',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: '금요기도회',
    time: '매주 금요일 오후 8:00',
    location: '본당',
  },
]

export default function WorshipInfo() {
  return (
    <section id="worship" className="py-24 md:py-32">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight mb-4">
          예배 안내
        </h2>
        <p className="text-center text-gray-500 mb-16">
          함께 예배하며 하나님을 만나는 시간
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group border border-gray-200 rounded-xl p-8 text-center transition-all hover:border-transparent hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-5 bg-accent/[0.08] rounded-full flex items-center justify-center text-accent">
                {s.icon}
              </div>
              <h3 className="font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.time}</p>
              <p className="text-xs text-gray-400 mt-1">{s.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
