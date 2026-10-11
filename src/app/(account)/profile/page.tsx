import ProfilePage from "@/components/profile/ProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "আমার প্রোফাইল | বাজার দর",
};

export default function Page() {
  return <ProfilePage />;
}
