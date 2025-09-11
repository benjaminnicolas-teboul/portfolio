"use client";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/src/contexts/LanguageContext";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const { t } = useLanguage();

  // Charger la préférence au montage
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Fonction toggle
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="flex items-center bg-background text-foreground justify-between p-4 shadow-md">
      {/* Avatar */}
      <Avatar className="w-20 h-20">
        <AvatarImage
          src="/images/ben.webp"
          alt="Ma photo"
        />
        <AvatarFallback>BN-T</AvatarFallback>
      </Avatar>

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        {/* Sélecteur de langue */}
        <LanguageSwitcher />

        {/* Bouton Toggle Dark/Light */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light Mode"
          className="p-1 bg-transparent border-none"
        >
          {isDark ? (
            <span className="inline-flex rounded-full bg-gray-800/30 p-1">
              <FaMoon size={24} className="text-white" />
            </span>
          ) : (
            <span className="inline-flex rounded-full bg-white/30 p-1">
              <FaSun size={24} className="text-black" />
            </span>
          )}
        </button>

        {/* GitHub */}
        <Link
          href="https://github.com/benjaminnicolas-teboul"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/benjamin-nicolas-teboul-084a27364/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </Link>

        {/* Lien vers mon CV - maintenant traduit */}
        <Button
          asChild
          className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <Link href="/CV-BENJAMIN-NICOLAS-TEBOUL.pdf" target="_blank">
            {t('header.cv')}
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
