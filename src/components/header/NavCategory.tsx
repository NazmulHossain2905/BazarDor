import { getCategories } from "@/apis/product";
import CategoryNavLinks from "./CategoryNavLinks";

export default async function NavCategory() {
  const categories = await getCategories();

  return (
    <nav className="bg-base-100 border-t border-t-base-200">
      <CategoryNavLinks categories={categories} />
    </nav>
  );
}
