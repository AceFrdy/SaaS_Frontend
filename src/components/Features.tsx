"use client"

import type React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Boxes,
  CheckCircle2,
  Users,
  Activity,
  Zap
} from "lucide-react";

interface FeatureItem {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  statsLabel: string;
  icon: React.ElementType;
}

const featureList: FeatureItem[] = [
  {
    id: 1,
    tag: "01 / KASIR CEPAT",
    title: "Smart Point of Sale (POS)",
    subtitle: "Pencatatan kasir tanpa jeda",
    description: "Transaksi kasir hanya butuh 2 ketukan. Mendukung cetak struk bluetooth, split-bill, diskon member, dan mode offline saat koneksi internet terputus.",
    stats: "0.2 Detik",
    statsLabel: "Kecepatan proses struk kasir",
    icon: TrendingUp,
  },
  {
    id: 2,
    tag: "02 / SDM & ABSENSI",
    title: "Manajemen Shift & Karyawan",
    subtitle: "Anti titip absen & payroll instan",
    description: "Absensi selfie berbasis radius GPS toko. Otomasi rekap jam kerja, lembur, serta perhitungan potongan kasbon langsung tersinkron ke slip gaji.",
    stats: "+45%",
    statsLabel: "Efisiensi waktu admin toko",
    icon: Users,
  },
  {
    id: 3,
    tag: "03 / GUDANG & INVENTARIS",
    title: "Peringatan Stok & Resep (BOM)",
    subtitle: "Cegah selisih & barang kadaluarsa",
    description: "Sistem otomatis mengurangi bahan baku setiap produk terjual. Notifikasi WhatsApp instan saat persediaan menipis untuk mencegah kehabisan stok.",
    stats: "99.8%",
    statsLabel: "Tingkat akurasi stock opname",
    icon: Boxes,
  },
  {
    id: 4,
    tag: "04 / MULTI-OUTLET",
    title: "Kendali Puluhan Cabang Terpusat",
    subtitle: "Pantau omzet dari smartphone",
    description: "Lihat perbandingan performa tiap cabang secara real-time. Transfer stok antar-cabang terpantau rapi dengan surat jalan digital terverifikasi.",
    stats: "100+",
    statsLabel: "Cabang terkelola dalam 1 akun",
    icon: Activity,
  },
  {
    id: 5,
    tag: "05 / INTEGRASI PEMBAYARAN",
    title: "QRIS & Rekonsiliasi Bank Otomatis",
    subtitle: "Semua dompet digital & bank",
    description: "Terima pembayaran QRIS BCA, Mandiri, GoPay, OVO, ShopeePay tanpa mesin EDC mahal. Uang masuk tercatat otomatis di pembukuan kas.",
    stats: "0 Menit",
    statsLabel: "Waktu rekonsiliasi kas harian",
    icon: Cpu,
  },
  {
    id: 6,
    tag: "06 / KEAMANAN & BACKUP",
    title: "Proteksi Data & Backup Harian",
    subtitle: "Data bisnis aman & tidak akan hilang",
    description: "Seluruh data terenkripsi standar perbankan dengan pencadangan otomatis ke server cloud terpisah setiap pergantian shift kerja.",
    stats: "99.98%",
    statsLabel: "Garansi uptime server cloud",
    icon: ShieldCheck,
  },
];

export function Features() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next (kanan→kiri), -1 = prev (kiri→kanan)

  // Group into pairs of 2 features per slide for desktop view
  const pairs: FeatureItem[][] = [];
  for (let i = 0; i < featureList.length; i += 2) {
    pairs.push(featureList.slice(i, i + 2));
  }

  const totalSlides = pairs.length;

  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleDot = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  const currentPair = pairs[activeSlide] || pairs[0];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
      transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
    }),
  };

  return (
    <section className="w-full py-12 sm:py-16 flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Fitur Komprehensif yang Praktis Dijalankan
        </h2>

        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
          Dirancang khusus agar staf kasir dapat langsung menggunakan sistem dalam 15 menit tanpa perlu pelatihan teknis yang rumit.
        </p>
      </div>

      {/* Feature Cards Grid (2 Kolom) */}
      <div className="w-full max-w-5xl mx-auto mt-10 sm:mt-14 px-4 overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {currentPair.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col rounded bg-white dark:bg-neutral-900 p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 hover:border-primary-2/40 group justify-between"
                >
                  <div>
                    {/* Tag & Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary-4 dark:bg-emerald-950/70 text-primary-1 dark:text-emerald-400 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary-2 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/80 px-3 py-1 rounded-full border border-teal-200/40">
                        {item.tag}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-primary-2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Metric Bar */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-primary-1 dark:text-emerald-400">
                        {item.stats}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                        {item.statsLabel}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-xl">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Teruji &amp; Stabil</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous features slide"
          className="p-3 rounded-full text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Indikator Dots */}
        <div className="flex items-center gap-2">
          {pairs.map((pair, index) => {
            const isActive = index === activeSlide;
            const slideKey = pair.map((p) => p.id).join("-");
            return (
              <button
                key={`slide-${slideKey}`}
                type="button"
                onClick={() => handleDot(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-8 h-3 bg-primary-1 dark:bg-emerald-500 rounded-full"
                    : "w-3 h-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next features slide"
          className="p-3 rounded-full text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default Features;
