"use client";
import { Button } from "@/components/ui/button";
export const DownloProfile = () => {
  const handleProfiledownload = () => {
    const pdfPath = "/profile/company-profile.pdf",
      filename = "company-profile.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button onClick={handleProfiledownload}>Download Company Profile</Button>
  );
};
