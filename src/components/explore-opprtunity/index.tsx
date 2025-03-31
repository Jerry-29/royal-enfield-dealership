"use client"
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const ExploreOpportunity = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/opportunity")}
      size="lg"
      className="bg-primary hover:bg-primary/90"
    >
      Explore Opportunities
    </Button>
  );
};
