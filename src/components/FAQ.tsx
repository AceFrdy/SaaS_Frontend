"use client"

import { 
  Accordion, 
  AccordionItem, 
  AccordionContent, 
  AccordionTrigger 
} from "./ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

const faqData = [
  {
    id: "offline-mode",
    question: "Apakah aplikasi kasir CoderDM tetap bisa dipakai saat internet mati / offline?",
    answer:
      "Bisa 100%. CoderDM dilengkapi teknologi offline-first. Transaksi kasir, cetak struk bluetooth, dan kalkulasi pembayaran tunai tetap berjalan normal meski toko sedang mati lampu atau hilang sinyal. Begitu internet tersambung kembali, data langsung tersinkron ke cloud tanpa ada transaksi yang terlewat.",
  },
  {
    id: "hardware-support",
    question: "Perangkat apa saja yang bisa digunakan untuk menjalankan CoderDM?",
    answer:
      "Anda bisa memakai smartphone Android, iPhone, tablet, maupun laptop/komputer yang sudah Anda miliki tanpa harus membeli mesin kasir mahal. CoderDM juga kompatibel dengan printer thermal (ukuran 58mm & 80mm), laci kasir (cash drawer), serta barcode scanner USB/Bluetooth.",
  },
  {
    id: "setup-training",
    question: "Bagaimana jika kasir atau admin saya masih awam / gaptek?",
    answer:
      "Antarmuka CoderDM dirancang sangat ramah pengguna dengan tombol jelas dan bahasa Indonesia sehari-hari. Tim kami juga memberikan sesi bimbingan langsung (bisa online maupun visit) serta buku panduan bergambar sampai seluruh karyawan Anda benar-benar mahir bertransaksi.",
  },
  {
    id: "data-security",
    question: "Apakah data transaksi dan omzet bisnis saya terjamin keamanannya?",
    answer:
      "Sangat terjamin. Seluruh data dienkripsi dengan standar keamanan tinggi dan disimpan pada server terpisah dengan backup otomatis harian. Anda memiliki kontrol penuh atas hak akses (kasir hanya bisa input penjualan, sedangkan rekap omzet & laba-rugi hanya bisa dilihat pemilik toko).",
  },
  {
    id: "hidden-fees",
    question: "Apakah ada biaya pemasangan awal atau potongan komisi per transaksi?",
    answer:
      "Tidak ada biaya tersembunyi. Anda hanya membayar biaya langganan paket sesuai periode yang dipilih. Tidak ada potongan komisi sepeser pun dari penjualan tunai Anda.",
  },
];

export function FAQ() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 sm:py-16 px-4">
      {/* Header FAQ */}
      <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Jawaban Pertanyaan Anda Seputar CoderDM
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
          Punya pertanyaan sebelum memulai? Temukan jawaban praktis seputar instalasi, perangkat, dan keamanan sistem.
        </p>
      </ScrollReveal>

      {/* Accordion List with Stagger */}
      <StaggerContainer staggerDelay={0.08} className="w-full">
        <Accordion defaultValue={["offline-mode"]} className="w-full">
          {faqData.map((item) => (
            <StaggerItem key={item.id} variant="fade-up" distance={16}>
              <AccordionItem value={item.id} className="border-b border-neutral-100 dark:border-neutral-800 py-2">
                <AccordionTrigger className="cursor-pointer text-left font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 hover:text-primary-2 transition-colors py-3">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pb-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </StaggerItem>
          ))}
        </Accordion>
      </StaggerContainer>

      {/* Callout Bantuan Tambahan */}
      <ScrollReveal variant="fade-up" delay={0.2} className="mt-8 text-center text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex flex-wrap items-center justify-center gap-2">
        <span>Masih ada pertanyaan lain yang belum terjawab?</span>
        <a 
          href="https://wa.me/6281234567890?text=Halo%20tim%20LoCo,%20saya%20mau%20tanya%20seputar%20sistem"
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-bold text-primary-2 hover:text-primary-1 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors underline decoration-2 underline-offset-4"
        >
          <MessageCircle className="w-4 h-4" />
          Hubungi Customer Support Kami
        </a>
      </ScrollReveal>
    </div>
  );
}

export default FAQ;
