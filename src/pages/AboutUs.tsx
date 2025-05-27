import Title from '../components/Title'

import '../styles/pages/aboutus.sass'

const AboutUs = () => {
    return (
        <>
            <div className="container col">
                <Title>Sobre Nós</Title>

                <p className="aboutus-text"><strong>PHYSAPP</strong> consiste-se de uma aplicação mobile voltada a solução de cálculos de <i>física</i> — dos componentes <strong>Cinemática</strong>, <strong>Termodinâmica</strong> e <strong>Eletromagnetismo</strong>. A aplicação é de <strong>código aberto (open-source)</strong>, permitindo colaborações externas. Sua principal finalidade, além da solução de cálculos, é <i>ajudar estudantes</i> através de: <br/>✔ <strong>Lembretes de estudo</strong> <br/>✔ <strong>Cronogramas</strong> <br/>✔ Seção de cálculos com: <br/> &nbsp;&nbsp;- Visualização simplificada de fórmulas <br/> &nbsp;&nbsp;- Legendas explicativas <br/> &nbsp;&nbsp;- Exemplos práticos</p>
            
                <p className="aboutus-text">O projeto ainda está em <i>desenvolvimento</i> e na sua <strong>fase de teste</strong>. Como iniciativa independente, nossa principal fonte de renda são <strong>doações</strong>, pois acreditamos que a educação deve ser <i>democratizada</i> — livre para todos, sem restrições financeiras ou sociais. Nossa equipe é formada por <strong>estudantes do terceiro ano</strong> do curso técnico de <i>Desenvolvimento de Sistemas</i> da <strong>Etec de Peruíbe</strong>.</p>
            </div>
        </>
    )
}

export default AboutUs