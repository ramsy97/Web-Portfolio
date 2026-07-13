"use client";

import React from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, FileText, Code2, Database, TableProperties, Network } from "lucide-react";
import { translations, t } from "../utils/translations";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { githubRepos, recruiterMode, setActiveSection, language } = usePortfolioStore();
  const totalRepos = githubRepos.length || 14;
  const tr = translations;

  const stats = [
    { label: t(tr.hero.stats.totalProjects, language), value: `${totalRepos}+` },
    { label: t(tr.hero.stats.githubRepos, language),   value: totalRepos.toString() },
    { label: t(tr.hero.stats.technologies, language),  value: "15+" },
    { label: t(tr.hero.stats.yearsLearning, language), value: "4+" },
  ];

  const handleScroll = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 lg:py-36 bg-surface dark:bg-bg-dark transition-colors"
    >
      {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[560px] w-[560px] rounded-full bg-accent/8 blur-[100px] dark:bg-accent/5" />
        <div className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-[#d4975d]/12 blur-[80px] dark:bg-[#d4975d]/6" />
        {/* Subtle diagonal line pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M 0,20 L 20,0" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* ── LEFT: Hero Copy ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Availability badge */}
            <motion.div {...fadeUp(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent dark:bg-accent/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t(tr.hero.availability, language)}
            </motion.div>

            {/* Name — serif editorial style */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-primary dark:text-white sm:text-7xl"
            >
              Ramy<br />
              <span className="italic text-accent">Syafitri</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              {...fadeUp(0.22)}
              className="mt-5 text-lg font-semibold text-secondary dark:text-gray-300 uppercase tracking-widest"
            >
              {t(tr.hero.role, language)}
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.32)}
              className="mt-5 max-w-xl text-base leading-relaxed text-secondary dark:text-gray-400"
            >
              {t(tr.hero.description, language)}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.42)} className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => handleScroll("projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-[#a84d38] transition-all duration-200 cursor-pointer"
              >
                {t(tr.hero.viewProjects, language)} <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="/ramy.pdf"
                download="Ramy_Syafitri_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-surface dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                {t(tr.hero.downloadCV, language)} <Download className="h-4 w-4" />
              </a>
              <button
                onClick={() => handleScroll("contact")}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-secondary hover:text-accent dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                {t(tr.hero.contactMe, language)}
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.52)}
              className="mt-14 grid grid-cols-4 gap-6 w-full border-t border-primary/10 pt-8 dark:border-white/10"
            >
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-secondary dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Card ── */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm"
            >
              {/* Card glow */}
              <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-br from-accent/30 to-[#d4975d]/20 blur-xl opacity-60 dark:opacity-30" />

              <div className="relative rounded-[1.4rem] border border-primary/8 bg-white p-7 shadow-2xl dark:border-white/8 dark:bg-surface-dark">
                {/* Status badge */}
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1 text-xs font-semibold text-white shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-white block" />
                  {t(tr.hero.card.openToWork, language)}
                </div>

                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center overflow-hidden">
                    <span className="font-serif text-2xl font-bold text-accent">RS</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary dark:text-white">Ramy Syafitri</h3>
                    <p className="text-xs text-secondary dark:text-gray-400">{t(tr.hero.card.location, language)}</p>
                  </div>
                </div>

                {/* Separator */}
                <div className="mt-6 mb-5 h-px bg-primary/8 dark:bg-white/8" />

                {/* Core skills */}
                <div className="space-y-3.5">
                  {[
                    { icon: Code2,           color: "text-accent",       label: t(tr.hero.card.webEngineering, language), value: "React · Node · FastAPI" },
                    { icon: TableProperties, color: "text-success",      label: t(tr.hero.card.spreadsheet, language),    value: "Excel Macro · Sheets" },
                    { icon: Database,        color: "text-[#d4975d]",    label: t(tr.hero.card.dataOps, language),        value: "MySQL · Entry · QC" },
                    { icon: Network,         color: "text-cyan-500",     label: t(tr.hero.card.networkingIT, language),   value: "Cisco · LAN/WAN" },
                  ].map(({ icon: Icon, color, label, value }) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span className={`flex items-center gap-2 text-secondary dark:text-gray-400`}>
                        <Icon className={`h-4 w-4 ${color}`} />
                        {label}
                      </span>
                      <span className="font-semibold text-primary dark:text-white text-xs">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 mb-1 h-px bg-primary/8 dark:bg-white/8" />

                {/* Quick links */}
                <div className="mt-5 flex gap-3">
                  <a
                    href="https://github.com/ramsy97"
                    target="_blank" rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary/5 py-2.5 text-xs font-semibold text-primary hover:bg-primary/10 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank" rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent/8 py-2.5 text-xs font-semibold text-accent hover:bg-accent/15 dark:bg-accent/10 dark:hover:bg-accent/20 transition-colors"
                  >
                    <FileText className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                </div>

                {/* Recruiter mode cheat sheet */}
                {recruiterMode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-5 rounded-xl bg-accent/6 p-4 border border-accent/20 dark:bg-accent/10"
                  >
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{t(tr.hero.card.recruiterCheatSheet, language)}</p>
                    <ul className="mt-2 space-y-1.5 text-xs text-secondary dark:text-gray-300">
                      <li>✓ <strong>{t(tr.hero.card.gpa, language)}:</strong> 3.01 / 4.00 (D3 Sistem Informasi)</li>
                      <li>✓ <strong>{t(tr.hero.card.availability, language)}:</strong> {t(tr.hero.card.immediateStart, language)}</li>
                      <li>✓ <strong>{t(tr.hero.card.topSkills, language)}:</strong> Full-stack · DB · QC Admin · IT Support</li>
                      <li>✓ <strong>{t(tr.hero.card.location2, language)}:</strong> {t(tr.hero.card.location2Val, language)}</li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
