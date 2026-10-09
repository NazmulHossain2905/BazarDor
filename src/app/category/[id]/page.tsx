interface CategoryDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CategoryDetails({
  params,
}: CategoryDetailsProps) {
  const { id: categoryId } = await params;

  return <div>Category Id: {categoryId}</div>;
}
