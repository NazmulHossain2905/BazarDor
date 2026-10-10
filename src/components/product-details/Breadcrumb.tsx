import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface BreadcrumbProps {
  categoryName: string;
  categorySlug: string;
  productName: string;
}

export default function Breadcrumb({
  categoryName,
  categorySlug,
  productName,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2.5"
    >
      {" "}
      <Link href="/" className="text-sm hover:underline">
        হোম{" "}
      </Link>
      <FaChevronRight
        aria-hidden="true"
        className="size-2.5 shrink-0 text-base-content/50"
      />
      <Link
        href={`/category/${categorySlug}`}
        className="text-sm hover:underline"
      >
        {categoryName}
      </Link>
      <FaChevronRight
        aria-hidden="true"
        className="size-2.5 shrink-0 text-base-content/50"
      />
      <span aria-current="page" className="text-sm text-base-content">
        {productName}
      </span>
    </nav>
  );
}
