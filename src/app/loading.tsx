export default function HomePageSkeleton() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-6">
      <HeroSkeleton />

      <ProductSectionSkeleton count={3} titleWidth="w-36" />

      <ProductSectionSkeleton count={3} titleWidth="w-36" />

      <ProductSectionSkeleton count={6} titleWidth="w-28" />
    </section>
  );
}

interface ProductSectionSkeletonProps {
  count?: number;
  titleWidth?: string;
}

function HeroSkeleton() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-base-300 bg-base-100 p-6 sm:flex-row">
      {/* Hero text */}
      <div className="w-full max-w-xl">
        <div className="h-7 w-36 animate-pulse rounded-[14px] bg-base-300" />

        <div className="mt-3 h-10 w-full max-w-md animate-pulse rounded-lg bg-base-300" />

        <div className="mt-2 h-10 w-4/5 max-w-sm animate-pulse rounded-lg bg-base-300" />

        <div className="mt-5 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-base-300" />
          <div className="h-4 w-full animate-pulse rounded bg-base-300" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-base-300" />
        </div>

        <div className="mt-7 h-11 w-36 animate-pulse rounded-xl bg-base-300" />
      </div>

      {/* Hero image */}
      <div className="h-48 w-full max-w-79 shrink-0 animate-pulse rounded-2xl bg-base-300 sm:h-66" />
    </div>
  );
}

function ProductSectionSkeleton({
  count = 3,
  titleWidth = "w-36",
}: ProductSectionSkeletonProps) {
  return (
    <div>
      {/* Section heading */}
      <div className="mb-3 flex items-center gap-2">
        <div className="size-5 animate-pulse rounded bg-base-300" />
        <div
          className={`h-6 ${titleWidth} animate-pulse rounded bg-base-300`}
        />
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      {/* Product image and name */}
      <div className="flex items-center gap-3">
        <div className="size-12 shrink-0 animate-pulse rounded-xl bg-base-300" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-24 max-w-full animate-pulse rounded bg-base-300" />
          <div className="h-3 w-16 animate-pulse rounded bg-base-300" />
        </div>
      </div>

      {/* Price label */}
      <div className="mt-3 h-3 w-16 animate-pulse rounded bg-base-300" />

      {/* Price and change percentage */}
      <div className="mt-2 flex items-center justify-between gap-3">
        <div className="h-6 w-24 max-w-[60%] animate-pulse rounded bg-base-300" />
        <div className="h-7 w-16 shrink-0 animate-pulse rounded-xl bg-base-300" />
      </div>
    </div>
  );
}
