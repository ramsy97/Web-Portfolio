"use client";

import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/portfolioStore";
import { translations, t } from "../utils/translations";

export default function Timeline() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");
  const { language } = usePortfolioStore();
  const tr = translations.timeline;

  const timelineData = [
    {
      type: "work",
      title:   t(tr.items.freelanceDev.title, language),
      company: t(tr.items.freelanceDev.company, language),
      date: "2025 - Present",
      description: tr.items.freelanceDev.desc[language],
      icon: Briefcase,
      color: "bg-accent"
    },
    {
      type: "education",
      title:   t(tr.items.bsiUniv.title, language),
      company: t(tr.items.bsiUniv.company, language),
      date: "Sep 2018 – Aug 2021",
      description: tr.items.bsiUniv.desc[language],
      icon: GraduationCap,
      color: "bg-indigo-500"
    },
    {
      type: "education",
      title:   t(tr.items.smkSchool.title, language),
      company: t(tr.items.smkSchool.company, language),
      date: "Jul 2012 – May 2015",
      description: tr.items.smkSchool.desc[language],
      icon: GraduationCap,
      color: "bg-indigo-500"
    },
    {
      type: "work",
      title:   t(tr.items.yamahaWork.title, language),
      company: t(tr.items.yamahaWork.company, language),
      date: "Nov 2017 – Nov 2018",
      description: tr.items.yamahaWork.desc[language],
      icon: Briefcase,
      color: "bg-accent"
    }
  ];

  const filteredData = timelineData.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const filterButtons = [
    { id: "all",       label: t(tr.filterAll, language) },
    { id: "work",      label: t(tr.filterWork, language) },
    { id: "education", label: t(tr.filterEducation, language) },
  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-bg-dark transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t(tr.sectionLabel, language)}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            {t(tr.sectionTitle, language)}
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            {t(tr.sectionDesc, language)}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12 flex flex-wrap gap-2.5 border-b border-gray-100 dark:border-gray-800 pb-4">
          {filterButtons.map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === btn.id
                  ? "bg-primary text-white dark:bg-accent"
                  : "bg-gray-100 hover:bg-gray-200 text-secondary dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 sm:ml-6 space-y-12 pb-6">
          {filteredData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Timeline Node Icon */}
                <span className={`absolute -left-[17px] top-1 rounded-full p-1.5 text-white ${item.color} shadow-md`}>
                  <Icon className="h-4 w-4" />
                </span>

                {/* Timeline Card */}
                <div className="rounded-2xl border border-gray-200/80 bg-white p-5 sm:p-6 hover:shadow-md dark:border-gray-800/80 dark:bg-surface-dark transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${item.color}`}>
                        {item.type === "work" ? t(tr.badgeWork, language) : t(tr.badgeEducation, language)}
                      </span>
                      <h3 className="text-base font-extrabold text-primary dark:text-white mt-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-secondary dark:text-gray-400">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-semibold shrink-0">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  </div>

                  <ul className="space-y-2 border-t border-gray-50 pt-3 dark:border-gray-800">
                    {item.description.map((desc: string, dIdx: number) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-secondary dark:text-gray-300 leading-relaxed">
                        <ChevronRight className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
