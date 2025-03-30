import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Partnership from "@/util/schema/partnership";
import { ApiError } from "@/util/types";
import { toast } from "sonner";

export async function GET() {
  try {
    await dbConnect();

    const partnerships = await Partnership.find({})
      .sort({ submittedAt: -1 })
      .lean()
      .exec();

    return NextResponse.json(
      {
        success: true,
        count: partnerships.length,
        data: partnerships,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else if (typeof error === "object" && error !== null) {
      const apiError = error as ApiError;
      toast.error(apiError.message || "An unexpected error occurred");
    } else {
      toast.error("Failed to submit form");
    }
    console.error("Error fetching partnerships:", error);
    return NextResponse.json(
      {
        success: false,
        message: error || "Failed to fetch partnerships",
        error: process.env.NODE_ENV === "development" ? error : undefined,
      },
      {
        status: 500,
      }
    );
  }
}
