"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Activity } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Afzalliklari", href: "#features" },
    { name: "Tarkibi", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Natijalar", href: "#gym" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "top-0 py-2" : "top-2 md:top-4 py-4"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav
            className={`
              relative bg-white/95 backdrop-blur-md flex justify-between items-center px-4 md:px-6 py-2 mt-3
              transition-all duration-500 rounded-full border border-red-50 shadow-[0_10px_30px_rgba(139,0,0,0.05)]
            `}
          >
            {/* 1. LOGO */}
            <Link href="/" className="group flex items-center shrink-0">
              <div className="flex items-center h-full leading-none select-none uppercase">
                <span className="text-lg md:text-[22px] font-[1000] italic tracking-tighter text-[#1A1A1A]">
                  DIABETIK
                </span>
             
                <span className="text-lg md:text-[22px] font-[1000] italic tracking-tighter text-[#8B0000]">
                  FORTE
                </span>
              </div>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#1A1A1A] text-[10px] font-black uppercase tracking-widest hover:text-[#8B0000] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* 3. RIGHT SECTION */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A1A1A] text-white px-5 md:px-7 py-2.5 rounded-full text-[9px] md:text-[10px] font-[1000] uppercase tracking-widest shadow-lg shadow-red-900/10 hover:bg-[#8B0000] transition-all active:scale-95 whitespace-nowrap"
              >
                SOTIB OLISH
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex flex-col justify-center items-center bg-red-50 rounded-full border border-red-100"
              >
                <div className="space-y-1">
                  <span
                    className={`block w-4 h-0.5 bg-[#1A1A1A] transition-all ${
                      isOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  />
                  <span
                    className={`block w-4 h-0.5 bg-[#1A1A1A] transition-all ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block w-4 h-0.5 bg-[#1A1A1A] transition-all ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div
            className={`fixed inset-0 bg-[#0A0A0A] z-[90] md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white/50 text-xs font-black tracking-widest uppercase"
            >
              Yopish [x]
            </button>

            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-[1000] uppercase tracking-tighter italic hover:text-[#8B0000] transition-all"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-8 bg-[#8B0000] text-white px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-[3px] shadow-2xl"
            >
              HOZIROQ BUYURTMA BERISH
            </button>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
