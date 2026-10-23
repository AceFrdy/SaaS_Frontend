import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Application from "../components/Application";
import Footer from "../components/Footer";
import Features from "@/components/Features";
import How_It_Works from "@/components/How_It_Works";
import Bantuan from "@/components/Bantuan";
import Testimonial from "@/components/Testimonial";
import Price from "@/components/Price";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center relative overflow-hidden">
        {/* Background SVG Hero - Full Width Mentok Kiri-Kanan (Dark Theme #0B1120) */}
        <div className="absolute -top-40 left-0 w-full overflow-hidden leading-none pointer-events-none -z-10">
          {/* Subtle ambient light glow bernuansa emerald/teal seperti di Service */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[300px] bg-emerald-500/15 blur-[120px] rounded-full" />
          {/* <svg
            className="w-full h-[360px] sm:h-[440px] md:h-[500px] text-[#0B1120]"
            viewBox="0 0 1440 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 0 H1440 V260 C1100 480 340 480 0 260 Z"
              fill="currentColor"
            />
          </svg> */}
          <svg
            className="w-full h-[360px] sm:h-[440px] md:h-[500px] text-[#0B1120]"
            viewBox="0 0 1440 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect width="1440" height="420" fill="currentColor" />
          </svg>
        </div>
        {/* Konten Bagian Atas (Hero, Aplikasi, Fitur) */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center pt-10 pb-8 px-4 sm:px-8 gap-16 md:gap-24">
          <section id="hero" className="w-full flex justify-center z-20">
            <Hero />
          </section>
          <section id="aplikasi" className="w-full">
            <Application />
          </section>
          <section id="fitur" className="w-full">
            <Features />
          </section>
        </div>

        {/* How It Works Full Width (Edge-to-Edge seperti CTA) */}
        <section id="cara-kerja" className="w-full">
          <How_It_Works />
        </section>

        {/* Konten Bagian Bawah (Bantuan, Layanan, Testimoni, Harga, FAQ) */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center py-12 md:py-20 px-4 sm:px-8 gap-16 md:gap-24">
          <section id="bantuan" className="w-full">
            <Bantuan />
          </section>
        </div>
        <section id="layanan" className="w-full">
          <Service />
        </section>
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center py-12 md:py-20 px-4 sm:px-8 gap-16 md:gap-24">
          <section id="testimoni" className="w-full">
            <Testimonial />
          </section>
          <section id="harga" className="w-full">
            <Price />
          </section>
          <section id="faq" className="w-full">
            <FAQ />
          </section>
        </div>

        {/* CTA Section Full Width (Lebar Penuh Layar / Edge-to-Edge) */}
        <section id="coba-sekarang" className="w-full">
          <CTA />
        </section>
      </main >

      {/* Footer Full Width (Lebar Penuh Layar) */}
      < Footer />
    </div >
  );
}
