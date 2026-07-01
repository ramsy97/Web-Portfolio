"use client";

import React, { useState } from "react";
import { Table, Database, CheckSquare, BarChart3, Clock, Sparkles, Code } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/portfolioStore";
import { translations, t } from "../utils/translations";

export default function AdminPortfolio() {
  const { language } = usePortfolioStore();
  const tr = translations.adminPortfolio;
  const [activeTab, setActiveTab] = useState<"excel" | "data">("excel");
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const excelProjects = [
    {
      title: t(tr.excelProjects.dashboard.title, language),
      description: t(tr.excelProjects.dashboard.desc, language),
      formulas: "=SUMIFS(SalesTable[Amount], SalesTable[Date], \">=\"&StartDate, SalesTable[Date], \"<=\"&EndDate)",
      impact: t(tr.excelProjects.dashboard.impact, language),
      features: language === "id" ? tr.excelProjects.dashboard.features.id : tr.excelProjects.dashboard.features.en,
      previewGrid: language === "id" ? [
        ["Produk", "Kuantitas Q1", "Pendapatan Q1", "Margin"],
        ["Bakso Pedas", "1,240", "Rp 18,600,000", "45%"],
        ["Mie Ayam", "980", "Rp 14,700,000", "40%"],
        ["Es Teh Manis", "2,150", "Rp 10,750,000", "65%"],
        ["TOTAL", "4,370", "Rp 44,050,000", "48%"]
      ] : [
        ["Product", "Q1 Qty", "Q1 Revenue", "Margin"],
        ["Spicy Meatballs", "1,240", "Rp 18,600,000", "45%"],
        ["Chicken Noodles", "980", "Rp 14,700,000", "40%"],
        ["Sweet Iced Tea", "2,150", "Rp 10,750,000", "65%"],
        ["TOTAL", "4,370", "Rp 44,050,000", "48%"]
      ]
    },
    {
      title: t(tr.excelProjects.inventory.title, language),
      description: t(tr.excelProjects.inventory.desc, language),
      formulas: "=IF(CurrentStock <= ReorderPoint, \"RESTOCK NOW\", \"OK\")",
      impact: t(tr.excelProjects.inventory.impact, language),
      features: language === "id" ? tr.excelProjects.inventory.features.id : tr.excelProjects.inventory.features.en,
      previewGrid: language === "id" ? [
        ["ID Barang", "Nama Barang", "Stok Gudang", "Status"],
        ["P-001", "Daging Sapi (kg)", "15", "STOK MENIPIS"],
        ["P-002", "Tepung Tapioka (kg)", "240", "AMAN"],
        ["P-003", "Bumbu Racik (pack)", "8", "RESTOCK SEGERA"],
        ["P-004", "Kemasan Box (pcs)", "1,200", "AMAN"]
      ] : [
        ["Item ID", "Item Name", "Stock", "Status"],
        ["P-001", "Beef (kg)", "15", "LOW STOCK"],
        ["P-002", "Tapioca Flour (kg)", "240", "SAFE"],
        ["P-003", "Seasoning Spice (pack)", "8", "RESTOCK NOW"],
        ["P-004", "Box Packaging (pcs)", "1,200", "SAFE"]
      ]
    },
    {
      title: t(tr.excelProjects.attendance.title, language),
      description: t(tr.excelProjects.attendance.desc, language),
      formulas: "=NETWORKDAYS(StartDate, EndDate) - AttendanceCount",
      impact: t(tr.excelProjects.attendance.impact, language),
      features: language === "id" ? tr.excelProjects.attendance.features.id : tr.excelProjects.attendance.features.en,
      previewGrid: language === "id" ? [
        ["NIK", "Nama Karyawan", "Kehadiran (Hari)", "Jam Lembur"],
        ["Y-1002", "Andi Pratama", "22", "14.5 Jam"],
        ["Y-1005", "Ratih Purwasih", "21", "8.0 Jam"],
        ["Y-1011", "Budi Santoso", "22", "16.0 Jam"],
        ["TOTAL", "3 Karyawan", "65 Hari", "38.5 Jam"]
      ] : [
        ["NIK", "Employee Name", "Present Days", "Overtime Hrs"],
        ["Y-1002", "Andi Pratama", "22", "14.5 Hrs"],
        ["Y-1005", "Ratih Purwasih", "21", "8.0 Hrs"],
        ["Y-1011", "Budi Santoso", "22", "16.0 Hrs"],
        ["TOTAL", "3 Employees", "65 Days", "38.5 Hrs"]
      ]
    },
    {
      title: t(tr.excelProjects.financial.title, language),
      description: t(tr.excelProjects.financial.desc, language),
      formulas: "=SUM(InflowTable[Amount]) - SUM(OutflowTable[Amount])",
      impact: t(tr.excelProjects.financial.impact, language),
      features: language === "id" ? tr.excelProjects.financial.features.id : tr.excelProjects.financial.features.en,
      previewGrid: language === "id" ? [
        ["Bulan", "Kas Masuk", "Kas Keluar", "Arus Kas Bersih"],
        ["Januari", "Rp 32,500,000", "Rp 24,100,000", "+Rp 8,400,000"],
        ["Februari", "Rp 28,900,000", "Rp 26,350,000", "+Rp 2,550,000"],
        ["Maret", "Rp 41,200,000", "Rp 30,500,000", "+Rp 10,700,000"],
        ["TOTAL", "Rp 102,600,000", "Rp 80,950,000", "+Rp 21,650,000"]
      ] : [
        ["Month", "Inflow", "Outflow", "Net Cash Flow"],
        ["January", "Rp 32,500,000", "Rp 24,100,000", "+Rp 8,400,000"],
        ["February", "Rp 28,900,000", "Rp 26,350,000", "+Rp 2,550,000"],
        ["March", "Rp 41,200,000", "Rp 30,500,000", "+Rp 10,700,000"],
        ["TOTAL", "Rp 102,600,000", "Rp 80,950,000", "+Rp 21,650,000"]
      ]
    }
  ];

  const dataProjects = [
    {
      title: t(tr.dataProjects.yamaha.title, language),
      description: t(tr.dataProjects.yamaha.desc, language),
      challenge: t(tr.dataProjects.yamaha.challenge, language),
      solution: t(tr.dataProjects.yamaha.solution, language),
      impact: t(tr.dataProjects.yamaha.impact, language),
      workflow: language === "id" ? tr.dataProjects.yamaha.workflow.id : tr.dataProjects.yamaha.workflow.en
    },
    {
      title: t(tr.dataProjects.filing.title, language),
      description: t(tr.dataProjects.filing.desc, language),
      challenge: t(tr.dataProjects.filing.challenge, language),
      solution: t(tr.dataProjects.filing.solution, language),
      impact: t(tr.dataProjects.filing.impact, language),
      workflow: language === "id" ? tr.dataProjects.filing.workflow.id : tr.dataProjects.filing.workflow.en
    },
    {
      title: t(tr.dataProjects.validation.title, language),
      description: t(tr.dataProjects.validation.desc, language),
      challenge: t(tr.dataProjects.validation.challenge, language),
      solution: t(tr.dataProjects.validation.solution, language),
      impact: t(tr.dataProjects.validation.impact, language),
      workflow: language === "id" ? tr.dataProjects.validation.workflow.id : tr.dataProjects.validation.workflow.en
    }
  ];

  const activeProjectData = activeTab === "excel" ? excelProjects[selectedProject] : dataProjects[selectedProject];

  return (
    <section id="admin-portfolio" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
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
            {t(tr.tabExcel, language)}
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
            {t(tr.tabData, language)}
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
                    {activeTab === "excel" ? t(tr.excelStudy, language) : t(tr.dataStudy, language)}
                  </span>
                  <h3 className="text-xl font-bold text-primary dark:text-white mt-0.5">
                    {activeProjectData.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-500 dark:bg-green-500/20 shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                  {t(tr.impactVerified, language)}
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
                      {t(tr.coreFormula, language)}
                    </h5>
                    <pre className="rounded-xl bg-slate-950 p-3.5 text-xs font-mono text-emerald-400 overflow-x-auto border border-slate-800">
                      <code>{activeProjectData.formulas}</code>
                    </pre>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1 bg-accent/5 p-4 rounded-xl border border-accent/25 dark:bg-accent/10">
                    <h5 className="text-xs font-bold text-accent">{t(tr.businessImpact, language)}</h5>
                    <p className="text-xs text-secondary dark:text-gray-300 font-semibold">{activeProjectData.impact}</p>
                  </div>

                  {/* Excel Grid Preview */}
                  {"previewGrid" in activeProjectData && (
                    <div className="space-y-2">
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-primary dark:text-white flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                        {t(tr.gridPreview, language)}
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
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-red-500">{t(tr.theChallenge, language)}</h5>
                      <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">{activeProjectData.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-emerald-500">{t(tr.theSolution, language)}</h5>
                      <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">{activeProjectData.solution}</p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="space-y-1 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20 dark:bg-emerald-500/10">
                    <h5 className="text-xs font-bold text-emerald-500">{t(tr.qualityImprove, language)}</h5>
                    <p className="text-xs text-secondary dark:text-gray-300 font-semibold">{activeProjectData.impact}</p>
                  </div>

                  {/* Workflow Steps */}
                  {"workflow" in activeProjectData && (
                    <div className="space-y-2">
                      <h5 className="text-xs font-extrabold uppercase tracking-wide text-primary dark:text-white">
                        {t(tr.sopWorkflow, language)}
                      </h5>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {(activeProjectData.workflow as readonly string[]).map((step, idx) => (
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
