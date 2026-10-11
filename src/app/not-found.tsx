import Button from "@/components/common/Button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
      <p aria-hidden="true" className="text-6xl">
        🧺
      </p>
      <h1 className="text-2xl font-bold">পাতাটি খুঁজে পাওয়া যায়নি</h1>
      <p className="text-base-content/70">
        আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button>
          <Link href="/">হোম পেজে ফিরে যান</Link>
        </Button>
        {/* <Button variant="outline">
          <Link href="/compare">বাজার তুলনা দেখুন</Link>
        </Button> */}
      </div>
    </div>
  );
}
