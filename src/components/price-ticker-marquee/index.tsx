import { getAllProducts } from "@/apis/product";
import AppMarquee from "../common/AppMarquee";
import PriceTickerItem from "./PriceTickerItem";

export default async function PriceTickerMarquee() {
  const products = await getAllProducts();

  const filteredProducts = products.filter((p) => p.change.dir !== "flat");

  return (
    <div className="border-b border-b-base-300 bg-base-100">
      <AppMarquee className="overflow-hidden">
        {filteredProducts.map((product) => (
          <PriceTickerItem key={product.id} product={product} />
        ))}
      </AppMarquee>
    </div>
  );
}
