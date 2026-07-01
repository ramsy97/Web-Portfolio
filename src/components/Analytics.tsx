"use client";

import React, { useState, useEffect } from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { calculateLanguageStats, getMockContributions } from "../utils/github";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Github, Code, GitCommit, Users } from "lucide-react";

export default function Analytics() {
  const { githubRepos, githubProfile } = usePortfolioStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute stats on the fly
  const languageStats = calculateLanguageStats(githubRepos);
  const contributionData = getMockContributions();

  const totalRepos = githubProfile?.public_repos || githubRepos.length || 14;
  const followers = githubProfile?.followers || 12;
  const following = githubProfile?.following || 15;
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

  // Activity log representation
  const recentActivities = [
    { type: "commit", msg: "Pushed 3 commits to ramsy97/Warung-POS", time: "2 days ago" },
    { type: "repo", msg: "Created repository ramsy97/Real-time-Food-Ordering-System", time: "1 month ago" },
    { type: "star", msg: "Starred Tailwindlabs/tailwindcss repository", time: "2 months ago" },
    { type: "commit", msg: "Merged pull request in quiz-app-menggunakan-react-js", time: "4 months ago" }
  ];

  return (
    <section id="analytics" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Analytical Insights</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            GitHub Analytics Dashboard
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            Menganalisis performa coding secara real-time. Menampilkan statistik repositori, grafik distribusi teknologi, dan catatan aktivitas commit.
          </p>
        </div>

        {/* Stats Grid cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="rounded-2xl border border-gray-250 bg-white p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Public Repos</span>
              <Github className="h-4 w-4 text-accent" />
            </div>
            <p className="text-3xl font-bold text-primary dark:text-white">{totalRepos}</p>
          </div>

          <div className="rounded-2xl border border-gray-250 bg-white p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Total Commits (YTD)</span>
              <GitCommit className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-3xl font-bold text-primary dark:text-white">{totalCommits}</p>
          </div>

          <div className="rounded-2xl border border-gray-250 bg-white p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Followers</span>
              <Users className="h-4 w-4 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-primary dark:text-white">{followers}</p>
          </div>

          <div className="rounded-2xl border border-gray-250 bg-white p-5 dark:border-gray-800 dark:bg-surface-dark shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Languages</span>
              <Code className="h-4 w-4 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-primary dark:text-white">{languageStats.length}</p>
          </div>
        </div>

        {/* Charts Section */}
        {mounted && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Pie Chart: Language Distribution */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-6">
                Most Used Languages
              </h3>
              
              <div className="h-64 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="w-48 h-48" style={{ minWidth: 192, minHeight: 192 }}>
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
                      <Tooltip formatter={(value, name, props) => [`${value} projects`, `Lang: ${name}`]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex-1 space-y-2.5">
                  {languageStats.slice(0, 5).map((stat, idx) => (
                    <div key={stat.name} className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                      <span className="text-xs font-bold text-secondary dark:text-gray-300 w-20">{stat.name}</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold">{stat.percentage}% ({stat.value} repos)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bar Chart: Project Impact */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-6">
                Repository Impact (Active Engagement)
              </h3>
              
              <div className="h-64" style={{ minWidth: 200, minHeight: 256 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={reposBarData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={9} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={9} tickLine={false} />
                    <Tooltip cursor={{ fill: "rgba(37,99,235,0.05)" }} />
                    <Bar dataKey="stars" radius={[4, 4, 0, 0]}>
                      {reposBarData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.language === "Python" ? "#3B82F6" : entry.language === "Vue" ? "#10B981" : "#F59E0B"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Contribution Heatmap Graph */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md mb-8 overflow-hidden">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-5">
            GitHub Contribution Activity (Last 12 Months)
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

          <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-gray-400 dark:text-gray-500">
            <span>Learn more on GitHub at <a href="https://github.com/ramsy97" className="underline text-accent">@ramsy97</a></span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="h-2.5 w-2.5 rounded-[1px] bg-gray-100 dark:bg-slate-800" />
              <span className="h-2.5 w-2.5 rounded-[1px] bg-green-200 dark:bg-green-900" />
              <span className="h-2.5 w-2.5 rounded-[1px] bg-green-400" />
              <span className="h-2.5 w-2.5 rounded-[1px] bg-green-700 dark:bg-green-300" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Recent Activity Log list */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark shadow-md">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white mb-4">
            Recent Sync Activity
          </h3>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {recentActivities.map((act, i) => (
              <div key={i} className="flex justify-between items-center py-3 text-xs">
                <span className="text-secondary dark:text-gray-300">{act.msg}</span>
                <span className="text-gray-400 font-semibold">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
