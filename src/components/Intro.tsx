"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Activity } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white mt-[55px] md:mt-[65px]">
      {/* Orqa fondagi qizil gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/40 to-transparent opacity-60 z-0" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center min-h-[420px] md:min-h-[520px] py-6 md:py-10">
          {/* --- CHAP TOMON: MATNLAR --- */}
          <div className="w-full md:w-[58%] flex flex-col items-start text-left">
            <div className="relative mb-3 md:mb-5">
              <div className="flex items-center h-full leading-none select-none uppercase">
                <span className="text-2xl md:text-[38px] font-[1000] italic tracking-tighter text-[#1A1A1A] leading-none">
                  DIABETIK
                </span>
           
                <span className="text-2xl md:text-[38px] font-[1000] italic tracking-tighter text-[#8B0000] leading-none">
                  FORTE
                </span>
              </div>

              <div className="mt-3 md:mt-4 space-y-1">
                <p className="text-[#8B0000] text-[9px] md:text-[11px] font-black uppercase tracking-[3px] mb-2">
                  BIOLOGIK FAOL QO'SHIMCHA
                </p>
                <h2 className="text-[24px] md:text-[36px] font-extrabold leading-[1.1] text-[#1A1A1A] tracking-tight">
                  Uglevod almashinuvini <br />
                  tabiiy tartibga soling!
                </h2>
              </div>
            </div>

            <div className="flex items-start gap-2 max-w-[440px] mb-8 border-l-2 border-[#8B0000] pl-4">
              <p className="text-[#4A4A4A] text-[12px] md:text-[14px] leading-relaxed font-medium uppercase opacity-80">
                Qondagi shakar miqdorini normallashtirishga ko'maklashuvchi
                <span className="text-[#8B0000] font-bold">
                  {" "}
                  tabiiy o'simlik majmuasi
                </span>
                . Gormonlarsiz va 100% xavfsiz tarkib.
              </p>
            </div>

            {/* TUGMALAR GURUHI - BIR XIL STILDA */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="h-[50px] md:h-[56px] px-8 bg-[#1A1A1A] text-white rounded-full font-[1000] text-[10px] md:text-[11px] uppercase tracking-[2px] shadow-xl shadow-red-900/10 hover:bg-[#8B0000] transition-all active:scale-95 text-center whitespace-nowrap min-w-[220px]"
              >
                CHEGIRMA BILAN OLISH
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="h-[50px] md:h-[56px] px-8 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-full font-[1000] text-[10px] md:text-[11px] uppercase tracking-[2px] hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95 text-center whitespace-nowrap min-w-[220px]"
              >
                BEPUL MASLAHAT
              </button>
            </div>
          </div>

          {/* --- O'NG TOMON: KOMPOZITSIYA --- */}
          <div className="w-full md:w-[42%] relative mt-10 md:mt-0 flex justify-center items-center">
            <div className="relative w-full h-[320px] md:h-[450px]">
              <div className="w-full h-full bg-red-50/50 rounded-[35px] overflow-hidden relative border border-red-100 shadow-inner">
                <Image
                  src="/intro.png"
                  alt="Diabetik Forte Health"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Mahsulot qutisi */}
              <div className="absolute -bottom-4 -left-2 md:-left-34 z-20 w-[180px] md:w-[280px] drop-shadow-[0_20px_40px_rgba(139,0,0,0.25)] transition-transform hover:scale-105 duration-500">
                <div className="relative aspect-[1/1] rounded-[25px] border-[4px] border-white overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/intro.png"
                    alt="Diabetik Forte Box"
                    fill
                    className="object-contain p-3"
                  />
                </div>
              </div>

              {/* Badge (100% Tabiiy) */}
              <div className="absolute -top-4 -right-2 md:-right-4 z-30 w-20 h-20 md:w-26 md:h-26 rounded-full bg-[#1A1A1A] border-[4px] border-white shadow-2xl flex flex-col items-center justify-center text-white -rotate-6">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-tight text-[#8B0000]">
                  Tabiiy
                </span>
                <span className="text-2xl md:text-3xl font-[1000] italic leading-none my-0.5">
                  100%
                </span>
                <span className="text-[7px] md:text-[8px] font-black uppercase tracking-tight text-white/60 text-center px-2">
                  Rastitelniy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
