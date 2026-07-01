export type Language = "id" | "en";

export const translations = {
  // ─── NAVBAR ───────────────────────────────────────────────
  nav: {
    home:         { id: "Beranda",       en: "Home" },
    about:        { id: "Tentang",       en: "About" },
    skills:       { id: "Keahlian",      en: "Skills" },
    projects:     { id: "Proyek",        en: "Projects" },
    adminPortfolio: { id: "Office & Excel", en: "Office & Excel" },
    timeline:     { id: "Timeline",      en: "Timeline" },
    analytics:    { id: "Analitik",      en: "Analytics" },
    contact:      { id: "Kontak",        en: "Contact" },
    recruiterMode: { id: "Mode Rekruter", en: "Recruiter Mode" },
    recruiterDashboard: { id: "Dashboard Rekruter", en: "Recruiter Dashboard" },
    recruiterBadge: { id: "Mode Rekruter Aktif", en: "Recruiter Mode Active" },
  },

  // ─── HERO ─────────────────────────────────────────────────
  hero: {
    availability:   { id: "Tersedia untuk On-site · Hybrid · Remote", en: "Available for On-site · Hybrid · Remote" },
    role:           { id: "Software Engineer · Admin Profesional · Networking & IT Support", en: "Software Engineer · Admin Professional · Networking & IT Support" },
    description:    {
      id: "Profesional yang berfokus pada pengembangan perangkat lunak, pengelolaan administrasi, serta dukungan infrastruktur TI. Berkomitmen menghadirkan solusi digital yang andal, mengelola data secara akurat, dan meningkatkan efisiensi operasional melalui teknologi serta proses kerja yang terstruktur.",
      en: "A professional focused on software development, administrative management, and IT infrastructure support. Committed to delivering reliable digital solutions, managing data accurately, and improving operational efficiency through technology and structured workflows."
    },
    viewProjects:   { id: "Lihat Proyek", en: "View Projects" },
    downloadCV:     { id: "Unduh CV",     en: "Download CV" },
    contactMe:      { id: "Hubungi Saya", en: "Contact Me" },
    stats: {
      totalProjects: { id: "Total Proyek",    en: "Total Projects" },
      githubRepos:   { id: "Repo GitHub",     en: "GitHub Repos" },
      technologies:  { id: "Teknologi",       en: "Technologies" },
      yearsLearning: { id: "Thn Belajar",     en: "Yrs Learning" },
    },
    card: {
      openToWork:     { id: "Siap Kerja",           en: "Open to Work" },
      location:       { id: "Bekasi, Indonesia",    en: "Bekasi, Indonesia" },
      webEngineering: { id: "Web Engineering",      en: "Web Engineering" },
      spreadsheet:    { id: "Spreadsheet",          en: "Spreadsheet" },
      dataOps:        { id: "Operasi Data",         en: "Data Operations" },
      networkingIT:   { id: "Networking & IT Support", en: "Networking & IT Support" },
      recruiterCheatSheet: { id: "Ringkasan Rekruter",  en: "Recruiter Cheat Sheet" },
      gpa:            { id: "IPK",                  en: "GPA" },
      availability:   { id: "Ketersediaan",         en: "Availability" },
      immediateStart: { id: "Langsung mulai",       en: "Immediate start" },
      topSkills:      { id: "Keahlian Utama",       en: "Top Skills" },
      location2:      { id: "Lokasi",               en: "Location" },
      location2Val:   { id: "Bekasi / Jabodetabek", en: "Bekasi / Jabodetabek" },
    }
  },

  // ─── ABOUT ────────────────────────────────────────────────
  about: {
    sectionLabel:   { id: "Profil Eksekutif",  en: "Executive Profile" },
    sectionTitle:   { id: "Tentang Saya",      en: "About Me" },
    quote: {
      id: "\u201cMengintegrasikan keahlian sistem informasi dengan akurasi administratif tingkat tinggi untuk membangun operasional digital yang nihil galat.\u201d",
      en: "\u201cIntegrating information systems expertise with high-precision administrative accuracy to build zero-error digital operations.\u201d"
    },
    bio1: {
      id: "Saya adalah lulusan <strong>Diploma Tiga (D3) Sistem Informasi</strong> dari Universitas Bina Sarana Informatika dengan IPK <strong>3.01/4.00</strong>. Saya menguasai pemrograman web (JavaScript, TypeScript, ReactJS, Python, FastAPI, PHP, MySQL) sekaligus berpengalaman dalam administrasi data produksi yang detail dan berorientasi pada ketelitian.",
      en: "I hold a <strong>Diploma Three (D3) in Information Systems</strong> from Universitas Bina Sarana Informatika with a GPA of <strong>3.01/4.00</strong>. I am proficient in web programming (JavaScript, TypeScript, ReactJS, Python, FastAPI, PHP, MySQL) while also experienced in detail-oriented production data administration."
    },
    bio2: {
      id: "Berbekal kedisiplinan kerja yang terbentuk selama bekerja di PT Yamaha Motor Electronic Indonesia, saya terbiasa melakukan verifikasi data ganda dan menyusun laporan harian dengan presisi tinggi. Saya siap berkarir sebagai Programmer, Staf Administrasi, Data Entry Specialist, maupun IT Support.",
      en: "Driven by a work ethic forged at PT Yamaha Motor Electronic Indonesia, I am accustomed to double data verification and composing daily reports with high precision. I am ready to pursue a career as a Programmer, Administrative Staff, Data Entry Specialist, or IT Support."
    },
    strengths: {
      bridgingTitle: { id: "Menjembatani Teknologi & Admin", en: "Bridging Tech & Admin" },
      bridgingDesc:  {
        id: "Mampu menulis kode program web modern sekaligus mengelola, memvalidasi, dan mengotomatisasi file data administrasi secara detail.",
        en: "Able to write modern web code while managing, validating, and automating administrative data files in detail."
      },
      errorTitle:   { id: "Pengurangan Error 10%",       en: "10% Error Reduction" },
      errorDesc:    {
        id: "Memiliki rekam jejak kedisiplinan tinggi dari PT Yamaha Motor Electronic Indonesia, menekan tingkat kesalahan input data hingga 10%.",
        en: "Proven track record from PT Yamaha Motor Electronic Indonesia, reducing data entry error rates by up to 10%."
      },
      docTitle:     { id: "Dokumentasi Terstruktur",    en: "Structured Documentation" },
      docDesc:      {
        id: "Pakar dalam merancang database relasional, membuat dashboard Excel, dan mengelola dokumen log transaksi secara rapi dan sistematis.",
        en: "Expert in designing relational databases, creating Excel dashboards, and managing transaction log documents neatly and systematically."
      },
    },
    softSkills: {
      title:     { id: "Kompetensi Profesional",   en: "Professional Competency" },
      skills:    {
        id: [
          "Teliti & Sistematis",
          "Pemecahan Masalah Analitis",
          "Performa di Bawah Tekanan",
          "Komunikasi Teknis yang Kuat",
          "Kerja Tim (Onsite/Hybrid)",
          "Tersedia Segera"
        ],
        en: [
          "Detail-Oriented & Systematic",
          "Analytical Problem Solving",
          "Under Pressure Performance",
          "Strong Technical Communication",
          "Team Collaboration (Onsite/Hybrid)",
          "Available Immediately"
        ]
      }
    },
    education: {
      title:  { id: "Latar Belakang Pendidikan:", en: "Educational Background:" },
      detail: {
        id: "<strong>Universitas Bina Sarana Informatika</strong> (2018 - 2021)<br/>Diploma Tiga (D3) Sistem Informasi — IPK 3.01<br/>Tugas Akhir: Rancang Bangun Sistem Informasi Penjualan Makanan Berbasis Web (PHP & MySQL).",
        en: "<strong>Universitas Bina Sarana Informatika</strong> (2018 - 2021)<br/>Diploma Three (D3) in Information Systems — GPA 3.01<br/>Final Project: Design and Build of a Web-Based Food Sales Information System (PHP & MySQL)."
      }
    },
    fastFacts: {
      title:         { id: "Fakta Cepat Rekrutmen", en: "Hiring Fast Facts" },
      language:      { id: "Bahasa",                en: "Language" },
      languageVal:   { id: "Indonesia (Fasih), Inggris (Menengah)", en: "Indonesian (Fluent), English (Intermediate)" },
      location:      { id: "Lokasi",                en: "Location" },
      locationVal:   { id: "Bekasi, Jawa Barat",   en: "Bekasi, West Java" },
      availability:  { id: "Ketersediaan",          en: "Availability" },
      availabilityVal: { id: "Segera (Tanpa Notice Period)", en: "Immediate (No Notice Period)" },
      workSystem:    { id: "Sistem Kerja",           en: "Work System" },
      workSystemVal: { id: "On-site / Hybrid / Remote", en: "On-site / Hybrid / Remote" },
    }
  },

  // ─── TIMELINE ─────────────────────────────────────────────
  timeline: {
    sectionLabel: { id: "Perjalanan Profesional", en: "Professional Journey" },
    sectionTitle: { id: "Pengalaman & Timeline",  en: "Experience & Timeline" },
    sectionDesc:  {
      id: "Perjalanan karir akademis dan profesional, memadukan latar belakang industri manufaktur dengan rekayasa perangkat lunak.",
      en: "Academic and professional career journey, combining a manufacturing industry background with software engineering."
    },
    filterAll:       { id: "Tampilkan Semua",   en: "Show All" },
    filterWork:      { id: "Pengalaman Kerja",  en: "Work Experience" },
    filterEducation: { id: "Pendidikan",         en: "Education" },
    badgeWork:       { id: "Pengalaman",         en: "Experience" },
    badgeEducation:  { id: "Pendidikan",         en: "Education" },
    items: {
      freelanceDev: {
        title: { id: "Full-Stack Developer (Freelance)", en: "Full-Stack Developer (Freelance)" },
        company: { id: "Proyek WarungKita & RestoFlow",  en: "WarungKita & RestoFlow projects" },
        desc: {
          id: [
            "Membangun aplikasi Smart POS (Warung-POS) berbasis React 19, FastAPI, dan SQLite dengan fungsionalitas ekspor laporan keuangan harian dan manajemen hak akses.",
            "Mengembangkan RestoFlow, sistem ordering makanan real-time dengan socket.io, Vue 3, Express, dan PostgreSQL untuk menyinkronkan data kasir dan dapur."
          ],
          en: [
            "Built a Smart POS app (Warung-POS) using React 19, FastAPI, and SQLite with daily financial report export and access management features.",
            "Developed RestoFlow, a real-time food ordering system with socket.io, Vue 3, Express, and PostgreSQL to sync cashier and kitchen data."
          ]
        }
      },
      bsiUniv: {
        title: { id: "Diploma Tiga (D3) Sistem Informasi",              en: "Diploma Three (D3) of Information Systems" },
        company: { id: "Universitas Bina Sarana Informatika",           en: "Universitas Bina Sarana Informatika" },
        desc: {
          id: [
            "IPK: 3.01 / 4.00",
            "Tugas Akhir: Rancang Bangun Sistem Informasi Penjualan Makanan Berbasis Web. Merancang skema database menggunakan MySQL dan membuat antarmuka admin menggunakan PHP."
          ],
          en: [
            "GPA: 3.01 / 4.00",
            "Final Project: Design and Build of a Web-Based Food Sales Information System. Designed database schema using MySQL and built admin interface using PHP."
          ]
        }
      },
      smkSchool: {
        title: { id: "SMK Teknik Komputer & Jaringan",                             en: "Vocational High School of Computer and Network Engineering" },
        company: { id: "SMK Ristek Jaya Jakarta",                                  en: "SMK Ristek Jaya Jakarta" },
        desc: {
          id: [
            "Rata-rata Ujian Nasional: 79.00/100",
            "Perakitan & Troubleshooting Hardware Komputer",
            "Instalasi & Konfigurasi Jaringan Komputer",
            "Dasar-dasar Jaringan TCP/IP",
            "Administrasi Windows & Linux",
            "Konfigurasi Perangkat Jaringan (Router & Switch)",
            "Pengkabelan Jaringan & Pengalamatan IP",
            "Perawatan Komputer & Troubleshooting Sistem",
            "Keamanan Jaringan Dasar"
          ],
          en: [
            "National Exam Average: 79.00/100",
            "Computer Hardware Assembly & Troubleshooting",
            "Computer Network Installation & Configuration",
            "TCP/IP Networking Fundamentals",
            "Windows & Linux Administration",
            "Network Device Configuration (Router & Switch)",
            "Network Cabling & IP Addressing",
            "Computer Maintenance & System Troubleshooting",
            "Basic Network Security"
          ]
        }
      },
      yamahaWork: {
        title: { id: "Operator Produksi",                                          en: "Operator Production" },
        company: { id: "PT Yamaha Motor Electronic Indonesia",                     en: "PT Yamaha Motor Electronic Indonesia" },
        desc: {
          id: [
            "Mendokumentasikan hasil inspeksi komponen elektrikal (OK/NG) ke laporan harian Excel.",
            "Menginput data hasil produksi harian ke dalam sistem inventaris internal Yamaha.",
            "Menerapkan prosedur verifikasi data ganda (double-check), berhasil menekan error log hingga 10%."
          ],
          en: [
            "Documented electrical component inspection results (OK/NG) into daily Excel reports.",
            "Entered daily production data into Yamaha's internal inventory system.",
            "Applied double-check data verification procedures, successfully reducing error logs by 10%."
          ]
        }
      }
    }
  },

  // ─── CONTACT ──────────────────────────────────────────────
  contact: {
    sectionLabel:    { id: "Hubungi",              en: "Get In Touch" },
    sectionTitle:    { id: "Hubungi Saya",         en: "Contact Me" },
    sectionDesc:     {
      id: "Hubungi saya untuk mendiskusikan peluang kerja, kerja sama freelance, atau menguji kecocokan kriteria HRD perusahaan Anda.",
      en: "Reach out to discuss job opportunities, freelance collaborations, or to assess fit with your company's HR criteria."
    },
    directChannels:  { id: "Jalur Langsung",      en: "Direct Channels" },
    channelsDesc:    {
      id: "Silakan hubungi saya melalui jalur resmi di bawah ini. Saya berkomitmen merespon pesan Anda secepatnya (rata-rata di bawah 2 jam).",
      en: "Please reach me through the official channels below. I am committed to responding as quickly as possible (average under 2 hours)."
    },
    officialEmail:   { id: "Email Resmi",         en: "Official Email" },
    whatsapp:        { id: "WhatsApp (Prefilled)", en: "WhatsApp (Prefilled)" },
    tip:             {
      id: "* Tips: Mengisi form di samping akan secara otomatis memformat pesan WhatsApp jika Anda ingin mengirim tembusan langsung ke nomor telepon saya.",
      en: "* Tip: Filling the form on the right will automatically format a WhatsApp message if you'd like to send a copy directly to my phone number."
    },
    form: {
      name:        { id: "Nama Anda",     en: "Your Name" },
      namePlaceholder: { id: "cth. Manajer HRD", en: "e.g. Hiring Manager" },
      email:       { id: "Email Anda",    en: "Your Email" },
      emailPlaceholder: { id: "cth. hrd@perusahaan.com", en: "e.g. hrd@company.com" },
      subject:     { id: "Subjek",        en: "Subject" },
      subjectPlaceholder: { id: "cth. Penawaran Pekerjaan Software Engineer", en: "e.g. Software Engineer / Admin Staff Job Offer" },
      message:     { id: "Pesan",         en: "Message" },
      messagePlaceholder: { id: "Tulis detail pekerjaan atau pesan Anda...", en: "Write your job details or message..." },
      submit:      { id: "Kirim Pesan",   en: "Submit Message" },
      sending:     { id: "Mengirim...",   en: "Sending..." },
    },
    success: {
      title:   { id: "Pesan Berhasil Terkirim!", en: "Message Sent Successfully!" },
      desc:    {
        id: "Pesan Anda berhasil dikirim ke email Ramy Syafitri via Resend API Gateway.",
        en: "Your message was successfully sent to Ramy Syafitri's email via Resend API Gateway."
      },
      whatsappBtn: { id: "Kirim via WhatsApp Juga", en: "Send on WhatsApp Too" },
      resetBtn:    { id: "Kirim Pesan Baru",         en: "Send New Message" },
    }
  },

  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline:    { id: "Membangun solusi andal di persimpangan teknologi & administrasi.", en: "Building reliable solutions at the intersection of technology & administration." },
    rights:     { id: "Seluruh hak cipta dilindungi.", en: "All rights reserved." },
    madeWith:   { id: "Dibuat dengan", en: "Made with" },
    by:         { id: "oleh", en: "by" },
  },

  // ─── SKILLS ───────────────────────────────────────────────
  skills: {
    sectionLabel: { id: "Kompetensi Inti", en: "Core Competencies" },
    sectionTitle: { id: "Keahlian & Expertise", en: "Skills & Expertise" },
    sectionDesc:  {
      id: "Matriks keahlian tiga bidang — rekayasa perangkat lunak modern, manajemen administrasi bisnis yang presisi, dan fondasi jaringan komputer & IT support.",
      en: "Three-domain skill matrix — modern software engineering, precise business administration management, and computer networking & IT support fundamentals."
    },
    softwareEngineering: {
      title: { id: "Software Engineering", en: "Software Engineering" },
      subtitle: { id: "Web development, arsitektur sistem, & desain database", en: "Web development, systems architecture, & database design" },
    },
    administration: {
      title: { id: "Administrasi & Operasional", en: "Administration & Operations" },
      subtitle: { id: "Entri data, sistem pengarsipan, perencanaan dashboard, & kontrol kualitas", en: "Data entry, filing systems, dashboard planning, & quality controls" },
    },
    networking: {
      title: { id: "Networking & IT Support", en: "Networking & IT Support" },
      subtitle: { id: "Jaringan komputer, infrastruktur & troubleshooting sistem", en: "Computer networks, infrastructure & system troubleshooting" },
    },
    highlights: {
      title: { id: "Sorotan Teknis", en: "Technical Highlights" },
      desc:  {
        id: "Latar belakang pendidikan D3 Sistem Informasi mempermudah saya memahami logika database di excel maupun SQL secara native.",
        en: "A D3 Information Systems educational background makes it easy for me to natively understand database logic in both Excel and SQL."
      }
    },
    devSkills: {
      htmlCss:       { desc: { id: "Struktur semantik & styling modern", en: "Semantic structure & modern styling" } },
      javascript:    { desc: { id: "ES6+, Async, Manipulasi DOM", en: "ES6+, Async, DOM Manipulation" } },
      typescript:    { desc: { id: "Keamanan tipe & antarmuka skalabel", en: "Type safety & scalable interfaces" } },
      react:         { desc: { id: "Hooks, App Router, SSR, Zustand", en: "Hooks, App Router, SSR, Zustand" } },
      tailwind:      { desc: { id: "Gaya utility-first & layout responsif", en: "Utility-first styles & responsive layouts" } },
      nodejs:        { desc: { id: "RESTful API, routing & middleware", en: "RESTful APIs, routing & middleware" } },
      python:        { desc: { id: "Server backend & validasi skema", en: "Backend servers & schema validation" } },
      mysql:         { desc: { id: "Desain query, pengindeksan & skema", en: "Query design, indexing & schemas" } },
      prisma:        { desc: { id: "Query database type-safe & migrasi", en: "Type-safe database queries & migrations" } },
      docker:        { desc: { id: "Lingkungan dev terisolasi & kontainerisasi", en: "Isolated dev environments & containerization" } },
      git:           { desc: { id: "Kontrol versi & alur kolaborasi", en: "Version control & collaboration workflows" } },
      php:           { desc: { id: "Skrip sisi server & pengembangan backend web", en: "Server-side scripting & web backend development" } },
    },
    adminSkills: {
      excel:       { desc: { id: "Pivot, VLOOKUP/XLOOKUP, formula & macro", en: "Pivot, VLOOKUP/XLOOKUP, formulas & macros" } },
      sheets:      { desc: { id: "Berbagi cloud, sinkronisasi, formula & laporan", en: "Cloud sharing, sync, formulas & reports" } },
      dataEntry:   { desc: { id: "Input kecepatan tinggi dengan nol kesalahan", en: "High-speed input with zero errors" } },
      reporting:   { desc: { id: "Visualisasi metrik & tren", en: "Visualizing metrics & trends" } },
      inventory:   { desc: { id: "Pelacakan log penyesuaian stok", en: "Tracking stock adjustment logs" } },
      filing:      { desc: { id: "Sistem indeks sistematis", en: "Systematic index system" } },
      email:       { desc: { id: "Korespondensi profesional", en: "Professional correspondence" } },
      wordPpt:     { desc: { id: "Dokumentasi & presentasi bisnis", en: "Documentation & business presentations" } },
    },
    itSkills: {
      windows:     { desc: { id: "Manajemen OS, akun pengguna & konfigurasi sistem", en: "OS management, user accounts & system config" } },
      tcpip:       { desc: { id: "Pengalamatan IP, subnetting & dasar protokol", en: "IP addressing, subnetting & protocol fundamentals" } },
      router:      { desc: { id: "Perangkat Cisco, VLAN & protokol routing", en: "Cisco devices, VLANs & routing protocols" } },
      hardware:    { desc: { id: "Mendiagnosis & menyelesaikan masalah sistem & jaringan", en: "Diagnosing & resolving system & network issues" } },
      lanWan:      { desc: { id: "Desain jaringan, pengkabelan & konfigurasi IP", en: "Network design, cabling & IP configuration" } },
      security:    { desc: { id: "Aturan firewall, kontrol akses & dasar ancaman", en: "Firewall rules, access control & threat basics" } },
    }
  },

  // ─── PROJECTS ─────────────────────────────────────────────
  projects: {
    sectionLabel: { id: "Karya Pilihan", en: "Selected Works" },
    sectionTitle: { id: "Proyek Unggulan", en: "Featured Projects" },
    sectionDesc:  {
      id: "Menampilkan karya rekayasa perangkat lunak teratas, terintegrasi langsung dengan GitHub REST API untuk sinkronisasi otomatis.",
      en: "Showcasing top software engineering works, directly integrated with the GitHub REST API for automatic synchronization."
    },
    syncConnected: { id: "GitHub Live Sync Terhubung", en: "GitHub Live Sync Connected" },
    loading:       { id: "Mengambil repositori dari GitHub API...", en: "Fetching repositories from GitHub API..." },
    errorMsg:      {
      id: "* Gagal terhubung ke API GitHub. Menampilkan data repositori lokal tersinkronisasi.",
      en: "* Failed to connect to GitHub API. Showing locally synchronized repository data."
    },
    noDesc:        {
      id: "Tidak ada deskripsi. Klik link GitHub untuk informasi selengkapnya mengenai proyek ini.",
      en: "No description available. Click the GitHub link for more information about this project."
    },
    exploreBtn:    { id: "Jelajahi Dashboard Proyek", en: "Explore Project Dashboard" },
    repositories:  { id: "Repositori", en: "Repositories" },
  },

  // ─── PROJECT EXPLORER ─────────────────────────────────────
  explorer: {
    sectionLabel:  { id: "Repositori Kode", en: "Code Repository" },
    sectionTitle:  { id: "Dashboard Penjelajah Proyek", en: "Project Explorer Dashboard" },
    sectionDesc:   {
      id: 'Telusuri seluruh repositori GitHub saya secara real-time. Klik "View Case Study" pada kartu proyek untuk melihat ringkasan teknis sistem informasi.',
      en: 'Browse all my GitHub repositories in real-time. Click "View Case Study" on a project card to view the technical information system summary.'
    },
    searchPlaceholder: { id: "Cari nama repositori atau kata kunci...", en: "Search repository name or keyword..." },
    allTech:       { id: "Semua Teknologi", en: "All Technologies" },
    sortLatest:    { id: "Update Terbaru", en: "Latest Update" },
    sortStars:     { id: "Jumlah Bintang", en: "Star Count" },
    sortAlpha:     { id: "Alfabetis", en: "Alphabetical" },
    noResults:     { id: "Tidak ada repositori yang cocok dengan kata kunci", en: "No repositories match the keyword" },
    or:            { id: "atau teknologi", en: "or technology" },
    noDesc:        { id: "Proyek rekayasa web personal untuk mendemonstrasikan algoritma dan pemrograman modular.", en: "Personal web engineering project to demonstrate algorithms and modular programming." },
    updated:       { id: "Diperbarui:", en: "Updated:" },
    caseStudyBtn:  { id: "Studi Kasus", en: "Case Study" },
    previous:      { id: "Sebelumnya", en: "Previous" },
    next:          { id: "Berikutnya", en: "Next" },
    page:          { id: "Halaman", en: "Page" },
    of:            { id: "dari", en: "of" },
    modalLabel:    { id: "Studi Kasus Auto-Generated // Sinkronisasi GitHub", en: "Auto-Generated Case Study // GitHub Sync" },
    language:      { id: "Bahasa", en: "Language" },
    stars:         { id: "Bintang", en: "Stars" },
    forks:         { id: "Fork", en: "Forks" },
    lastSync:      { id: "Sinkronisasi Terakhir", en: "Last Sync" },
    problemSection:      { id: "1. Pernyataan Masalah", en: "1. Problem Statement" },
    architectureSection: { id: "2. Arsitektur Teknis & Stack", en: "2. Technical Architecture & Stack" },
    challengesSection:   { id: "3. Tantangan & Solusi Pengembangan", en: "3. Development Challenges & Solutions" },
    solution:            { id: "Penyelesaian:", en: "Resolution:" },
    featuresSection:     { id: "4. Fitur Utama yang Diimplementasikan", en: "4. Key Features Implemented" },
    codeSection:         { id: "5. Blueprint Kode Teknis", en: "5. Technical Code Blueprint" },
    viewRepo:            { id: "Lihat Kode Repositori Lengkap", en: "View Complete Repository Code" },
    closeCase:           { id: "Tutup Studi Kasus", en: "Close Case Study" },
  },

  // ─── ANALYTICS ────────────────────────────────────────────
  analytics: {
    sectionLabel:  { id: "Wawasan Analitik", en: "Analytical Insights" },
    sectionTitle:  { id: "Dashboard Analitik GitHub", en: "GitHub Analytics Dashboard" },
    sectionDesc:   {
      id: "Menganalisis performa coding secara real-time. Menampilkan statistik repositori, grafik distribusi teknologi, dan catatan aktivitas commit.",
      en: "Analyzing coding performance in real-time. Displaying repository statistics, technology distribution charts, and commit activity logs."
    },
    publicRepos:   { id: "Repositori Publik", en: "Public Repos" },
    totalCommits:  { id: "Total Commit (YTD)", en: "Total Commits (YTD)" },
    followers:     { id: "Pengikut", en: "Followers" },
    languages:     { id: "Bahasa", en: "Languages" },
    mostUsedLang:  { id: "Bahasa Paling Digunakan", en: "Most Used Languages" },
    repoImpact:    { id: "Dampak Repositori (Keterlibatan Aktif)", en: "Repository Impact (Active Engagement)" },
    contribution:  { id: "Aktivitas Kontribusi GitHub (12 Bulan Terakhir)", en: "GitHub Contribution Activity (Last 12 Months)" },
    learnMore:     { id: "Lihat lebih lanjut di GitHub di", en: "Learn more on GitHub at" },
    less:          { id: "Sedikit", en: "Less" },
    more:          { id: "Banyak", en: "More" },
    recentActivity: { id: "Aktivitas Sinkronisasi Terkini", en: "Recent Sync Activity" },
  },

  // ─── ADMIN PORTFOLIO ──────────────────────────────────────
  adminPortfolio: {
    sectionLabel:  { id: "Administrasi & Operasi Data", en: "Administration & Data Operations" },
    sectionTitle:  { id: "Portofolio Office & Excel", en: "Office & Excel Portfolio" },
    sectionDesc:   {
      id: "Kumpulan proyek administrasi data dan automasi excel yang dibangun menggunakan formula canggih dan metode QA berkinerja tinggi.",
      en: "A collection of data administration and Excel automation projects built using advanced formulas and high-performance QA methods."
    },
    tabExcel:      { id: "Otomasi Excel", en: "Excel Automation" },
    tabData:       { id: "Operasi Data", en: "Data Operations" },
    excelStudy:    { id: "Studi Dashboard Excel", en: "Excel Dashboard Study" },
    dataStudy:     { id: "Studi Kasus Kualitas Data", en: "Data Quality Case Study" },
    impactVerified: { id: "Dampak: terverifikasi", en: "Impact: verified" },
    coreFormula:   { id: "Formula Excel Utama yang Digunakan:", en: "Core Excel Formula used:" },
    businessImpact: { id: "Dampak Metrik Bisnis:", en: "Business Metric Impact:" },
    gridPreview:   { id: "Pratinjau Grid Spreadsheet", en: "Spreadsheet Grid Preview" },
    theChallenge:  { id: "Tantangan:", en: "The Challenge:" },
    theSolution:   { id: "Solusi:", en: "The Solution:" },
    qualityImprove: { id: "Peningkatan Kualitas:", en: "Quality Improvement:" },
    sopWorkflow:   { id: "Alur Kerja SOP (Prosedur Operasi Standar)", en: "Standard Operating Procedure (SOP) Workflow" },
    excelProjects: {
      dashboard: {
        title: { id: "Dashboard Penjualan Interaktif", en: "Interactive Sales Dashboard" },
        desc:  { id: "Dashboard interaktif untuk memantau data penjualan produk makanan harian, mingguan, dan bulanan secara visual.", en: "Interactive dashboard to visually monitor daily, weekly, and monthly food product sales data." },
        impact: { id: "Meningkatkan kecepatan review data penjualan berkala dari 2 jam menjadi kurang dari 5 menit.", en: "Improved periodic sales data review speed from 2 hours to under 5 minutes." },
        features: {
          id: ["Slicer interaktif berdasarkan kategori produk", "Grafik tren dinamis", "Perhitungan otomatis profit margin"],
          en: ["Interactive slicer by product category", "Dynamic trend charts", "Automated profit margin calculation"]
        }
      },
      inventory: {
        title: { id: "Pelacak Inventaris Cerdas", en: "Smart Inventory Tracker" },
        desc:  { id: "Sistem pelacakan inventaris gudang yang mencatat stok masuk, keluar, dan memberikan peringatan otomatis (low-stock warning).", en: "Warehouse inventory tracking system that records incoming/outgoing stock and provides automatic low-stock warnings." },
        impact: { id: "Mencegah kehabisan bahan baku utama produksi dan meminimalkan keterlambatan pengiriman hingga 98%.", en: "Prevents main raw material stockouts and minimizes delivery delays by up to 98%." },
        features: {
          id: ["Pewarnaan otomatis (Conditional Formatting)", "Log mutasi stok harian", "Dashboard status restock"],
          en: ["Automatic coloring (Conditional Formatting)", "Daily stock mutation log", "Restock status dashboard"]
        }
      },
      attendance: {
        title: { id: "Database & Kehadiran Karyawan", en: "Employee Attendance & Database" },
        desc:  { id: "Database karyawan terintegrasi dengan perhitungan absensi bulanan otomatis serta kalkulator lembur karyawan.", en: "Employee database integrated with automatic monthly attendance calculations and overtime calculator." },
        impact: { id: "Mempersingkat rekapitulasi penggajian bulanan HRD dari 3 hari kerja menjadi 1 hari kerja.", en: "Reduced monthly HRD payroll recapitulation from 3 working days to 1 working day." },
        features: {
          id: ["Formula absensi otomatis", "Validasi input data NIK", "Grafik statistik kehadiran bulanan"],
          en: ["Automatic attendance formula", "NIK data input validation", "Monthly attendance statistics chart"]
        }
      },
      financial: {
        title: { id: "Laporan Keuangan Otomatis", en: "Automated Financial Report" },
        desc:  { id: "Laporan rugi laba dan arus kas otomatis bulanan yang terhubung langsung dengan sheet transaksi kasir.", en: "Monthly automated profit/loss and cash flow reports directly linked to cashier transaction sheets." },
        impact: { id: "Menghindari selisih pembukuan kas bulanan hingga 0.0% dengan validasi ganda otomatis.", en: "Eliminates monthly cash bookkeeping discrepancies down to 0.0% with automatic double validation." },
        features: {
          id: ["Pembuatan laporan otomatis", "Perbandingan rugi laba tahunan", "Chart distribusi pengeluaran"],
          en: ["Automatic report generation", "Annual profit/loss comparison", "Expense distribution chart"]
        }
      }
    },
    dataProjects: {
      yamaha: {
        title: { id: "Pembersihan Log Produksi PT Yamaha", en: "PT Yamaha Production Log Cleaning" },
        desc:  { id: "Pembersihan dan validasi data log inspeksi komponen elektronik (OK/NG) harian sebelum dilaporkan ke tim Quality Control.", en: "Cleaning and validation of daily electronic component inspection log data (OK/NG) before reporting to the Quality Control team." },
        challenge: { id: "Data mentah dari mesin produksi sering memiliki format tidak konsisten, baris kosong, dan data duplikat yang mengacaukan statistik QA.", en: "Raw data from production machines often has inconsistent formats, empty rows, and duplicate data that skews QA statistics." },
        solution:  { id: "Menggunakan Power Query & filter lanjutan untuk menghapus duplikat secara otomatis dan melakukan validasi silang (cross-reference NIK operator).", en: "Using Power Query & advanced filters to automatically remove duplicates and perform cross-reference validation (operator NIK cross-reference)." },
        impact:    { id: "Menekan error pelaporan log inspeksi harian dari rata-rata 12% menjadi 0% pasca pembersihan data.", en: "Reduced daily inspection log reporting errors from an average of 12% to 0% after data cleaning." },
        workflow:  {
          id: ["Ekstraksi CSV harian", "Filter duplikasi data", "Pencocokan silang log Quality Control"],
          en: ["Daily CSV extraction", "Duplicate data filtering", "Quality Control log cross-matching"]
        }
      },
      filing: {
        title: { id: "Pengaturan Sistem Pengarsipan & Dokumentasi", en: "Documentation & Filing System Setup" },
        desc:  { id: "Perancangan sistem indeks pengarsipan file digital perusahaan agar dokumen administrasi dapat ditemukan dalam waktu cepat.", en: "Designing a company digital file archiving index system so administrative documents can be found quickly." },
        challenge: { id: "Pencarian file manual memakan waktu 15-20 menit per dokumen karena struktur folder yang tidak seragam dan penamaan acak.", en: "Manual file searching took 15-20 minutes per document due to inconsistent folder structures and random naming." },
        solution:  { id: "Membuat standar tata nama file terstruktur (YYYYMMDD_Kategori_NamaFile) dan master sheet indeks dengan tautan dinamis.", en: "Created structured file naming standards (YYYYMMDD_Category_FileName) and a master index sheet with dynamic links." },
        impact:    { id: "Mempersingkat waktu pencarian dokumen audit dari 15 menit menjadi kurang dari 15 detik.", en: "Reduced audit document search time from 15 minutes to under 15 seconds." },
        workflow:  {
          id: ["Kodifikasi file arsip", "Indeksasi master sheet", "Tautan folder digital terpusat"],
          en: ["Archive file codification", "Master sheet indexing", "Centralized digital folder links"]
        }
      },
      validation: {
        title: { id: "Suite Validasi Kualitas Data", en: "Data Quality Validation Suite" },
        desc:  { id: "Sistem verifikasi ganda yang mencocokkan data inventaris fisik (stock opname) dengan sistem pembukuan internal.", en: "Double verification system that matches physical inventory data (stock opname) with the internal bookkeeping system." },
        challenge: { id: "Selisih stok barang fisik dan sistem sering terdeteksi lambat, mengakibatkan gangguan pada antrean produksi.", en: "Physical stock and system discrepancies were often detected late, causing disruptions to the production queue." },
        solution:  { id: "Menerapkan formula pencarian dinamis (XLOOKUP) dan conditional formatting untuk mendeteksi selisih stok secara instan.", en: "Implemented dynamic search formula (XLOOKUP) and conditional formatting to instantly detect stock discrepancies." },
        impact:    { id: "Menghilangkan selisih data stok bahan baku hingga 10% dan mempercepat proses stock opname bulanan.", en: "Eliminated raw material stock data discrepancies by up to 10% and accelerated the monthly stock opname process." },
        workflow:  {
          id: ["Stock opname lapangan", "Perbandingan XLOOKUP otomatis", "Highlight selisih otomatis"],
          en: ["Field stock opname", "Automated XLOOKUP comparison", "Automatic discrepancy highlighting"]
        }
      }
    }
  },

  // ─── TESTIMONIALS ─────────────────────────────────────────
  testimonials: {
    sectionLabel: { id: "Evaluasi Rekan Kerja", en: "Peer Evaluations" },
    sectionTitle: { id: "Rekomendasi Profesional", en: "Professional Recommendations" },
    sectionDesc: {
      id: "Rekomendasi profesional dari pembimbing akademis, supervisor manufaktur, dan klien proyek mandiri.",
      en: "Professional recommendations from academic advisors, manufacturing supervisors, and independent project clients."
    },
    verified: { id: "Referensi Terverifikasi", en: "Verified Reference" },
    items: {
      supervisor: {
        name: { id: "Supervisor Quality Control", en: "Quality Control Supervisor" },
        role: { id: "Mantan Supervisor", en: "Ex-Supervisor" },
        company: { id: "PT Yamaha Motor Electronic Indonesia", en: "PT Yamaha Motor Electronic Indonesia" },
        text: {
          id: "Ramy menunjukkan kedisiplinan dan fokus luar biasa dalam pencatatan log harian OK/NG komponen listrik. Melalui penerapan verifikasi ganda yang diusulkannya, tingkat kesalahan pengetikan log berkurang secara signifikan hingga 10%.",
          en: "Ramy demonstrated extraordinary discipline and focus in logging daily OK/NG electrical component results. Through the double verification system he proposed, typing error rates were reduced significantly by 10%."
        }
      },
      advisor: {
        name: { id: "Dosen Pembimbing Akademik", en: "Academic Advisor" },
        role: { id: "Ketua Program Studi Sistem Informasi", en: "Head of Information Systems Study Program" },
        company: { id: "Universitas Bina Sarana Informatika", en: "Universitas Bina Sarana Informatika" },
        text: {
          id: "Sebagai mahasiswa bimbingan tugas akhir, Ramy menunjukkan pemahaman basis data MySQL dan modular pemrograman PHP yang sangat baik. Rancang bangun sistem penjualan makanan yang ia selesaikan sangat rapi dan terdokumentasi lengkap.",
          en: "As a final project advisee, Ramy demonstrated excellent understanding of MySQL database design and PHP modular programming. The web-based food sales information system he completed was clean and fully documented."
        }
      },
      client: {
        name: { id: "Pemilik UMKM (WarungKita)", en: "MSME Owner (WarungKita)" },
        role: { id: "Klien Sistem Informasi POS", en: "POS Information System Client" },
        company: { id: "WarungKita SME Retail", en: "WarungKita SME Retail" },
        text: {
          id: "Aplikasi Smart POS buatan Ramy sangat membantu kami melacak stok barang masuk/keluar harian. Fitur ekspor keuangan Excel sekali klik menghemat waktu pembukuan kami setiap akhir bulan. Ramy sangat kooperatif dan cepat merespon masukan.",
          en: "Ramy's Smart POS application has been immensely helpful in tracking our daily incoming/outgoing stock. The one-click Excel financial export feature saves us bookkeeping time at the end of every month. Ramy is highly cooperative and quick to respond to feedback."
        }
      }
    }
  },

  // ─── CAREER MATCH ──────────────────────────────────────────
  careerMatch: {
    sectionLabel:      { id: "Alat Rekrutmen Pintar", en: "Smart Recruiter Tool" },
    sectionTitle:      { id: "Analisis Kecocokan Karir", en: "Career Match Score Analyzer" },
    sectionDesc:       {
      id: "Tempel deskripsi pekerjaan (Job Description) atau unggah file TXT untuk menganalisis persentase kecocokan skill Ramy secara otomatis.",
      en: "Paste job description (JD) text or upload a TXT file to automatically analyze Ramy's skill match percentage."
    },
    pasteLabel:        { id: "Tempel Teks Deskripsi Pekerjaan (JD):", en: "Paste Job Description (JD) text:" },
    placeholder:       {
      id: "Tempel persyaratan pekerjaan di sini (cth. Kami mencari Web Developer dengan keahlian React, MySQL, laporan Excel...)",
      en: "Paste the job requirements here (e.g. We are looking for a Web Developer with React, MySQL, Excel reporting...)"
    },
    uploadBtn:         { id: "Unggah JD (.txt)", en: "Upload JD (.txt)" },
    analyzing:         { id: "Menganalisis Stack...", en: "Analyzing Stack..." },
    analyzeBtn:        { id: "Analisis Skor Kecocokan", en: "Analyze Match Score" },
    matchCompatibility: { id: "Kecocokan Karir", en: "Match Compatibility" },
    basedOnScan:       { id: "Berdasarkan pemindaian kata kunci keahlian.", en: "Based on skill keywords scan." },
    matchedSkills:     { id: "Keahlian yang Cocok Ditemukan:", en: "Matched Skills Found:" },
    noneMatched:       { id: "Tidak ada kecocokan. Tempel persyaratan kerja lebih detail.", en: "None matched. Paste detailed requirements." },
    missingKeywords:   { id: "Kata Kunci Tambahan/Opsional Disebutkan:", en: "Optional/Missing Keywords Mentioned:" },
    noteRamy:          {
      id: "* Catatan: Ramy siap melatih kemampuan di atas secara intensif berbekal dasar logika pemrogramannya.",
      en: "* Note: Ramy is ready to intensively train in these areas leveraging his programming logic fundamentals."
    },
    evaluationTitle:   { id: "Evaluasi Rekrutmen & Rekomendasi:", en: "Hiring Evaluation & Recommendation:" },
    emptyTitle:        { id: "Hasil Analisis Akan Ditampilkan Di Sini", en: "Analysis Results Will Be Displayed Here" },
    emptyDesc:         {
      id: "Tempel deskripsi kerja atau persyaratan HRD di samping untuk melihat kecocokan skill set Ramy.",
      en: "Paste job description or HRD requirements on the left to see Ramy's matching skill set."
    }
  },

  // ─── RECRUITER DASHBOARD ──────────────────────────────────
  recruiter: {
    console:         { id: "Konsol Rekruter", en: "Recruiter Console" },
    close:           { id: "Tutup", en: "Close" },
    candidateProfile: { id: "Profil Kandidat", en: "Candidate Profile" },
    profileDesc:     {
      id: "Lulusan Sistem Informasi (GPA: 3.01) dengan latar belakang administrasi data produksi di PT Yamaha.",
      en: "Information Systems graduate (GPA: 3.01) with a background in production data administration at PT Yamaha."
    },
    hiringHighlights: { id: "Sorotan Rekrutmen", en: "Hiring Highlights" },
    availability:    { id: "Ketersediaan", en: "Availability" },
    immediate:       { id: "Segera", en: "Immediate" },
    gpa:             { id: "IPK", en: "GPA" },
    workOptions:     { id: "Opsi Kerja", en: "Work Options" },
    topDeliverables: { id: "Deliverables Terbaik", en: "Top Deliverables" },
    downloadCV:      { id: "Unduh CV", en: "Download CV" },
    posCase:         { id: "• Studi Kasus WarungKita POS", en: "• WarungKita POS Case Study" },
    excelCase:       { id: "• Otomasi Dashboard Excel", en: "• Excel Dashboard Automation" },
  },

  // ─── GENERAL ──────────────────────────────────────────────
  general: {
    switchToEn: { id: "Switch to English", en: "Switch to English" },
    switchToId: { id: "Ganti ke Indonesia", en: "Switch to Indonesian" },
  }
} as const;

/** Helper: pick a string by current language */
export function t(
  node: { id: string; en: string },
  lang: Language
): string {
  return node[lang];
}
