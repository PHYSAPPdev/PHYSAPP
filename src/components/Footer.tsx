import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaPatreon } from 'react-icons/fa';
import '../styles/footer.sass';

const Footer = ({ id }: {id: string}) => {
  const { t } = useTranslation();    

  return (
    <footer className="footer" id={id}>
      {/* Contact Information Card */}
      <div className="footer-card">
        <h3>{t("ContactUs")}</h3>
        <ul>
          <li><FaEnvelope /> contact@physapp.com</li>
          <li><FaPhone /> (55) +13 99999-9999</li>
          <li><FaMapMarkerAlt />{t("Adress")}</li>
        </ul>
      </div>

      {/* Social Media/Links Card */}
      <div className="footer-card">
        <h3>{t("FollowUs")}</h3>
        <div className="social-links">
          <a href="https://github.com/PhysAppDev" target="_blank"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPatreon /></a>
        </div>
        <div className="footer-links">
          <a href="#">{t("PrivacyPolicy")}</a>
          <a href="#">{t("TermsOfService")}</a>
          <a href="#">{t("FAQ")}</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} PhysApp. {t("RightsReserved")}
      </div>
    </footer>
  );
};

export default Footer;