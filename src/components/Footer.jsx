const links = [
  { label: '교회소개', href: '#about' },
  { label: '예배/설교', href: '#sermons' },
  { label: '교회소식', href: '#news' },
  { label: '오시는 길', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-footer text-white/60 pt-16 pb-8">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 pb-10 border-b border-white/[0.08]">
          {/* Church Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              뉴저지제일한인교회
            </h3>
            <p className="text-sm leading-relaxed">
              2681 John F Kennedy Blvd
              <br />
              Jersey City, NJ 07306
            </p>
            <p className="text-sm mt-2">Tel: 201-333-2121 / 201-332-4585</p>
            <p className="text-sm">Email: goodchurchbbs@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">바로가기</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Worship Times */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">예배시간</h4>
            <div className="space-y-1.5 text-sm">
              <p>주일예배 1부: 오전 9:00</p>
              <p>주일예배 2부: 오전 10:30</p>
              <p>수요찬양기도회: 오후 8:00</p>
              <p>금요기도회: 오후 8:00</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 text-xs text-white/30">
          &copy; 2026 뉴저지제일한인교회. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
