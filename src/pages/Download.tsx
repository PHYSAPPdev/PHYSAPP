import { useEffect, useState } from 'react'
import { FaDownload, FaExternalLinkAlt, FaExclamationTriangle } from 'react-icons/fa'
import QRCode from 'qrcode'
import Title from '../components/Title'
import '../styles/pages/download.sass'

interface DownloadItem {
  id: number
  title: string
  url: string
  version?: string
  size?: string
  qrCode?: string
  directUrl?: string
}

const Download = () => {
  const [downloadItems, setDownloadItems] = useState<DownloadItem[]>([])

  // Função para redirecionamento otimizado
  const handleDownload = (url: string) => {
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
      // Tenta abrir diretamente em mobile
      window.location.href = url
    } else {
      // Abre em nova aba para desktop
      window.open(url, '_blank')
    }
  }

  useEffect(() => {
    const generateQRCodes = async () => {
      const items: DownloadItem[] = [
        {
          id: 1,
          title: 'Versão Completa',
          url: 'https://www.mediafire.com/file/spem2mw3k6ypw85/PHYSAPP-v1.0.0.apk/file',
          directUrl: 'https://download2268.mediafire.com/spem2mw3k6ypw85/PHYSAPP-v1.0.0.apk', // URL direta do arquivo
          version: 'v1.0.0',
          size: '80 MB'
        },
        {
          id: 2,
          title: 'Versão Light',
          url: 'https://www.youtube.com/watch?v=p7YXXieghto',
          version: 'v1.0.0 Lite',
          size: '27 MB'
        },
        {
          id: 3,
          title: 'Documentação',
          url: 'https://www.youtube.com/watch?v=2mkDNsZfDWU',
          version: 'v1.0.0',
          size: '0.9 MB'
        }
      ]

      const itemsWithQR = await Promise.all(
        items.map(async (item) => {
          try {
            // Usa a URL direta se existir, senão usa a normal
            const qrUrl = item.directUrl || item.url
            const qrCode = await QRCode.toDataURL(qrUrl, {
              width: 200,
              margin: 2,
              color: {
                dark: '#2c3e50',
                light: '#ffffff'
              }
            })
            return { ...item, qrCode }
          } catch (err) {
            console.error(`Erro ao gerar QR Code para ${item.title}:`, err)
            return item
          }
        })
      )

      setDownloadItems(itemsWithQR)
    }

    generateQRCodes()
  }, [])

  return (
    <section className="download-section">
      <Title>Download</Title>
      
      <div className="warning-banner">
        <FaExclamationTriangle className="warning-icon" />
        <p>AVISO: O aplicativo ainda se encontra em sua fase de teste, muitas funções e recursos não funcionam como o desejado.</p>
        <FaExclamationTriangle className="warning-icon" />
      </div>
      
      <div className="download-grid">
        {downloadItems.map((item) => (
          <div key={item.id} className="download-card">
            <div className="download-info">
              <h3>{item.title}</h3>
              {item.version && <span className="version">{item.version}</span>}
              {item.size && <span className="size">{item.size}</span>}
            </div>
            
            <div className="download-content">
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="download-link"
              >
                <button className="download-button">
                  <FaDownload className="icon" />
                  {item.id === 1 ? 'Baixar via MediaFire' : 'Acessar'}
                  <FaExternalLinkAlt className="external-icon" />
                </button>
              </a>
              
              {item.qrCode && (
                <div className="qr-code-container" onClick={() => handleDownload(item.directUrl || item.url)}>
                  <img 
                    src={item.qrCode} 
                    alt={`QR Code para ${item.title}`} 
                    className="download-qrcode" 
                  />
                  <span className="qr-hint">Scan para {item.id === 1 ? 'download' : 'acessar'}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Download