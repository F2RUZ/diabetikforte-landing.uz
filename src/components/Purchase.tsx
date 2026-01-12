"use client";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function Purchase() {
  const cards = [
    {
      title: "SHAKAR NAZORATI",
      desc: "Qondagi glyukoza miqdorini tabiiy va xavfsiz darajada ushlab turishga yordam beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 text-[#8B0000]"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "MODDA ALMASHINUVI",
      desc: "Organizmdagi metabolizmni yaxshilaydi va hujayralarni energiya bilan ta'minlaydi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 text-[#1A1A1A]"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "TABIIY TARKIB",
      desc: "Kimyoviy qo'shimchalarsiz, faqat sertifikatlangan o'simlik ekstraktlari va vitaminlar.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 text-[#8B0000]"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-6 bg-gradient-to-b from-white via-red-50/20 to-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* TEPA QISMDAGI 3 TA KARTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[35px] p-8 shadow-[0_10px_30px_rgba(139,0,0,0.04)] border border-red-50 hover:border-[#8B0000]/20 hover:shadow-[0_20px_40px_rgba(139,0,0,0.08)] transition-all duration-500 group"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-[1000] text-[11px] md:text-[12px] mb-3 tracking-[1.5px] uppercase">
                {card.title}
              </h3>
              <p className="text-slate-400 text-[10px] md:text-[11px] leading-relaxed font-bold uppercase">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* LOGO QISMI: DIABETIK FORTE */}
        <motion.div className="flex flex-col items-center text-center space-y-6 mb-16">
          <div className="flex items-center select-none uppercase">
            <span className="text-4xl md:text-[75px] font-[1000] italic tracking-tighter text-[#1A1A1A] leading-none">
              DIABETIK
            </span>

            <span className="text-4xl md:text-[75px] font-[1000] italic tracking-tighter text-[#8B0000] leading-none">
              FORTE
            </span>
          </div>

          <div className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent rounded-full" />

          <p className="text-[#1A1A1A]/40 font-black tracking-[6px] uppercase text-[9px] md:text-[12px] mt-2">
            SALOMATLIK VA QUVVAT MAJMUA
          </p>
        </motion.div>

        {/* O'YNAB TURUVCHI KAPSULALAR (Qizil tonda) */}
        <div className="relative h-24 flex justify-center items-center gap-12">
          {[
            {
              color: "bg-[#1A1A1A]",
              size: "w-10 h-5",
              delay: 0,
              rotate: "rotate-45",
            },
            {
              color: "bg-[#8B0000]",
              size: "w-12 h-6",
              delay: 0.4,
              rotate: "-rotate-12",
            },
            {
              color: "bg-red-200",
              size: "w-10 h-5",
              delay: 0.8,
              rotate: "rotate-[60deg]",
            },
          ].map((pill, i) => (
            <motion.div
              key={i}
         
              className={`${pill.size} ${pill.color} rounded-full shadow-xl border border-white/30 ${pill.rotate} opacity-80`}
            />
          ))}
        </div>
      </div>

      {/* Orqa fondagi dekorativ elementlar */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-red-100/50 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
