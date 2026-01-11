"use client";

import { Leaf, History, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      text: "NATURAL O'SIMLIK KOMPLEKSI",
      icon: <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />,
    },
    {
      text: "MODDA ALMASHINUVINI TIKLASH",
      icon: <History className="w-4 h-4 text-white" strokeWidth={2.5} />,
    },
    {
      text: "SERTIFIKATLANGAN VA XAVFSIZ",
      icon: <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />,
    },
  ];

  return (
    <section className="relative w-full py-8 md:py-4 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner - Faqat mahsulot qutisidagi qizil rangda */}
        <div className="relative bg-white rounded-[25px] md:rounded-[45px] shadow-[0_15px_45px_-15px_rgba(139,0,0,0.15)] border border-red-50 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Silliq o'tuvchi yorug'lik effekti */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-4 px-6 md:px-10 py-5 md:py-8
                transition-all duration-300 hover:bg-red-50/40 cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-red-50"
                    : ""
                }
              `}
            >
              {/* Doira belgisi - Faqat to'q qizil gradientda */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] shadow-md shadow-red-900/20 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Matn - Ixcham va aniq */}
              <div className="relative">
                <p className="text-[#1A1A1A] font-black text-[9px] md:text-[10px] leading-tight tracking-[2px] uppercase">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dekorativ element */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-50 blur-[60px] rounded-full -z-10" />
    </section>
  );
}
