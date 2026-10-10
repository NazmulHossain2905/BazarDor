import HeroImage from "@/assets/images/bazar-hero.png";
import Image from "next/image";
import Button from "../common/Button";
import CurrentBanglaDate from "../common/CurrentBanglaDate";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-base-300 bg-base-100 p-6 sm:flex-row">
      <div className="max-w-xl">
        <CurrentBanglaDate className="bg-primary/10 px-3 py-1 rounded-[14px] font-semibold text-sm text-primary w-fit" />

        <h1 className="font-bold text-4xl mt-2 mb-5">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="leading-6 text-base-content/70 mb-7">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <a href={"#সব-পণ্য"}>
          <Button>সব পণ্য দেখুন</Button>
        </a>
      </div>

      <div>
        <Image
          src={HeroImage}
          width={316}
          height={264}
          alt="Hero Image"
          priority
        />
      </div>
    </div>
  );
}
