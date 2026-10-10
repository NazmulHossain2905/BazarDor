import { getProductsByCategory } from "@/apis/product";
import ProductsList from "@/components/category/ProductsList";

interface CategoryDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryDetails({
  params,
}: CategoryDetailsProps) {
  const { id: categoryId } = await params;

  const products = await getProductsByCategory(categoryId);

  return (
    <section className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6">
      <div className="p-5 flex items-center gap-3 rounded-2xl bg-base-100 border border-base-300">
        <p className="text-4xl">{products?.[0].categoryIcon}</p>
        <div>
          <h3 className="text-2xl font-bold">{products?.[0].categoryNameBn}</h3>
          <p className="text-sm text-base-content/70">
            {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </p>
        </div>
      </div>

      <ProductsList products={products} />
    </section>
  );
}
