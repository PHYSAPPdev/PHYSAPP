import '../styles/components/navbar.sass'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    // Itens do menu em um array para loop
    const navItems = [
        { id: 1, href: '#aboutproject', text: 'Sobre Projeto' },
        { id: 2, href: '#aboutus', text: 'Sobre Nós' },
        { id: 3, href: '#download', text: 'Download' }
    ]

    // Verifica o tamanho da tela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            console.log(isMobile)
            if (window.innerWidth >= 768) setMenuOpen(false)
        }

        handleResize() // Verifica no carregamento inicial
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className="navbar">
            {/* Menu para desktop */}
            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                    <a 
                        key={item.id} 
                        href={item.href} 
                        className="nav-item"
                        onClick={() => setMenuOpen(false)}
                    >
                        <button>
                            {item.text}
                        </button>
                    </a>
                ))}
            </div>

            {/* Botão mobile */}
            <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    )
}

export default Navbar