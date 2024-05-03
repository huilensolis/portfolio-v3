"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import NossrComponent from "../nossr/nossr.component";

const TIME_ZONE = "Argetina/Buenos_Aires";

export function ClockLocal() {
  const [date, setDate] = useState(() => {
    const date = DateTime.now();
    date.setZone(TIME_ZONE);

    return date;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = DateTime.now();
      newDate.setZone(TIME_ZONE);
      setDate(newDate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <NossrComponent>
      <span>
        {date.hour}:{date.minute}:{date.second}
      </span>
    </NossrComponent>
  );
}
