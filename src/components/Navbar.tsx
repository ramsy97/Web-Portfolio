"use client";

import React from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { Sun, Moon, Briefcase, Menu, X, Check, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { translations, t } from "../utils/translations";

export default function Navbar() {
  const { theme, toggleTheme, recruiterMode, setRecruiterMode, activeSection, setActiveSection, language, toggleLanguage } =
    usePortfolioStore();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const tr = translations;

  const navItems = [
    { id: "home",           label: t(tr.nav.home, language) },
    { id: "about",          label: t(tr.nav.about, language) },
    { id: "skills",         label: t(tr.nav.skills, language) },
    { id: "projects",       label: t(tr.nav.projects, language) },
    { id: "admin-portfolio",label: t(tr.nav.adminPortfolio, language) },
    { id: "timeline",       label: t(tr.nav.timeline, language) },
    { id: "analytics",      label: t(tr.nav.analytics, language) },
    { id: "contact",        label: t(tr.nav.contact, language) },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/8 bg-surface/85 backdrop-blur-md dark:border-white/8 dark:bg-bg-dark/85 no-print transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Name */}
        <div className="flex items-center gap-2">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="font-serif text-xl font-bold tracking-tight text-primary dark:text-white"
          >
            Ramy<span className="italic text-accent font-light">Syafitri</span>
          </a>
          
          {/* Recruiter Badge */}
          {recruiterMode && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent dark:bg-accent/20">
              <Check className="h-3 w-3" /> {t(tr.nav.recruiterBadge, language)}
            </span>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-accent font-semibold"
                    : "text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopActiveTab"
                    className="absolute inset-0 rounded-full bg-accent/10 dark:bg-accent/20 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Toolbar Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            whileTap={{ scale: 0.92 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1.5 text-xs font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800 text-secondary"
            title={language === "id" ? t(tr.general.switchToEn, language) : t(tr.general.switchToId, language)}
          >
            <Globe className="h-3.5 w-3.5" />
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.18 }}
              >
                {language === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Recruiter Mode Toggle */}
          <button
            onClick={() => setRecruiterMode(!recruiterMode)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-300 border cursor-pointer ${
              recruiterMode
                ? "bg-accent border-accent text-white shadow-md shadow-accent/20"
                : "border-gray-300 text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800"
            }`}
            title="Toggle Recruiter Mode to unlock quick metrics and hiring summaries"
          >
            <Briefcase className="h-3.5 w-3.5" />
            {recruiterMode ? t(tr.nav.recruiterDashboard, language) : t(tr.nav.recruiterMode, language)}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-gray-300 p-2 text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
        </div>

        {/* Mobile menu and toggle theme buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Language Toggle Mobile */}
          <motion.button
            onClick={toggleLanguage}
            whileTap={{ scale: 0.92 }}
            className="rounded-full border border-gray-300 px-2.5 py-1.5 text-xs font-bold text-secondary dark:border-gray-700 dark:text-gray-300 cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={language}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
              >
                {language === "id" ? "🇮🇩" : "🇬🇧"}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Theme Switcher Mobile */}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-gray-300 p-2 text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Recruiter Mode Switcher Mobile Icon */}
          <button
            onClick={() => setRecruiterMode(!recruiterMode)}
            className={`rounded-full p-2 border cursor-pointer ${
              recruiterMode
                ? "bg-accent border-accent text-white"
                : "border-gray-300 text-secondary dark:border-gray-700 dark:text-gray-300"
            }`}
            title="Recruiter Mode"
          >
            <Briefcase className="h-4 w-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-gray-300 p-2 text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white/95 px-4 py-3 dark:border-gray-800 dark:bg-bg-dark/95"
          >
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-accent/10 text-accent dark:bg-accent/20"
                      : "text-secondary hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
