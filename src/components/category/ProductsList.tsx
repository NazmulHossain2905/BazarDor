"use client";

import { IProduct } from "@/interfaces/IProduct";
import { useState } from "react";
import ProductsGrid from "../common/ProductsGrid";
import { SortDropDown } from "./SortDropDown";

interface ProductsListProps {
  products: IProduct[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const [sortBy, setSortBy] = useState("default");

  let sortedProducts = [...products];

  switch (sortBy) {
    case "price-asc": {
      sortedProducts.sort((a, b) => a.today - b.today);
      break;
    }

    case "price-desc": {
      sortedProducts.sort((a, b) => b.today - a.today);
      break;
    }

    case "default":
    default: {
      break;
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-base-content/70">
          মোট ৪টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="text-sm text-base-content/70 flex items-center gap-2">
          সাজান <SortDropDown value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      <ProductsGrid products={sortedProducts} />
    </div>
  );
}
