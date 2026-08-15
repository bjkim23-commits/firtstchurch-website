import { useState } from "react";

/* ─── Unsplash Images ─── */
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80",
  worship: "https://images.unsplash.com/photo-1519491050282-cf00e2cb4eb6?w=800&q=80",
  community: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
  bible: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
};

/* ─── SVG Icons ─── */
const Icon = {
  Sun: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ),
  Music: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Heart: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 12h18M3 6h18M3 18h18"/>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  ),
  Play: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Book: () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Phone: () => (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
};

/* ─── Data ─── */
const navItems = [
  { label: "홈", href: "#", active: true },
  { label: "교회소개", href: "#about" },
  { label: "예배/설교", href: "#sermons" },
  { label: "교회소식", href: "#news" },
  { label: "오시는 길", href: "#contact" },
];
const services = [
  { Icon: Icon.Sun,   title: "주일예배",       time: "1부 오전 9:00 · 2부 오전 10:30", location: "본당" },
  { Icon: Icon.Music, title: "수요찬양기도회",  time: "매주 수요일 오후 8:00",  location: "본당" },
  { Icon: Icon.Heart, title: "금요기도회",      time: "매주 금요일 오후 8:00",  location: "본당" },
];
const sermons = [
  { date: "2026.03.22", title: "믿음으로 나아가는 삶", verse: "히브리서 11:1-6 | 강상석 담임목사" },
  { date: "2026.03.15", title: "사랑의 능력",          verse: "고린도전서 13:1-13 | 강상석 담임목사" },
  { date: "2026.03.08", title: "새로운 시작",           verse: "이사야 43:18-19 | 강상석 담임목사" },
];
const newsItems = [
  { badge: "공지",   bg: "#1B3A5C", title: "2026년 부활절 연합예배 안내",  desc: "4월 5일(일) 오전 10시, 부활절 연합예배가 진행됩니다. 성도님들의 많은 참여 부탁드립니다.", date: "2026.03.20", img: IMAGES.worship },
  { badge: "행사",   bg: "#C8963E", title: "봄 성경학교 참가자 모집",      desc: "4월 중 어린이 봄 성경학교를 진행합니다. 참가 신청은 교육부로 문의해 주세요.",             date: "2026.03.18", img: IMAGES.bible },
  { badge: "새가족", bg: "#2A5A8C", title: "새가족 등록 안내",              desc: "처음 방문하신 분들을 환영합니다. 예배 후 친교실에서 새가족 등록을 도와드립니다.",          date: "2026.03.15", img: IMAGES.community },
];

