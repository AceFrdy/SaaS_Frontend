"use client"

import { useState } from "react";
import { 
  CheckCircle2, 
  ChevronRight,
  ClipboardList,
  UploadCloud,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Headphones,
  CalendarCheck
} from "lucide-react";
import { Step } from "@/types";
import { useCurtain } from "@/hooks/useCurtain";
import { ScrollReveal } from "@/components/motion";

const steps: Step[] = [
  {
    id: 1,
    title: "Konsultasi Alur Toko",
    badge: "Tahap 01",
    headline: "Pemetaan Kebutuhan & Alur Kasir",
    desc: "Diskusi singkat 30 menit (online atau tatap muka) untuk memetakan alur transaksi, jenis printer, dan kebutuhan cabang Anda.",
    icon: ClipboardList,
    deliverables: [
      "Rekomendasi paket modul yang efisien",
      "Format template master data produk/menu",
      "Jadwal target go-live yang terukur"
    ],
    // duration: "Hari ke-1",
  },
  {
    id: 2,
    title: "Input Data Produk & Stok",
    badge: "Tahap 02",
    headline: "Import Data Produk & Setting Harga",
    desc: "Tim kami membantu memindahkan daftar produk, barcode, kategori, dan stok awal dari file Excel atau pembukuan lama Anda.",
    icon: UploadCloud,
    deliverables: [
      "Input massal via Excel dibantu tim CoderDM",
      "Pengaturan harga grosir/member & promo",
      "Koneksi QRIS & rekening penampung"
    ],
    // duration: "Hari ke-2 s/d 3",
  },
  {
    id: 3,
    title: "Pelatihan Staf & Kasir",
    badge: "Tahap 03",
    headline: "Training Praktik Langsung Sampai Mahir",
    desc: "Simulasi transaksi kasir, split bill, cetak struk, dan cara tutup buku harian langsung ke staf kasir dan supervisor toko.",
    icon: GraduationCap,
    deliverables: [
      "Buku panduan saku bergambar & video tutorial",
      "Simulasi transaksi offline dan retur barang",
      "Uji coba printer thermal & scanner barcode"
    ],
    // duration: "Hari ke-4",
  },
  {
    id: 4,
    title: "Go-Live & Pendampingan 24/7",
    badge: "Tahap 04",
    headline: "Peluncuran Resmi & Support Siaga",
    desc: "Sistem aktif melayani pelanggan Anda. Tim teknis siaga mendampingi di hari pertama operasional via hotline WhatsApp prioritas.",
    icon: Rocket,
    deliverables: [
      "Grup koordinasi WhatsApp dedicated dengan teknisi",
      "Monitoring data transaksi real-time",
      "Garansi backup harian otomatis"
    ],
    // duration: "Hari ke-5 & Seterusnya",
  },
];

export function How_It_Works() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const { current: currentStep, transition, containerClass, curtainStyle } = useCurtain(
    steps.find((s) => s.id === 1) || steps[0],
    { direction: "vertical", closeDuration: 180, openDuration: 280 }
  );

  const StepIcon = currentStep.icon;

  function handleStepClick(step: Step) {
    if (step.id === activeStep) return;
    setActiveStep(step.id);
    transition(step);
  }

  return (
    <div className="w-full bg-linear-to-b from-neutral-900 to-neutral-950 text-white py-16 sm:py-24 px-4 sm:px-8 transition-all">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header How It Works */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            4 Langkah Mudah Memulai Bersama CoderDM
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Anda tidak perlu pusing setting teknis sendirian. Tim kami mendampingi setiap tahap dari input data sampai staf kasir Anda lancar bertransaksi.
          </p>
        </ScrollReveal>

        {/* Main Grid: Steps List on Left, Deliverable Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Step List */}
          <ScrollReveal variant="fade-right" duration={0.65} className="lg:col-span-5 flex flex-col space-y-3 justify-center">
            {steps.map((step) => {
              const isActive = step.id === activeStep;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step)}
                  type="button"
                  className={`group flex items-center justify-between w-full text-left p-4 rounded transition-all cursor-pointer border ${
                    isActive
                      ? "bg-white/15 dark:bg-white/10 border-emerald-500/50 shadow-lg translate-x-1"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                        isActive
                          ? "bg-primary-2 text-white shadow-xs"
                          : "bg-white/10 text-neutral-300 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                        {step.badge} &bull; 
                      </span>
                      <span
                        className={`text-sm sm:text-base font-bold ${
                          isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive
                        ? "text-emerald-400 translate-x-1"
                        : "text-neutral-500 group-hover:text-neutral-300"
                    }`}
                  />
                </button>
              );
            })}
          </ScrollReveal>

          {/* Right Column: Practical Showcase Card */}
          <ScrollReveal variant="fade-left" duration={0.65} className="lg:col-span-7 flex flex-col">
            <div className={`w-full h-full flex flex-col bg-neutral-800/90 rounded p-6 sm:p-8 shadow-xl justify-between ${containerClass}`}>
              {/* Curtain overlay */}
              <div style={curtainStyle} />
              <div>
                {/* Badge & Timing */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-primary-1 text-emerald-200">
                    {currentStep.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-primary-2 text-white">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentStep.headline}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mt-3">
                  {currentStep.desc}
                </p>

                {/* Deliverables / Yang Anda Terima */}
                <div className="mt-6 bg-neutral-900/80 rounded p-5 border border-neutral-700/80 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Hasil Nyata yang Anda Dapatkan:
                  </div>
                  {currentStep.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Guarantee Note */}
              <div className="mt-6 pt-4 border-t border-neutral-700 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Garansi Pendampingan Sampai Tuntas
                </span>
                <span className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-emerald-400" />
                  Hotline WhatsApp 08.00 - 22.00 WIB
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default How_It_Works;
