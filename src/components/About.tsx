"use client";

import React from "react";
import { CheckCircle2, Target, Award, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const strengths = [
    {
      title: "Bridging Tech & Admin",
      description: "Mampu menulis kode program web modern sekaligus mengelola, memvalidasi, dan mengotomatisasi file data administrasi secara detail.",
      icon: Award,
      color: "text-accent"
    },
    {
      title: "10% Error Reduction",
      description: "Memiliki rekam jejak kedisiplinan tinggi dari PT Yamaha Motor Electronic Indonesia, menekan tingkat kesalahan input data hingga 10%.",
      icon: ShieldAlert,
      color: "text-red-500"
    },
    {
      title: "Structured Documentation",
      description: "Pakar dalam merancang database relasional, membuat dashboard Excel, dan mengelola dokumen log transaksi secara rapi dan sistematis.",
      icon: Target,
      color: "text-emerald-500"
    }
  ];

  const softSkills = [
    "Detail-Oriented & Systematic",
    "Analytical Problem Solving",
    "Under Pressure Performance",
    "Strong Technical Communication",
    "Team Collaboration (Onsite/Hybrid)",
    "Available Immediately"
  ];

  return (
    <section id="about" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Executive Profile</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            About Me
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
              &ldquo;Mengintegrasikan keahlian sistem informasi dengan akurasi administratif tingkat tinggi untuk membangun operasional digital yang nihil galat.&rdquo;
            </h3>
            
            <p className="text-base leading-relaxed text-secondary dark:text-gray-300">
              Saya adalah lulusan <strong>Diploma Tiga (D3) Sistem Informasi</strong> dari Universitas Bina Sarana Informatika dengan IPK <strong>3.01/4.00</strong>. Saya menguasai pemrograman web (JavaScript, TypeScript, ReactJS, Python, FastAPI, PHP, MySQL) sekaligus berpengalaman dalam administrasi data produksi yang detail dan berorientasi pada ketelitian.
            </p>

            <p className="text-base leading-relaxed text-secondary dark:text-gray-300">
              Berbekal kedisiplinan kerja yang terbentuk selama bekerja di PT Yamaha Motor Electronic Indonesia, saya terbiasa melakukan verifikasi data ganda dan menyusun laporan harian dengan presisi tinggi. Saya siap berkarir sebagai Programmer, Staf Administrasi, Data Entry Specialist, maupun IT Support.
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
                Professional Competency
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
                  Latar Belakang Pendidikan:
                </h4>
                <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">
                  <strong>Universitas Bina Sarana Informatika</strong> (2018 - 2021)
                  <br />Diploma Tiga (D3) Sistem Informasi — GPA 3.01
                  <br />Tugas Akhir: Rancang Bangun Sistem Informasi Penjualan Makanan Berbasis Web (PHP &amp; MySQL).
                </p>
              </div>
            </div>

            {/* Quick Factoids Box */}
            <div className="rounded-2xl bg-primary p-6 text-white dark:bg-accent/15 dark:border dark:border-accent/30">
              <h4 className="text-sm font-bold tracking-wide uppercase text-accent dark:text-blue-400">
                Hiring Fast Facts
              </h4>
              <ul className="mt-4 space-y-3 text-xs text-gray-300 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Bahasa:</span>
                  <span className="font-semibold text-white">Indonesia (Fasih), Inggris (Menengah)</span>
                </li>
                <li className="flex justify-between">
                  <span>Lokasi:</span>
                  <span className="font-semibold text-white">Bekasi, Jawa Barat</span>
                </li>
                <li className="flex justify-between">
                  <span>Ketersediaan:</span>
                  <span className="font-semibold text-green-400 dark:text-green-300">Segera (Tanpa Notice Period)</span>
                </li>
                <li className="flex justify-between">
                  <span>Sistem Kerja:</span>
                  <span className="font-semibold text-white">On-site / Hybrid / Remote</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
