export default function CategoryDetailsLoading() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
      <ProductHeaderSkeleton />

      <SortDropDownSkeleton />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 -mt-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

function SortDropDownSkeleton() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="h-4 w-40 animate-pulse rounded-md bg-base-300" />

      <div className="flex items-center gap-2">
        <div className="h-4 w-20 animate-pulse rounded bg-base-300" />

        <div className="h-10 border border-base-300 flex items-center rounded-xl px-2 gap-2">
          <div className="h-4 w-12 animate-pulse rounded bg-base-300" />
          <div className="h-4 w-4 animate-pulse rounded bg-base-300" />
        </div>
      </div>
    </div>
  );
}

function ProductHeaderSkeleton() {
  return (
    <div className="flex animate-pulse items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-5">
      {/* Emoji skeleton */}
      <div className="h-10 w-10 shrink-0 rounded-lg bg-base-300" />

      <div className="min-w-0 flex-1 space-y-2">
        {/* Title skeleton */}
        <div className="h-7 w-20 rounded-md bg-base-300" />

        {/* Description skeleton */}
        <div className="h-4 w-64 max-w-full rounded-md bg-base-300" />
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
