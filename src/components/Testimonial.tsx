"use client";

import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, MessageSquareHeart } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarText: string;
  rating: number;
  content: string;
  stats: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Hendra Wijaya",
    role: "Pemilik Usaha",
    company: "Toko Sembako Sumber Makmur (3 Cabang)",
    location: "Bandung, Jawa Barat",
    avatarText: "HW",
    rating: 5,
    content:
      "Dulu tiap akhir bulan pusing rekonsiliasi kasir dan selisih stok beras sama minyak. Sejak pakai CoderDM, kasir saya yang ibu-ibu umur 50 tahun pun bisa pakai lancar. Struk langsung keluar dari printer bluetooth, dan kalau internet toko mati tetap bisa layani pembeli tanpa panik.",
    stats: "Nol selisih kas kasir dalam 4 bulan",
  },
  {
    id: 2,
    name: "Ratna Kartika",
    role: "Founder & Owner",
    company: "Kopi Titik Ruang (5 Outlet)",
    location: "Sleman, D.I. Yogyakarta",
    avatarText: "RK",
    rating: 5,
    content:
      "Fitur resep bahan bakunya sangat presisi. Begitu barista bikin 1 cup espresso atau matcha, sirup dan susu di gudang langsung berkurang otomatis. Saya bisa pantau omzet 5 kafe langsung dari handphone sambil belanja kebutuhan tanpa harus telepon manajer toko tiap malam.",
    stats: "Hemat 15 jam rekap stok per minggu",
  },
  {
    id: 3,
    name: "Bambang Suryono",
    role: "Direktur Operasional",
    company: "CV Mandiri Logistik Distribusi",
    location: "Surabaya, Jawa Timur",
    avatarText: "BS",
    rating: 5,
    content:
      "Yang paling kami apresiasi adalah tim support-nya. Bukan bot otomatis, tapi orang beneran yang langsung respon di WhatsApp kalau ada staf baru yang butuh diajari. Surat jalan dan faktur tagihan pelanggan sekarang rapi tercetak otomatis sesuai standar perpajakan.",
    stats: "Proses faktur 3x lebih cepat",
  },
];

const STAR_COUNT = [1, 2, 3, 4, 5];

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-12 sm:py-16 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-4">
        {/* <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-4 dark:bg-emerald-950/60 text-primary-1 dark:text-emerald-400 text-xs font-semibold mb-3 border border-primary-2/20">
          <MessageSquareHeart className="w-3.5 h-3.5" />
          Pengalaman dari Pelanggan
        </div> */}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Dipercaya Lebih dari 20+ Pemilik Usaha
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
          Dengarkan bagaimana pelaku usaha di Indonesia merapikan operasional bisnis mereka bersama sistem CoderDM.
        </p>
      </div>

      {/* Main Testimonial Card */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="relative w-full bg-white dark:bg-neutral-900 rounded p-6 sm:p-10 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all">
          
          {/* Top Profile Header */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* Avatar Circle with Initials */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-1 text-white shadow-md flex items-center justify-center font-bold text-lg sm:text-xl shrink-0">
                {current.avatarText}
              </div>

              {/* Name & Role */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    {current.name}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-primary-2" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {current.role} &bull; <strong className="text-neutral-800 dark:text-neutral-200">{current.company}</strong>
                </p>
                <p className="text-[11px] text-neutral-500">
                  {current.location}
                </p>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mt-1.5">
                  {STAR_COUNT.slice(0, current.rating).map((starNum) => (
                    <Star
                      key={`star-${starNum}`}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Icon decorative */}
            {/* <div className="hidden sm:block text-neutral-300 dark:text-neutral-700">
              <Quote className="w-10 h-10 rotate-180 opacity-60" />
            </div> */}
          </div>

          {/* Testimonial Quote Content */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal">
              &ldquo;{current.content}&rdquo;
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold border-t border-neutral-100 dark:border-neutral-800">
              <span className="font-medium text-primary-1 dark:text-emerald-400 bg-primary-4 dark:bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-300/30">
                {current.stats}
              </span>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  type="button"
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-800 dark:text-white shadow-2xs cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-1.5 px-2">
                  {testimonials.map((item, idx) => (
                    <button
                      key={`dot-${item.id}`}
                      onClick={() => setCurrentIndex(idx)}
                      type="button"
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? "w-6 bg-primary-1 dark:bg-emerald-400"
                          : "w-2.5 bg-neutral-300 dark:bg-neutral-700"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  type="button"
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-800 dark:text-white shadow-2xs cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
