"use client";

import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";
import { DurationPicker } from "./DurationPicker";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CourtPicker } from "./CourtPicker";

export default function Submission() {
  const [subdata, setSubdata] = useState<Date>();
  useEffect(() => {
    console.log("sub data is " + subdata);
  }, [subdata]);

  return (
    // <div>
    <div className="border-2 border-red-500 flex flex-col space-y-4 p-4 w-2/5 ">
      <div className="border-2 border-red-500 flex justify-around">
        <h4>Date </h4>
        <DatePicker setSubdata={setSubdata} />
      </div>

      <TimePicker />
      <DurationPicker />
      <CourtPicker />
      <Button className="w-fit">Submit</Button>
    </div>
    // </div>
  );
}
