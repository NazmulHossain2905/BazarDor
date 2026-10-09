import { getCategories } from "@/apis/product";
import Link from "next/link";

export default async function NavCategory() {
  const categories = await getCategories();

  return (
    <nav className="bg-base-100 border-t border-t-base-200">
      <div className="max-w-7xl mx-auto px-4 flex gap-1 py-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.slug}
            className="h-8 gap-1.5 px-3 py-0.5 rounded-lg flex items-center hover:bg-base-300 transition-colors"
          >
            <span>{category.icon}</span>{" "}
            <span className="font-semibold text-xs">{category.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
