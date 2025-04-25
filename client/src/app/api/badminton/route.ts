// export async function GET() {
//   return Response.json({ abc: 1123 });
// }

import { connectionToDatabase } from "@/lib/dbConnect";
import User from "../../../../models/User";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    await connectionToDatabase();
    const { name, email } = await request.json();
    const newUser = new User({ name, email });
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (e) {
    console.log(e);
  }
}
