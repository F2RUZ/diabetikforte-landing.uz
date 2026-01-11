import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

// 1. FONT OPTIMIZATION
const futura = localFont({
  src: [
    { path: "../fonts/FuturaNowHeadlineThin.ttf", weight: "100" },
    { path: "../fonts/FuturaNowHeadlineLight.ttf", weight: "300" },
    { path: "../fonts/FuturaNowHeadline.ttf", weight: "400" },
    { path: "../fonts/FuturaNowHeadlineMedium.ttf", weight: "500" },
    { path: "../fonts/FuturaNowHeadlineBold.ttf", weight: "700" },
    { path: "../fonts/FuturaNowHeadlineExtraBold.ttf", weight: "800" },
    { path: "../fonts/FuturaNowHeadlineBlack.ttf", weight: "900" },
  ],
  variable: "--font-futura",
  display: "swap",
});

// 2. SEO & METADATA (Diabetik Forte uchun yangilandi)
export const metadata: Metadata = {
  metadataBase: new URL("https://diabetik-forte.uz"),
  title: {
    default: "Diabetik Forte - Uglevod almashinuvini qo'llab-quvvatlash",
    template: "%s | Diabetik Forte",
  },
  description:
    "Qondagi shakar miqdorini normallashtirishga yordam beruvchi tabiiy o'simlik majmuasi. 100% tabiiy va xavfsiz.",
  keywords: [
    "Diabetik Forte",
    "shakar miqdori",
    "tabiiy majmua",
    "diabet uchun dori",
    "BFQ",
  ],
  openGraph: {
    title: "Diabetik Forte - Tabiiy o'simlik majmuasi",
    description:
      "Qondagi shakar miqdorini nazorat qilishda sizning ishonchli yordamchingiz.",
    url: "https://diabetik-forte.uz",
    siteName: "Diabetik Forte",
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#8B0000", // Mahsulotning qizil rangi
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
      </head>
      <body
        className={`${futura.variable} font-sans antialiased selection:bg-[#8B0000] selection:text-white bg-white text-[#1A1A1A]`}
        suppressHydrationWarning
      >
        <main>{children}</main>

        {/* GLOBAL DISCLAIMER */}
        <div className="fixed bottom-0 left-0 w-full border-t border-red-100 py-3 bg-white/90 backdrop-blur-md z-[9999]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[#8B0000]/60 font-black text-[9px] md:text-[11px] tracking-[2px] uppercase">
              BIOLOGIK FAOL QO'SHIMCHA. DORI VOSITASI HISOBLANMAYDI.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
