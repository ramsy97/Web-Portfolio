"use client";

import React, { useState, useEffect } from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { calculateLanguageStats, getMockContributions } from "../utils/github";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Github, Code, GitCommit, Users } from "lucide-react";
import { translations, t } from "../utils/translations";

export default function Analytics() {
  const { githubRepos, githubProfile, language } = usePortfolioStore();
  const tr = translations.analytics;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute stats on the fly
  const languageStats = calculateLanguageStats(githubRepos);
  const contributionData = getMockContributions();

  const totalRepos = githubProfile?.public_repos || githubRepos.length || 14;
  const followers = githubProfile?.followers || 12;
  const totalCommits = contributionData.totalCommits;

  // Language chart colors
  const COLORS = ["#2563EB", "#10B981", "#F59E0B", "#8B5CF6", "#EF4444", "#3B82F6", "#6B7280"];

  // Prepare repository stars bar chart data
  const reposBarData = githubRepos
    .slice(0, 6)
    .map(r => ({
      name: r.name.replace(/-/g, " ").slice(0, 12),
      stars: r.stargazers_count || 1, // enforce 1 if 0 to show visual bar
      language: r.language || "HTML"
    }));

  // Activity log representation with bilingual support
  const recentActivities = [
    {
      type: "commit",
      msg: language === "id" 
        ? "Mengirim 3 commit ke ramsy97/Warung-POS" 
        : "Pushed 3 commits to ramsy97/Warung-POS",
      time: language === "id" ? "2 hari yang lalu" : "2 days ago"
    },
    {
      type: "repo",
      msg: language === "id"
        ? "Membuat repositori ramsy97/Real-time-Food-Ordering-System"
        : "Created repository ramsy97/Real-time-Food-Ordering-System",
      time: language === "id" ? "1 bulan yang lalu" : "1 month ago"
    },
    {
      type: "star",
      msg: language === "id"
        ? "Menyukai repositori Tailwindlabs/tailwindcss"
        : "Starred Tailwindlabs/tailwindcss repository",
      time: language === "id" ? "2 bulan yang lalu" : "2 months ago"
    },
    {
      type: "commit",
      msg: language === "id"
        ? "Menggabungkan pull request di quiz-app-menggunakan-react-js"
        : "Merged pull request in quiz-app-menggunakan-react-js",
      time: language === "id" ? "4 bulan yang lalu" : "4 months ago"
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
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

        {/* Stats Grid cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          <div className="rounded-2xl border border-gray-250 bg-white p-4 sm:p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-start gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide line-clamp-2 leading-tight">{t(tr.publicRepos, language)}</span>
              <Github className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-primary dark:text-white">{totalRepos}</p>
          </div>

          <div className="rounded-2xl border border-gray-250 bg-white p-4 sm:p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-start gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide line-clamp-2 leading-tight">{t(tr.totalCommits, language)}</span>
              <GitCommit className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-primary dark:text-white">{totalCommits}</p>
          </div>

          <div className="rounded-2xl border border-gray-250 bg-white p-4 sm:p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-start gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide line-clamp-2 leading-tight">{t(tr.followers, language)}</span>
              <Users className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-primary dark:text-white">{followers}</p>
          </div>

          <div className="rounded-2xl border border-gray-250 bg-white p-4 sm:p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-start gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wide line-clamp-2 leading-tight">{t(tr.languages, language)}</span>
              <Code className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-primary dark:text-white">{languageStats.length}</p>
          </div>
        </div>

        {/* Charts Section */}
        {mounted && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Pie Chart: Language Distribution */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-6">
                {t(tr.mostUsedLang, language)}
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 h-auto sm:h-64 py-2 sm:py-0">
                <div className="w-48 h-48 shrink-0" style={{ minWidth: 192, minHeight: 192 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languageStats}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {languageStats.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value} ${language === "id" ? "proyek" : "projects"}`, `${language === "id" ? "Bahasa" : "Lang"}: ${name}`]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="w-full sm:flex-1 space-y-2 sm:space-y-2.5 max-w-[240px] sm:max-w-none">
                  {languageStats.slice(0, 5).map((stat, idx) => (
                    <div key={stat.name} className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                      <span className="text-xs font-bold text-secondary dark:text-gray-300 min-w-[5rem] shrink-0">{stat.name}</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold">{stat.percentage}% ({stat.value} repos)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bar Chart: Project Impact */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-6">
                {t(tr.repoImpact, language)}
              </h3>
              
              <div className="h-64" style={{ minWidth: 200, minHeight: 256 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={reposBarData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={9} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={9} tickLine={false} />
                    <Tooltip cursor={{ fill: "rgba(37,99,235,0.05)" }} />
                    <Bar dataKey="stars" fill="#c05e46" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Contribution Heatmap Graph */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md mb-8 overflow-hidden">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-5">
            {t(tr.contribution, language)}
          </h3>
          
          {/* Scrollable grid to accommodate mobile widths */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px] min-w-[700px] h-[100px]">
              {Array.from({ length: 53 }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, rowIdx) => {
                    const blockIdx = colIdx * 7 + rowIdx;
                    const level = contributionData.grid[blockIdx % contributionData.grid.length];
                    
                    const levelColors = [
                      "bg-gray-100 dark:bg-slate-800",
                      "bg-green-100 dark:bg-green-950/40",
                      "bg-green-300 dark:bg-green-800",
                      "bg-green-500 dark:bg-green-600",
                      "bg-green-700 dark:bg-green-400"
                    ];
                    
                    return (
                      <div
                        key={rowIdx}
                        className={`h-[11px] w-[11px] rounded-[1px] ${levelColors[level]} transition-colors`}
                        title={`Activity level: ${level}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center justify-between text-[11px] font-semibold text-gray-400 dark:text-gray-500">
            <span className="text-center sm:text-left">{t(tr.learnMore, language)} <a href="https://github.com/ramsy97" className="underline text-accent">@ramsy97</a></span>
            <div className="flex items-center gap-1.5 shrink-0">
              <span>{t(tr.less, language)}</span>
              <span className="h-2.5 w-2.5 rounded-[1px] bg-gray-100 dark:bg-slate-800" />
              <span className="h-2.5 w-2.5 rounded-[1px] bg-green-200 dark:bg-green-900" />
              <span className="h-2.5 w-2.5 rounded-[1px] bg-green-400" />
              <span className="h-2.5 w-2.5 rounded-[1px] bg-green-700 dark:bg-green-300" />
              <span>{t(tr.more, language)}</span>
            </div>
          </div>
        </div>

        {/* Recent Activity Log list */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-4">
            {t(tr.recentActivity, language)}
          </h3>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {recentActivities.map((act, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 text-xs gap-2 sm:gap-4">
                <span className="text-secondary dark:text-gray-300 break-words">{act.msg}</span>
                <span className="text-gray-400 font-semibold shrink-0">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
