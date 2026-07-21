import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import AboutUs from './pages/AboutUs'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Donation from './pages/Donation'
import EnrollNow from './pages/EnrollNow'
import Faculties from './pages/Faculties'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import VisionMission from './pages/VisionMission'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutUs />
        <VisionMission />
        <Achievements />
        <Faculties />
        <Rooms />
        <EnrollNow />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
