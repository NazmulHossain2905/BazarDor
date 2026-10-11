"use client";

import MyButton from "@/components/common/Button";
import Input from "@/components/common/Input";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileLoading from "@/components/profile/ProfileLoading";
import { IUser } from "@/interfaces/IUser";
import { updateUser, useSession } from "@/lib/auth-client";
import { Form, toast } from "@heroui/react";
import { SyntheticEvent, useEffect, useState } from "react";

export default function ProfilePage() {
  const { data, isPending } = useSession();
  const user = data?.user;

  const [name, setName] = useState(user?.name ?? "...");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const handleUpdateUser = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      setIsSubmitting(true);
      const { data: resData, error } = await updateUser({
        name: data.name,
      });

      if (resData?.status) {
        toast.success("নাম সফলভাবে আপডেট হয়েছে।");
      }
    } catch (error) {
      console.error(error);
      toast.danger("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoading = isPending || isSubmitting;

  return (
    <section className="px-4 py-6 flex flex-col gap-6 max-w-3xl mx-auto mt-8 md:mt-25">
      <title>আমার প্রোফাইল | বাজার দর</title>
      <div className="space-y-1">
        <h2 className="font-bold text-2xl">আমার প্রোফাইল</h2>
        <p className="text-sm text-base-content/70">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {isPending ? <ProfileLoading /> : <ProfileCard user={user as IUser} />}

      <div className="p-6 flex flex-col rounded-2xl bg-base-100 border border-base-300">
        <h3 className="text-lg font-semibold">তথ্য</h3>

        <Form
          className="rounded-2xl bg-base-200 border border-base-300 p-6 flex flex-col gap-4 mt-3"
          onSubmit={handleUpdateUser}
        >
          <Input
            id="name"
            label="নাম"
            placeholder="নাম"
            value={name}
            onChange={setName}
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

          <MyButton isDisabled={isLoading}>
            {isSubmitting ? "অনুগ্রহ করে অপেক্ষা করুন..." : "আপডেট করুন"}
          </MyButton>
        </Form>
      </div>
    </section>
  );
}
