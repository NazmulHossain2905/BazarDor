import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "../common/ProductCard";

export default function PriceIncreased({ products }: { products: IProduct[] }) {
  return (
    <div>
      <h4 className="font-bold text-xl mb-3">
        <span className="text-error">▲</span> আজ দাম বেড়েছে
      </h4>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
