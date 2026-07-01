"use client";

import React, { useState, useMemo } from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import { Search, Filter, ArrowUpDown, ArrowRightLeft, BookOpen, Star, GitFork, X, Code, CheckCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectExplorer() {
  const { githubRepos } = usePortfolioStore();
  
  // Dashboard states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLang, setSelectedLang] = useState("All");
  const [sortBy, setSortBy] = useState("updated"); // updated | stars | name
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRepo, setSelectedRepo] = useState<any | null>(null);

  const itemsPerPage = 6;

  // Extract unique languages
  const languages = useMemo(() => {
    const list = new Set<string>();
    githubRepos.forEach(repo => {
      if (repo.language) list.add(repo.language);
    });
    return ["All", ...Array.from(list)];
  }, [githubRepos]);

  // Filter & Sort Logic
  const filteredAndSortedRepos = useMemo(() => {
    let result = [...githubRepos];

    // Search filter
    if (searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        repo =>
          repo.name.toLowerCase().includes(q) ||
          (repo.description && repo.description.toLowerCase().includes(q))
      );
    }

    // Technology / Language filter
    if (selectedLang !== "All") {
      result = result.filter(repo => repo.language === selectedLang);
    }

    // Sort filter
    result.sort((a, b) => {
      if (sortBy === "stars") {
        return b.stargazers_count - a.stargazers_count;
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        // default: updated
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }
    });

    return result;
  }, [githubRepos, searchTerm, selectedLang, sortBy]);

  // Pagination Logic
  const paginatedRepos = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedRepos.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedRepos, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedRepos.length / itemsPerPage);

  // Dynamic Case Study Generator Content based on Repo name and details
  const getCaseStudy = (repo: any) => {
    if (!repo) return null;
    const name = repo.name;
    const lang = repo.language || "TypeScript";
    
    // Core custom structures for special projects
    if (name.toLowerCase().includes("warung")) {
      return {
        title: "Case Study: Warung Kita Point-of-Sale (POS) & Inventory System",
        problem: "UMKM sering kesulitan memantau stok produk secara real-time dan menyusun laporan keuangan harian. Proses manual sering kali mengakibatkan selisih kas dan keterlambatan restock barang.",
        architecture: "Menggunakan backend Python dengan FastAPI yang sangat cepat dan asinkron, dikombinasikan dengan database SQLite + SQLAlchemy ORM. Frontend dibangun menggunakan React 19, TypeScript, dan Tailwind CSS v4 untuk antarmuka yang sangat responsif.",
        challenges: "Sinkronisasi stok barang saat transaksi penjualan berlangsung padat, serta penanganan ekspor data dalam format Excel (.xlsx) dan PDF tanpa membebani memori server.",
        solution: "Menerapkan sistem penguncian transaksi (db transaction locks) dan logs adjustment otomatis. Mengintegrasikan pustaka XLSX-Populate di frontend dan ekspor PDF berbasis PDF-Kit dengan stream buffering di backend.",
        features: [
          "Role-Based Access Control (Admin & Kasir)",
          "Real-time Inventory Low-Stock Alerts",
          "One-Click Financial Exporting System",
          "Interactive Debt & Receivable Ledger"
        ],
        codeSnippet: `// FastAPI Endpoint: Menangani Checkout Transaksi POS
@router.post("/checkout")
async function checkout_transaction(
    payload: TransactionCreateSchema,
    db: Session = Depends(get_db)
):
    try:
        # 1. Mulai database transaction lock
        with db.begin():
            # 2. Kurangi stok produk & catat log penyesuaian
            for item in payload.items:
                product = db.query(Product).filter(Product.id == item.product_id).first()
                if product.stock < item.quantity:
                    raise HTTPException(status_code=400, detail=f"Stok {product.name} habis")
                product.stock -= item.quantity
                
            # 3. Simpan invoice transaksi & generate laporan
            transaction = Transaction(total=payload.total, cashier_id=payload.cashier_id)
            db.add(transaction)
            return {"status": "success", "invoice": transaction.id}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))`
      };
    }

    if (name.toLowerCase().includes("ordering") || name.toLowerCase().includes("flow")) {
      return {
        title: "Case Study: RestoFlow - Real-time Food Ordering & Restaurant Sync",
        problem: "Macetnya komunikasi pesanan antara pelanggan di meja, koki di dapur, dan kasir di depan, mengakibatkan pesanan terlambat diproses atau salah hidangan.",
        architecture: "Frontend menggunakan Vue 3 dengan TypeScript, Vite, dan Pinia. Backend menggunakan Express.js, Prisma ORM, PostgreSQL, dan Socket.io untuk transmisi data real-time dua arah.",
        challenges: "Menjaga konsistensi status pesanan (Pending -> Preparing -> Ready -> Served) di semua layar monitor pengguna tanpa perlu refresh halaman web.",
        solution: "Membuat server Socket.io terintegrasi untuk menyiarkan event perubahan status pesanan secara spesifik ke room kasir, dapur, atau pelanggan.",
        features: [
          "Real-time WebSockets Order Dispatching",
          "Kitchen Monitor Interactive Kanban Board",
          "Automated Invoice Generation and Printing",
          "Role-based Action Logging Routing"
        ],
        codeSnippet: `// Socket.io Handler: Emit Perubahan Status Pesanan
io.on("connection", (socket) => {
  socket.on("update_order_status", async (data) => {
    const { orderId, newStatus } = data;
    
    // 1. Update status pesanan di database via Prisma
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus }
    });
    
    // 2. Siarkan ke seluruh client di room masing-masing
    io.emit("order_status_changed", {
      orderId: updatedOrder.id,
      status: updatedOrder.status
    });
  });
});`
      };
    }

    // Default Case Study Generator for other repos
    return {
      title: `Case Study: ${repo.name.replace(/-/g, " ")}`,
      problem: `Membangun sebuah modul aplikasi berbasis ${lang} yang handal, efisien, dengan antarmuka yang modern, responsif, dan mudah diakses oleh pengguna.`,
      architecture: `Proyek ini dibangun menggunakan bahasa pemrograman ${lang} dengan memanfaatkan tools standar industri untuk menjaga kualitas kode, modularitas, dan performa tinggi.`,
      challenges: `Mengatur manajemen state lokal secara efisien dan memastikan aset-aset ter-render secara optimal di perangkat mobile maupun desktop.`,
      solution: `Menerapkan arsitektur komponen modular, optimasi rendering browser, dan memisahkan fungsi logis dari UI presentation layer.`,
      features: [
        "Interactive User Interface (UI)",
        "Mobile First Responsive Layout",
        "Clean Code Structure & Standards",
        "State Management Optimization"
      ],
      codeSnippet: `// Component Logic Blueprint: ${lang}
import React, { useState, useEffect } from 'react';

export default function ApplicationModule({ config }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function loadData() {
      const response = await fetch('/api/data');
      const json = await response.json();
      if (active) {
        setData(json);
        setLoading(false);
      }
    }
    loadData();
    return () => { active = false; };
  }, []);

  if (loading) return <div>Loading resources...</div>;

  return (
    <div className="module-container">
      <h3>Data Operations Panel</h3>
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}`
    };
  };

  const handleOpenCaseStudy = (repo: any) => {
    setSelectedRepo(repo);
  };

  const handleCloseCaseStudy = () => {
    setSelectedRepo(null);
  };

  return (
    <section id="projects-explorer" className="py-20 bg-white dark:bg-bg-dark transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Code Repository</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            Project Explorer Dashboard
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            Telusuri seluruh repositori GitHub saya secara real-time. Klik &ldquo;View Case Study&rdquo; pada kartu proyek untuk melihat ringkasan teknis sistem informasi.
          </p>
        </div>

        {/* Dashboard Control Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center gap-4 bg-surface p-4 rounded-2xl dark:bg-surface-dark border border-gray-100 dark:border-gray-800">
          {/* Search Box */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search repository name or keyword..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Technology Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="h-4 w-4 text-gray-400 shrink-0" />
            <select
              value={selectedLang}
              onChange={(e) => { setSelectedLang(e.target.value); setCurrentPage(1); }}
              className="w-full md:w-auto px-3 py-2 text-sm bg-white dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="All">All Technologies</option>
              {languages.filter(l => l !== "All").map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          {/* Sorting Control */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <ArrowUpDown className="h-4 w-4 text-gray-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
              className="w-full md:w-auto px-3 py-2 text-sm bg-white dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="updated">Latest Update</option>
              <option value="stars">Star Count</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Dashboard Grid list */}
        {filteredAndSortedRepos.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-gray-300 rounded-2xl dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tidak ada repositori yang cocok dengan kata kunci &quot;{searchTerm}&quot; atau teknologi &quot;{selectedLang}&quot;.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedRepos.map(repo => (
                <div
                  key={repo.name}
                  className="flex flex-col h-full rounded-xl border border-gray-200 bg-white p-5 hover:shadow-lg dark:border-gray-800/80 dark:bg-surface-dark transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-base font-bold text-primary dark:text-white line-clamp-1">
                      {repo.name.replace(/-/g, " ")}
                    </h3>
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full dark:bg-accent/25">
                      {repo.language || "HTML"}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed flex-1 mb-4">
                    {repo.description || "Proyek rekayasa web personal untuk mendemonstrasikan algoritma dan pemrograman modular."}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 dark:text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                    <span className="text-[10px] ml-auto">
                      Updated: {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2.5 pt-3.5 border-t border-gray-100 dark:border-gray-800">
                    <button
                      onClick={() => handleOpenCaseStudy(repo)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent/10 py-2 text-xs font-semibold text-accent dark:bg-accent/25 hover:bg-accent/20 transition-all cursor-pointer"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Case Study
                    </button>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gray-300 p-2 text-secondary hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 transition-colors"
                      title="View GitHub Source"
                    >
                      <Code className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-xl border border-gray-300 px-4 py-2 text-xs font-semibold text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 disabled:opacity-50 cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-xs font-semibold text-secondary dark:text-gray-400">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-xl border border-gray-300 px-4 py-2 text-xs font-semibold text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 disabled:opacity-50 cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* Modal Project Case Study Generator */}
        <AnimatePresence>
          {selectedRepo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm no-print">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseCaseStudy}
                  className="absolute top-5 right-5 rounded-full p-2 text-secondary hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Case Study Data */}
                {(() => {
                  const caseStudy = getCaseStudy(selectedRepo);
                  if (!caseStudy) return null;
                  
                  return (
                    <div className="space-y-6">
                      {/* Title & Header */}
                      <div>
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider">
                          Auto-Generated Case Study // GitHub Sync
                        </span>
                        <h3 className="mt-1 text-2xl font-bold text-primary dark:text-white sm:text-3xl">
                          {caseStudy.title}
                        </h3>
                        
                        <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                          <span>Language: <strong className="text-accent">{selectedRepo.language || "HTML"}</strong></span>
                          <span>Stars: <strong>{selectedRepo.stargazers_count}</strong></span>
                          <span>Forks: <strong>{selectedRepo.forks_count}</strong></span>
                          <span>Last Sync: <strong>{new Date(selectedRepo.updated_at).toLocaleDateString()}</strong></span>
                        </div>
                      </div>

                      {/* Content Sections */}
                      <div className="space-y-5 border-t border-gray-100 pt-5 dark:border-gray-800">
                        {/* Section 1: Problem */}
                        <div className="space-y-1.5">
                          <h4 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white">
                            1. Problem Statement
                          </h4>
                          <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">
                            {caseStudy.problem}
                          </p>
                        </div>

                        {/* Section 2: Architecture */}
                        <div className="space-y-1.5">
                          <h4 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white">
                            2. Technical Architecture &amp; Stack
                          </h4>
                          <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">
                            {caseStudy.architecture}
                          </p>
                        </div>

                        {/* Section 3: Challenges & Resolutions */}
                        <div className="space-y-1.5">
                          <h4 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white">
                            3. Development Challenges &amp; Solutions
                          </h4>
                          <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">
                            {caseStudy.challenges}
                          </p>
                          <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed">
                            <strong>Penyelesaian:</strong> {caseStudy.solution}
                          </p>
                        </div>

                        {/* Section 4: Key Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white">
                            4. Key Features Implemented
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {caseStudy.features.map(feat => (
                              <div key={feat} className="flex items-center gap-2 text-xs text-secondary dark:text-gray-300">
                                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Section 5: Code blueprint */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-extrabold uppercase tracking-wide text-primary dark:text-white">
                            5. Technical Code Blueprint
                          </h4>
                          <pre className="rounded-xl bg-slate-950 p-4 text-[10px] font-mono text-emerald-400 overflow-x-auto max-h-[300px] border border-slate-800">
                            <code>{caseStudy.codeSnippet}</code>
                          </pre>
                        </div>
                      </div>

                      {/* Modal Footer actions */}
                      <div className="flex gap-3 pt-5 border-t border-gray-100 dark:border-gray-800">
                        <a
                          href={selectedRepo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary text-white py-3 text-xs font-semibold dark:bg-accent dark:hover:bg-blue-700 hover:bg-gray-800 transition-colors"
                        >
                          <Code className="h-4 w-4" />
                          View Complete Repository Code
                        </a>
                        <button
                          onClick={handleCloseCaseStudy}
                          className="px-5 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                          Close Case Study
                        </button>
                      </div>
                    </div>
                  );
                })()}

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
