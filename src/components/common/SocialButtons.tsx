"use client";

import { signIn } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function SocialButtons() {
  const [socialLoading, setSocialLoading] = useState<
    "google" | "github" | null
  >(null);

  const handleGoogle = async () => {
    try {
      setSocialLoading("google");

      const { data, error } = await signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        toast.danger(error.message);
        return;
      }

      if (data) {
        toast.success("অ্যাকাউন্টে প্রবেশ সফল হয়েছে।");
      }
    } catch (error) {
      console.error(error);
      toast.danger(
        "Google দিয়ে সাইন আপ করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
      );
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    <div className="flex w-full gap-2 flex-col md:flex-row">
      <Button
        onClick={handleGoogle}
        variant="outline"
        className="w-full text-sm font-semibold rounded-lg gap-1.5 px-3 md:flex-1"
        isDisabled={!!socialLoading}
      >
        <Icon icon="devicon:google" className="size-3.5" />

        {socialLoading === "google"
          ? "যুক্ত হচ্ছে…"
          : "Google দিয়ে চালিয়ে যান"}
      </Button>

      <Button
        variant="outline"
        className="w-full text-sm font-semibold rounded-lg gap-1.5 px-3 md:flex-1"
        isDisabled={!!socialLoading}
      >
        <Icon icon="mdi:github" className="size-3.5" />
        {socialLoading === "github"
          ? "যুক্ত হচ্ছে…"
          : "GitHub দিয়ে চালিয়ে যান"}
      </Button>
    </div>
  );
}
