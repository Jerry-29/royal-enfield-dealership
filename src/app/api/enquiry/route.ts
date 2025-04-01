import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Partnership from "@/util/schema/partnership";
import { ApiError } from "@/util/types";
import { toast } from "sonner";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const data = await req.json();

    const partnership = await Partnership.create(data);

    return NextResponse.json(
      {
        success: true,
        message: "Partnership inquiry submitted successfully",
        data: partnership,
      },
      {
        status: 201,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
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
    return NextResponse.json(
      {
        success: false,
        message: error || "Something went wrong",
      },
      { status: 400 }
    );
  }
}
