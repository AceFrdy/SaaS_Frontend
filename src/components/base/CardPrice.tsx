"use client";

import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
import { CardPriceProps } from "@/types";

function CardPrice({
  title = "STARTER",
  price = "Rp 149.000",
  period = "/bulan",
  billedText = "Ditagih Bulanan",
  features = [],
  buttonText = "Pilih Paket",
  description = "Cocok untuk toko atau rintisan usaha pertama Anda",
  isPopular = false,
  isSelected = false,
  onSelect,
  onSubscribe,
}: CardPriceProps) {
  const handleCardClick = () => {
    if (onSelect) {
      onSelect();
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect();
    }
    if (onSubscribe) {
      onSubscribe();
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      className={`relative w-full flex flex-col justify-between items-center text-center p-6 sm:p-8 rounded bg-white dark:bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer select-none ${
        isSelected || isPopular
          ? "border-2 border-primary-2 shadow-xl scale-[1.02] -translate-y-1"
          : "border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md"
      }`}
    >

      <div className="w-full flex flex-col items-center">
        {/* Plan Title */}
        <h3 className="w-full text-center text-base font-extrabold tracking-wide text-neutral-900 dark:text-white uppercase">
          {title}
        </h3>

        <p className="w-full text-xs text-neutral-500 dark:text-neutral-400 text-center font-medium mt-1">
          {description}
        </p>

        {/* Price & Period */}
        <div className="w-full mt-4 flex items-baseline justify-center gap-1">
          <span className="text-2xl sm:text-3xl md:text-3xl font-black text-neutral-900 dark:text-white">
            {typeof price === "number" ? `Rp ${price.toLocaleString("id-ID")}` : price}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            {period}
          </span>
        </div>

        {/* Billing Info */}
        <p className="w-full mt-1 text-center text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          {billedText}
        </p>

        {/* Features List dengan Checkmark Jelas */}
        <ul className="w-full list-none p-0 m-0 mt-6 mb-4 flex flex-col gap-3 text-left text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 leading-snug">
              <CheckCircle2 className="w-4 h-4 text-primary-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="w-full pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col items-center gap-2">
        <Button
          type="button"
          onClick={handleButtonClick}
          className={`w-full font-bold text-sm sm:text-base rounded py-5 cursor-pointer shadow-sm transition-all ${
            isSelected || isPopular
              ? "bg-primary-1 hover:bg-emerald-800 text-white"
              : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white"
          }`}
        >
          {buttonText}
        </Button>
        <span className="text-[11px] text-neutral-500">Garansi 14 Hari Uang Kembali</span>
      </div>
    </Card>
  );
}

export default CardPrice;
