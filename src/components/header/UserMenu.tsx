"use client";

import { IUser } from "@/interfaces/IUser";
import { signOut } from "@/lib/auth-client";
import { toast } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

interface UserMenuProps {
  user: IUser;
}

export default function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const { data, error } = await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
          },
        },
      });

      if (data?.success) {
        toast.success("সফলভাবে সাইন আউট হয়েছে।");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute p-2 rounded-2xl z-20 bg-white min-w-[256px] mt-2 right-0 border border-base-300 shadow">
      <div className="py-2 px-3 ">
        <h4 className="font-semibold text-sm">{user.name}</h4>
        <p className="text-xs">{user.email}</p>
      </div>

      <div className="flex flex-col gap-1">
        <Link
          href={"/profile"}
          className="h-8 px-3 py-1.5 rounded-lg hover:bg-base-200 transition-colors text-sm flex items-center gap-2"
        >
          <FaRegUser className="size-4" />
          <span>আমার প্রোফাইল</span>
        </Link>

        <button
          onClick={handleSignOut}
          className="h-8 text-left px-3 py-1.5 rounded-lg hover:bg-base-200 transition-colors text-sm cursor-pointer text-error flex items-center gap-2"
        >
          <TbLogout2 className="size-4" /> <span>সাইন আউট</span>
        </button>
      </div>
    </div>
  );
}
