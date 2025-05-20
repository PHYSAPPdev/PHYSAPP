import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      "AboutProject": "About Project",
      "AboutUs": "About Us",
      "Manual": "Manual",
      "Download": "Download",

      // About Project
      "BannerText": "A simple and attractive physics calculus mobile app resolver.",
      "Slogan": "Easy to use. <br />Simple to learn. <br />Clean to view. <br />",

      // About Us
      "Warning": "WARNING: The app is still in its beta phase, with many features not working properly as expected. Futhermore, the app has only one language support so far: Brazilian Portuguese.",
      "AboutUsA": "<strong>PHYSAPP</strong> is a mobile application designed to solve <i>physics calculations</i>—covering <strong>Kinematics</strong>, <strong>Thermodynamics</strong>, and <strong>Electromagnetism</strong>. The app is <strong>open-source</strong>, allowing external contributors to collaborate on its development. Beyond calculations, its main purpose is to <i>help students learn</i> through: <br/>✔ <strong>Study reminders</strong> <br/>✔ <strong>Schedules</strong> <br/>✔ A dedicated calculations section with: <br/> &nbsp;&nbsp;- Simplified formula visualization <br/> &nbsp;&nbsp;- Clear explanations <br/> &nbsp;&nbsp;- Practical examples",
      "AboutUsB": "The project is still in <i>development</i> and its <strong>beta testing phase</strong>. As an independent initiative, our primary funding comes from <strong>donations</strong>, as we firmly believe education should be <i>democratized</i>—freely accessible to everyone, without financial or social barriers. <br/><br/>Our team currently consists of <strong>third-year students</strong> from the <i>Technical Systems Development</i> course at <strong>Etec de Peruíbe</strong>.",
      
      // Footer
      "ContactUs": "Contact Us",
      "Adress": "At a very cool place somewhere",
      "FollowUs": "Follow Us",
      "PrivacyPolicy": "Privacy Policy",
      "TermsOfService": "Terms of Service",
      "FAQ": "FAQ",
      "RightsReserved": "All rights reserved.",
    }
  },
  pt: {
    translation: {
      // Barra de Navegacao
      "AboutProject": "Sobre o Projeto",
      "AboutUs": "Sobre Nós",
      "Manual": "Manual",
      "Download": "Download",

      // Sobre o Projeto
      "BannerText": "Um aplicativo mobile calculadora de física simples e atrativo!",
      "Slogan": "Fácil de usar. <br />Simples de aprender. <br />Visualmente agradável. <br />",
      
      // Sobre Nós
      "Warning": "AVISO: O aplicativo se encontra em sua fase de testes, ainda; muitos recursos não funcionam tão bem como esperado. E só suporte a um idioma: Português Brasil.",
      "AboutUsA": "<strong>PHYSAPP</strong> consiste-se de uma aplicação mobile voltada a solução de cálculos de <i>física</i> — dos componentes <strong>Cinemática</strong>, <strong>Termodinâmica</strong> e <strong>Eletromagnetismo</strong>. A aplicação é de <strong>código aberto (open-source)</strong>, permitindo colaborações externas. Sua principal finalidade, além da solução de cálculos, é <i>ajudar estudantes</i> através de: <br/>✔ <strong>Lembretes de estudo</strong> <br/>✔ <strong>Cronogramas</strong> <br/>✔ Seção de cálculos com: <br/> &nbsp;&nbsp;- Visualização simplificada de fórmulas <br/> &nbsp;&nbsp;- Legendas explicativas <br/> &nbsp;&nbsp;- Exemplos práticos",
      "AboutUsB": "O projeto ainda está em <i>desenvolvimento</i> e na sua <strong>fase de teste</strong>. Como iniciativa independente, nossa principal fonte de renda são <strong>doações</strong>, pois acreditamos que a educação deve ser <i>democratizada</i> — livre para todos, sem restrições financeiras ou sociais. <br/><br/>Nossa equipe é formada por <strong>estudantes do terceiro ano</strong> do curso técnico de <i>Desenvolvimento de Sistemas</i> da <strong>Etec de Peruíbe</strong>.",

      // Rodape
      "ContactUs": "Nosso Contato",
      "Adress": "Em algum lugar bem legal por aí",
      "FollowUs": "Apoie a Gente",
      "PrivacyPolicy": "Política de Privacidade",
      "TermsOfService": "Termos de Uso",
      "FAQ": "Perguntas Frequentes",
      "RightsReserved": "Todos os direitos reservados.",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // Permite HTML
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'em', 'i', 'u'] // Permite tags de formatação
    }
  });

export default i18n;