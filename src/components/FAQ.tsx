"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Diabetik Forte - bu dorimi?",
    answer: "Yo‘q. Diabetik Forte - biologik faol qo‘shimcha (BFQ), dori vositasi emas. U organizmning umumiy holatini yaxshilash va uglevod almashinuvini tabiiy qo'llab-quvvatlash uchun mo'ljallangan.",
  },
  {
    question: "Dorilar bilan birga qabul qilish mumkinmi?",
    answer: "Salbiy o‘zaro ta’sir aniqlanmadi, ammo har qanday biologik faol qo‘shimchani asosiy davolash kursi bilan birga qo'llashdan oldin mutaxassis maslahati tavsiya etiladi.",
  },
  {
    question: "Qandli diabet uchun mosmi?",
    answer: "O‘simlik komponentlarining qo‘shimcha manbai sifatida ishlatilishi mumkin. Ta'kidlash joizki, u asosiy davolash o‘rnini bosmaydi, balki yordamchi vosita hisoblanadi.",
  },
  {
    question: "Mahsulot xavfsizligi kafolatlanganmi?",
    answer: "Mahsulot 100% tabiiy o'simlik ekstraktlaridan tarkib topgan. Kasalliklarni tashxislash, davolash yoki oldini olish uchun mo‘ljallanmagan. Ta’sir individual bo‘lishi mumkin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // DIABETIK FORTE RANGI (Shu yer o'zgaradi xolos)
  const primaryColor = "#8B0000"; 

  return (
    <section className="w-full py-2 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha sodda va tushunarli */}
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
            TEZ TEZ BERILADIGAN <span style={{ color: primaryColor }}>SAVOLLAR</span>
          </h2>
        </div>

        {/* Akkordeon */}
        <div className="divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className={`text-[15px] md:text-[17px] font-bold transition-colors ${openIndex === index ? 'text-red-800' : 'text-gray-800'}`}>
                  {index + 1}. {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: openIndex === index ? primaryColor : "#94a3b8" }}
                />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pr-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 pl-4" style={{ borderColor: primaryColor }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ogohlantirish (Pastda, tushunarli formatda) */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <ul className="space-y-2">
            {["Biologik faol qo‘shimcha.", "Dori vositasi emas.", "Ta’sir individual bo‘ladi."].map((text, i) => (
              <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primaryColor }} />
                {text}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}