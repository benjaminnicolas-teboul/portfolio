export interface ProjectProps {
  title: string;
  description: {
    fr: string;
    es: string;
    en: string;
  };
  link?: string;
  images: string[];
}

const Projects: ProjectProps[] = [
  {
    title: "Ohmyfood",
    description: {
      fr: "Amélioration de l'interface mobile en créant et optimisant des animations CSS pour offrir une expérience utilisateur fluide et engageante.",
      es: "Mejoré la interfaz móvil creando y optimizando animaciones CSS para ofrecer una experiencia de usuario fluida y atractiva.",
      en: "Enhanced a mobile website’s interface by creating and optimizing CSS animations to deliver a smooth, engaging user experience."
    },
    link: "https://benjaminnicolas-teboul.github.io/ohmyfood/html/index.html",
    images: ["/images/ohmyfood.webp"]
  },
  {
    title: "Printit",
    description: {
      fr: "Amélioration d'une page pour une entreprise d'impression en utilisant JS, CSS et HTML.",
      es: "Mejoré la página de una empresa de impresión usando JS, CSS y HTML.",
      en: "Enhanced a printing company page using Js css and html."
    },
    link: "https://benjaminnicolas-teboul.github.io/Print-it-JS-main/",
    images: ["/images/PrintIt.webp"]
  },
  {
    title: "NinaCarducci",
    description: {
      fr: "Correction et amélioration d'un site web d'agence événementielle une page, résolution des problèmes et garantie de qualité avec JavaScript, React et des outils modernes.",
      es: "Depuré y mejoré un sitio web de agencia de eventos de una sola página, resolviendo problemas y asegurando calidad con JavaScript, React y herramientas modernas.",
      en: "Debugged and enhanced a one-page event agency website, resolving issues and ensuring quality using JavaScript, React, and modern development tools."
    },
    link: "https://benjaminnicolas-teboul.github.io/NinaCarducci/",
    images: ["/images/nina.webp"]
  },
  {
    title: "React-meteo",
    description: {
      fr: "React-Meteo est une application météo moderne et responsive construite avec React et Vite, offrant des prévisions en temps réel dans le monde entier.",
      es: "React-Meteo es una aplicación meteorológica moderna y receptiva construida con React y Vite, que ofrece pronósticos en tiempo real a nivel mundial.",
      en: "React-Meteo is a modern, responsive weather application built with React and Vite, offering real-time forecasts worldwide."
    },
    link: "https://benjaminnicolas-teboul.github.io/meteo-react",
    images: ["/images/meteo.webp"]
  },
  {
    title: "Memory",
    description: {
      fr: "Développé avec JavaScript, CSS, MongoDB et Node.js. Ce projet montre une intégration efficace du frontend et backend, ainsi qu’un code propre et maintenable pour une expérience utilisateur fluide.",
      es: "Desarrollado con JavaScript, CSS, MongoDB y Node.js. Este proyecto demuestra una integración efectiva del frontend y backend, además de un código limpio y mantenible para una experiencia de usuario fluida.",
      en: "Developed using JavaScript, CSS, MongoDB, and Node.js. This project demonstrates effective integration of frontend and backend components, as well as clean, maintainable code for a smooth user experience."
    },
    link: "https://benjaminnicolas-teboul.github.io/memory/",
    images: ["/images/memo.webp"]
  }
];

export default Projects;
