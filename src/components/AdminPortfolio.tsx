"use client";

import React, { useState } from "react";
import { Table, Database, CheckSquare, BarChart3, Clock, Sparkles, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminPortfolio() {
  const [activeTab, setActiveTab] = useState<"excel" | "data">("excel");
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const excelProjects = [
    {
      title: "Interactive Sales Dashboard",
      description: "Dashboard interaktif untuk memantau data penjualan produk makanan harian, mingguan, dan bulanan secara visual.",
      formulas: "=SUMIFS(SalesTable[Amount], SalesTable[Date], \">=\"&StartDate, SalesTable[Date], \"<=\"&EndDate)",
      impact: "Meningkatkan kecepatan review data penjualan berkala dari 2 jam menjadi kurang dari 5 menit.",
      features: ["Slicer interaktif berdasarkan kategori produk", "Grafik tren dinamis", "Perhitungan otomatis profit margin"],
      previewGrid: [
        ["Product", "Q1 Qty", "Q1 Revenue", "Margin"],
        ["Bakso Pedas", "1,240", "Rp 18,600,000", "45%"],
        ["Mie Ayam", "980", "Rp 14,700,000", "40%"],
        ["Es Teh Manis", "2,150", "Rp 10,750,000", "65%"],
        ["TOTAL", "4,370", "Rp 44,050,000", "48%"]
      ]
    },
    {
      title: "Smart Inventory Tracker",
      description: "Sistem pelacakan inventaris gudang yang mencatat stok masuk, keluar, dan memberikan peringatan otomatis (low-stock warning).",
      formulas: "=IF(CurrentStock <= ReorderPoint, \"RESTOCK NOW\", \"OK\")",
      impact: "Mencegah kehabisan bahan baku utama produksi dan meminimalkan keterlambatan pengiriman hingga 98%.",
      features: ["Pewarnaan otomatis (Conditional Formatting)", "Log mutasi stok harian", "Dashboard status restock"],
      previewGrid: [
        ["Item ID", "Item Name", "Stock", "Status"],
        ["RAW-01", "Daging Sapi", "12 kg", "RESTOCK NOW"],
        ["RAW-02", "Tepung Tapioka", "85 kg", "OK"],
        ["RAW-03", "Bumbu Racik", "5 kg", "RESTOCK NOW"],
        ["PKG-01", "Kemasan Box", "500 pcs", "OK"]
      ]
    },
    {
      title: "Employee Attendance & Database",
      description: "Database karyawan terintegrasi dengan perhitungan absensi bulanan otomatis serta kalkulator lembur karyawan.",
      formulas: "=NETWORKDAYS(StartDate, EndDate) - AttendanceCount",
      impact: "Mempersingkat rekapitulasi penggajian bulanan HRD dari 3 hari kerja menjadi 1 hari kerja.",
      features: ["Formula absensi otomatis", "Validasi input data NIK", "Grafik statistik kehadiran bulanan"],
      previewGrid: [
        ["NIK", "Employee Name", "Present Days", "Overtime Hrs"],
        ["EMP001", "Ramy Syafitri", "22", "18.5"],
        ["EMP002", "Budi Santoso", "21", "12.0"],
        ["EMP003", "Siti Aminah", "22", "8.0"],
        ["TOTAL", "3 Employees", "65 Days", "38.5 Hrs"]
      ]
    },
    {
      title: "Automated Financial Report",
      description: "Laporan rugi laba dan arus kas otomatis bulanan yang terhubung langsung dengan sheet transaksi kasir.",
      formulas: "=SUM(InflowTable[Amount]) - SUM(OutflowTable[Amount])",
      impact: "Menghindari selisih pembukuan kas bulanan hingga 0.0% dengan validasi ganda otomatis.",
      features: ["Pembuatan laporan otomatis", "Perbandingan rugi laba tahunan", "Chart distribusi pengeluaran"],
      previewGrid: [
        ["Month", "Inflow", "Outflow", "Net Cash"],
        ["January", "Rp 45,000,000", "Rp 32,500,000", "+ Rp 12,500,000"],
        ["February", "Rp 52,100,000", "Rp 38,900,000", "+ Rp 13,200,000"],
        ["March", "Rp 48,600,000", "Rp 35,200,000", "+ Rp 13,400,000"],
        ["TOTAL", "Rp 145,700,000", "Rp 106,600,000", "+ Rp 39,100,000"]
      ]
    }
  ];

  const dataProjects = [
    {
      title: "PT Yamaha Production Log Cleaning",
      description: "Pembersihan dan validasi data log inspeksi komponen elektronik (OK/NG) harian sebelum dilaporkan ke tim Quality Control.",
      challenge: "Data mentah dari mesin produksi sering memiliki format tidak konsisten, baris kosong, dan data duplikat yang mengacaukan statistik QA.",
      solution: "Menggunakan Power Query & filter lanjutan untuk menghapus duplikat secara otomatis dan melakukan validasi silang (cross-reference NIK operator).",
      impact: "Menekan error pelaporan log inspeksi harian dari rata-rata 12% menjadi 0% pasca pembersihan data.",
      workflow: ["Ekstraksi CSV harian", "Filter duplikasi data", "Pencocokan silang log Quality Control"]
    },
    {
      title: "Documentation & Filing System Setup",
      description: "Perancangan sistem indeks pengarsipan file digital perusahaan agar dokumen administrasi dapat ditemukan dalam waktu cepat.",
      challenge: "Pencarian file manual memakan waktu 15-20 menit per dokumen karena struktur folder yang tidak seragam dan penamaan acak.",
      solution: "Membuat standar tata nama file terstruktur (YYYYMMDD_Kategori_NamaFile) dan master sheet indeks dengan tautan dinamis.",
      impact: "Mempersingkat waktu pencarian dokumen audit dari 15 menit menjadi kurang dari 15 detik.",
      workflow: ["Kodifikasi file arsip", "Indeksasi master sheet", "Tautan folder digital terpusat"]
    },
    {
      title: "Data Quality Validation Suite",
      description: "Sistem verifikasi ganda yang mencocokkan data inventaris fisik (stock opname) dengan sistem pembukuan internal.",
      challenge: "Selisih stok barang fisik dan sistem sering terdeteksi lambat, mengakibatkan gangguan pada antrean produksi.",
      solution: "Menerapkan formula pencarian dinamis (XLOOKUP) dan conditional formatting untuk mendeteksi selisih stok secara instan.",
      impact: "Menghilangkan selisih data stok bahan baku hingga 10% dan mempercepat proses stock opname bulanan.",
      workflow: ["Stock opname lapangan", "Automated XLOOKUP comparison", "Highlight selisih otomatis"]
    }
  ];

  const activeProjectData = activeTab === "excel" ? excelProjects[selectedProject] : dataProjects[selectedProject];

  return (
    <section id="admin-portfolio" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Administration &amp; Data Operations</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            Office &amp; Excel Portfolio
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            Kumpulan proyek administrasi data dan automasi excel yang dibangun menggunakan formula canggih dan metode QA berkinerja tinggi.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-4 mb-10 border-b border-gray-200 dark:border-gray-800 pb-2">
          <button
            onClick={() => { setActiveTab("excel"); setSelectedProject(0); }}
            className={`flex items-center gap-2 pb-3.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "excel"
                ? "border-accent text-accent"
                : "border-transparent text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            <Table className="h-4.5 w-4.5" />
            Excel Automation
          </button>
          <button
            onClick={() => { setActiveTab("data"); setSelectedProject(0); }}
            className={`flex items-center gap-2 pb-3.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "data"
                ? "border-accent text-accent"
                : "border-transparent text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            <Database className="h-4.5 w-4.5" />
            Data Operations
          </button>
        </div>

        {/* Layout Grid: List of projects + Case Study details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Links list */}
          <div className="lg:col-span-4 space-y-3">
            {(activeTab === "excel" ? excelProjects : dataProjects).map((proj, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProject(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  selectedProject === idx
                    ? "bg-white dark:bg-surface-dark border-accent text-primary dark:text-white shadow-md"
                    : "border-gray-200/80 bg-white/40 dark:border-gray-800/80 hover:bg-white dark:hover:bg-surface-dark text-secondary dark:text-gray-300"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-bold">{proj.title}</h4>
                  {selectedProject === idx && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                </div>
                <p className="text-[11px] text-gray-500 line-clamp-1 dark:text-gray-400">{proj.description}</p>
              </button>
            ))}
          </div>

          {/* Right Column: Case study viewer */}
          <div className="lg:col-span-8">
            <motion.div
              key={`${activeTab}-${selectedProject}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-800 dark:bg-surface-dark shadow-lg space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider">
                    {activeTab === "excel" ? "Excel Dashboard Study" : "Data Quality Case Study"}
                  </span>
                  <h3 className="text-xl font-bold text-primary dark:text-white mt-0.5">
                    {activeProjectData.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-500 dark:bg-green-500/20 shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                  Impact: verified
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">
                {activeProjectData.description}
              </p>

              {/* Specific Content for Excel Tab */}
              {activeTab === "excel" && "formulas" in activeProjectData && (
                <div className="space-y-4">
                  {/* Formula display */}
                  <div className="space-y-1.5">
                    <h5 className="text-xs font-extrabold uppercase tracking-wide text-primary dark:text-white flex items-center gap-1.5">
                      <Code className="h-4 w-4 text-accent" />
                      Core Excel Formula used:
                    </h5>
                    <pre className="rounded-xl bg-slate-950 p-3.5 text-xs font-mono text-emerald-400 overflow-x-auto border border-slate-800">
                      <code>{activeProjectData.formulas}</code>
                    </pre>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1 bg-accent/5 p-4 rounded-xl border border-accent/25 dark:bg-accent/10">
                    <h5 className="text-xs font-bold text-accent">Business Metric Impact:</h5>
                    <p className="text-xs text-secondary dark:text-gray-300 font-semibold">{activeProjectData.impact}</p>
                  </div>

                  {/* Excel Grid Preview */}
                  {"previewGrid" in activeProjectData && (
                    <div className="space-y-2">
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-primary dark:text-white flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                        Spreadsheet Grid Preview
                      </h5>
                      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                        <table className="min-w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-slate-800 text-primary dark:text-white border-b border-gray-200 dark:border-gray-700">
                              {(activeProjectData.previewGrid as string[][])[0].map((head, i) => (
                                <th key={i} className="px-4 py-2.5 font-bold">{head}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {(activeProjectData.previewGrid as string[][]).slice(1).map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className={`border-b border-gray-150 dark:border-gray-800 ${
                                  row[0] === "TOTAL"
                                    ? "bg-accent/5 font-bold dark:bg-accent/15"
                                    : "hover:bg-gray-50 dark:hover:bg-slate-800/40"
                                }`}
                              >
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="px-4 py-2.5 text-secondary dark:text-gray-300">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Specific Content for Data Tab */}
              {activeTab === "data" && "challenge" in activeProjectData && (
                <div className="space-y-4">
                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-red-500">The Challenge:</h5>
                      <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">{activeProjectData.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-emerald-500">The Solution:</h5>
                      <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">{activeProjectData.solution}</p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20 dark:bg-emerald-500/10">
                    <h5 className="text-xs font-bold text-emerald-500">Quality Improvement:</h5>
                    <p className="text-xs text-secondary dark:text-gray-300 font-semibold">{activeProjectData.impact}</p>
                  </div>

                  {/* Workflow Steps */}
                  {"workflow" in activeProjectData && (
                    <div className="space-y-2">
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-primary dark:text-white">
                        Standard Operating Procedure (SOP) Workflow
                      </h5>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {(activeProjectData.workflow as string[]).map((step, idx) => (
                          <div
                            key={step}
                            className="flex-1 flex items-center gap-2.5 bg-gray-50 dark:bg-slate-800/50 border border-gray-150 dark:border-gray-800 p-3 rounded-lg text-xs"
                          >
                            <span className="h-5 w-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent dark:bg-accent/20 shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-secondary dark:text-gray-300 font-semibold">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
