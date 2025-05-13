import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traduções
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
      
      // Rodape
      "ContactUs": "Nosso Contato",
      "Adress": "Em algum lugar bem legal por aí",
      "FollowUs": "Apoia a Gente",
      "PrivacyPolicy": "Política de Privacidade",
      "TermsOfService": "Termos de Uso",
      "FAQ": "Perguntas Frequentes",
      "RightsReserved": "Todos os direitos reservado.",
    }
  }
};

// src/i18n.ts
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // IMPORTANTE para permitir HTML
    },
    react: {
      transSupportBasicHtmlNodes: true, // Permite <br/> básico
      transKeepBasicHtmlNodesFor: ['br'] // Mantém apenas tags br
    }
  });

export default i18n;