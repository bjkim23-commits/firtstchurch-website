import Header from './components/Header'
import Hero from './components/Hero'
import WorshipInfo from './components/WorshipInfo'
import RecentSermons from './components/RecentSermons'
import News from './components/News'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <WorshipInfo />
        <RecentSermons />
        <News />
      </main>
      <Footer />
    </div>
  )
}
