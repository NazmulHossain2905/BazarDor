"use client";

import { useEffect, useState } from "react";

export default function CurrentBanglaDate({
  className = "",
}: {
  className?: string;
}) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      }),
    );
  }, []);

  return <p className={`text-xs ${className}`}>{date || "\u00A0"}</p>;
}
