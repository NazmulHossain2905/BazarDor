import { IProduct } from "@/interfaces/IProduct";
import ProductsGrid from "../common/ProductsGrid";

export default function PriceDecreased({ products }: { products: IProduct[] }) {
  return (
    <div>
      <h4 className="font-bold text-xl mb-3">
        <span className="text-success">▼</span> আজ দাম কমেছে
      </h4>

      <ProductsGrid products={products} />
    </div>
  );
}
