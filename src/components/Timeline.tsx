"use client";

import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Timeline() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const timelineData = [
    {
      type: "work",
      title: "Full-Stack Developer (Freelance)",
      company: "WarungKita & RestoFlow projects",
      date: "2025 - Present",
      description: [
        "Membangun aplikasi Smart POS (Warung-POS) berbasis React 19, FastAPI, dan SQLite dengan fungsionalitas ekspor laporan keuangan harian dan manajemen hak akses.",
        "Mengembangkan RestoFlow, sistem ordering makanan real-time dengan socket.io, Vue 3, Express, dan PostgreSQL untuk menyinkronkan data kasir dan dapur."
      ],
      icon: Briefcase,
      color: "bg-accent"
    },
    {
      type: "education",
      title: "Diploma Three (D3) of Information Systems",
      company: "Universitas Bina Sarana Informatika",
      date: "Sep 2018 – Aug 2021",
      description: [
        "IPK: 3.01 / 4.00",
        "Tugas Akhir: Rancang Bangun Sistem Informasi Penjualan Makanan Berbasis Web. Merancang skema database menggunakan MySQL dan membuat antarmuka admin menggunakan PHP."
      ],
      icon: GraduationCap,
      color: "bg-indigo-500"
    },
    {
      type: "education",
      title: "Vocational High School of Computer and Network Engineering",
      company: "SMK Ristek Jaya Jakarta",
      date: "Jul 2012 – May 2015",
      description: [
        "National Exam Average: 79.00/100",
        "Computer Hardware Assembly & Troubleshooting",
        "Computer Network Installation & Configuration",
        "TCP/IP Networking Fundamentals",
        "Windows & Linux Administration",
        "Network Device Configuration (Router & Switch)",
        "Network Cabling & IP Addressing",
        "Computer Maintenance & System Troubleshooting",
        "Basic Network Security"
      ],
      icon: GraduationCap,
      color: "bg-indigo-500"
    },
    {
      type: "work",
      title: "Operator Production",
      company: "PT Yamaha Motor Electronic Indonesia",
      date: "Nov 2017 – Nov 2018",
      description: [
        "Mendokumentasikan hasil inspeksi komponen elektrikal (OK/NG) ke laporan harian Excel.",
        "Menginput data hasil produksi harian ke dalam sistem inventaris internal Yamaha.",
        "Menerapkan prosedur verifikasi data ganda (double-check), berhasil menekan error log hingga 10%."
      ],
      icon: Briefcase,
      color: "bg-accent"
    }
  ];

  const filteredData = timelineData.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-bg-dark transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Professional Journey</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            Experience &amp; Timeline
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            Perjalanan karir akademis dan profesional, memadukan latar belakang industri manufaktur dengan rekayasa perangkat lunak.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12 flex flex-wrap gap-2.5 border-b border-gray-100 dark:border-gray-800 pb-4">
          {[
            { id: "all", label: "Show All" },
            { id: "work", label: "Work Experience" },
            { id: "education", label: "Education" }
          ].map(btn => (
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
                        {item.type === "work" ? "Experience" : "Education"}
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
                    {item.description.map((desc, dIdx) => (
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
