import './styles/app.sass'
import './styles/global.sass'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import AboutProject from './pages/AboutProject'
import AboutUs from './pages/AboutUs'
import Download from './pages/Download'

const App = () => {
  return (
    <>
      <span style={{height: '5rem'}}></span>
      <Navbar />

      <section id="aboutproject">
        <AboutProject />
      </section>

      <section id="aboutus">
        <AboutUs />  
      </section>

      <section id="download">
        <Download />
      </section>
      <Footer />
    </>
  )
}

export default App
