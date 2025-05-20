import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.sass';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsActive(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <button 
        className="dropdown-button" 
        onClick={() => setIsActive(!isActive)}
        aria-label="Toggle menu"
      >
        {isActive ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <div className="language-selector">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('pt')}>PT</button>
      </div>

      <ul>
        <li onClick={() => scrollToSection('aboutproject')}>{t("AboutProject")}</li>
        <li onClick={() => scrollToSection('aboutus')}>{t("AboutUs")}</li>
        <li onClick={() => scrollToSection('download')}>{t("Download")}</li>
      </ul>
    </div>
  );
};

export default Navbar;