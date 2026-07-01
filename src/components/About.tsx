"use client";

import React from "react";
import { CheckCircle2, Target, Award, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/portfolioStore";
import { translations, t } from "../utils/translations";

export default function About() {
  const { language } = usePortfolioStore();
  const tr = translations.about;

  const strengths = [
    {
      title: t(tr.strengths.bridgingTitle, language),
      description: t(tr.strengths.bridgingDesc, language),
      icon: Award,
      color: "text-accent"
    },
    {
      title: t(tr.strengths.errorTitle, language),
      description: t(tr.strengths.errorDesc, language),
      icon: ShieldAlert,
      color: "text-red-500"
    },
    {
      title: t(tr.strengths.docTitle, language),
      description: t(tr.strengths.docDesc, language),
      icon: Target,
      color: "text-emerald-500"
    }
  ];

  const softSkills = tr.softSkills.skills[language];

  return (
    <section id="about" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t(tr.sectionLabel, language)}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            {t(tr.sectionTitle, language)}
          </h2>
        </div>

        {/* Magazine-style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Editorial Profile Block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-serif italic text-primary dark:text-gray-200 leading-snug">
              {t(tr.quote, language)}
            </h3>
            
            <p
              className="text-base leading-relaxed text-secondary dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: t(tr.bio1, language) }}
            />

            <p className="text-base leading-relaxed text-secondary dark:text-gray-300">
              {t(tr.bio2, language)}
            </p>

            {/* Core Strengths Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200/60 dark:border-gray-800/60">
              {strengths.map((str, idx) => {
                const IconComponent = str.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className={`h-5 w-5 ${str.color}`} />
                      <h4 className="text-sm font-bold text-primary dark:text-white">{str.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{str.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Key Details & Soft Skills Board */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Soft Skills Card */}
            <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-md dark:border-gray-800/80 dark:bg-surface-dark">
              <h3 className="text-lg font-bold text-primary dark:text-white flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                {t(tr.softSkills.title, language)}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent dark:text-blue-400" />
                    <span className="text-xs font-semibold text-secondary dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">
                <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  {t(tr.education.title, language)}
                </h4>
                <p
                  className="text-xs text-secondary dark:text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t(tr.education.detail, language) }}
                />
              </div>
            </div>

            {/* Quick Factoids Box */}
            <div className="rounded-2xl bg-primary p-6 text-white dark:bg-accent/15 dark:border dark:border-accent/30">
              <h4 className="text-sm font-bold tracking-wide uppercase text-accent dark:text-blue-400">
                {t(tr.fastFacts.title, language)}
              </h4>
              <ul className="mt-4 space-y-3 text-xs text-gray-300 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>{t(tr.fastFacts.language, language)}:</span>
                  <span className="font-semibold text-white">{t(tr.fastFacts.languageVal, language)}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t(tr.fastFacts.location, language)}:</span>
                  <span className="font-semibold text-white">{t(tr.fastFacts.locationVal, language)}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t(tr.fastFacts.availability, language)}:</span>
                  <span className="font-semibold text-green-400 dark:text-green-300">{t(tr.fastFacts.availabilityVal, language)}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t(tr.fastFacts.workSystem, language)}:</span>
                  <span className="font-semibold text-white">{t(tr.fastFacts.workSystemVal, language)}</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
