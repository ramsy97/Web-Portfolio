"use client";

import React from "react";
import { 
  Code2, TableProperties, Cpu, Sparkles, Database, Terminal, Server, ClipboardCheck,
  Package, Mail, Presentation, ShieldCheck, GitBranch, LayoutDashboard, Folders,
  FileSpreadsheet, Network, Globe, Wrench, Shield, Monitor
} from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "../store/portfolioStore";
import { translations, t } from "../utils/translations";

function TechLogo({ src, fallback: Fallback, alt }: { src: string; fallback: React.ComponentType<{ className?: string }>; alt: string }) {
  const [hasError, setHasError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => { if (imgRef.current?.complete) setLoaded(true); }, [src]);
  return (
    <div className="relative h-5 w-5 flex items-center justify-center shrink-0">
      {!loaded && !hasError && <Fallback className="h-5 w-5 absolute animate-pulse opacity-50 text-current" />}
      {hasError ? <Fallback className="h-5 w-5 text-current" /> : (
        <img ref={imgRef} src={src} alt={alt}
          className={`h-5 w-5 object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)} onError={() => setHasError(true)} />
      )}
    </div>
  );
}

export default function Skills() {
  const { language } = usePortfolioStore();
  const tr = translations.skills;

  const devSkills = [
    { name: "HTML & CSS",         icon: Code2,           logo: "/skills/html5.svg",       desc: t(tr.devSkills.htmlCss.desc, language) },
    { name: "JavaScript",         icon: Terminal,        logo: "/skills/javascript.svg",  desc: t(tr.devSkills.javascript.desc, language) },
    { name: "TypeScript",         icon: ShieldCheck,     logo: "/skills/typescript.svg",  desc: t(tr.devSkills.typescript.desc, language) },
    { name: "React & Next.js",    icon: Cpu,             logo: "/skills/react.svg",       desc: t(tr.devSkills.react.desc, language) },
    { name: "Tailwind CSS",       icon: Sparkles,        logo: "/skills/tailwindcss.svg", desc: t(tr.devSkills.tailwind.desc, language) },
    { name: "Node.js & Express",  icon: Server,          logo: "/skills/nodejs.svg",      desc: t(tr.devSkills.nodejs.desc, language) },
    { name: "Python & FastAPI",   icon: Terminal,        logo: "/skills/python.svg",      desc: t(tr.devSkills.python.desc, language) },
    { name: "MySQL & PostgreSQL", icon: Database,        logo: "/skills/mysql.svg",       desc: t(tr.devSkills.mysql.desc, language) },
    { name: "Prisma & ORMs",      icon: Database,        logo: "/skills/prisma.svg",      desc: t(tr.devSkills.prisma.desc, language) },
    { name: "Docker & Containers",icon: Package,         logo: "/skills/docker.svg",      desc: t(tr.devSkills.docker.desc, language) },
    { name: "Git & GitHub",       icon: GitBranch,       logo: "/skills/git.svg",         desc: t(tr.devSkills.git.desc, language) },
    { name: "PHP",                icon: Terminal,        logo: "/skills/php.svg",         desc: t(tr.devSkills.php.desc, language) },
  ];

  const adminSkills = [
    { name: "Microsoft Excel",         icon: FileSpreadsheet, logo: "/skills/excel.svg",        desc: t(tr.adminSkills.excel.desc, language) },
    { name: "Google Sheets",           icon: TableProperties, logo: "/skills/googlesheets.svg", desc: t(tr.adminSkills.sheets.desc, language) },
    { name: "Data Entry & Validation", icon: ClipboardCheck,  logo: "/skills/access.svg",       desc: t(tr.adminSkills.dataEntry.desc, language) },
    { name: "Reporting & Dashboards",  icon: LayoutDashboard, logo: "/skills/powerbi.svg",      desc: t(tr.adminSkills.reporting.desc, language) },
    { name: "Inventory Management",    icon: Package,         logo: "/skills/sap.svg",          desc: t(tr.adminSkills.inventory.desc, language) },
    { name: "Filing & Documentation",  icon: Folders,         logo: "/skills/googledrive.svg",  desc: t(tr.adminSkills.filing.desc, language) },
    { name: "Email Management",        icon: Mail,            logo: "/skills/outlook.svg",      desc: t(tr.adminSkills.email.desc, language) },
    { name: "Word & PowerPoint",       icon: Presentation,    logo: "/skills/word.svg",         desc: t(tr.adminSkills.wordPpt.desc, language) },
  ];

  const itSkills = [
    { name: "Windows & Linux Administration",    icon: Monitor, logo: "/skills/windows-linux.svg", desc: t(tr.itSkills.windows.desc, language) },
    { name: "TCP/IP Networking",                 icon: Globe,   logo: "/skills/tcpip.svg",          desc: t(tr.itSkills.tcpip.desc, language) },
    { name: "Router & Switch Configuration",     icon: Network, logo: "/skills/cisco.svg",          desc: t(tr.itSkills.router.desc, language) },
    { name: "Hardware & Software Troubleshooting",icon: Wrench, logo: "/skills/wireshark.svg",      desc: t(tr.itSkills.hardware.desc, language) },
    { name: "LAN/WAN Setup",                     icon: Network, logo: "/skills/ubiquiti.svg",       desc: t(tr.itSkills.lanWan.desc, language) },
    { name: "Basic Network Security",            icon: Shield,  logo: "/skills/security.svg",       desc: t(tr.itSkills.security.desc, language) },
  ];

  const skillCard = (skill: { name: string; icon: any; logo: string; desc: string }, idx: number, hoverColor: string) => (
    <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="group relative overflow-hidden rounded-xl border border-gray-150/80 bg-white p-4 shadow-sm hover:shadow-md dark:border-gray-800/80 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-3">
        <div className="group-hover:scale-110 transition-transform flex items-center justify-center shrink-0">
          <TechLogo src={skill.logo} fallback={skill.icon} alt={skill.name} />
        </div>
        <div>
          <h4 className={`text-sm font-bold text-primary dark:text-white ${hoverColor} transition-colors`}>{skill.name}</h4>
          <p className="mt-1 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">{skill.desc}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-bg-dark transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t(tr.sectionLabel, language)}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            {t(tr.sectionTitle, language)}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-500 dark:text-gray-400">{t(tr.sectionDesc, language)}</p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Software Engineering */}
          <div className="rounded-2xl border border-gray-100 bg-surface/50 p-6 sm:p-8 dark:border-gray-800/80 dark:bg-surface-dark/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-xl overflow-hidden shadow-md shrink-0 border border-gray-200/80 dark:border-gray-800/60 bg-slate-950 p-1 flex items-center justify-center">
                <img src="/software-engineering-logo.png" alt="Software Engineering Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white">{t(tr.softwareEngineering.title, language)}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t(tr.softwareEngineering.subtitle, language)}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devSkills.map((s, i) => skillCard(s, i, "group-hover:text-accent"))}
            </div>
          </div>

          {/* Administration */}
          <div className="rounded-2xl border border-gray-100 bg-surface/50 p-6 sm:p-8 dark:border-gray-800/80 dark:bg-surface-dark/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-xl overflow-hidden shadow-md shrink-0 border border-gray-200/80 dark:border-gray-800/60 bg-slate-950 p-1 flex items-center justify-center">
                <img src="/admin-operations-logo.png" alt="Administration & Operations Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white">{t(tr.administration.title, language)}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t(tr.administration.subtitle, language)}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {adminSkills.map((s, i) => skillCard(s, i, "group-hover:text-emerald-500"))}
            </div>
          </div>

          {/* Networking */}
          <div className="rounded-2xl border border-gray-100 bg-surface/50 p-6 sm:p-8 dark:border-gray-800/80 dark:bg-surface-dark/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-xl overflow-hidden shadow-md shrink-0 border border-gray-200/80 dark:border-gray-800/60 bg-slate-950 p-1 flex items-center justify-center">
                <img src="/networking-it-logo.png" alt="Networking & IT Support Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white">{t(tr.networking.title, language)}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t(tr.networking.subtitle, language)}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {itSkills.map((s, i) => skillCard(s, i, "group-hover:text-cyan-500"))}
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-12 rounded-2xl border border-gray-200/60 p-6 dark:border-gray-800/80 bg-white dark:bg-bg-dark flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-amber-500/10 p-2 dark:bg-amber-500/20">
              <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary dark:text-white">{t(tr.highlights.title, language)}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t(tr.highlights.desc, language)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
