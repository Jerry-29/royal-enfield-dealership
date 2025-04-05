"use client"
import { Button } from "../ui/button";

export const ApplyBtn = () => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="bg-white text-black hover:bg-white/90"
      onClick={() => {
        const contactSection = document.getElementById("form-first-child");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }}
    >
      Apply Now
    </Button>
  );
};
