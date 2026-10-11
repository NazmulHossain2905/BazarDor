"use client";

import MyButton from "@/components/common/Button";
import Input from "@/components/common/Input";
import SocialButtons from "@/components/common/SocialButtons";
import { signUp } from "@/lib/auth-client";
import { Form, Separator, toast } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

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

      const { data: resData, error } = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (error?.code === "VALIDATION_ERROR") {
        toast.danger("সঠিক ইমেইল ঠিকানা দিন।");
        return;
      }

      if (resData) {
        toast.success("অ্যাকাউন্ট তৈরি হয়েছে! স্বাগতম।");

        form.reset();
        setPassword("");
        setConfirmPassword("");

        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.danger("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isLoading = isSubmitting;

  return (
    <section className="max-w-md space-y-6 px-4 py-10 mx-auto">
      <div className="space-y-1 text-center">
        <h2 className="font-bold text-2xl">অ্যাকাউন্ট তৈরি করুন</h2>
        <p className="text-sm text-base-content/70">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <Form
        className="rounded-2xl bg-base-100 border border-base-300 p-6 flex flex-col gap-4"
        onSubmit={handleFormSubmit}
      >
        <Input
          id="name"
          label="নাম"
          placeholder="যেমন: রহিম উদ্দিন"
          isRequired
          isDisabled={isLoading}
          validate={(value) => {
            if (!value.trim()) {
              return "নাম দেওয়া আবশ্যক।";
            }
            if (value.trim().length < 2) {
              return "নাম কমপক্ষে ২ অক্ষরের হতে হবে।";
            }
            return undefined;
          }}
        />

        <Input
          id="email"
          label="ইমেইল"
          placeholder="you@example.com"
          isRequired
          isDisabled={isLoading}
          validate={(value) => {
            const email = value.trim();

            if (!email) {
              return "ইমেইল আবশ্যক।";
            }

            if (email.length > 254) {
              return "ইমেইল ২৫৪ অক্ষরের বেশি হতে পারবে না।";
            }

            // if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email)) {
            //   return "সঠিক ইমেইল দিন।";
            // }

            return undefined;
          }}
        />

        <Input
          id="password"
          label="পাসওয়ার্ড"
          placeholder="পাসওয়ার্ড"
          type="password"
          value={password}
          onChange={setPassword}
          isRequired
          isDisabled={isLoading}
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

        <Input
          id="confirmPassword"
          label="পাসওয়ার্ড নিশ্চিত করুন"
          placeholder="আবার লিখুন"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          isRequired
          isDisabled={isLoading}
          validate={(value) => {
            if (!value) {
              return "পাসওয়ার্ড নিশ্চিত করা আবশ্যক।";
            }

            if (value !== password) {
              return "দুটি পাসওয়ার্ড মিলছে না।";
            }

            return undefined;
          }}
        />

        <MyButton isDisabled={isLoading}>
          {isSubmitting
            ? "অনুগ্রহ করে অপেক্ষা করুন..."
            : "অ্যাকাউন্ট তৈরি করুন"}
        </MyButton>

        <div className="flex gap-4 items-center">
          <Separator className="flex-1 h-0.5 bg-base-content/10" />
          <span className="text-xs">অথবা</span>
          <Separator className="flex-1 h-0.5 bg-base-content/10" />
        </div>

        <SocialButtons />

        <p className="text-sm text-center">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="text-primary hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </Form>

      <div className="text-center text-base-content/60 hover:text-base-content transition-colors">
        <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
      </div>
    </section>
  );
}
