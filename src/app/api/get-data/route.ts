import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Partnership from "@/util/schema/partnership";
import { FilterQuery } from "mongoose";

interface PartnershipDocument {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  location: string;
  partnershipType: string;
  submittedAt: Date;
}

export async function GET(request: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.max(1, Math.min(100, parseInt(searchParams.get("limit") || "10")));
    const search = searchParams.get("search") || "";
    const type = searchParams.get("type") || "all";

    // Build query with proper typing
    const query: FilterQuery<PartnershipDocument> = {};
    
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { companyName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    if (type !== "all") {
      query.partnershipType = type;
    }

    const skip = (page - 1) * limit;

    const [partnerships, total] = await Promise.all([
      Partnership.find(query)
        .sort({ submittedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()
        .exec(),
      Partnership.countDocuments(query)
    ]);

    return NextResponse.json({
      success: true,
      data: partnerships,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error("Error fetching partnerships:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch partnerships",
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}