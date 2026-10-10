"use client";

import { useSession } from "@/lib/auth-client";
import Authentication from "./Authentication";
import User from "./User";

export default function RightContent() {
  const { data, isPending } = useSession();
  const user = data?.user;

  if (isPending) {
    return <RightContentLoading />;
  }

  return user ? <User user={user} /> : <Authentication />;
}

function RightContentLoading() {
  return (
    <div className="flex gap-2 px-4 py-1 animate-pulse items-center">
      <div className="size-9 rounded-xl bg-base-300 " />
      <div className="h-4 w-16 rounded-sm bg-base-300 " />
      <div className="h-4 w-4 rounded-sm bg-base-300 " />
    </div>
  );
}
