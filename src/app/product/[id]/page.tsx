import { getSingleProduct } from "@/apis/product";
import MarketTable from "@/components/MarketTable";
import Breadcrumb from "@/components/product-details/Breadcrumb";
import PriceSummary from "@/components/product-details/PriceSummary";
import ProductOverview from "@/components/product-details/ProductOverview";
import { getUnitInBangla } from "@/utils/getUnitInBangla";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id: productId } = await params;
  const product = await getSingleProduct(productId);

  if (!product) {
    notFound();
  }

  const isUp = product.change.dir === "up";
  const direction = product.change.dir;
  const noChange = product.change.dir === "flat";

  const minPrice = Math.min(...product.markets.map((market) => market.min));
  const maxPrice = Math.max(...product.markets.map((market) => market.max));
  const averagePrice =
    product.markets.length > 0
      ? product.markets.reduce(
          (total, market) => total + (market.min + market.max) / 2,
          0,
        ) / product.markets.length
      : 0;

  const changeAmount = isUp
    ? product.today - product.yesterday
    : product.yesterday - product.today;

  const textStyle =
    direction === "up"
      ? "text-error"
      : direction === "down"
        ? "text-success"
        : "text-base-content";
  const directionIcon =
    direction === "up" ? "▲" : direction === "down" ? "▼" : "—";

  return (
    <section className="max-w-6xl mx-auto flex flex-col px-4 py-6 gap-6 mb-12">
      <Breadcrumb
        categoryName={product.categoryNameBn}
        categorySlug={product.category}
        productName={product.nameBn}
      />

      <ProductOverview product={product} />

      <PriceSummary
        minPrice={minPrice}
        maxPrice={maxPrice}
        averagePrice={averagePrice}
        unit={getUnitInBangla(product.unit)}
      />

      <div className="p-5 flex flex-col rounded-2xl bg-base-100 border border-base-300">
        <h3 className="text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h3>

        <MarketTable markets={product.markets} />
      </div>

      <Link
        href={`/category/${product.category}`}
        className={`h-10 gap-1.5 px-4 border border-base-300 font-semibold text-sm py-0.5 rounded-lg flex items-center max-w-fit transition-colors hover:bg-base-300`}
      >
        <span>{product.categoryIcon}</span>
        <span>সব {product.categoryNameBn}</span>
      </Link>
    </section>
  );
}
