"use client";

import React, { useState } from "react";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Flag from "react-world-flags";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ] as const;

  const getFlagCode = (langCode: string) => {
    if (langCode === "en") return "gb"; // anglais → drapeau Royaume-Uni
    return langCode;
  };

  // Trouve la langue courante complète (code + label)
  const currentLanguage = languages.find((lang) => lang.code === language) ?? languages[0];

  return (
    <div className="relative">
      {/* Bouton principal affichant le drapeau et le label de la langue active */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Language"
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-lg">
          <Flag
            code={getFlagCode(currentLanguage.code).toUpperCase()}
            style={{ width: 24, height: 16 }}
          />
        </span>
        <span className="text-sm font-medium">{currentLanguage.label}</span>
      </button>

      {isOpen && (
        <>
          {/* Overlay pour fermer le menu quand on clique à l’extérieur */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          {/* Menu déroulant */}
          <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                  language === lang.code ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                <span>
                  <Flag
                    code={getFlagCode(lang.code).toUpperCase()}
                    style={{ width: 24, height: 16 }}
                  />
                </span>
                <span className="text-sm font-medium">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
