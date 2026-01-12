"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Activity } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Tarkib", href: "#composition" },
    { name: "Qo'llash usuli", href: "#usage" },
    { name: "Natijalar", href: "#gym" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Sotib olish", href: "#test" },
  ];

  return (
    <section className="w-full bg-white pt-6 pb-12">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* 2. FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-red-50 pt-16">
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* DIABETIK FORTE LOGO */}
            <div className="flex items-center text-[32px] md:text-[38px] font-[1000] italic tracking-tighter leading-none select-none uppercase">
              <span className="text-[#1A1A1A]">DIABETIK</span>
         
              <span className="text-[#8B0000]">FORTE</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A1A1A] text-white px-7 py-3.5 rounded-full text-[9px] md:text-[10px] font-[1000] uppercase tracking-widest shadow-xl shadow-red-900/10 hover:bg-[#8B0000] transition-all active:scale-95"
              >
                BUYURTMA BERISH
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 rounded-full text-[9px] md:text-[10px] font-[1000] uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95"
              >
                MUTAXASSIS BILAN BOG'LANISH
              </button>
            </div>
          </div>

          {/* Menyu linklari - Ixcham shrift */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-5 text-center lg:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A1A1A] text-[10px] md:text-[11px] font-black uppercase tracking-wider hover:text-[#8B0000] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV PASTKI CHIZIQ - FAQAT BREND RANGIDA */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mt-12 opacity-10" />
    </section>
  );
}
