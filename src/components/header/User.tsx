"use client";

import { IUser } from "@/interfaces/IUser";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import UserMenu from "./UserMenu";

interface UserProps {
  user: IUser;
}

export default function User({ user }: UserProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const firstName = user.name.split(" ")?.[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className={`flex gap-2 p-1 rounded-2xl ${openMenu ? "bg-base-300" : ""} cursor-pointer hover:bg-base-300 transition-colors items-center pr-2`}
      >
        {user.image ? (
          <Image
            src={user.image}
            width={36}
            height={36}
            alt="Logo Image"
            className="w-9 h-9 rounded-xl bg-primary/40"
            priority
          />
        ) : (
          <div className="w-9 h-9 rounded-xl bg-primary/40 flex justify-center items-center text-2xl font-bold text-primary">
            {firstName?.[0].toUpperCase() || "-"}
          </div>
        )}
        <span className="text-sm font-semibold select-none">{firstName}</span>
        <FaAngleDown
          className={`size-3.5 text-base-content/80 transition-transform ${openMenu ? "rotate-180" : ""}`}
        />
      </button>

      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 z-10"
        />
      )}
      {openMenu && <UserMenu user={user} />}
    </div>
  );
}
