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

      <ProductsGrid products={products} />
    </div>
  );
}
