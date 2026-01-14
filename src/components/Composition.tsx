"use client";
import Image from "next/image";

export default function Composition() {
  const mainFeatures = {
    benefits: [
      "QONDAGI SHAKAR MIQDORINI NORMALLASHTIRISH",
      "MODDA ALMASHINUVINI TABIIY TIKLASH",
      "OSHXONOSTI BEZI FAOLIYATINI QO'LLAB-QUVVATLASH",
    ],
    components: [
      "NATURAL O'SIMLIK EKSTRAKTLARI",
      "MUHIM MIKRO VA MAKROELEMENTLAR",
      "GORMORAL BALANSNI ME'YORDA SAQLASH",
    ],
  };

  const formulaData = [
    { name: "EKSTRAKTLAR", desc: "100% TABIIY" },
    { name: "MINERALLAR", desc: "SINK, MAGNIY" },
    { name: "VITAMINLAR", desc: "B, C, D3 GRUPPA" },
    { name: "XAVFSIZLIK", desc: "SERTIFIKATLANGAN" },
  ];

  return (
    <section className="w-full py-12 bg-white overflow-hidden" id="composition">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha */}
        <div className="text-center mb-12">
          <h2 className="flex flex-col md:flex-row items-center justify-center gap-2 text-[#1A1A1A] text-2xl md:text-4xl font-[1000] italic leading-tight uppercase tracking-tighter">
            ILMIY ASOSLANGAN
            <span className="text-[#8B0000]"> FORMULA</span>
          </h2>
          <p className="text-slate-400 font-bold mt-4 uppercase text-[9px] md:text-[10px] tracking-[2px] max-w-2xl mx-auto leading-relaxed">
            DIABETIK FORTE — Shakar miqdorini nazorat qilish va organizmni
            quvvat bilan ta'minlash uchun maxsus yaratilgan majmua.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* 1-Karta: Asosiy Xususiyatlar */}
          <div className="w-full lg:w-[360px] bg-white rounded-[35px] p-8 md:p-9 shadow-2xl shadow-red-900/5 border border-red-50 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-6">
              <h3 className="text-[#8B0000] text-xl font-black uppercase italic">ASOSIY</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">TA'SIR DOIRASI</p>
              <div className="h-1 w-10 bg-[#1A1A1A] mt-2 rounded-full" />
            </div>
            <ul className="space-y-5">
              {mainFeatures.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000] animate-pulse" />
                  </div>
                  <p className="text-[#1A1A1A] text-[11px] md:text-[12px] font-black leading-snug uppercase italic">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual element - TUZATILDI */}
          <div className="flex flex-col items-center gap-8 z-20">
            {/* Ota-ona konteynerga aniq o'lcham berildi */}
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              
              {/* Orqa fondagi aylanuvchi nur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B0000]/10 to-transparent rounded-full animate-spin-slow blur-xl" />

              {/* Rasm joylashgan oq doira */}
              <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center border-[8px] border-red-50 overflow-hidden">
                <div className="relative w-full h-full p-8 transition-transform duration-700 hover:scale-110">
                  <Image
                    src="/center.png" // public/center.png joylashuvini tekshiring
                    alt="Diabetik Forte Formula"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[380px]">
              {formulaData.map((m, idx) => (
                <div key={idx} className="bg-white p-4 rounded-[20px] border border-red-50 shadow-sm text-center">
                  <h4 className="text-[#8B0000] font-black text-[9px] md:text-[10px] uppercase mb-1 tracking-wider">{m.name}</h4>
                  <p className="text-[8px] md:text-[9px] text-[#1A1A1A] font-bold uppercase opacity-50">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Tarkibiy Qismlar */}
          <div className="w-full lg:w-[360px] bg-[#1A1A1A] rounded-[35px] p-8 md:p-9 shadow-2xl shadow-red-900/20 relative z-10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="mb-6">
              <h3 className="text-[#8B0000] text-xl font-black uppercase italic">TARKIBI</h3>
              <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">100% TABIIY VA XAVFSIZ</p>
              <div className="h-1 w-10 bg-[#8B0000] mt-2 rounded-full" />
            </div>
            <ul className="space-y-5">
              {mainFeatures.components.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B0000]" />
                  </div>
                  <p className="text-white text-[11px] md:text-[12px] font-black leading-snug uppercase italic">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}