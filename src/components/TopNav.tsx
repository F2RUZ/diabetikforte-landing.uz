"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { MoveRight, Zap } from "lucide-react";

// Performance uchun komponentlarni lazy load qilish (Lighthouse uchun muhim)
const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });
const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
  ssr: false,
});

export default function TopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // SEO uchun brend nomi
  const brandName = "DIABETIK FORTE";

  return (
    <>
      <header
        className="w-full bg-[#8B0000] h-[36px] flex items-center relative z-[70] border-b border-white/10"
        role="banner"
      >
        <div className="max-w-[1100px] w-full mx-auto px-4 flex justify-between items-center">
          {/* CHAP TOMON: Aksiya va Taymer */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D32]"></span>
              </span>
              <p className="text-[10px] text-white font-black uppercase tracking-[1.5px] hidden sm:block">
                Aksiya tugashiga:
              </p>
            </div>

            <div className="scale-90 origin-left">
              <CountdownTimer />
            </div>
          </div>

          {/* O'NG TOMON: Quick Link (Accessibility uchun aria-label) */}
          <nav className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Buyurtma berish sahifasiga o'tish"
              className="group flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300"
            >
              <Zap className="w-3 h-3 text-[#2E7D32] fill-[#2E7D32]" />
              <span className="text-[10px] font-black uppercase tracking-wider border-b border-[#2E7D32]/50 group-hover:border-[#2E7D32] pb-0.5 transition-colors">
               Chegirma olish
              </span>
              <MoveRight className="w-3 h-3 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>
        </div>

        {/* SEO VA DEKOR: ORQA FONDA SEKIN HARAKATLANUVCHI MATN */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap flex items-center select-none">
          <p className="text-white text-[14px] font-black tracking-[10px] uppercase">
            {Array(10).fill(brandName).join(" ")}
          </p>
        </div>
      </header>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
