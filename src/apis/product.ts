import { ICategory } from "@/interfaces/ICategory";
import { IProduct } from "@/interfaces/IProduct";

const BASE_URL = "https://openapi.programming-hero.com";

export async function getCategories(): Promise<ICategory[]> {
  const response = await fetch(`${BASE_URL}/api/bazardor/categories`);

  if (!response.ok) {
    throw new Error(`Failed to fetch getCategories: ${response.status}`);
  }

  return response.json();
}

export async function getAllProducts(): Promise<IProduct[]> {
  const response = await fetch(`${BASE_URL}/api/bazardor/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch getAllProducts: ${response.status}`);
  }

  return response.json();
}

export async function getProductsByCategory(
  category: string,
): Promise<IProduct[]> {
  const response = await fetch(
    `${BASE_URL}/api/bazardor/products?category=${category}`,
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch getProductsByCategory: ${response.status}`,
    );
  }

  return response.json();
}

export async function getSingleProduct(
  productId: string,
): Promise<IProduct | null> {
  const response = await fetch(
    `${BASE_URL}/api/bazardor/products/${productId}`,
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch getSingleProduct: ${response.status}`);
  }

  return response.json();
}
