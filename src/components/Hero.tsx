"use client"

import { useRef } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Store, 
  TrendingUp, 
  Users, 
  PackageCheck,
  ShieldCheck,
  Play
} from "lucide-react";
import { Button } from "./ui/button";
import { Marquee } from "./ui/marquee";
import { motion, useScroll, useTransform } from "motion/react";

const businessTypes = [
  "Minimarket & Retail",
  "Restoran & Kafe",
  "Bengkel & Otomotif",
  "Apotek & Klinik",
  "Distributor & Grosir",
  "Fashion & Butik",
  "Pabrik & Manufaktur",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center pt-4 sm:pt-8 pb-4">
      {/* Headline & Subheadline with Parallax on Scroll */}
      <motion.div
        style={{ y: yText, opacity }}
        className="max-w-4xl text-center px-4 space-y-4"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
        >
          Kelola Penjualan, Stok, <br/> {" "}
          <span className="text-emerald-400 underline decoration-primary-3/60 decoration-wavy decoration-2 underline-offset-8">
            Praktis &amp; Akurat
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Gantikan pencatatan manual yang rawan selisih. Pantau kasir multi-cabang, inventaris gudang, hingga laporan laba-rugi otomatis dari ponsel atau komputer Anda.
        </motion.p>
      </motion.div>

      {/* Tombol CTA yang Jelas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 sm:mt-10"
      >
        <a href="#harga">
          <Button 
            size="lg" 
            className="bg-primary-3 hover:bg-orange-600 text-white font-bold text-base px-8 py-6 rounded shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Mulai Uji Coba Gratis</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
      </motion.div>

      {/* Key Benefits Ringkas */}
      {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-primary-2" />
          Tanpa Biaya Instalasi Awal
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-primary-2" />
          Didampingi Sampai Staf Mahir
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-primary-2" />
          Data Aman &amp; Bisa Mode Offline
        </span>
      </div> */}

      {/* Interactive Floating Dashboard Showcase (Spatial & Weightless Vibe) */}
      {/* <div className="w-full max-w-5xl mt-12 sm:mt-16 px-2 sm:px-4">
        <div className="relative rounded-3xl bg-linear-to-b from-white/90 to-neutral-50/80 dark:from-neutral-900/90 dark:to-neutral-950/90 border border-neutral-200/90 dark:border-neutral-800 p-4 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md"> */}
          
          {/* Header Bar Mockup */}
          {/* <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-1 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                CoderDM
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <span>Dashboard Bisnis — Outlet Utama</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-xs text-neutral-500">Sinkronisasi Real-Time Aktif</div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <Store className="w-3.5 h-3.5 text-primary-2" />
              <span>3 Cabang Terkoneksi</span>
            </div>
          </div> */}

          {/* Grid Metrik Utama */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5"> */}
            {/* Card 1: Omzet */}
            {/* <div className="bg-white dark:bg-neutral-800/80 rounded-2xl p-4 border border-neutral-200/70 dark:border-neutral-700/60 shadow-xs">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>Total Penjualan Hari Ini</span>
                <span className="p-1 rounded-md bg-emerald-100 dark:bg-emerald-950/70 text-primary-2">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1">
                Rp 14.850.000
              </div>
              <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1.5 flex items-center gap-1">
                <span>+18.4%</span>
                <span className="text-neutral-500 font-normal">dibanding kemarin</span>
              </div>
            </div> */}

            {/* Card 2: Transaksi Kasir */}
            {/* <div className="bg-white dark:bg-neutral-800/80 rounded-2xl p-4 border border-neutral-200/70 dark:border-neutral-700/60 shadow-xs">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>Transaksi Selesai</span>
                <span className="p-1 rounded-md bg-teal-100 dark:bg-teal-950/70 text-primary-2">
                  <Store className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1">
                184 Struk
              </div>
              <div className="text-xs text-neutral-500 mt-1.5">
                Rata-rata: <span className="font-semibold text-neutral-800 dark:text-neutral-200">Rp 80.700</span>/transaksi
              </div>
            </div> */}

            {/* Card 3: Stok Aman */}
            {/* <div className="bg-white dark:bg-neutral-800/80 rounded-2xl p-4 border border-neutral-200/70 dark:border-neutral-700/60 shadow-xs">
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>Peringatan Stok Menipis</span>
                <span className="p-1 rounded-md bg-orange-100 dark:bg-orange-950/70 text-primary-3">
                  <PackageCheck className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-primary-3 mt-1">
                2 Produk
              </div>
              <div className="text-xs text-neutral-500 mt-1.5">
                Kopi Susu 1L &amp; Sirup Vanilla (Segera Restock)
              </div>
            </div> */}
          {/* </div> */}

          {/* Quick Kasir Preview Line */}
          {/* <div className="mt-4 pt-4 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-2" />
              <span>Kasir Aktif: <strong>Siti (Shift Pagi)</strong> &bull; Mode Offline Siaga</span>
            </div>
            <div className="font-mono text-[11px] bg-primary-4 dark:bg-emerald-950/60 text-primary-1 dark:text-emerald-300 px-2.5 py-1 rounded-lg font-semibold">
              Terhubung ke Printer Bluetooth &bull; QRIS Siap
            </div>
          </div>
        </div>
      </div> */}

      {/* Marquee Mitra / Tipe Usaha */}
      <div className="w-full max-w-5xl mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
          Cocok untuk Berbagai Skala &amp; Bidang Usaha di Indonesia
        </p>
        <Marquee pauseOnHover className="py-2">
          {businessTypes.map((type) => (
            <div
              key={type}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 shadow-2xs whitespace-nowrap"
            >
              <CheckCircle2 className="w-4 h-4 text-primary-2 shrink-0" />
              <span>{type}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
