import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Pastor from './pages/Pastor'
import Staff from './pages/Staff'
import NewFamily from './pages/NewFamily'
import Directions from './pages/Directions'
import WorshipGuide from './pages/WorshipGuide'
import SundaySermon from './pages/SundaySermon'
import WednesdayPrayer from './pages/WednesdayPrayer'
import EnglishMinistrySermon from './pages/EnglishMinistrySermon'
import Nursery from './pages/Nursery'
import Elementary from './pages/Elementary'
import KoreanYouth from './pages/KoreanYouth'
import EnglishMinistry from './pages/EnglishMinistry'
import KoreanSchool from './pages/KoreanSchool'
import PrayerRequest from './pages/PrayerRequest'
import NewFamilyIntro from './pages/NewFamilyIntro'
import Gallery from './pages/Gallery'
import Bulletin from './pages/Bulletin'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* 교회소개 */}
        <Route path="about" element={<About />} />
        <Route path="pastor" element={<Pastor />} />
        <Route path="staff" element={<Staff />} />
        <Route path="new-family" element={<NewFamily />} />
        <Route path="directions" element={<Directions />} />
        {/* 예배와말씀 */}
        <Route path="worship" element={<WorshipGuide />} />
        <Route path="sunday-sermon" element={<SundaySermon />} />
        <Route path="wednesday-prayer" element={<WednesdayPrayer />} />
        <Route path="english-sermon" element={<EnglishMinistrySermon />} />
        {/* 다음세대 */}
        <Route path="nursery" element={<Nursery />} />
        <Route path="elementary" element={<Elementary />} />
        <Route path="korean-youth" element={<KoreanYouth />} />
        <Route path="english-ministry" element={<EnglishMinistry />} />
        <Route path="korean-school" element={<KoreanSchool />} />
        {/* 나눔터 */}
        <Route path="prayer-request" element={<PrayerRequest />} />
        <Route path="new-family-intro" element={<NewFamilyIntro />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="bulletin" element={<Bulletin />} />
        {/* 회원 */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}
