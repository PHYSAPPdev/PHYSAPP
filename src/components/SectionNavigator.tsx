import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/sectionnavigator.sass'

const SECTIONS_ORDER = [
  'aboutproject',
  'aboutus',
  'manual',
  'download',
  'footer'
]

const SectionNavigator = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [isAtFooter, setIsAtFooter] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])

  // Inicializa as referências das seções
  useEffect(() => {
    sectionsRef.current = SECTIONS_ORDER.map(id => 
      document.getElementById(id) as HTMLElement
    ).filter(Boolean)
  }, [])

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= sectionsRef.current.length) return
    
    sectionsRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    setCurrentSectionIndex(index)
  }

  const checkFooter = () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const pageHeight = document.documentElement.scrollHeight
    setIsAtFooter(scrollPosition >= pageHeight - 100)
  }

  useEffect(() => {
    const handleScroll = () => {
      checkFooter()
      
      // Atualiza a seção atual baseada na posição do scroll
      const currentPosition = window.scrollY + 100
      
      for (let i = 0; i < sectionsRef.current.length; i++) {
        const section = sectionsRef.current[i]
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        
        if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
          setCurrentSectionIndex(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNext = () => {
    if (isAtFooter) {
      // Se estiver no footer, volta para a primeira seção
      scrollToSection(0)
    } else {
      // Avança para a próxima seção ou vai para o footer
      const nextIndex = Math.min(currentSectionIndex + 1, SECTIONS_ORDER.length - 1)
      scrollToSection(nextIndex)
    }
  }

  const handlePrev = () => {
    // Retrocede para a seção anterior
    const prevIndex = Math.max(currentSectionIndex - 1, 0)
    scrollToSection(prevIndex)
  }

  return (
    <div className="section-navigator">
      <button 
        className="nav-button prev"
        onClick={handlePrev}
        disabled={currentSectionIndex === 0}
        aria-label="Seção anterior"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      
      <div className="current-section">
        {SECTIONS_ORDER[currentSectionIndex]}
      </div>

      <button 
        className="nav-button next"
        onClick={handleNext}
        disabled={currentSectionIndex === 4}
        aria-label="Próxima seção"
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  )
}

export default SectionNavigator;