"use client";
import React, { useState, useEffect } from "react";
import { Activity, User, Phone, X, Check } from "lucide-react";
import { Snackbar } from "./ui/Snackbar"; // Snackbar import qilindi

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeField, setActiveField] = useState<"name" | "phone" | null>(null);

  // Xatolik xabarlari uchun holat
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Server bilan bog'lanishda xatolik!");

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/leads/`;

  const progress =
    (formData.name.length > 2 ? 50 : 0) +
    (formData.phone.replace(/\D/g, "").length === 12 ? 50 : 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setShowError(false);
      setFormData({ name: "", phone: "" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (!value.startsWith("998")) value = "998" + value;
    value = value.slice(0, 12);

    let formatted = "+";
    if (value.length > 0) formatted += value.slice(0, 3);
    if (value.length > 3) formatted += " (" + value.slice(3, 5) + ")";
    if (value.length > 5) formatted += " " + value.slice(5, 8);
    if (value.length > 8) formatted += " " + value.slice(8, 10);
    if (value.length > 10) formatted += " " + value.slice(10, 12);

    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setShowError(false);
    
    const cleanPhone = formData.phone.replace(/\D/g, "");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.name,
          phone_number: `+${cleanPhone}`, // Plyus belgisi qo'shildi
          product_name: "diabetik_forte_web",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 4000);
      } else if (response.status === 429) {
        // --- 429 LIMIT HANDLING ---
        setStatus("error");
        setErrorMessage("Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring.");
        setShowError(true);
        setTimeout(() => {
          setStatus("idle");
          setShowError(false);
        }, 5000);
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setErrorMessage("Server bilan bog'lanishda xatolik!");
      setShowError(true);
      setTimeout(() => {
        setStatus("idle");
        setShowError(false);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-[#0A0A0A]/95 backdrop-blur-md">
      <Snackbar
        isVisible={showError}
        message={errorMessage}
        onClose={() => setShowError(false)}
      />

      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-[440px] bg-white rounded-[40px] shadow-[0_30px_100px_rgba(139,0,0,0.2)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-red-50">
          <div
            className={`h-full transition-all duration-300 ${
              status === "error" ? "bg-red-500" : "bg-[#8B0000]"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8 md:p-10">
          {status === "success" ? (
            <div className="py-10 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-green-500/20 mx-auto mb-6 rotate-[10deg]">
                <Check size={40} strokeWidth={4} />
              </div>
              <h3 className="text-2xl font-[1000] text-[#1A1A1A] mb-3 uppercase tracking-tighter">
                Qabul qilindi!
              </h3>
              <p className="text-slate-500 font-bold text-[11px] uppercase tracking-wide">
                Operatorlarimiz tez orada <br /> bog'lanishadi.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-center mb-8 select-none uppercase italic">
                <span className="text-2xl font-[1000] text-[#1A1A1A] tracking-tighter">
                  DIABETIK
                </span>
                <span className="text-2xl font-[1000] text-[#8B0000] tracking-tighter ml-1">
                  FORTE
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase ml-4 mb-1.5 block tracking-widest">
                    Ismingiz:
                  </label>
                  <div
                    className={`flex items-center bg-red-50/30 border-2 rounded-2xl transition-all ${
                      activeField === "name"
                        ? "border-[#8B0000] bg-white"
                        : "border-transparent"
                    }`}
                  >
                    <span className="pl-5 text-slate-300">
                      <User size={18} strokeWidth={3} />
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Ismingizni kiriting"
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-4 bg-transparent outline-none font-bold text-[#1A1A1A] text-sm"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black text-slate-400 uppercase ml-4 mb-1.5 block tracking-widest">
                    Telefon raqam:
                  </label>
                  <div
                    className={`flex items-center bg-red-50/30 border-2 rounded-2xl transition-all ${
                      activeField === "phone"
                        ? "border-[#8B0000] bg-white"
                        : "border-transparent"
                    }`}
                  >
                    <span className="pl-5 text-slate-300">
                      <Phone size={18} strokeWidth={3} />
                    </span>
                    <input
                      required
                      type="tel"
                      inputMode="numeric"
                      placeholder="+998 (__) ___ __ __"
                      onFocus={() => setActiveField("phone")}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-4 bg-transparent outline-none font-[1000] text-[#1A1A1A] text-sm tracking-wide"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>

                <button
                  disabled={status === "loading" || progress < 100}
                  className={`w-full mt-4 py-5 rounded-2xl font-[1000] uppercase tracking-[3px] text-[11px] transition-all active:scale-95
                    ${
                      status === "error"
                        ? "bg-red-600 text-white"
                        : "bg-[#1A1A1A] text-white"
                    }
                    disabled:bg-slate-100 disabled:text-slate-300 shadow-xl`}
                >
                  {status === "loading"
                    ? "YUBORILMOQDA..."
                    : status === "error"
                    ? "XATOLIK!"
                    : "BUYURTMA BERISH"}
                </button>
              </form>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-300 hover:text-red-500 transition-colors"
        >
          <X size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}