import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "../common/ProductCard";

export default function PriceDecreased({ products }: { products: IProduct[] }) {
  return (
    <div>
      <h4 className="font-bold text-xl mb-3">
        <span className="text-success">▼</span> আজ দাম কমেছে
      </h4>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
