import { Suspense } from "react";
import CategoryNavSkeleton from "./CategoryNavSkeleton";
import Logo from "./Logo";
import NavCategory from "./NavCategory";
import RightContent from "./RightContent";

export default function Header() {
  return (
    <header className="bg-base-100 border-b sticky top-0 z-10 border-b-base-300">
      <div className="px-4 py-3 gap-2 md:gap-3 flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <RightContent />
      </div>

      <Suspense fallback={<CategoryNavSkeleton />}>
        <NavCategory />
      </Suspense>
    </header>
  );
}
