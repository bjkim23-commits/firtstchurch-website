import PageBanner from '../components/PageBanner'

const photos = [
  { src: 'https://images.unsplash.com/photo-1519491050282-cf00e2cb4eb6?w=600&q=80', title: '2026년 신년예배', date: '2026.01.01' },
  { src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80', title: '성경공부 모임', date: '2026.02.15' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80', title: '교회 친교 행사', date: '2026.03.01' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', title: '청년부 MT', date: '2026.02.22' },
  { src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&q=80', title: '주일예배', date: '2026.03.15' },
  { src: 'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?w=600&q=80', title: '부활절 준비', date: '2026.03.20' },
]

export default function Gallery() {
  return (
    <>
      <PageBanner title="포토갤러리" subtitle="함께한 아름다운 순간들" />
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((p, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all cursor-pointer group">
                <div className="h-52 overflow-hidden">
                  <img src={p.src} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm">{p.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
