"use client";
import React from "react";

const Warning = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full border-t-[1px] border-red-900/10 py-3 md:py-4 bg-white/95 backdrop-blur-lg z-[100] shadow-[0_-10px_30px_rgba(139,0,0,0.08)]">
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-center gap-3 md:gap-4">
        {/* Dekorativ chiziqchalar (Diabetik Forte uslubida) */}
        <div className="hidden sm:block h-[1.5px] w-6 md:w-12 bg-gradient-to-r from-transparent to-[#8B0000]/40" />

        <p className="text-[#1A1A1A] font-[1000] text-[10px] md:text-[13px] lg:text-[15px] tracking-[1px] md:tracking-[2.5px] uppercase italic text-center leading-none">
          BFQ. DORI VOSITASI{" "}
          <span className="text-[#8B0000]">HISOBLANMAYDI.</span>
        </p>

        <div className="hidden sm:block h-[1.5px] w-6 md:w-12 bg-gradient-to-l from-transparent to-[#8B0000]/40" />
      </div>
    </div>
  );
};

export default Warning;
