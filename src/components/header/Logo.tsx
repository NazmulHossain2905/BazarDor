import LogoIcon from "@/assets/images/logo-icon.png";
import Image from "next/image";
import Link from "next/link";
import CurrentBanglaDate from "../common/CurrentBanglaDate";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
        <Image
          src={LogoIcon}
          width={24}
          height={24}
          alt="বাজার দর লোগো"
          className="size-6"
          priority
        />
      </div>

      <div>
        <h2 className="text-xl font-bold tracking-[-0.5px]">বাজার দর</h2>
        <CurrentBanglaDate />
      </div>
    </Link>
  );
}
