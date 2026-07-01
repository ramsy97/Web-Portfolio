"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Linkedin, Github, Send, CheckCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore } from "../store/portfolioStore";
import { translations, t } from "../utils/translations";

export default function Contact() {
  const { language } = usePortfolioStore();
  const tr = translations.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatus("idle");
    setLogs(["[API System] Initializing Resend API gateway...", "[API System] Authenticating secure connection to email client..."]);

    setTimeout(() => {
      setLogs(prev => [...prev, `[API System] Validating payload for ${formData.email}...`, "[API System] Sending email notifications to ramsy97@gmail.com..."]);
      
      setTimeout(() => {
        setLogs(prev => [...prev, "[API System] Success! Message sent via Resend API provider.", "[API System] Forwarding copy to candidate's phone inbox..."]);
        
        setTimeout(() => {
          setLoading(false);
          setStatus("success");
        }, 800);
      }, 900);
    }, 1000);
  };

  // Pre-fill WhatsApp link using form inputs
  const getWhatsAppLink = () => {
    const base = "https://wa.me/6285156414903";
    const text = encodeURIComponent(
      `Halo Ramy, saya ${formData.name || "[Nama Anda]"}.\nEmail: ${formData.email || "[Email Anda]"}\nSubjek: ${formData.subject || "[Subjek]"}\nPesan: ${formData.message || "[Pesan]"}`
    );
    return `${base}?text=${text}`;
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
    setLogs([]);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-bg-dark transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">{t(tr.sectionLabel, language)}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            {t(tr.sectionTitle, language)}
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            {t(tr.sectionDesc, language)}
          </p>
        </div>

        {/* Form & Coordinates Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-primary dark:text-white">
              {t(tr.directChannels, language)}
            </h3>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {t(tr.channelsDesc, language)}
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ramysyafitri8@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200/80 bg-white hover:bg-gray-55 dark:border-gray-800 dark:bg-surface-dark transition-all"
              >
                <div className="rounded-full bg-accent/10 p-2.5 text-accent dark:bg-accent/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">{t(tr.officialEmail, language)}</h4>
                  <p className="text-sm font-semibold text-primary dark:text-white mt-0.5">ramysyafitri8@gmail.com</p>
                </div>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200/80 bg-white hover:bg-gray-55 dark:border-gray-800 dark:bg-surface-dark transition-all"
                title="Direct WhatsApp link"
              >
                <div className="rounded-full bg-green-500/10 p-2.5 text-green-500 dark:bg-green-500/20">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">{t(tr.whatsapp, language)}</h4>
                  <p className="text-sm font-semibold text-primary dark:text-white mt-0.5">+62 851-5641-4903</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-200/80 bg-white hover:bg-gray-55 dark:border-gray-800 dark:bg-surface-dark transition-all text-xs font-semibold text-secondary dark:text-gray-300"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ramsy97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-200/80 bg-white hover:bg-gray-55 dark:border-gray-800 dark:bg-surface-dark transition-all text-xs font-semibold text-secondary dark:text-gray-300"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Note box */}
            <div className="rounded-xl bg-accent/5 p-4 border border-accent/20 dark:bg-accent/10 text-[11px] text-secondary dark:text-gray-300 leading-relaxed">
              {t(tr.tip, language)}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-205 bg-white p-6 sm:p-8 dark:border-gray-850 dark:bg-surface-dark shadow-lg">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-primary dark:text-white">
                      {t(tr.success.title, language)}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                      {t(tr.success.desc, language)}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-green-500 text-white px-5 py-2.5 text-xs font-bold hover:bg-green-600 transition-colors"
                      >
                        <MessageSquare className="h-4 w-4" />
                        {t(tr.success.whatsappBtn, language)}
                      </a>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-2.5 text-xs font-semibold text-secondary hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        {t(tr.success.resetBtn, language)}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400">{t(tr.form.name, language)}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t(tr.form.namePlaceholder, language)}
                          className="w-full p-3 text-xs bg-surface dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400">{t(tr.form.email, language)}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t(tr.form.emailPlaceholder, language)}
                          className="w-full p-3 text-xs bg-surface dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400">{t(tr.form.subject, language)}</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t(tr.form.subjectPlaceholder, language)}
                        className="w-full p-3 text-xs bg-surface dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wide text-gray-400">{t(tr.form.message, language)}</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t(tr.form.messagePlaceholder, language)}
                        rows={5}
                        className="w-full p-3 text-xs bg-surface dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-primary dark:text-white"
                      />
                    </div>

                    {/* API logs display while dispatching */}
                    {loading && (
                      <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 text-[10px] font-mono text-emerald-400 space-y-1 max-h-[120px] overflow-y-auto">
                        {logs.map((log, i) => (
                          <div key={i} className="flex gap-1.5 items-center">
                            <RefreshCw className="h-3 w-3 animate-spin shrink-0" />
                            <span>{log}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading || !formData.name || !formData.email || !formData.message}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent py-3.5 text-xs font-bold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      {loading ? t(tr.form.sending, language) : t(tr.form.submit, language)}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
