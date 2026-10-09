"use client";

import { ICategory } from "@/interfaces/ICategory";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoryNavLinksProps {
  categories: ICategory[];
}

export default function CategoryNavLinks({
  categories,
}: CategoryNavLinksProps) {
  const pathname = usePathname();

  return (
    <div className="max-w-7xl mx-auto flex gap-1 px-4 py-2 overflow-x-auto">
      {categories.map((category) => {
        const href = `/category/${category.slug}`;
        const isActive = pathname === href;
        return (
          <Link
            key={category.id}
            href={href}
            className={`h-8 gap-1.5 px-3 font-semibold text-xs py-0.5 rounded-lg flex items-center transition-colors 
                ${isActive ? "bg-primary-strong text-primary-content" : "hover:bg-base-300"}`}
          >
            <span>{category.icon}</span>
            <span>{category.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
}
