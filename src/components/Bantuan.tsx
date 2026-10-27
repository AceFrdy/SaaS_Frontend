"use client"

import { Button } from "./ui/button";
import { 
  Headphones, 
  Users, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  HeartHandshake
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

export default function Bantuan() {
  return (
    <div className="w-full py-12 sm:py-16 flex flex-col items-center">
      {/* Section Header */}
      <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Didampingi Langsung, Tidak Perlu Khawatir Gaptek
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Kami memahami transisi dari buku tulis atau aplikasi lama butuh penyesuaian. Tim spesialis kami hadir mendampingi Anda sampai seluruh staf terbiasa.
        </p>
      </ScrollReveal>

      {/* 2-Column Showcase */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
        {/* Left Column: Visual Container / Illustration Box */}
        <ScrollReveal variant="fade-right" duration={0.65} className="lg:col-span-6 w-full">
          <div className="w-full bg-white dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)] min-h-[340px]">
            {/* Top Badge inside Visual */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary-4 dark:bg-emerald-950 text-primary-1 dark:text-emerald-400">
                <Headphones className="w-3.5 h-3.5" />
                Dukungan Prioritas Resmi
              </span>
            </div>

            {/* Middle Feature Highlights */}
            <div className="my-6 space-y-3.5">
              <div className="bg-neutral-50 dark:bg-neutral-800/70 rounded p-4 border border-neutral-200/80 dark:border-neutral-700/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-1 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">
                    1-on-1 Tim Pendamping Khusus
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    1 nomor WhatsApp khusus toko Anda langsung terhubung ke teknisi, bukan bot template.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-800/70 rounded p-4 border border-neutral-200/80 dark:border-neutral-700/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-2 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">
                    Respon Cepat Saat Toko Ramai
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    Kendala struk atau kasir saat jam sibuk diprioritaskan selesai dalam hitungan menit.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Garansi Pendampingan Sampai Lancar
              </span>
              <span className="font-bold text-primary-1 dark:text-emerald-400">Termasuk di Semua Paket</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Explanatory Content & Action Button */}
        <ScrollReveal variant="fade-left" duration={0.65} className="lg:col-span-6 flex flex-col justify-center space-y-5">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Pelatihan Fleksibel: Online Maupun Datang ke Lokasi
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Staf kasir baru atau pergantian pegawai sering kali memakan waktu. Dengan CoderDM, Anda cukup hubungi tim kami untuk sesi panduan ulang secara gratis.
            </p>
          </div>

          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-2 shrink-0" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                Sesi training tatap muka (area tertentu) atau Zoom/Google Meet
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-2 shrink-0" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                Buku panduan saku bergambar &amp; video tutorial singkat per modul
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-2 shrink-0" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                Pemeriksaan berkala agar tidak ada selisih stok atau kas kasir
              </span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20tim%20LoCo,%20saya%20ingin%20konsultasi%20software%20untuk%20usaha%20saya"
              target="_blank" 
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary-1 hover:bg-emerald-800 text-white rounded px-7 py-6 text-sm sm:text-base font-bold shadow-md transition-all cursor-pointer inline-flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <span className="text-xs text-neutral-500 font-medium">
              Gratis &bull; Tanpa Syarat Komitmen
            </span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
