import { connectionToDatabase } from "@/lib/dbConnect";
import Avail from "../../../../models/Availability";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    await connectionToDatabase();
    const { player_name, venue, from_time, to_time, court_no } =
      await request.json();
    console.log(
      "player_name : " +
        player_name +
        "from Time " +
        from_time +
        "to time is " +
        to_time
    );
    //check if there is time clash
    const clash = await Avail.findOne({
      from_time: { $lt: to_time },
      to_time: { $gt: from_time },
    });
    if (clash) {
      console.log("clash is " + clash);
      return NextResponse.json({
        status: 200,
        messsage: "sorry all slots are full !",
      });
    }

    const avail = new Avail({
      player_name,
      venue,
      from_time,
      to_time,
      court_no,
    });
    await avail.save();
    return NextResponse.json(avail, { status: 201 });
  } catch (e) {
    console.log(e);
  }
}
