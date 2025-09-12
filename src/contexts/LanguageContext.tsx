'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Types pour les traductions
interface TranslationEntry {
  fr: string;
  es: string;
  en: string;
}

interface Translations {
  [key: string]: TranslationEntry;
}


const translations: Translations = {
  // Navigation/Header
  'header.cv': { fr: 'Mon CV', es: 'Mi CV', en: 'My CV' },
  
  // Banner section
 'banner.title1': { fr: 'Bonjour !', es: '¡Hola!', en: 'Hello!' },
'banner.title2': { fr: 'Je suis Benjamin', es: 'Soy Benjamin', en: 'I am Benjamin' },
'banner.title3': { fr: 'Développeur frontend', es: 'Desarrollador frontend', en: 'Frontend developer' },
  'banner.subtitle': { 
    fr: 'Découvrez mes projets, compétences et bien plus.', 
    es: 'Descubre mis proyectos, habilidades y mucho más.', 
    en: 'Discover my projects, skills and much more' 
  },
  
    'skills.title': {
    fr: "Mes compétences :",
    es: "Mis habilidades :",
    en: "My skills :"
  },
    'projects.title': {
    fr: 'Projets',
    es: 'Proyectos',
    en: 'Projects'
  },
   'contact.title': {
    fr: 'Contactez moi',
    es: 'contactame',
    en: 'Contact me'
  },
     'contact.subtitle': {
    fr: 'Vous avez une idée de projet ?...',
    es: '¿Tienes una idea de proyecto?',
    en: 'Have a project idea?...'
  },
       'form.title': {
    fr: 'envois moi un message',
    es: 'envíame un mensaje',
    en: 'send me a message'
  },
    'contact.label.name': { fr: "Nom *", es: "Nombre *", en: "Name *" },
  'contact.label.email': { fr: "Email *", es: "Correo electrónico *", en: "Email *" },
  'contact.label.subject': { fr: "Sujet *", es: "Asunto *", en: "Subject *" },
  'contact.label.message': { fr: "Message *", es: "Mensaje *", en: "Message *" },
  'contact.placeholder.name': { fr: "Votre nom", es: "Tu nombre", en: "Your name" },
  'contact.placeholder.email': { fr: "email", es: "correo electrónico", en: "email" },
  'contact.placeholder.subject': { fr: "Sujet de votre message", es: "Asunto de tu mensaje", en: "Subject of your message" },
  'contact.placeholder.message': { fr: "Décrivez votre projet ou demande...", es: "Describe tu proyecto o petición...", en: "Describe your project or request..." },
  'contact.button.sendMessage': { fr: "Envoyer le message", es: "Enviar mensaje", en: "Send Message" },
  'contact.button.sending': { fr: "Envoi...", es: "Enviando...", en: "Sending..." },
  'contact.errorSend': {
    fr: "Une erreur est survenue lors de l’envoi du message.",
    es: "Ocurrió un error al enviar el mensaje.",
    en: "An error occurred while sending the message."
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-language');
      if (saved && ['fr', 'es', 'en'].includes(saved)) {
        return saved as Language;
      }
    }
    return 'en';
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['fr', 'es', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
