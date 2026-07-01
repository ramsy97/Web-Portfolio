"use client";

import React from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { translations, t } from "../utils/translations";

export default function Footer() {
  const { setActiveSection, language } = usePortfolioStore();
  const tr = translations;
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home",            label: t(tr.nav.home, language) },
    { id: "about",           label: t(tr.nav.about, language) },
    { id: "skills",          label: t(tr.nav.skills, language) },
    { id: "projects",        label: t(tr.nav.projects, language) },
    { id: "admin-portfolio", label: t(tr.nav.adminPortfolio, language) },
    { id: "timeline",        label: t(tr.nav.timeline, language) },
    { id: "contact",         label: t(tr.nav.contact, language) },
  ];

  return (
    <footer className="bg-primary text-gray-400 py-12 dark:bg-bg-dark border-t border-gray-250 dark:border-gray-800 transition-colors no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-800 pb-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold">Ramy Syafitri</h3>
            <p className="text-xs mt-1">{t(tr.footer.tagline, language)}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Coordinates */}
          <div className="flex gap-4">
            <a
              href="mailto:ramysyafitri8@gmail.com"
              className="rounded-full bg-slate-800 p-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/ramsy97"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 p-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800 p-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Legal & Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-4 text-gray-500">
          <p>© {currentYear} Ramy Syafitri. {t(tr.footer.rights, language)}</p>
          <p className="flex items-center gap-1">
            {t(tr.footer.madeWith, language)} <Heart className="h-3 w-3 text-red-500 fill-red-500" /> {t(tr.footer.by, language)} <strong className="text-gray-300">Ramy Syafitri</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}
