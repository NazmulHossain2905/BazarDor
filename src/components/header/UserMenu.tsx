import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

export default function UserMenu() {
  return (
    <div className="absolute p-2 rounded-2xl z-20 bg-white min-w-[256px] mt-2 right-0 border border-base-300 shadow">
      <div className="py-2 px-3 ">
        <h4 className="font-semibold text-sm">Rezwan Ahmed</h4>
        <p className="text-xs">rezwanahmed@gmail.com</p>
      </div>

      <div className="flex flex-col gap-1">
        <Link
          href={"/profile"}
          className="h-8 px-3 py-1.5 rounded-lg hover:bg-base-200 transition-colors text-sm flex items-center gap-2"
        >
          <FaRegUser className="size-4" />
          <span>আমার প্রোফাইল</span>
        </Link>

        <button className="h-8 text-left px-3 py-1.5 rounded-lg hover:bg-base-200 transition-colors text-sm cursor-pointer text-error flex items-center gap-2">
          <TbLogout2 className="size-4" /> <span>সাইন আউট</span>
        </button>
      </div>
    </div>
  );
}
