"use client";

import MyButton from "@/components/common/Button";
import Input from "@/components/common/Input";
import SocialButtons from "@/components/common/SocialButtons";
import { signIn } from "@/lib/auth-client";
import { Form, Separator, toast } from "@heroui/react";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

export default function SignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      setIsSubmitting(true);

      const { data: resData, error } = await signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (error) {
        toast.danger(error.message);
        return;
      }

      if (resData) {
        toast.success("সফলভাবে সাইন ইন হয়েছে।");

        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.danger("কিছু একটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isLoading = isSubmitting;

  return (
    <section className="max-w-md space-y-6 px-4 py-10 mx-auto">
      <div className="space-y-1 text-center">
        <h2 className="font-bold text-2xl">সাইন ইন</h2>
        <p className="text-sm text-base-content/70">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <Form
        className="rounded-2xl bg-base-100 border border-base-300 p-6 flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <Input
          id="email"
          label="ইমেইল"
          placeholder="you@example.com"
          isRequired
          validate={(value) =>
            !value.trim()
              ? "ইমেইল আবশ্যক।"
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? "সঠিক ইমেইল দিন।"
                : undefined
          }
        />

        <Input
          id="password"
          label="পাসওয়ার্ড"
          placeholder="পাসওয়ার্ড"
          type="password"
          isRequired
          validate={(value) => {
            if (value.length < 8) {
              return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
            }
            if (!/[A-Z]/.test(value)) {
              return "পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের ইংরেজি অক্ষর (A-Z) থাকতে হবে।";
            }
            if (!/[0-9]/.test(value)) {
              return "পাসওয়ার্ডে কমপক্ষে একটি সংখ্যা (0-9) থাকতে হবে।";
            }
            return undefined;
          }}
        />

        <MyButton isDisabled={isLoading}>
          {isSubmitting ? "অনুগ্রহ করে অপেক্ষা করুন..." : "সাইন ইন"}
        </MyButton>

        <div className="flex gap-4 items-center">
          <Separator className="flex-1 h-0.5 bg-base-content/10" />
          <span className="text-xs">অথবা</span>
          <Separator className="flex-1 h-0.5 bg-base-content/10" />
        </div>

        <SocialButtons />

        <p className="text-sm text-center">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            সাইন আপ করুন
          </Link>
        </p>
      </Form>

      <div className="text-center text-base-content/60 hover:text-base-content transition-colors">
        <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
      </div>
    </section>
  );
}
