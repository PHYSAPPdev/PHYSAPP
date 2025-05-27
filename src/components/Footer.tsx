import '../styles/components/footer.sass'
import { FaGithub, FaPatreon, FaTwitter, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contato</h3>
                    <ul className="contact-info">
                        <li>
                            <FaMapMarkerAlt className="icon" />
                            <span>Em algum lugar muito legal por aí!</span>
                        </li>
                        <li>
                            <FaEnvelope className="icon" />
                            <span>contato@physapp.com</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Apoie o Projeto</h3>
                    <div className="social-links">
                        <a href="https://github.com/PHYSAPPdev" target="_blank" aria-label="Github">
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="#" aria-label="Patreon">
                            <FaPatreon className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PHYSAPP. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer