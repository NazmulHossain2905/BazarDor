import { IProduct } from "@/interfaces/IProduct";
import bengaliDigit from "@/utils/bengaliDigit";
import ProductsGrid from "../common/ProductsGrid";

export default function AllProducts({ products }: { products: IProduct[] }) {
  return (
    <div id="সব-পণ্য">
      <h4 className="font-bold text-xl mb-3">সব পণ্য</h4>
      <p className="mb-4">
        মোট {bengaliDigit(products.length)} টি পণ্য দেখানো হচ্ছে
      </p>

      <ProductsGrid products={products} />
    </div>
  );
}
