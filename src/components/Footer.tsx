"use client";

import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  const layananLinks = [
    { label: "POS (Kasir Pintar)", href: "#aplikasi" },
    { label: "Team (PWS & Absensi)", href: "#aplikasi" },
    { label: "ERP (Gudang & Pabrik)", href: "#aplikasi" },
    { label: "Konsultasi IT & Setup Toko", href: "#layanan" },
    { label: "Integrasi QRIS & EDC", href: "#layanan" },
    { label: "Dukungan Teknis Harian", href: "#bantuan" },
  ];

  const paketLinks = [
    { label: "Paket Starter (1 Toko)", href: "#harga" },
    { label: "Paket Bisnis Pro (3 Cabang)", href: "#harga" },
    { label: "Paket Enterprise (Multi-Gudang)", href: "#harga" },
    { label: "Buku Panduan & Tutorial", href: "#bantuan" },
    { label: "Pertanyaan Sering Diajukan", href: "#faq" },
  ];

  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand & Deskripsi */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-3xl font-black tracking-tight text-white hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              {/* <span className="w-8 h-8 rounded-lg bg-primary-1 text-white flex items-center justify-center text-sm font-bold">
                L
              </span> */}
              <span>CoderDM</span>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-400 mt-2 max-w-sm">
              Sistem perangkat lunak kasir POS, stok barang, dan manajemen operasional terintegrasi yang memudahkan pengusaha Indonesia mengelola bisnis dengan tenang dan terukur.
            </p>

            <div className="flex flex-col gap-2 mt-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Yogyakarta &bull; Layanan di Seluruh Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>halo@CoderDM.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+62 812-3456-7890 (WhatsApp Customer Service)</span>
              </div>
            </div>
          </div>

          {/* Kolom Layanan */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Modul Layanan
            </h3>
            <ul className="flex flex-col space-y-2.5">
              {layananLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Paket & Bantuan */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Paket &amp; Bantuan
            </h3>
            <ul className="flex flex-col space-y-2.5">
              {paketLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kontak Cepat */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Konsultasi Cepat
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Ada kendala atau ingin simulasi demo langsung untuk jenis toko Anda? Hubungi spesialis kami setiap hari.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20tim%20LoCo,%20saya%20ingin%20konsultasi%20sistem"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp Resmi</span>
              </a>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Sosial Media
              </h4>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram CoderDM"
                  className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center border border-neutral-800 transition-colors"
                >
                  {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn CoderDM"
                  className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center border border-neutral-800 transition-colors"
                >
                  {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {currentYear} CoderDM SaaS Indonesia. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-6">
            <Link href="#privasi" className="hover:text-neutral-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#ketentuan" className="hover:text-neutral-300 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
            <Link href="#bantuan" className="hover:text-neutral-300 transition-colors">
              Pusat Bantuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;