/* ─── Header ─── */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position:"sticky", top:0, zIndex:50, background:"rgba(255,255,255,0.9)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
        <div>
          <div style={{ fontSize:17, fontWeight:700, color:"#1B3A5C", letterSpacing:"-0.02em" }}>뉴저지제일한인교회</div>
          <div style={{ fontSize:11, color:"#AEAEB2", marginTop:-2, letterSpacing:"0.03em" }}>The First Korean Church of NJ</div>
        </div>
        <nav style={{ display:"flex", gap:32 }}>
          {navItems.map(item => (
            <a key={item.label} href={item.href} style={{ fontSize:14, fontWeight:500, color: item.active ? "#1D1D1F" : "#6E6E73", textDecoration:"none", position:"relative", paddingBottom:4 }}>
              {item.label}
              {item.active && <span style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:4, height:4, borderRadius:"50%", background:"#C8963E" }} />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{ position:"relative", minHeight:"85vh", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", color:"#fff", overflow:"hidden" }}>
      <img src={IMAGES.hero} alt="" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg, rgba(15,36,64,0.92) 0%, rgba(27,58,92,0.82) 50%, rgba(42,90,140,0.72) 100%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 20% 80%, rgba(200,150,62,0.18) 0%, transparent 55%)" }} />
      <div style={{ position:"relative", zIndex:1, maxWidth:640, padding:"0 24px" }}>
        <h2 style={{ fontSize:48, fontWeight:700, lineHeight:1.25, letterSpacing:"-0.04em", marginBottom:20 }}>
          하나님의 사랑으로<br />세상을 품는 교회
        </h2>
        <p style={{ fontSize:18, fontWeight:300, opacity:0.8, marginBottom:40 }}>뉴저지제일한인교회에 오신 것을 환영합니다</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <a href="#about" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:"#C8963E", color:"#fff", fontSize:14, fontWeight:600, borderRadius:999, textDecoration:"none" }}>
            <Icon.Book /> 교회 소개
          </a>
          <a href="#sermons" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", border:"1.5px solid rgba(255,255,255,0.35)", color:"#fff", fontSize:14, fontWeight:600, borderRadius:999, textDecoration:"none", background:"transparent" }}>
            <Icon.Play /> 예배 안내
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Worship Info ─── */
function WorshipInfo() {
  return (
    <section style={{ padding:"96px 0" }}>
      <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 24px" }}>
        <h2 style={{ textAlign:"center", fontSize:28, fontWeight:700, letterSpacing:"-0.03em", marginBottom:12 }}>예배 안내</h2>
        <p style={{ textAlign:"center", color:"#6E6E73", marginBottom:56 }}>함께 예배하며 하나님을 만나는 시간</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {services.map(s => (
            <div key={s.title} style={{ border:"1px solid #E5E5EA", borderRadius:12, padding:"32px 20px", textAlign:"center", transition:"all 0.3s", cursor:"pointer" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 4px 40px rgba(0,0,0,0.07)"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.borderColor="transparent"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; e.currentTarget.style.borderColor="#E5E5EA"; }}
            >
              <div style={{ width:48, height:48, margin:"0 auto 20px", background:"rgba(200,150,62,0.08)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:"#C8963E" }}>
                <s.Icon />
              </div>
              <h3 style={{ fontWeight:600, fontSize:15, marginBottom:8 }}>{s.title}</h3>
              <p style={{ fontSize:13, color:"#6E6E73" }}>{s.time}</p>
              <p style={{ fontSize:12, color:"#AEAEB2", marginTop:4 }}>{s.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Recent Sermons ─── */
function RecentSermons() {
  return (
    <section style={{ padding:"96px 0", background:"#FAFAF7" }}>
      <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 24px" }}>
        <h2 style={{ textAlign:"center", fontSize:28, fontWeight:700, letterSpacing:"-0.03em", marginBottom:12 }}>최근 설교</h2>
        <p style={{ textAlign:"center", color:"#6E6E73", marginBottom:56 }}>생명의 말씀을 들으실 수 있습니다</p>
        <div style={{ maxWidth:720, margin:"0 auto" }}>
          {sermons.map((s, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:24, padding:"24px 0", borderBottom: i < sermons.length-1 ? "1px solid #E5E5EA" : "none" }}>
              <span style={{ flexShrink:0, fontSize:13, fontWeight:600, color:"#1B3A5C", minWidth:100 }}>{s.date}</span>
              <div style={{ flex:1 }}>
                <h3 style={{ fontWeight:600, fontSize:15, marginBottom:4 }}>{s.title}</h3>
                <p style={{ fontSize:13, color:"#6E6E73" }}>{s.verse}</p>
              </div>
              <span style={{ color:"#D1D1D6", flexShrink:0 }}><Icon.Play /></span>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:48 }}>
          <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:14, fontWeight:600, color:"#1B3A5C", textDecoration:"none" }}>
            설교 더보기 <Icon.ChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── News ─── */
function News() {
  return (
    <section style={{ padding:"96px 0" }}>
      <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 24px" }}>
        <h2 style={{ textAlign:"center", fontSize:28, fontWeight:700, letterSpacing:"-0.03em", marginBottom:12 }}>교회 소식</h2>
        <p style={{ textAlign:"center", color:"#6E6E73", marginBottom:56 }}>뉴저지제일한인교회의 소식을 전합니다</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {newsItems.map((item, i) => (
            <div key={i} style={{ border:"1px solid #E5E5EA", borderRadius:12, overflow:"hidden", transition:"all 0.3s", cursor:"pointer" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 4px 40px rgba(0,0,0,0.07)"; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.borderColor="transparent"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; e.currentTarget.style.borderColor="#E5E5EA"; }}
            >
              <div style={{ height:176, overflow:"hidden" }}>
                <img src={item.img} alt={item.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.5s" }}
                  onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
                />
              </div>
              <div style={{ padding:24 }}>
                <span style={{ display:"inline-block", padding:"4px 12px", borderRadius:999, fontSize:11, fontWeight:600, color:"#fff", background:item.bg, marginBottom:12 }}>{item.badge}</span>
                <h3 style={{ fontWeight:600, fontSize:15, lineHeight:1.5, marginBottom:8 }}>{item.title}</h3>
                <p style={{ fontSize:13, color:"#6E6E73", lineHeight:1.7 }}>{item.desc}</p>
                <span style={{ display:"block", marginTop:12, fontSize:12, color:"#AEAEB2" }}>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:48 }}>
          <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:14, fontWeight:600, color:"#1B3A5C", textDecoration:"none" }}>
            소식 더보기 <Icon.ChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ background:"#111827", color:"rgba(255,255,255,0.6)", padding:"64px 0 32px" }}>
      <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:48, paddingBottom:40, borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <div style={{ color:"#fff", fontWeight:600, fontSize:15, marginBottom:16 }}>뉴저지제일한인교회</div>
            <div style={{ display:"flex", flexDirection:"column", gap:10, fontSize:13 }}>
              <span style={{ display:"flex", alignItems:"flex-start", gap:8 }}><span style={{ color:"#C8963E", marginTop:2 }}><Icon.MapPin /></span>2681 John F Kennedy Blvd, Jersey City, NJ 07306</span>
              <span style={{ display:"flex", alignItems:"center", gap:8 }}><span style={{ color:"#C8963E" }}><Icon.Phone /></span>201-333-2121 / 201-332-4585</span>
              <span style={{ display:"flex", alignItems:"center", gap:8 }}><span style={{ color:"#C8963E" }}><Icon.Mail /></span>goodchurchbbs@gmail.com</span>
            </div>
          </div>
          <div>
            <div style={{ color:"rgba(255,255,255,0.8)", fontWeight:600, fontSize:13, marginBottom:16 }}>바로가기</div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {["교회소개","예배/설교","교회소식","오시는 길"].map(l => (
                <a key={l} href="#" style={{ fontSize:13, color:"rgba(255,255,255,0.45)", textDecoration:"none" }}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:6, color:"rgba(255,255,255,0.8)", fontWeight:600, fontSize:13, marginBottom:16 }}>
              <span style={{ color:"#C8963E" }}><Icon.Clock /></span>예배시간
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:6, fontSize:13 }}>
              <span>주일예배 1부: 오전 9:00</span>
              <span>주일예배 2부: 오전 10:30</span>
              <span>수요찬양기도회: 오후 8:00</span>
              <span>금요기도회: 오후 8:00</span>
            </div>
          </div>
        </div>
        <div style={{ textAlign:"center", paddingTop:24, fontSize:12, color:"rgba(255,255,255,0.25)" }}>
          © 2026 뉴저지제일한인교회. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  return (
    <div style={{ fontFamily:"'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif", color:"#1D1D1F", WebkitFontSmoothing:"antialiased" }}>
      <Header />
      <main>
        <Hero />
        <WorshipInfo />
        <RecentSermons />
        <News />
      </main>
      <Footer />
    </div>
  );
}
