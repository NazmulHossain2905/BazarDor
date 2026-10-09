"use client";

import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import UserMenu from "./UserMenu";

export default function User() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className={`flex gap-2 p-1 rounded-2xl ${openMenu ? "bg-base-300" : ""} cursor-pointer hover:bg-base-300 transition-colors items-center pr-2`}
      >
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAoztWOBzzT4Ot88AyzvYq0Ng6A_NNSpgh32mfE-zEiMEUR5HTUPVfnRM"
          width={36}
          height={36}
          alt="Logo Image"
          className="w-9 h-9 rounded-xl"
          priority
        />

        <span className="text-sm font-semibold select-none">Rezwan</span>
        <FaAngleDown
          className={`size-3.5 text-base-content/80 transition-transform ${openMenu ? "rotate-180" : ""}`}
        />
      </button>

      {openMenu && (
        <div onClick={() => setOpenMenu(false)} className="fixed inset-0" />
      )}
      {openMenu && <UserMenu />}
    </div>
  );
}
