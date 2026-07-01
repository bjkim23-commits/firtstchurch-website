import PageBanner from '../components/PageBanner'
import { PlayCircle } from 'lucide-react'

const items = [
  { date: '2026.06.28', title: 'Standing Firm in the Lord', verse: 'Philippians 4:1-9' },
  { date: '2026.06.21', title: 'Grace Sufficient', verse: '2 Corinthians 12:9-10' },
  { date: '2026.06.14', title: 'Clothed with Love', verse: 'Colossians 3:12-17' },
  { date: '2026.06.07', title: 'The Spirit of Adoption', verse: 'Romans 8:14-17' },
  { date: '2026.05.31', title: 'Come, Holy Spirit', verse: 'Acts 2:1-13' },
  { date: '2026.05.24', title: 'Abiding in the Vine', verse: 'John 15:4-11' },
  { date: '2026.05.17', title: 'From Fear to Faith', verse: 'John 14:27' },
  { date: '2026.05.10', title: 'A Mother\'s Faith', verse: '2 Timothy 1:5' },
  { date: '2026.05.03', title: 'Living as Children of Light', verse: 'Ephesians 5:8-14' },
  { date: '2026.04.26', title: 'Hope That Does Not Disappoint', verse: 'Romans 5:1-5' },
  { date: '2026.04.19', title: 'Resurrection Life', verse: 'John 11:25-26' },
  { date: '2026.04.12', title: 'He Is Risen', verse: 'Luke 24:1-12' },
  { date: '2026.03.22', title: 'Walking by Faith', verse: 'Hebrews 11:1-6' },
  { date: '2026.03.15', title: 'The Power of Love', verse: '1 Corinthians 13:1-13' },
  { date: '2026.03.08', title: 'A New Beginning', verse: 'Isaiah 43:18-19' },
]

export default function EnglishMinistrySermon() {
  return (
    <>
      <PageBanner title="English Ministry" subtitle="Sunday Worship Sermons" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-center text-gray-500 mb-12">Join us for worship in English every Sunday at 11:00 AM.</p>
          {items.map((s, i) => (
            <div key={i} className="flex items-center gap-5 py-5 border-b border-gray-100 hover:bg-[#FAFAF7] -mx-4 px-4 rounded-lg transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-[#2A5A8C]/[0.08] rounded-full flex items-center justify-center text-[#2A5A8C] flex-shrink-0"><PlayCircle size={18} /></div>
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-0.5">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.verse}</p>
              </div>
              <span className="text-sm text-gray-400 flex-shrink-0">{s.date}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
