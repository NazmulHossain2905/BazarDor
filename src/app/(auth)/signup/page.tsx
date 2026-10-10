"use client";

import MyButton from "@/components/common/Button";
import Input from "@/components/common/Input";
import SocialButtons from "@/components/common/SocialButtons";
import { Form, Separator } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

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
        onSubmit={onSubmit}
      >
        <Input
          id="name"
          label="নাম"
          placeholder="যেমন: রহিম উদ্দিন"
          isRequired
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
          value={password}
          onChange={setPassword}
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

        <Input
          id="confirmPassword"
          label="পাসওয়ার্ড নিশ্চিত করুন"
          placeholder="আবার লিখুন"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          isRequired
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

        <MyButton>অ্যাকাউন্ট তৈরি করুন</MyButton>

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
