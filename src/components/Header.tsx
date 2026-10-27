"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScroll } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MenuSection } from "@/types";

const aplikasiSections: MenuSection[] = [
  {
    title: "Operasional Toko & Tim",
    items: [
      { title: "POS (Kasir Pintar)", href: "#aplikasi"},
      { title: "PWS (Personal Web Server)", href: "#aplikasi" },
    ],
  },
  {
    title: "Gudang & Manufaktur",
    items: [
      { title: "ERP", href: "#aplikasi" },
    ],
  },
  {
    title: "Infrasruktur dan System",
    items: [
      { title: "POS (Kasir Pintar)", href: "#aplikasi"},
      { title: "PWS (Personal Web Server)", href: "#aplikasi" },
    ],
  },
];

const layananSections: MenuSection[] = [
  {
    title: "Layanan Bisnis",
    items: [
      { title: "Konsultasi IT", href: "#layanan", desc: "Solusi arsitektur sistem digital" },
      { title: "Integrasi Sistem", href: "#layanan", desc: "Sinkronisasi antar platform & API" },
    ],
  },
  {
    title: "Dukungan",
    items: [
      { title: "Pemeliharaan 24/7", href: "#layanan", desc: "Monitoring & dukungan teknis berkala" },
    ],
  },
];

function MenuColumnList({
  sections,
  onItemClick,
}: {
  sections: MenuSection[];
  onItemClick?: () => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.title}>
          <div className="font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">
            {section.title}
          </div>
          <ul className="flex flex-col space-y-1">
            {section.items.map((item) => (
              <li key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  onClick={onItemClick}
                  className="p-2 rounded-lg font-medium text-sm text-foreground hover:bg-muted transition-colors flex flex-col gap-0.5"
                >
                  <span className="font-medium text-foreground">{item.title}</span>
                  {item.desc && (
                    <span className="text-xs text-muted-foreground font-normal">
                      {item.desc}
                    </span>
                  )}
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-xl shadow-xs"
          : "border-b border-border/30 bg-background/60 backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          "w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
        )}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground hover:opacity-85 transition-opacity"
        >
          CoderDM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavigationMenu
            align="center"
            popupClassName="bg-popover text-popover-foreground border border-border shadow-xl rounded-2xl p-4 min-w-[320px]"
          >
            <NavigationMenuList className="flex items-center gap-1">
              {/* Dropdown 1: Aplikasi */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary text-sm font-medium rounded-xl px-3 py-2 cursor-pointer transition-colors">
                  Aplikasi
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-[480px]">
                  <div className="grid grid-cols-2 gap-6">
                    <MenuColumnList sections={aplikasiSections} />
                    <div className="rounded-xl bg-muted/50 p-4 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                          Unggulan
                        </div>
                        <h4 className="font-semibold text-sm mt-1 text-foreground">
                          All-in-One Cloud Suite
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Solusi lengkap untuk automasi proses bisnis dari hulu ke hilir.
                        </p>
                      </div>
                      <Link
                        href="#aplikasi"
                        className="text-xs font-semibold text-primary hover:underline mt-4 inline-block"
                      >
                        Pelajari selengkapnya &rarr;
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Dropdown 2: Layanan */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary text-sm font-medium rounded-xl px-3 py-2 cursor-pointer transition-colors">
                  Layanan
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-[420px]">
                  <div className="grid grid-cols-2 gap-4">
                    <MenuColumnList sections={layananSections} />
                    <MenuColumnList sections={layananSections} />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Link 3: Harga */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#harga"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "cursor-pointer hover:text-primary text-foreground text-sm font-medium rounded-xl px-3 py-2"
                  )}
                >
                  Harga
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Link 4: Bantuan */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#bantuan"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "cursor-pointer hover:text-primary text-foreground text-sm font-medium rounded-xl px-3 py-2"
                  )}
                >
                  Bantuan
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button: Coba Sekarang */}
          <Link href="#harga" className="shrink-0">
            <Button
              className="bg-primary-1 text-white hover:bg-emerald-800 font-bold text-sm rounded px-5 py-2.5 h-auto cursor-pointer shadow-sm transition-all"
            >
              Coba Gratis
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link href="#harga" className="shrink-0 mr-1">
            <Button size="sm" className="bg-primary-1 text-white rounded-lg text-xs px-3 py-1.5 h-auto font-bold">
              Coba
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-foreground hover:bg-muted transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <Link
              href="#aplikasi"
              onClick={closeMobileMenu}
              className="font-medium text-base text-foreground hover:text-primary transition-colors py-1"
            >
              Aplikasi
            </Link>
            <Link
              href="#layanan"
              onClick={closeMobileMenu}
              className="font-medium text-base text-foreground hover:text-primary transition-colors py-1"
            >
              Layanan
            </Link>
            <Link
              href="#harga"
              onClick={closeMobileMenu}
              className="font-medium text-base text-foreground hover:text-primary transition-colors py-1"
            >
              Harga
            </Link>
            <Link
              href="#bantuan"
              onClick={closeMobileMenu}
              className="font-medium text-base text-foreground hover:text-primary transition-colors py-1"
            >
              Bantuan
            </Link>
          </div>
          <div className="pt-2 border-t border-border/40">
            <Link href="#coba-sekarang" onClick={closeMobileMenu} className="block w-full">
              <Button className="w-full rounded py-3 text-sm font-semibold">
                Coba Sekarang
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
