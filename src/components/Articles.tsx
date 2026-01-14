"use client";
import Image from "next/image";
import { useState } from "react";
import { Activity } from "lucide-react";
import dynamic from "next/dynamic";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title: "Shakarni tabiiy nazorat qilish",
      description:
        "Glyukoza darajasini me'yorda saqlash uchun to'g'ri oziqlanish va o'simlik ekstraktlarining ahamiyati haqida.",
      imgSrc: "/nazorat.png",
      category: "Salomatlik",
    },
    {
      title: "Metabolizmni tiklash siri",
      description:
        "Surunkali charchoq va modda almashinuvining buzilishi — organizmdagi muhim minerallar yetishmasligi belgisi.",
      imgSrc: "/meto.png",
      category: "Metabolizm",
    },
    {
      title: "Diabetik Forte formulasi",
      description:
        "Nega aynan tabiiy tarkib? Majmuaning boshqa sintetik vositalardan asosiy farqlari va afzalliklari.",
      imgSrc: "/form.png",
      category: "Ilmiy asos",
    },
  ];

  return (
    <section id="articles" className="w-full py-6 bg-[#FDFDFF] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA QISMI - DIABETIK FORTE USLUBIDA */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="flex flex-col md:flex-row md:items-center text-[32px] md:text-[42px] font-[1000] leading-none tracking-tighter mb-4">
            <div className="flex items-center select-none justify-center md:justify-start uppercase">
              <span className="italic text-[#1A1A1A]">DIABETIK</span>
         
              <span className="italic text-[#8B0000]">FORTE</span>
            </div>

            <span className="text-[#1A1A1A] md:ml-6 mt-3 md:mt-0 not-italic font-[900] text-xl md:text-[28px] uppercase tracking-tight">
              BILAN FOYDALI BILIMLAR
            </span>
          </h2>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-[2px] w-12 bg-[#8B0000] rounded-full" />
            <p className="text-[#1A1A1A]/40 text-[10px] font-black uppercase tracking-[3px]">
              Blog va Maslahatlar
            </p>
          </div>
        </div>

        {/* MAQOLALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-[400px] bg-white rounded-[40px] overflow-hidden shadow-[0_10px_35px_rgba(139,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(139,0,0,0.1)] transition-all duration-700 border border-red-50"
            >
              {/* Rasm qismi (42%) */}
              <div className="relative h-[42%] w-full overflow-hidden">
                <Image
                  src={article.imgSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-[#1A1A1A] text-white text-[9px] font-[1000] px-4 py-2 rounded-xl uppercase tracking-[1.5px] shadow-xl border border-white/10">
                    {article.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
              </div>

              {/* Matn qismi (58%) */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#1A1A1A] font-[1000] text-[20px] leading-[1.1] uppercase tracking-tighter mb-4 group-hover:text-[#8B0000] transition-colors duration-500">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 text-[12px] md:text-[13px] leading-relaxed font-bold uppercase opacity-80">
                    {article.description}
                  </p>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        {/* HARAKATGA CHAQIRUV TUGMASI - IXCHAMROQ */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-14 py-5 bg-[#1A1A1A] text-white rounded-full font-[1000] text-[11px] uppercase tracking-[3px] overflow-hidden transition-all shadow-xl shadow-red-900/10 active:scale-95"
          >
            <span className="relative z-10 group-hover:text-[#1A1A1A] transition-colors duration-500">
              SOTIB OLISH VA TIKLANISH
            </span>
            {/* Hover Background */}
            <div className="absolute inset-0 bg-red-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
