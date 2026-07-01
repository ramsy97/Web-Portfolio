"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, AlertTriangle, HelpCircle, FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/portfolioStore";
import { translations, t } from "../utils/translations";

export default function CareerMatch() {
  const { language } = usePortfolioStore();
  const tr = translations.careerMatch;

  const [jobDescription, setJobDescription] = useState("");
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  // Ramy's Skill Database categorized by terms
  const ramySkills = {
    programming: ["javascript", "typescript", "php", "python", "html", "css", "sql"],
    frameworks: ["react", "next.js", "nextjs", "vue", "express", "fastapi", "node.js", "nodejs", "bootstrap", "tailwind"],
    databases: ["mysql", "postgresql", "sqlite", "sql server"],
    administration: ["excel", "google sheets", "spreadsheet", "data entry", "reporting", "documentation", "data validation", "inventory", "filing", "word", "powerpoint", "microsoft word", "office"],
    tools: ["git", "github", "troubleshooting", "networking", "qc", "quality control"]
  };

  // Common industry skills not explicitly covered to show as optional/missing if found in JD
  const otherKeywords = [
    "docker", "kubernetes", "aws", "gcp", "azure", "ci/cd", "laravel", "codeigniter",
    "nestjs", "django", "devops", "typescript", "graphql", "scrum", "agile", "jira",
    "sap", "english", "audit", "lead", "senior", "manager", "microservices"
  ];

  const handleAnalyze = () => {
    if (!jobDescription.trim()) return;
    setAnalyzing(true);
    
    setTimeout(() => {
      const text = jobDescription.toLowerCase();
      const matched: string[] = [];
      const missing: string[] = [];
      
      // Check Ramy's skills
      Object.entries(ramySkills).forEach(([_, skills]) => {
        skills.forEach(skill => {
          // Use regex to check word boundaries
          const regex = new RegExp(`\\b${skill.replace(".", "\\.")}\\b`, "i");
          if (regex.test(text) && !matched.includes(skill)) {
            matched.push(skill);
          }
        });
      });

      // Check other/missing keywords
      otherKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword.replace(".", "\\.")}\\b`, "i");
        if (regex.test(text)) {
          // If Ramy doesn't have it in his skills list, it's missing
          const isRamySkill = Object.values(ramySkills).some(arr => arr.includes(keyword));
          if (!isRamySkill && !missing.includes(keyword)) {
            missing.push(keyword);
          }
        }
      });

      // Calculate score
      let score = 0;
      const totalKeywordsFound = matched.length + missing.length;
      
      if (totalKeywordsFound === 0) {
        // Base matching score for empty keywords match
        score = 65; 
      } else {
        // Ramy's matches weight 85%, missing keywords weight 15%
        const matchedRatio = matched.length / totalKeywordsFound;
        score = Math.round(55 + matchedRatio * 40); // bounds between 55% and 95%
      }

      // Constrain score between 0 and 100
      score = Math.min(Math.max(score, 45), 98);

      // Generate recommendation text
      let recommendation = "";
      if (score >= 85) {
        recommendation = language === "id"
          ? "Ramy Syafitri sangat cocok (High Match) untuk posisi ini! Keahlian teknis yang diminta sangat selaras dengan portofolio Web Development dan rekam jejak administrasi datanya."
          : "Ramy Syafitri is an excellent fit (High Match) for this position! The required technical skills align closely with his Web Development portfolio and production data administration track record.";
      } else if (score >= 70) {
        recommendation = language === "id"
          ? "Ramy Syafitri memiliki kecocokan yang baik (Good Match). Ia menguasai sebagian besar core tech stack dan administrasi, serta siap mempelajari tools tambahan dalam waktu singkat."
          : "Ramy Syafitri has a good compatibility rate (Good Match). He is proficient in the majority of core tech stack and administration tasks, and is ready to pick up extra tools quickly.";
      } else {
        recommendation = language === "id"
          ? "Kecocokan moderat. Ramy memiliki pondasi sistem informasi yang kuat (D3) dan sangat direkomendasikan untuk tugas-tugas entry-level rekayasa perangkat lunak maupun administrasi umum."
          : "Moderate compatibility. Ramy has a solid information systems background (D3) and is highly recommended for entry-level software engineering tasks or general administration.";
      }

      setAnalysisResult({
        score,
        matched,
        missing,
        recommendation,
        totalKeywordsFound
      });
      setAnalyzing(false);
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text) {
        setJobDescription(text);
      }
    };
    reader.readAsText(file);
  };

  return (
    <section id="career-match" className="py-20 bg-white dark:bg-bg-dark transition-colors">
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

        {/* Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Panel */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-gray-250 bg-white p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm space-y-4">
              <label className="block text-xs font-extrabold uppercase tracking-wide text-primary dark:text-white">
                {t(tr.pasteLabel, language)}
              </label>
              
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder={t(tr.placeholder, language)}
                rows={8}
                className="w-full p-4 text-xs bg-surface dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Upload Trigger */}
                <div className="relative w-full sm:w-auto">
                  <input
                    type="file"
                    accept=".txt"
                    onChange={handleFileUpload}
                    id="file-upload"
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-semibold text-secondary hover:bg-gray-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    <FileText className="h-4 w-4" />
                    {t(tr.uploadBtn, language)}
                  </label>
                </div>

                {/* Submit button */}
                <button
                  onClick={handleAnalyze}
                  disabled={analyzing || !jobDescription.trim()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
                >
                  {analyzing ? t(tr.analyzing, language) : t(tr.analyzeBtn, language)}
                </button>
              </div>
            </div>
          </div>

          {/* Analysis Results Display Panel */}
          <div className="lg:col-span-6">
            {analysisResult ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-gray-250 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md space-y-6"
              >
                {/* Score Section */}
                <div className="flex items-center justify-between gap-6 pb-5 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">{t(tr.matchCompatibility, language)}</h4>
                    <p className="text-xs font-semibold text-secondary dark:text-gray-300 mt-1">
                      {t(tr.basedOnScan, language)}
                    </p>
                  </div>

                  {/* Percentage Circular Visual */}
                  <div className="relative h-20 w-20 flex items-center justify-center shrink-0">
                    <svg className="absolute transform -rotate-95 w-20 h-20">
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="#e2e8f0"
                        strokeWidth="6"
                        fill="transparent"
                        className="dark:stroke-slate-800"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="#2563EB"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={213}
                        strokeDashoffset={213 - (213 * analysisResult.score) / 100}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <span className="text-base font-extrabold text-primary dark:text-white">
                      {analysisResult.score}%
                    </span>
                  </div>
                </div>

                {/* Matched Skills */}
                <div className="space-y-2">
                  <h5 className="text-xs font-extrabold uppercase tracking-wide text-emerald-500 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" />
                    {t(tr.matchedSkills, language)}
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {analysisResult.matched.length > 0 ? (
                      analysisResult.matched.map((skill: string) => (
                        <span
                          key={skill}
                          className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 px-2.5 py-0.5 rounded-full"
                        >
                          {skill.toUpperCase()}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400 italic">{t(tr.noneMatched, language)}</span>
                    )}
                  </div>
                </div>

                {/* Missing / Optional Skills to Address */}
                {analysisResult.missing.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-xs font-extrabold uppercase tracking-wide text-amber-500 flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4" />
                      {t(tr.missingKeywords, language)}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {analysisResult.missing.map((skill: string) => (
                        <span
                          key={skill}
                          className="text-[10px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400 px-2.5 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-400 leading-normal">
                      {t(tr.noteRamy, language)}
                    </p>
                  </div>
                )}

                {/* AI-like recommendation text */}
                <div className="space-y-1.5 border-t border-gray-150 pt-4 dark:border-gray-800">
                  <h5 className="text-xs font-extrabold uppercase tracking-wide text-primary dark:text-white flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    {t(tr.evaluationTitle, language)}
                  </h5>
                  <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed font-semibold">
                    {analysisResult.recommendation}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center dark:border-gray-800 flex flex-col items-center justify-center h-full min-h-[300px]">
                <HelpCircle className="h-8 w-8 text-gray-300 dark:text-gray-700 mb-3" />
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  {t(tr.emptyTitle, language)}
                </p>
                <p className="text-[10px] text-gray-400 max-w-xs mt-1.5 leading-relaxed">
                  {t(tr.emptyDesc, language)}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
