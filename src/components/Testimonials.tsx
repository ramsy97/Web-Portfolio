"use client";

import React from "react";
import { Quote, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Supervisor Quality Control",
      role: "Ex-Supervisor",
      company: "PT Yamaha Motor Electronic Indonesia",
      text: "Ramy menunjukkan kedisiplinan dan fokus luar biasa dalam pencatatan log harian OK/NG komponen listrik. Melalui penerapan verifikasi ganda yang diusulkannya, tingkat kesalahan pengetikan log berkurang secara signifikan hingga 10%.",
      avatarInitials: "YS"
    },
    {
      name: "Dosen Pembimbing Akademik",
      role: "Ketua Program Studi Sistem Informasi",
      company: "Universitas Bina Sarana Informatika",
      text: "Sebagai mahasiswa bimbingan tugas akhir, Ramy menunjukkan pemahaman basis data MySQL dan modular pemrograman PHP yang sangat baik. Rancang bangun sistem penjualan makanan yang ia selesaikan sangat rapi dan terdokumentasi lengkap.",
      avatarInitials: "DB"
    },
    {
      name: "Pemilik UMKM (WarungKita)",
      role: "Klien Sistem Informasi POS",
      company: "WarungKita SME Retail",
      text: "Aplikasi Smart POS buatan Ramy sangat membantu kami melacak stok barang masuk/keluar harian. Fitur ekspor keuangan Excel sekali klik menghemat waktu pembukuan kami setiap akhir bulan. Ramy sangat kooperatif dan cepat merespon masukan.",
      avatarInitials: "WK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-surface dark:bg-slate-900/40 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Peer Evaluations</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary dark:text-white sm:text-4xl">
            Professional Recommendations
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-500 dark:text-gray-400">
            Rekomendasi profesional dari pembimbing akademis, supervisor manufaktur, dan klien proyek mandiri.
          </p>
        </div>

        {/* Testimonials Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-md hover:shadow-xl dark:border-gray-800/80 dark:bg-surface-dark transition-all duration-300"
            >
              {/* Quotes Icon decorative */}
              <div className="flex justify-between items-center mb-6">
                <Quote className="h-8 w-8 text-accent/20 dark:text-accent/30" />
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/5 px-2.5 py-1 text-[10px] font-bold text-accent dark:bg-accent/15">
                  <Sparkles className="h-3 w-3 animate-pulse" /> Verified Reference
                </span>
              </div>

              {/* Text */}
              <p className="text-xs text-secondary dark:text-gray-300 leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-4 dark:border-gray-800" />

              {/* Profile card footer */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm dark:bg-accent/20 shrink-0">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
