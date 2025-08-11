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
    "description": "Implementing animations in An Restaurant ap with html end scss ",
    "link": "https://benjaminnicolas-teboul.github.io/ohmyfood/html/index.html",
    "images": ["/images/ohmyfood.webp"]
  },
    {
    "title": "Printit",
    "description": "Implementing caroussel in an Printing company ap using js ",
    "link": "https://benjaminnicolas-teboul.github.io/Print-it-JS-main/",
    "images": ["/images/printIt.webp"]
  }
]

export default Projects;