"use client";

import React, { useEffect, useState } from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { Github, ExternalLink, Star, GitFork, RefreshCw, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { githubRepos, loading, error, fetchData } = usePortfolioStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Sort and filter top featured projects (e.g. Warung-POS, Real-time-Food-Ordering-System, D3 final project)
  const getFeaturedProjects = () => {
    // Sort logic: priority to repositories with descriptions and specific names, then updated date
    const priorityNames = ["warung-pos", "real-time-food-ordering-system", "sistem-penjualan-berbasis-web-menggunakan-php-dan-mysql"];
    
    return [...githubRepos]
      .sort((a, b) => {
        const aIndex = priorityNames.indexOf(a.name.toLowerCase());
        const bIndex = priorityNames.indexOf(b.name.toLowerCase());
        
        if (aIndex !== -1 && bIndex === -1) return -1;
        if (aIndex === -1 && bIndex !== -1) return 1;
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        
        // Secondary sort: Stars count
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        // Tertiary sort: Update date
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 3);
  };

  const featured = getFeaturedProjects();

  // Dynamic aesthetic gradient backgrounds for project thumbnails based on language
  const getProjectBg = (lang: string | null, index: number) => {
    const defaultGradients = [
      "from-blue-600 to-indigo-600",
      "from-emerald-500 to-teal-600",
      "from-amber-500 to-orange-600",
      "from-rose-500 to-purple-600"
    ];
    if (!lang) return defaultGradients[index % 4];
    const l = lang.toLowerCase();
    if (l === "python") return "from-blue-600/90 to-amber-500/90";
    if (l === "javascript" || l === "typescript") return "from-yellow-500 to-orange-600";
    if (l === "vue") return "from-emerald-500 to-green-600";
    if (l === "php") return "from-indigo-500 to-purple-600";
    if (l === "html" || l === "css") return "from-rose-500 to-orange-500";
    return defaultGradients[index % 4];
  };

  const handleScrollToExplorer = () => {
    const explorer = document.getElementById("projects-explorer");
    if (explorer) {
      explorer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Selected Works</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
              Menampilkan karya rekayasa perangkat lunak teratas, terintegrasi langsung dengan GitHub REST API untuk sinkronisasi otomatis.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Sync Indicator */}
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              GitHub Live Sync Connected
            </span>
            <button
              onClick={fetchData}
              disabled={loading}
              className="rounded-full border border-gray-300 p-2 text-secondary hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 disabled:opacity-50 cursor-pointer"
              title="Force Refresh GitHub Data"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && githubRepos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <RefreshCw className="h-8 w-8 text-accent animate-spin mb-4" />
            <p className="text-sm font-semibold text-secondary dark:text-gray-400">
              Mengambil repositori dari GitHub API...
            </p>
          </div>
        )}

        {/* Error Notification */}
        {error && (
          <div className="mb-8 rounded-xl bg-red-50 p-4 border border-red-200 dark:bg-red-950/20 dark:border-red-900/50">
            <p className="text-xs text-red-700 dark:text-red-400">
              * Gagal terhubung ke API GitHub ({error}). Menampilkan data repositori lokal tersinkronisasi.
            </p>
          </div>
        )}

        {/* Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col h-full rounded-2xl border border-gray-200/80 bg-white shadow-md hover:shadow-xl dark:border-gray-800/80 dark:bg-surface-dark overflow-hidden transition-all duration-300"
            >
              {/* Premium Gradient Header Visual - Thumbnail Otomatis */}
              <div className={`h-40 bg-gradient-to-br ${getProjectBg(project.language, idx)} p-5 flex flex-col justify-between text-white relative`}>
                {/* Decorative mesh */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,black_70%,transparent)]" />
                
                <div className="flex justify-between items-center z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">
                    {project.language || "Web Application"}
                  </span>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/95">
                    {project.stargazers_count > 0 && (
                      <span className="flex items-center gap-0.5">
                        <Star className="h-3 w-3 fill-white" />
                        {project.stargazers_count}
                      </span>
                    )}
                    {project.forks_count > 0 && (
                      <span className="flex items-center gap-0.5">
                        <GitFork className="h-3 w-3" />
                        {project.forks_count}
                      </span>
                    )}
                  </div>
                </div>

                {/* Simulated Graphic representation based on name */}
                <div className="flex items-end justify-between z-10">
                  <span className="text-xl font-bold tracking-tight select-none">
                    {project.name.replace(/-/g, " ")}
                  </span>
                  <Layers className="h-8 w-8 opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-300" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed flex-1">
                  {project.description || "Tidak ada deskripsi. Klik link GitHub untuk informasi selengkapnya mengenai proyek ini."}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.topics.slice(0, 4).map(topic => (
                    <span
                      key={topic}
                      className="text-[10px] font-semibold text-secondary bg-gray-100 dark:bg-slate-800 dark:text-gray-300 px-2.5 py-0.5 rounded-md"
                    >
                      #{topic}
                    </span>
                  ))}
                  {project.topics.length === 0 && (
                    <>
                      <span className="text-[10px] font-semibold text-secondary bg-gray-100 dark:bg-slate-800 dark:text-gray-300 px-2.5 py-0.5 rounded-md">#html5</span>
                      <span className="text-[10px] font-semibold text-secondary bg-gray-100 dark:bg-slate-800 dark:text-gray-300 px-2.5 py-0.5 rounded-md">#javascript</span>
                      <span className="text-[10px] font-semibold text-secondary bg-gray-100 dark:bg-slate-800 dark:text-gray-300 px-2.5 py-0.5 rounded-md">#css3</span>
                    </>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-300 bg-white py-2 text-xs font-semibold text-secondary hover:bg-gray-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800 transition-all"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>

                  {/* Show Live Demo only if homepage is defined or if it's one of the main apps */}
                  {(project.homepage || project.name.toLowerCase().includes("warung") || project.name.toLowerCase().includes("ordering")) && (
                    <a
                      href={project.homepage || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Explorer Trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={handleScrollToExplorer}
            className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-5 py-3 text-sm font-semibold text-accent dark:bg-accent/20 hover:bg-accent/20 transition-all cursor-pointer"
          >
            Explore Project Dashboard ({githubRepos.length || 14} Repositories)
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
