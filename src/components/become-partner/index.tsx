"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const BecomePartner = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.replace("#contact")}
      className="hidden md:inline-flex"
    >
      Become a Partner
    </Button>
  );
};
