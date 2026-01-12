"use client";
import { Activity } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#0A0A0A] py-12 text-white/70 border-t-2 border-[#8B0000]/20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. LOGOTIP: DIABETIK FORTE - Mukammal simmetriya */}
          <div className="flex flex-col items-start md:items-start gap-3 group cursor-pointer">
            <div className="flex items-center text-[28px] md:text-[34px] font-[1000] italic tracking-tighter select-none leading-none uppercase">
              <span className="text-white">DIABETIK</span>
          
              <span className="text-[#8B0000]">FORTE</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-[9px] font-black tracking-[3px] text-[#8B0000] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                Sog'lom hayot sari qadam
              </span>
            </div>
          </div>

          {/* 2. ALOQA MA'LUMOTLARI - Ixchamroq */}
          <div className="flex-1 max-w-[500px] space-y-6 text-[10px] md:text-[11px] leading-relaxed">
            <div className="space-y-3 p-6 bg-white/5 rounded-[25px] border border-white/5 backdrop-blur-sm hover:border-[#8B0000]/30 transition-all duration-500">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="font-bold uppercase tracking-wider">
                  <span className="text-white/40 mr-3">Ishonch telefoni:</span>{" "}
                  <a
                    href="tel:+998555170147"
                    className="text-[#8B0000] hover:text-white transition-all font-[1000] text-[14px] md:text-[16px]"
                  >
                    +998 (55) 517-01-47
                  </a>
                </p>
              </div>
            
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR - Ixcham va Aniq */}
          <div className="flex flex-col gap-4 text-[9px] md:text-[10px] font-[1000] uppercase tracking-[2px]">
            <a
              href="#"
              className="text-white/30 hover:text-[#8B0000] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] shadow-[0_0_8px_#8B0000] opacity-40 group-hover:opacity-100" />
              Foydalanuvchi shartnomasi
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#8B0000] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] shadow-[0_0_8px_#8B0000] opacity-40 group-hover:opacity-100" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#8B0000] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] shadow-[0_0_8px_#8B0000] opacity-40 group-hover:opacity-100" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] md:text-[9px] uppercase tracking-[3px] text-white/20 font-black">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DIABETIK FORTE UZBEKISTAN. BARCHA
            HUQUQLAR HIMOYALANGAN.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-[#8B0000] transition-colors cursor-default">
              <span className="w-1 h-1 bg-[#8B0000]/30 rounded-full" />
              TOSHKENT, O'ZBEKISTON
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
