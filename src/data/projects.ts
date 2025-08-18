export interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  images: string[];
}

const Projects : ProjectProps[] =

[
  {
    "title": "Ohmyfood",
    "description": "Enhanced a mobile website’s interface by creating and optimizing CSS animations to deliver a smooth, engaging user experience.",
    "link": "https://benjaminnicolas-teboul.github.io/ohmyfood/html/index.html",
    "images": ["/images/ohmyfood.webp"]
  },
    {
    "title": "Printit",
    "description": "Enhanced a printing company page using Js css and html",
    "link": "https://benjaminnicolas-teboul.github.io/Print-it-JS-main/",
    "images": ["/images/PrintIt.webp"]
  },
      {
    "title": "NinaCarducci",
    "description": "Debugged and enhanced a one-page event agency website, resolving issues and ensuring quality using JavaScript, React, and modern development tools",
    "link": "https://benjaminnicolas-teboul.github.io/NinaCarducci/",
    "images": ["/images/nina.webp"]
  },
        {
    "title": "React-meteo",
    "description": "React-Meteo is a modern, responsive weather application built with React and Vite, offering real-time forecasts worldwide.",
    "link": "https://benjaminnicolas-teboul.github.io/meteo-react",
    "images": ["/images/meteo.webp"]
  }
]

export default Projects;