"use client"

import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollReveal } from "@/components/motion";

export default function CTA() {
  return (
    <div className="w-full bg-linear-to-br from-primary-1 via-emerald-800 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background dynamic ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] bg-emerald-400/15 blur-[120px] rounded-full pointer-events-none" />

      <ScrollReveal variant="scale-up" duration={0.7} className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-6 relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Siap Merapikan Operasional &amp; Membesarkan Bisnis Anda?
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
          <a href="#harga">
            <Button
              size="lg"
              className="bg-primary-3 hover:bg-orange-600 text-white font-bold rounded px-8 py-6 text-base cursor-pointer shadow-lg hover:shadow-xl transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
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
      </ScrollReveal>
    </div>
  );
}
