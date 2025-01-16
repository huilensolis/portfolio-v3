"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { TIME_ZONE } from "@/utils/consts";

export function ClockLocal() {
	const [date, setDate] = useState(() => {
		const local = DateTime.local();

		const cordobaDate = local.setZone(TIME_ZONE);

		return cordobaDate;
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const local = DateTime.local();

			const cordobaDate = local.setZone(TIME_ZONE);

			setDate(cordobaDate);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<span suppressHydrationWarning className="font-mono">
			{date.hour}:{date.minute}:{date.second}
		</span>
	);
}
