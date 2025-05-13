import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SectionNavigator } from './components/SectionNavigator';

import AboutProject from './sections/AboutProject';
import AboutUs from './sections/AboutUs';
import Manual from './sections/Manual';
import Download from './sections/Download';

import './styles/global.sass';

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container sections">
        <section id="aboutproject" className="section">
          <AboutProject />
        </section>
        <section id="aboutus" className="section">
          <AboutUs />
        </section>
        <section id="manual" className="section">
          <Manual />
        </section>
        <section id="download" className="section">
          <Download />
        </section>
      </div>

      <Footer id="footer"/>
      <SectionNavigator />
    </>
  );
};

export default App;