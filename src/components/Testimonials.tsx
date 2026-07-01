"use client";

import React from "react";
import { Quote, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/portfolioStore";
import { translations, t } from "../utils/translations";

export default function Testimonials() {
  const { language } = usePortfolioStore();
  const tr = translations.testimonials;

  const testimonials = [
    {
      name: t(tr.items.supervisor.name, language),
      role: t(tr.items.supervisor.role, language),
      company: t(tr.items.supervisor.company, language),
      text: t(tr.items.supervisor.text, language),
      avatarInitials: "YS"
    },
    {
      name: t(tr.items.advisor.name, language),
      role: t(tr.items.advisor.role, language),
      company: t(tr.items.advisor.company, language),
      text: t(tr.items.advisor.text, language),
      avatarInitials: "DB"
    },
    {
      name: t(tr.items.client.name, language),
      role: t(tr.items.client.role, language),
      company: t(tr.items.client.company, language),
      text: t(tr.items.client.text, language),
      avatarInitials: "WK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t(tr.sectionLabel, language)}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            {t(tr.sectionTitle, language)}
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            {t(tr.sectionDesc, language)}
          </p>
        </div>

        {/* Testimonials Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((tItem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-md hover:shadow-xl dark:border-gray-800/80 dark:bg-surface-dark transition-all duration-300"
            >
              {/* Quotes Icon decorative */}
              <div className="flex justify-between items-center mb-6">
                <Quote className="h-8 w-8 text-accent/20 dark:text-accent/30" />
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/5 px-2.5 py-1 text-[10px] font-bold text-accent dark:bg-accent/15">
                  <Sparkles className="h-3 w-3 animate-pulse" /> {t(tr.verified, language)}
                </span>
              </div>

              {/* Text */}
              <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed italic flex-1 mb-6">
                &ldquo;{tItem.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-4 dark:border-gray-800" />

              {/* Profile card footer */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm dark:bg-accent/20 shrink-0">
                  {tItem.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary dark:text-white">
                    {tItem.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                    {tItem.role} @ {tItem.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
