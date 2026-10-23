"use client";

import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="w-full bg-linear-to-br from-primary-1 via-emerald-800 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs sm:text-sm font-semibold border border-white/15">
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          Uji Coba 14 Hari Penuh &bull; Tanpa Kartu Kredit
        </div> */}

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Siap Merapikan Operasional &amp; Membesarkan Bisnis Anda?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl leading-relaxed">
          Tinggalkan cara manual yang melelahkan. Dapatkan laporan penjualan, stok aman, dan kasir cepat dalam satu genggaman hari ini.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
          <a href="#harga">
            <Button
              size="lg"
              className="bg-primary-3 hover:bg-orange-600 text-white font-bold rounded px-8 py-6 text-base cursor-pointer shadow-lg hover:shadow-xl transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>Mulai Uji Coba Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/80 pt-4">
          <span>&bull; Setup dibantu tim ahli</span>
          <span>&bull; Support ramah setiap hari</span>
          <span>&bull; Bisa berhenti kapan saja</span>
        </div>
      </div>
    </div>
  );
}
