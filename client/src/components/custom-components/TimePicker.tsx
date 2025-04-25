"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function TimePicker() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  //fetch available time from db
  const [availTime, setAvailTime] = React.useState(["9:00", "10:00", "11:00"]);
  const [position, setPosition] = React.useState();

  useEffect(() => {
    console.log("position is " + position);
  }, [position]);

  return (
    <div className="border-2 border-red-500 flex justify-around">
      <h4>Time</h4>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[250px]">
            {!position ? "Choose a start time" : position}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <div className="flex flex-col space-y-2">
            {availTime.map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded p-2">
                <DropdownMenuCheckboxItem>
                  <h4>{item}</h4>
                </DropdownMenuCheckboxItem>
              </div>
            ))}
          </div> */}
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <div className="flex flex-col space-y-2">
              {availTime.map((item, idx) => (
                <div key={idx} className="border border-gray-300 rounded p-2">
                  <DropdownMenuRadioItem value={item}>
                    <h4>{item}</h4>
                  </DropdownMenuRadioItem>
                </div>
              ))}
            </div>
          </DropdownMenuRadioGroup>

          {/* <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
