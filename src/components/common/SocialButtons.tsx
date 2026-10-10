import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function SocialButtons() {
  return (
    <div className="flex w-full gap-2 flex-col md:flex-row">
      <Button
        variant="outline"
        className="w-full text-sm font-semibold rounded-lg gap-1.5 px-3 md:flex-1"
      >
        <Icon icon="devicon:google" className="size-3.5" />
        Google দিয়ে চালিয়ে যান
      </Button>

      <Button
        variant="outline"
        className="w-full text-sm font-semibold rounded-lg gap-1.5 px-3 md:flex-1"
      >
        <Icon icon="mdi:github" className="size-3.5" />
        GitHub দিয়ে চালিয়ে যান
      </Button>
    </div>
  );
}
