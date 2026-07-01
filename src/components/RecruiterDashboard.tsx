"use client";

import React from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { Briefcase, Download, Mail, Phone, ExternalLink, Award, ShieldCheck, Sparkles, CheckCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { translations, t } from "../utils/translations";

export default function RecruiterDashboard() {
  const { recruiterMode, setRecruiterMode, setActiveSection, language } = usePortfolioStore();
  const tr = translations.recruiter;

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {recruiterMode && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-accent/10 border-b border-accent/25 py-6 px-4 sm:px-6 lg:px-8 dark:bg-accent/10 no-print transition-all duration-300"
        >
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-accent/20 p-1.5 dark:bg-accent/30 text-accent">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white flex items-center gap-1.5">
                  {t(tr.console, language)}
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </h3>
              </div>
              <button
                onClick={() => setRecruiterMode(false)}
                className="text-xs font-semibold text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white cursor-pointer"
              >
                {t(tr.close, language)}
              </button>
            </div>

            {/* Quick Metrics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Box 1: Profile Summary */}
              <div className="bg-white dark:bg-surface-dark border border-accent/20 rounded-xl p-4 space-y-2">
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> {t(tr.candidateProfile, language)}
                </span>
                <h4 className="text-xs font-bold text-primary dark:text-white">Ramy Syafitri (D3 IS)</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t(tr.profileDesc, language)}
                </p>
              </div>

              {/* Box 2: Hiring Strengths */}
              <div className="bg-white dark:bg-surface-dark border border-accent/20 rounded-xl p-4 space-y-2">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> {t(tr.hiringHighlights, language)}
                </span>
                <ul className="text-[10px] font-semibold text-secondary dark:text-gray-300 space-y-1">
                  <li className="flex justify-between">
                    <span>{t(tr.availability, language)}:</span>
                    <span className="text-green-500">{t(tr.immediate, language)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t(tr.gpa, language)}:</span>
                    <span>3.01 / 4.00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t(tr.workOptions, language)}:</span>
                    <span>Onsite/Hybrid/Remote</span>
                  </li>
                </ul>
              </div>

              {/* Box 3: Quick Projects Shortcuts */}
              <div className="bg-white dark:bg-surface-dark border border-accent/20 rounded-xl p-4 space-y-2">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1">
                  <Award className="h-3 w-3" /> {t(tr.topDeliverables, language)}
                </span>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => handleScroll("projects-explorer")}
                    className="w-full text-left text-[11px] text-secondary hover:text-accent font-semibold flex items-center justify-between dark:text-gray-300 dark:hover:text-white"
                  >
                    <span>{t(tr.posCase, language)}</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => handleScroll("admin-portfolio")}
                    className="w-full text-left text-[11px] text-secondary hover:text-accent font-semibold flex items-center justify-between dark:text-gray-300 dark:hover:text-white"
                  >
                    <span>{t(tr.excelCase, language)}</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Box 4: Recruiter Action Shortcuts */}
              <div className="bg-white dark:bg-surface-dark border border-accent/20 rounded-xl p-4 space-y-2.5 flex flex-col justify-center">
                <div className="flex gap-2">
                  <a
                    href="/resume.pdf"
                    download="Ramy_Syafitri_Resume.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-accent text-white py-1.5 text-xs font-bold hover:bg-blue-750 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {t(tr.downloadCV, language)}
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href="mailto:ramysyafitri8@gmail.com"
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg border border-gray-300 py-1.5 text-xs font-semibold text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </a>
                  <a
                    href="https://wa.me/6285156414903"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-green-500 text-white py-1.5 text-xs font-bold hover:bg-green-600"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
