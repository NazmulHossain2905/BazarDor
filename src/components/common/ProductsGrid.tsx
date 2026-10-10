import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }: { products: IProduct[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
