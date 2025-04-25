import { connectionToDatabase } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import Venue from "../../../../models/Venue";

export async function POST(request: any) {
  try {
    await connectionToDatabase();
    const { venue_name, court_names, no_of_courts, hourly_price } =
      await request.json();
    console.log(
      "data is " + venue_name + " " + no_of_courts + " " + hourly_price
    );
    const venue = new Venue({
      venue_name,
      no_of_courts,
      court_names,
      hourly_price,
    });

    await venue.save();
    return NextResponse.json(venue, { status: 201 });
  } catch (e) {
    console.log(e);
  }
}
