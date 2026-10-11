export default function ProfileLoading() {
  return (
    <div
      className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 md:flex-row md:items-center"
      aria-busy="true"
      aria-label="প্রোফাইল লোড হচ্ছে"
    >
      <div className="flex flex-1 items-center gap-4">
        {/* Avatar skeleton */}
        <div className="size-16 shrink-0 animate-pulse rounded-xl bg-base-300" />

        {/* User info skeleton */}
        <div className="min-w-0 flex-1 space-y-3">
          <div className="h-6 w-40 max-w-full animate-pulse rounded-md bg-base-300" />

          <div className="h-4 w-52 max-w-full animate-pulse rounded-md bg-base-300" />
        </div>
      </div>

      {/* Sign out button skeleton */}
      <div className="h-10 w-full animate-pulse rounded-lg bg-base-300 md:w-28" />
    </div>
  );
}
