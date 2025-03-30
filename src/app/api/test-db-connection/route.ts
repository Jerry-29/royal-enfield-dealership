import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({ status: 'Connected to MongoDB' });
  } catch (error) {
    return NextResponse.json({ status: 'Connection failed', error }, { status: 500 });
  }
}