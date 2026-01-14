"use client";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Usage() {
  const usageInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#8B0000]">
          <rect
            x="3"
            y="8"
            width="18"
            height="8"
            rx="4"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
      title: "KUNIGA 1 TA KAPSULA",
      desc: "Ovqat paytida yoki undan keyin yetarli miqdordagi suv bilan qabul qiling.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-[#8B0000]">
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
      title: "ENG QULAY VAQT",
      desc: "Shakar miqdorini kun davomida nazorat qilish uchun ertalab qabul qilish tavsiya etiladi.",
    },
  ];

  return (
    <section
      id="usage"
      className="w-full py-10 md:py-14 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* CHAP TOMON: MATNLAR VA LOGOTIP */}
        <div className="w-full md:w-1/2 space-y-8 md:space-y-10">
          <div className="space-y-3">
            <h2 className="flex flex-col text-[28px] md:text-[38px] font-[1000] leading-none tracking-tighter">
              <div className="flex items-center select-none uppercase">
                <span className="italic text-[#1A1A1A]">DIABETIK</span>
          
                <span className="italic text-[#8B0000]">FORTE</span>
              </div>
              <span className="text-[#1A1A1A] font-black text-[20px] md:text-[28px] mt-2 uppercase">
                bilan hayot ritmi{" "}
              </span>
              <span className="text-[#8B0000] italic font-black text-[22px] md:text-[30px] uppercase">
                yanada xavfsiz
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="p-3.5 rounded-[20px] bg-red-50 group-hover:bg-[#8B0000]/10 transition-all duration-500 shadow-sm group-hover:scale-105">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A1A1A] font-[900] text-sm md:text-base tracking-wide uppercase">
                    {info.title}
                  </h4>
                  <p className="text-slate-500 text-[12px] md:text-[13px] font-bold leading-relaxed max-w-[320px] mt-1 uppercase opacity-80">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kurs haqida ma'lumot qutisi - To'q qizil tonda */}
          <div className="bg-[#1A1A1A] rounded-[30px] p-8 md:p-10 border border-red-950/20 shadow-[0_20px_40px_-12px_rgba(139,0,0,0.25)] max-w-[380px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B0000]/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#8B0000]/20 transition-all duration-700" />

            <p className="text-[#8B0000] text-[9px] font-black uppercase tracking-[3px] mb-3">
              TAVSIYA ETILGAN KURS
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-[1000] italic leading-none uppercase tracking-tighter">
              30 kun davomida
            </h3>
            <div className="h-[2px] w-10 bg-[#8B0000] my-4 rounded-full" />
            <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider leading-relaxed">
              To'liq samaraga erishish uchun yiliga 2-3 marta takrorlash tavsiya
              etiladi
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL QISM */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[400px] md:h-[580px] w-full rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-red-50">
            <Image
              src="/right.png"
              alt="Diabetik Forte Lifestyle"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />

          </div>

          {/* Floating Badge (Kapsula miqdori) */}
          <div className="absolute -bottom-5 -right-2 md:right-0 bg-white p-5 rounded-[25px] shadow-[0_15px_35px_rgba(139,0,0,0.15)] border border-red-50 flex items-center gap-4 transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-[#8B0000] font-[1000] text-2xl italic shadow-inner">
              1
            </div>
            <div>
              <p className="text-[#1A1A1A] font-[1000] uppercase text-[10px] tracking-[1.5px] leading-tight">
                Kapsula <br /> <span className="text-[#8B0000]">Kuniga</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
