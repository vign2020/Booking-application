import React from "react";
import { Button } from "../ui/button";

export function DurationPicker() {
  return (
    <div className="border-2 border-red-500 flex justify-around">
      <h4>Duration</h4>
      <div className="button-wrapper  w-[250px] border-2 border-red-500 flex justify-around">
        <Button>+</Button>
        <h4>12</h4>
        <Button>-</Button>
      </div>
    </div>
  );
}
