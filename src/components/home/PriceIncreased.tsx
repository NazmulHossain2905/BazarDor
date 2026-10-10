import { IProduct } from "@/interfaces/IProduct";
import ProductsGrid from "../common/ProductsGrid";

export default function PriceIncreased({ products }: { products: IProduct[] }) {
  return (
    <div>
      <h4 className="font-bold text-xl mb-3">
        <span className="text-error">▲</span> আজ দাম বেড়েছে
      </h4>

      <ProductsGrid products={products} />
    </div>
  );
}
