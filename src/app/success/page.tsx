import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-12 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You for Your Interest!
        </h1>
        <p className="text-gray-600 mb-8">
          Your partnership inquiry has been successfully submitted. Our team will review
          your application and contact you soon.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
          {/* <p className="text-sm text-gray-500">
            Reference ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
          </p> */}
        </div>
      </div>
    </div>
  );
}