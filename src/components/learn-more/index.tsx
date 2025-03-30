"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const LearnMore = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/support")}
      variant="link"
      className="p-0"
    >
      Learn More →
    </Button>
  );
};
