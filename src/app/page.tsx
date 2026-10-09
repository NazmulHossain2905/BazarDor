import { getAllProducts } from "@/apis/product";
import AllProducts from "@/components/home/AllProducts";
import Hero from "@/components/home/Hero";
import PriceDecreased from "@/components/home/PriceDecreased";
import PriceIncreased from "@/components/home/PriceIncreased";

export default async function HomePage() {
  const allProducts = await getAllProducts();

  const increasedProducts = allProducts
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const decreasedProducts = allProducts
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section className="max-w-7xl px-4 py-6 mx-auto flex flex-col gap-10">
      <Hero />
      <PriceIncreased products={increasedProducts} />
      <PriceDecreased products={decreasedProducts} />
      <AllProducts products={allProducts} />
    </section>
  );
}
