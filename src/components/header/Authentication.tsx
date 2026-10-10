import Link from "next/link";
import Button from "../common/Button";

export default function Authentication() {
  return (
    <div className="flex gap-2">
      <Link href="/signin">
        <Button variant="ghost">সাইন ইন</Button>
      </Link>
      <Link href="/signup">
        <Button>সাইন আপ</Button>
      </Link>
    </div>
  );
}
