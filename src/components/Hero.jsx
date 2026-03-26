export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(200,150,62,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(42,90,140,0.3)_0%,transparent_50%)]" />
      </div>

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
