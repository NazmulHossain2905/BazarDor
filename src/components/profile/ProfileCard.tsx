import { IUser } from "@/interfaces/IUser";
import { signOut } from "@/lib/auth-client";
import { toast } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbLogout2 } from "react-icons/tb";

interface ProfileCardProps {
  user: IUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const { data } = await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.replace("/");
            router.refresh();
          },
        },
      });

      if (data?.success) {
        toast.success("সফলভাবে সাইন আউট হয়েছে।");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 flex gap-4 rounded-2xl bg-base-100 border border-base-300 md:items-center flex-col md:flex-row">
      <div className="flex gap-4 flex-1 items-center">
        {user?.image ? (
          <Image
            src={user.image}
            width={70}
            height={70}
            alt={user.name}
            className="w-16 h-16 rounded-xl"
            priority
          />
        ) : (
          <div className="w-16 h-16 rounded-xl bg-primary/40 flex justify-center items-center text-2xl font-bold text-primary">
            {user?.name?.[0].toUpperCase() || "-"}
          </div>
        )}

        <div className="flex-1">
          <h4 className="font-semibold text-xl">{user?.name}</h4>
          <p className="text-base-content/70">{user?.email}</p>
        </div>
      </div>

      <button
        onClick={handleSignOut}
        className="h-10 w-full md:w-auto justify-center px-4 py-1.5 rounded-lg border border-error text-sm font-semibold cursor-pointer text-error flex items-center gap-2 hover:bg-error/10 transition-colors"
      >
        <TbLogout2 className="size-4" /> <span>সাইন আউট</span>
      </button>
    </div>
  );
}
