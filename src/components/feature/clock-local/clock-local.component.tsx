"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { TIME_ZONE } from "@/utils/consts";

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
    <span className="text-lg" suppressHydrationWarning>
      {date.hour}:{date.minute}:{date.second}
    </span>
  );
}
