import '../styles/components/title.sass'
import type { ReactNode } from 'react'

interface TitleProps {
    children: ReactNode
}

const Title = ({ children }: TitleProps) => {
    return (
        <div className="container title col">
            <span className="title-line"></span>
            <h3 className="title-text">{children}</h3>
            <span className="title-line"></span>
        </div>
    )
}

export default Title