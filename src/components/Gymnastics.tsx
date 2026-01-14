"use client";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "NAZORAT",
      subtitle: "SHAKAR MIQDORI",
      imgSrc: "/nazorat.png",
      color: "from-red-50 to-red-100",
    },
    {
      title: "TIKLANISH",
      subtitle: "MODDA ALMASHINUVI",
      imgSrc: "/tiklanish.png",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "HIMOYA",
      subtitle: "TABIIY KOMPONENT",
      imgSrc: "/ximoya.png",
      color: "from-red-100 to-red-200",
    },
  ];

  return (
    <section id="gym" className="w-full py-8 md:py-6 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - DIABETIK FORTE STILIDA */}
        <div className="mb-10">
          <h2 className="flex flex-wrap items-center text-[28px] md:text-[38px] font-black italic mb-3 tracking-tighter leading-none">
            {/* LOGO QISMI */}
            <div className="flex items-center select-none mr-2 md:mr-4 uppercase">
              <span className="text-[#1A1A1A] italic leading-none">
                DIABETIK
              </span>

              <span className="text-[#8B0000] italic leading-none">FORTE</span>
            </div>

            {/* QO'SHIMCHA MATN - IXCHAM SHRIFT */}
            <span className="text-[#1A1A1A] not-italic font-extrabold text-xl md:text-2xl uppercase">
              BILAN SALOMATLIK NAZORATDA
            </span>
          </h2>

          <p className="text-slate-500 text-[11px] md:text-[13px] font-bold max-w-[550px] leading-tight uppercase tracking-tight opacity-70">
            Tabiiy majmua organizmni eng kerakli moddalar bilan to'yintirib,
            shakar miqdorini me'yorda saqlashga va hayot sifatini yaxshilashga
            yordam beradi.
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[240px] bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 border border-red-50 overflow-hidden"
            >
              {/* Matnlar (Chap tomonda) - Ixchamroq */}
              <div className="absolute left-7 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-[1000] leading-[0.85] tracking-tighter uppercase">
                  {card.title} <br />
                  <span className="text-[10px] md:text-[11px] text-[#8B0000] font-black tracking-[2px] mt-1 block">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi (O'ng tomonda) */}
              <div
                className={`absolute right-0 top-0 w-[65%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover object-center"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:from-transparent" />
                </div>
              </div>

              {/* Bezak (Orqa fondagi raqam) */}
              <span className="absolute -bottom-4 -left-2 text-[80px] font-black text-red-50/50 z-0 select-none opacity-40">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Dekorativ chiziq */}
        <div className="mt-12 flex justify-center">
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#8B0000]/30 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
