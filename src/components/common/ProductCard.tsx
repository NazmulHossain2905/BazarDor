import { IProduct } from "@/interfaces/IProduct";
import { getUnitInBangla } from "@/utils/getUnitInBangla";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const direction = product.change.dir;

  const textStyle =
    direction === "up"
      ? "text-error"
      : direction === "down"
        ? "text-success"
        : "text-base-content";
  const directionIcon =
    direction === "up" ? "▲" : direction === "down" ? "▼" : "—";
  const hoverStyle =
    direction === "up"
      ? "hover:border-error/50"
      : direction === "down"
        ? "hover:border-success/50"
        : "hover:border-base-content/50";

  return (
    <Link
      href={`product/${product.slug}`}
      className={`border border-base-300 bg-base-100 p-4 rounded-2xl transition-colors ${hoverStyle}`}
    >
      <div className="flex gap-3 items-center">
        <div className="rounded-xl bg-base-200 size-12 flex justify-center items-center text-2xl">
          {product.image}
        </div>

        <div>
          <h5 className="font-semibold">{product.nameBn}</h5>
          <p className="text-xs">প্রতি {getUnitInBangla(product.unit)}</p>
        </div>
      </div>

      <p className="text-xs mt-3">আজকের দাম</p>

      <div className="flex justify-between items-center">
        <p className="font-medium text-sm">
          <span className="font-bold text-xl">
            {product.today.toLocaleString("bn-BD")}
          </span>{" "}
          টাকা
        </p>

        <span
          className={`px-2 py-1 bg-base-200 rounded-xl text-xs font-semibold ${textStyle}`}
        >
          {directionIcon}{" "}
          {Math.abs(product.change.pct).toLocaleString("bn-BD", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
          %
        </span>
      </div>
    </Link>
  );
}
