export default function PriceTickerSkeleton() {
  return (
    <div className="flex overflow-hidden">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-1.5 border-r border-r-base-200 px-4 py-2 text-sm"
        >
          {/* Product image / emoji */}
          <div className="size-4 shrink-0 animate-pulse rounded bg-base-300" />
          {/* Product name */}
          <div className="h-4 w-16 shrink-0 animate-pulse rounded bg-base-300" />
          {/* Price and unit */}
          <div className="h-4 w-24 shrink-0 animate-pulse rounded bg-base-300" />
          {/* Price change percentage */}
          <div className="h-4 w-12 shrink-0 animate-pulse rounded bg-base-300" />
        </div>
      ))}
    </div>
  );
}
