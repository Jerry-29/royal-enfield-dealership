import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Partnership from "@/util/schema/partnership";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const id = await Promise.resolve(params.id);

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Invalid partnership ID" },
        { status: 400 }
      );
    }

    // Update document directly
    const updatedPartnership = await Partnership.findByIdAndUpdate(
      id,
      {
        $set: { isRead: true },
        $currentDate: { updatedAt: true },
      },
      {
        new: true,
        runValidators: true,
        lean: true, // Return plain JavaScript object
      }
    );

    if (!updatedPartnership) {
      return NextResponse.json(
        { success: false, message: "Partnership not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedPartnership,
    });
  } catch (error) {
    console.error("Error marking partnership as read:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to update partnership",
      },
      { status: 500 }
    );
  }
}
