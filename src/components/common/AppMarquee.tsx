"use client";

import type { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface AppMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  pauseOnHover?: boolean;
  className?: string;
}

export default function AppMarquee({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  className,
}: AppMarqueeProps) {
  return (
    <Marquee
      speed={speed}
      direction={direction}
      pauseOnHover={pauseOnHover}
      pauseOnClick
      // autoFill
      gradient={false}
      className={className}
    >
      {children}
    </Marquee>
  );
}
