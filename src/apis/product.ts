import { ICategory } from "@/interfaces/ICategory";

const BASE_URL = "https://api.api-store.workers.dev";

export async function getCategories(): Promise<ICategory[]> {
  const response = await fetch(`${BASE_URL}/api/bazardor/categories`);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }

  return response.json();
}
