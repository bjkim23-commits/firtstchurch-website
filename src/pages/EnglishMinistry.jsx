import PageBanner from '../components/PageBanner'
import { Clock, MapPin, Users } from 'lucide-react'

export default function EnglishMinistry() {
  return (
    <>
      <PageBanner title="English Ministry" subtitle="A community growing together in Christ" />
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {[
              { icon: Clock, label: 'Worship', value: 'Sunday 10:30 AM' },
              { icon: MapPin, label: 'Location', value: '2nd Floor Chapel' },
              { icon: Users, label: 'For', value: 'English Speakers' },
            ].map(item => {
              const Icon = item.icon
              return (
                <div key={item.label} className="border border-gray-200 rounded-xl p-6 text-center">
                  <Icon size={20} className="mx-auto mb-3 text-[#C8963E]" />
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              )
            })}
          </div>
          <p className="text-gray-600 leading-relaxed">The English Ministry serves English-speaking members of our community. We gather every Sunday for worship, fellowship, and Bible study. Whether you're a student, young professional, or lifelong believer, you are welcome to join our growing community in Christ.</p>
        </div>
      </section>
    </>
  )
}
