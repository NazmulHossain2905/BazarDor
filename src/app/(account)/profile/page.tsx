"use client";

import MyButton from "@/components/common/Button";
import Input from "@/components/common/Input";
import { Form } from "@heroui/react";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import { TbLogout2 } from "react-icons/tb";

export default function ProfilePage() {
  const [name, setName] = useState("Rezwan Ahmed");

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
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
    <section className="px-4 py-6 flex flex-col gap-6 max-w-3xl mx-auto mt-25">
      <div className="space-y-1">
        <h2 className="font-bold text-2xl">আমার প্রোফাইল</h2>
        <p className="text-sm text-base-content/70">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <div className="p-6 flex gap-4 rounded-2xl bg-base-100 border border-base-300 items-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAoztWOBzzT4Ot88AyzvYq0Ng6A_NNSpgh32mfE-zEiMEUR5HTUPVfnRM"
          width={70}
          height={70}
          alt="Logo Image"
          className="w-16 h-16 rounded-xl"
          priority
        />

        <div className="flex-1">
          <h4 className="font-semibold text-xl">Rezwan Ahmed</h4>
          <p className="text-base-content/70">rezwanahmed@gmail.com</p>
        </div>

        <button className="h-10 px-4 py-1.5 rounded-lg border border-error text-sm font-semibold cursor-pointer text-error flex items-center gap-2 hover:bg-error/10 transition-colors">
          <TbLogout2 className="size-4" /> <span>সাইন আউট</span>
        </button>
      </div>

      <div className="p-6 flex flex-col rounded-2xl bg-base-100 border border-base-300">
        <h3 className="text-lg font-semibold">তথ্য</h3>

        <Form
          className="rounded-2xl bg-base-100 border border-base-300 p-6 flex flex-col gap-4 mt-3"
          onSubmit={onSubmit}
        >
          <Input
            id="name"
            label="নাম"
            placeholder="নাম"
            value={name}
            onChange={setName}
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

          <MyButton>আপডেট</MyButton>
        </Form>
      </div>
    </section>
  );
}
