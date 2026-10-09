import { IProduct } from "@/interfaces/IProduct";
import { getUnitInBangla } from "@/utils/getUnitInBangla";
import Link from "next/link";

interface PriceTickerItemProps {
  product: IProduct;
}

export default function PriceTickerItem({ product }: PriceTickerItemProps) {
  const isUp = product.change.dir === "up";

  return (
    <Link
      href={`product/${product.slug}`}
      className="flex gap-1.5 px-4 py-2 border-r border-r-base-200 text-sm hover:underline"
    >
      <span>{product.image}</span>
      <span className="font-medium">{product.nameBn}</span>
      <span>
        {product.today.toLocaleString("bn-BD")} টাকা/
        {getUnitInBangla(product.unit)}
      </span>

      <span
        className={
          isUp ? "font-semibold text-error" : "font-semibold text-success"
        }
      >
        {isUp ? "▲" : "▼"}{" "}
        {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
      </span>
    </Link>
  );
}
