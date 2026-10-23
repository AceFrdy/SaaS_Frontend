"use client";

import { 
  ShoppingCart, 
  Users, 
  Layers, 
  Receipt, 
  Warehouse, 
  Network
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GridPattern } from "@/components/ui/grid-pattern";

// Row 1: 2 kartu berdampingan (col-span-1 masing-masing)
// Row 2: 1 kartu full-width (col-span-2)
// Row 3: Kiri = kartu tinggi (row-span-2), Kanan = 2 kartu kecil bertumpuk (row-span-1 masing-masing)
const services = [
  {
    Icon: ShoppingCart,
    name: "Point of Sales (POS)",
    description: "Sistem kasir multi-outlet dengan pencatatan instan, sinkronisasi stok otomatis, serta integrasi pembayaran QRIS & kartu tanpa jeda waktu.",
    href: "#layanan", 
    cta: "Pelajari Lebih Lanjut",
    // Row 1 – kiri
    className: "col-span-2 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          className="[mask-image:radial-gradient(350px_circle_at_top_right,white,transparent)] opacity-40 dark:opacity-20"
        />
        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-teal-500/10 blur-3xl" />
        <ShoppingCart className="absolute -right-6 -bottom-6 h-40 w-40 text-neutral-500/10 dark:text-neutral-100/5 stroke-[1]" />
      </div>
    ),
  },
  {
    Icon: Users,
    name: "HRIS & Kelola Karyawan",
    description: "Absensi digital berbasis GPS, kalkulasi payroll & PPh 21 otomatis, pengajuan cuti, serta pantauan KPI performa karyawan.",
    href: "#layanan",
    cta: "Pelajari Lebih Lanjut",
    // Row 1 – kanan
    className: "col-span-2 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          className="[mask-image:radial-gradient(300px_circle_at_top_right,white,transparent)] opacity-40 dark:opacity-20"
        />
        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
        <Users className="absolute -right-6 -bottom-6 h-40 w-40 text-neutral-500/10 dark:text-neutral-100/5 stroke-[1]" />
      </div>
    ),
  },
  {
    Icon: Layers,
    name: "Enterprise Resource Planning (ERP)",
    description: "Ekosistem menyeluruh yang menggabungkan inventaris bahan baku, lini produksi pabrik, rantai pasokan, hingga laporan keuangan konsolidasi dalam satu dasbor terpadu.",
    href: "#layanan",
    cta: "Lihat Ekosistem ERP",
    // Row 2 – full width
    className: "col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          className="[mask-image:radial-gradient(600px_circle_at_top_right,white,transparent)] opacity-40 dark:opacity-20"
        />
        <div className="absolute -top-10 -right-10 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
        <Layers className="absolute -right-6 -bottom-6 h-56 w-56 text-neutral-500/10 dark:text-neutral-100/5 stroke-[1]" />
      </div>
    ),
  },
  {
    Icon: Receipt,
    name: "Manajemen Keuangan & Faktur",
    description: "Pembuatan faktur digital instan, rekonsiliasi mutasi rekening bank harian, buku kas besar, dan neraca laba-rugi otomatis standar PSAK.",
    href: "#layanan",
    cta: "Pelajari Lebih Lanjut",
    // Row 3 – kiri, kartu tinggi (row-span-2)
    className: "col-span-2 lg:col-span-1 lg:row-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          className="[mask-image:radial-gradient(300px_circle_at_top_right,white,transparent)] opacity-40 dark:opacity-20"
        />
        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
        <Receipt className="absolute -right-6 -bottom-6 h-40 w-40 text-neutral-500/10 dark:text-neutral-100/5 stroke-[1]" />
      </div>
    ),
  },
  {
    Icon: Warehouse,
    name: "Warehouse & Inventory",
    description: "Pelacakan keluar-masuk barang, scan barcode/QR, peringatan batas minimum stok, dan transfer antar-gudang secara akurat.",
    href: "#layanan",
    cta: "Pelajari Lebih Lanjut",
    // Row 3 – kanan atas (kartu kecil)
    className: "col-span-2 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          className="[mask-image:radial-gradient(350px_circle_at_top_right,white,transparent)] opacity-40 dark:opacity-20"
        />
        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-amber-500/10 blur-3xl" />
        <Warehouse className="absolute -right-6 -bottom-6 h-40 w-40 text-neutral-500/10 dark:text-neutral-100/5 stroke-[1]" />
      </div>
    ),
  },
  {
    Icon: Network,
    name: "Sistem Integrasi & API",
    description: "Konektivitas webhook instan ke marketplace, payment gateway, dan sinkronisasi data antar puluhan cabang dengan performa tinggi.",
    href: "#layanan",
    cta: "Pelajari Lebih Lanjut",
    // Row 3 – kanan bawah (kartu kecil)
    className: "col-span-2 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          className="[mask-image:radial-gradient(300px_circle_at_top_right,white,transparent)] opacity-40 dark:opacity-20"
        />
        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl" />
        <Network className="absolute -right-6 -bottom-6 h-40 w-40 text-neutral-500/10 dark:text-neutral-100/5 stroke-[1]" />
      </div>
    ),
  },
];

export function Service() {
  return (
    <section className="w-full flex flex-col items-center dark">
      {/* SVG ARCH TOP CURVE (Match Dark Palette #0B1120) */}
      <div className="w-full overflow-hidden leading-none -mb-1 select-none pointer-events-none">
        {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block h-12 sm:h-16 md:h-24 text-[#0B1120]"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,120 Q 720,0 1440,120 L 1440,120 L 0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* CONTAINER UTAMA DENGAN BACKGROUND DARK SESUAI PALETTE */}
      <div className="w-full bg-[#0B1120] text-slate-100 px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-16 sm:pb-24  border-b border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle ambient light glow bernuansa emerald/teal */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-0" /> */}

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          {/* HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            {/* <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/30 shadow-xs">
              Fleksibel Sesuai Model Usaha Anda
            </span> */}
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Cakupan Fitur yang Menjawab Masalah Harian Anda
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
              Semua modul dapat diaktifkan sesuai kebutuhan bertahap tanpa harus membayar fitur yang tidak Anda gunakan.
            </p>
          </div>

          {/* MAGIC UI BENTO GRID */}
          <BentoGrid className="w-full grid-cols-2 auto-rows-[280px]">
            {services.map((service) => (
              <BentoCard key={service.name} {...service} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

export default Service;
