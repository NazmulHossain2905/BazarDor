import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "../common/ProductCard";

export default function AllProducts({ products }: { products: IProduct[] }) {
  return (
    <div id="সব-পণ্য">
      <h4 className="font-bold text-xl mb-3">সব পণ্য</h4>
      <p className="mb-4">
        মোট {products.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
