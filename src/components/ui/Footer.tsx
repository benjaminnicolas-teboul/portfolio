import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-background p-4 text-foreground">
      <nav className="flex justify-end items-center gap-4">
        {/* Lien GitHub */}
        <Link
          href="https://github.com/benjaminnicolas-teboul"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 text-foreground hover:text-gray-500 dark:hover:text-gray-400 transition-colors" />
        </Link>

        {/* Lien LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/benjamin-nicolas-teboul-084a27364/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 text-foreground hover:text-gray-500 dark:hover:text-gray-400 transition-colors" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;