import Header from "@/components/header";
import PriceTickerMarquee from "@/components/price-ticker-marquee";
import PriceTickerSkeleton from "@/components/price-ticker-marquee/PriceTickerSkeleton";
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hindSiliguri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />

        <Suspense fallback={<PriceTickerSkeleton />}>
          <PriceTickerMarquee />
        </Suspense>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
