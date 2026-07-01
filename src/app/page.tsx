"use client";

import React, { useEffect } from "react";
import { usePortfolioStore } from "../store/portfolioStore";
import Navbar from "../components/Navbar";
import RecruiterDashboard from "../components/RecruiterDashboard";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProjectExplorer from "../components/ProjectExplorer";
import AdminPortfolio from "../components/AdminPortfolio";
import Timeline from "../components/Timeline";
import Analytics from "../components/Analytics";
import Testimonials from "../components/Testimonials";

import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const { fetchData, theme, setTheme } = usePortfolioStore();

  useEffect(() => {
    // Fetch GitHub data on load
    fetchData();
    
    // Set theme according to store state
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [fetchData, theme]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-bg-dark text-primary dark:text-gray-200 transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar />

      {/* Recruiter Console (Expands at top when toggled) */}
      <RecruiterDashboard />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner & Core Stats */}
        <Hero />

        {/* Executive Profile Section */}
        <About />

        {/* Dual Competency Skills Matrix */}
        <Skills />

        {/* Top GitHub Repositories Showcase */}
        <Projects />

        {/* Dynamic Project Search & Details Dashboard */}
        <ProjectExplorer />

        {/* Excel & Data QA Case Studies */}
        <AdminPortfolio />

        {/* Experience & Education Journey */}
        <Timeline />

        {/* Live Recharts Analytics Panel */}
        <Analytics />

        {/* Verification References */}
        <Testimonials />



        {/* Multi-channel Contact Box */}
        <Contact />
      </main>

      {/* Dynamic Date Footer */}
      <Footer />
    </div>
  );
}
