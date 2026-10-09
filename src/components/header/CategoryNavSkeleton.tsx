export default function CategoryNavSkeleton() {
  return (
    <nav className="border-t border-t-base-200 bg-base-100">
      <ul className="mx-auto flex max-w-7xl animate-pulse gap-1 overflow-hidden px-4 py-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <li
            key={index}
            className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg px-3 py-0.5"
          >
            {/* Icon placeholder */}
            <span className="size-4 rounded-full bg-base-300" />

            {/* Category name placeholder */}
            <span
              className={`h-3 rounded-sm bg-base-300 ${
                index % 3 === 0 ? "w-12" : index % 3 === 1 ? "w-16" : "w-10"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
