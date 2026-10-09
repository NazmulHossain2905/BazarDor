import Header from "@/components/header";
import Marquee from "@/components/Marquee";
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguriSans = Hind_Siliguri({
  variable: "--font-hind-siliguri-sans",
  subsets: ["bengali", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hindSiliguriSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee />

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
