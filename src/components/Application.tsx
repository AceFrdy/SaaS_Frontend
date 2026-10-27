"use client"

import type React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Store,
  Receipt,
  Briefcase,
  CheckSquare,
  Factory,
  Boxes,
  TrendingUp,
  Clock,
  Layers,
  Sparkles
} from "lucide-react";
import { AppCard } from "@/types";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

const apps: AppCard[] = [
  {
    id: "pos",
    name: "POS",
    subtitle: "Point of Sale & Kasir Pintar",
    tagline: "Pencatatan kasir instan, terima QRIS & kartu, cetak struk bluetooth, serta sinkronisasi stok multi-cabang.",
    // badge: "Retail & F&B",
    icon: Store,
    preview: (
      <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary-4 dark:bg-emerald-950 flex items-center justify-center text-primary-1 dark:text-emerald-400">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-900 dark:text-white block">Kasir POS Aktif</span>
              <span className="text-[10px] text-neutral-500">Cabang Sudirman</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-primary-4 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-300/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Online
          </span>
        </div>

        {/* Mini Receipt / Metric visual */}
        <div className="bg-neutral-50 dark:bg-neutral-800/80 rounded p-4 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
          <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">Total Transaksi Hari Ini</div>
          <div className="text-xl font-extrabold text-neutral-900 dark:text-white mt-1">
            Rp 18.450.000
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+24.5% vs minggu lalu</span>
          </div>
        </div>

        {/* Quick action bar */}
        <div className="flex items-center justify-between text-[11px] font-medium text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
          <span>Struk Bluetooth</span>
          <span>&bull;</span>
          <span>QRIS Statis/Dinamis</span>
          <span>&bull;</span>
          <span>Multi-Kasir</span>
        </div>
      </div>
    ),
  },
  {
    id: "kasir",
    name: "KASIR",
    subtitle: "Manajemen Tim & Tugas Operasional",
    tagline: "Pantau absensi GPS karyawan, delegasi pekerjaan harian toko, dan otomasi perhitungan slip gaji.",
    // badge: "SDM & Tugas",
    icon: Briefcase,
    preview: (
      <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-primary-2 dark:text-teal-400">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-900 dark:text-white block">Jadwal &amp; Shift</span>
              <span className="text-[10px] text-neutral-500">8 Staf Hadir</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-2.5 py-0.5 rounded-full border border-teal-300/40">
            <Clock className="w-3 h-3" />
            Shift 1
          </span>
        </div>

        {/* Mini Kanban tasks */}
        <div className="space-y-2">
          <div className="bg-neutral-50 dark:bg-neutral-800/80 rounded p-2.5 border border-neutral-200/80 dark:border-neutral-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Stock Opname Pagi
              </span>
            </div>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-md">
              Selesai
            </span>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800/80 rounded p-2.5 border border-neutral-200/80 dark:border-neutral-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                Verifikasi Kas Masuk
              </span>
            </div>
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 dark:bg-amber-950 dark:text-amber-300 px-2 py-0.5 rounded-md">
              Proses
            </span>
          </div>
        </div>

        {/* Quick action bar */}
        <div className="flex items-center justify-between text-[11px] font-medium text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
          <span>Absensi Selfie GPS</span>
          <span>&bull;</span>
          <span>Payroll Otomatis</span>
          <span>&bull;</span>
          <span>Izin &amp; Cuti</span>
        </div>
      </div>
    ),
  },
  {
    id: "manufacture",
    name: "ERP",
    subtitle: "Rantai Pasok, Stok & Manufaktur",
    tagline: "Kalkulasi HPP produk otomatis, peringatan minimum stok bahan baku, dan laporan laba-rugi terstandarisasi.",
    // badge: "Gudang & Pabrik",
    icon: Factory,
    preview: (
      <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center text-primary-3 dark:text-orange-400">
              <Boxes className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-900 dark:text-white block">Gudang Utama</span>
              <span className="text-[10px] text-neutral-500">240 SKU Terdaftar</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-800 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/80 px-2.5 py-0.5 rounded-full border border-orange-300/40">
            <Layers className="w-3 h-3" />
            Auto-PO
          </span>
        </div>

        {/* Mini Manufacturing pipeline */}
        <div className="bg-neutral-50 dark:bg-neutral-800/80 rounded p-4 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
          <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
            <span>Kapasitas Stok Aman</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">92%</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2.5 rounded mt-2 overflow-hidden">
            <div className="bg-primary-1 dark:bg-emerald-500 h-full rounded w-[92%]" />
          </div>
          <div className="flex items-center justify-between mt-2.5 text-[11px] text-neutral-600 dark:text-neutral-400 font-medium">
            <span>Bahan Baku: Cukup</span>
            <span className="font-bold text-primary-1 dark:text-emerald-400">HPP Terkunci</span>
          </div>
        </div>

        {/* Quick action bar */}
        <div className="flex items-center justify-between text-[11px] font-medium text-neutral-600 dark:text-neutral-400 pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
          <span>Resep &amp; Bahan (BOM)</span>
          <span>&bull;</span>
          <span>Transfer Cabang</span>
          <span>&bull;</span>
          <span>Laporan HPP</span>
        </div>
      </div>
    ),
  },
];

export function Application() {
  return (
    <section className="w-full py-12 sm:py-16 flex flex-col items-center">
      {/* Header Section dengan ScrollReveal */}
      <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Aplikasi Siap Pakai untuk Setiap Kebutuhan Bisnis
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Gunakan sesuai kebutuhan unit usaha Anda saat ini. Semua data tersinkronisasi otomatis sehingga Anda tidak perlu input ganda antar aplikasi.
        </p>
      </ScrollReveal>

      {/* 3 Kotak Aplikasi dengan Stagger Animation */}
      <div className="w-full max-w-6xl mx-auto mt-10 sm:mt-14 px-4">
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {apps.map((app) => (
            <StaggerItem key={app.id} variant="fade-up" distance={30} className="flex flex-col group h-full">
              {/* Preview Container — Clean, Opaque, Weightless Card */}
              <div className="w-full aspect-square max-w-[360px] md:max-w-none mx-auto bg-white dark:bg-neutral-900 p-2 sm:p-4 flex flex-col justify-center items-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-neutral-200 dark:border-neutral-800 transition-all duration-300 group-hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-full bg-white dark:bg-neutral-900 overflow-hidden flex flex-col">
                  {app.preview}
                </div>
              </div>

              {/* Deskripsi & Judul Jelas di Bawah Kartu */}
              <div className="mt-5 px-2 text-center md:text-left flex-1 flex flex-col">
                <div className="flex items-center justify-center md:justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-primary-2 transition-colors">
                    {app.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-primary-2 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/80 px-2.5 py-0.5 rounded-full border border-teal-200/40">
                    {/* {app.badge} */}
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-1">
                  {app.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                  {app.tagline}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Link Navigasi Cepat */}
        <ScrollReveal variant="fade-up" delay={0.2} className="w-full flex justify-end mt-8 sm:mt-10 pr-2">
          <Link
            href="#layanan"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-2 hover:text-primary-1 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
          >
            <span>Lihat perbandingan modul layanan</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default Application;
