"use client";

import { useState } from "react";
import CardPrice from "./base/CardPrice";
import { Switch } from "./ui/switch";
import { BadgePercent } from "lucide-react";
import { PlanItem } from "@/types";

const pricingPlans: PlanItem[] = [
  {
    title: "STARTER",
    monthlyPrice: 149000,
    yearlyPrice: 119000,
    features: [
      "1 Cabang Toko / Outlet",
      "Kasir POS & Mode Offline Siaga",
      "Cetak Struk Bluetooth & QRIS",
      "Kelola s/d 500 Item Produk",
      "Rekap Penjualan Harian via WA",
      "Dukungan WhatsApp Standard",
    ],
    buttonText: "Mulai Paket Starter",
    description: "Ideal untuk toko kelontong, kios, & usaha pemula",
  },
  {
    title: "BISNIS PRO",
    monthlyPrice: 299000,
    yearlyPrice: 239000,
    features: [
      "Hingga 3 Cabang Toko Terkoneksi",
      "Multi-Kasir & Manajemen Shift Karyawan",
      "Absensi Karyawan Selfie GPS",
      "Resep Produk & Pengurangan Bahan Baku",
      "Peringatan Stok Menipis Otomatis",
      "Laporan Laba-Rugi & Arus Kas Lengkap",
      "Dukungan WhatsApp Prioritas 7 Hari",
    ],
    buttonText: "Coba Gratis 14 Hari",
    description: "Pilihan terbaik untuk kafe, resto, & retail berkembang",
  },
  {
    title: "ENTERPRISE",
    monthlyPrice: 699000,
    yearlyPrice: 559000,
    features: [
      "Cabang & Gudang Tanpa Batas",
      "Modul Manufaktur & Alur Produksi Pabrik",
      "Surat Jalan & Transfer Antar-Gudang",
      "Integrasi API & Marketplace",
      "Hak Akses Berjenjang (Owner/SPV/Kasir)",
      "Pencadangan Data Per Jam",
      "Dedicated Account Manager Khusus",
    ],
    buttonText: "Hubungi Sales Enterprise",
    description: "Untuk distributor, pabrik, & jaringan waralaba",
  },
];

export function Price() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("BISNIS PRO");

  return (
    <section className="w-full py-12 sm:py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary-4 dark:bg-emerald-950/60 text-primary-1 dark:text-emerald-400 text-xs font-semibold border border-primary-2/20">
            <BadgePercent className="w-3.5 h-3.5" />
            Investasi Terjangkau &amp; Transparan
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Pilihan Paket yang Fleksibel Tanpa Biaya Tersembunyi
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
            Semua paket sudah termasuk pendampingan teknisi dan pembaruan sistem berkala tanpa biaya tambahan.
          </p>

          {/* Billing Cycle Switch */}
          <div className="mt-4 flex items-center justify-center gap-3 bg-neutral-100 dark:bg-neutral-800/80 p-1.5 rounded-full border border-neutral-200 dark:border-neutral-700">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full cursor-pointer transition-all ${
                !isYearly
                  ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
            >
              Bulanan
            </button>

            <Switch
              checked={isYearly}
              onCheckedChange={(checked) => setIsYearly(checked)}
              aria-label="Toggle Tagihan Bulanan atau Tahunan"
            />

            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full cursor-pointer transition-all flex items-center gap-1.5 ${
                isYearly
                  ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
            >
              <span>Tahunan</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl mt-4">
          {pricingPlans.map((plan) => (
            <CardPrice
              key={plan.title}
              title={plan.title}
              price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              period="/bulan"
              billedText={isYearly ? "Ditagih Tahunan (Hemat 2 Bulan)" : "Ditagih Setiap Bulan"}
              features={plan.features}
              buttonText={plan.buttonText}
              description={plan.description}
              isPopular={plan.isPopular}
              isSelected={selectedPlan === plan.title}
              onSelect={() => setSelectedPlan(plan.title)}
              onSubscribe={() => setSelectedPlan(plan.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Price;
