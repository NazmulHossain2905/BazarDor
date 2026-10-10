import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }: { products: IProduct[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
