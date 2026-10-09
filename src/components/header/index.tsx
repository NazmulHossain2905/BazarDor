import { Suspense } from "react";
import CategoryNavSkeleton from "./CategoryNavSkeleton";
import Logo from "./Logo";
import NavCategory from "./NavCategory";
import User from "./User";

export default function Header() {
  return (
    <header className="bg-base-100 border-b border-b-base-300">
      <div className="px-4 py-3 gap-3 flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <User />
      </div>
      <Suspense fallback={<CategoryNavSkeleton />}>
        <NavCategory />
      </Suspense>
    </header>
  );
}
