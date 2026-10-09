import LogoIcon from "@/assets/images/logo-icon.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-10 rounded-xl bg-primary flex justify-center items-center">
        <Image
          src={LogoIcon}
          width={24}
          height={24}
          alt="Logo Image"
          className="w-6 h-6"
          priority
        />
      </div>

      <div>
        <h2 className="font-bold text-xl tracking-[-0.5px]">বাজার দর</h2>
        <p className="text-xs">মঙ্গলবার, ৬ অক্টোবর, ২০২৬</p>
      </div>
    </div>
  );
}
