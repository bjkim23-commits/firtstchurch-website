export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden bg-primary bg-gradient-to-b from-[#152d48] to-primary">
      <div className="relative z-10 max-w-[680px] px-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.25] tracking-tight mb-5">
          하나님의 사랑으로
          <br />
          세상을 품는 교회
        </h2>
        <p className="text-lg md:text-xl font-light opacity-80 mb-10">
          뉴저지제일한인교회에 오신 것을 환영합니다
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-amber-700 hover:scale-[1.02] transition-all"
          >
            교회 소개
          </a>
          <a
            href="#sermons"
            className="inline-flex items-center px-8 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:scale-[1.02] transition-all"
          >
            예배 안내
          </a>
        </div>
      </div>
    </section>
  )
}
