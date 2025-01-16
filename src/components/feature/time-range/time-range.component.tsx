"use client";

import { TIME_ZONE } from "@/utils/consts";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export function TimeRange() {
	const [cordobasDate, setCordobasTime] = useState(() => {
		const local = DateTime.local();

		const date = local.setZone(TIME_ZONE);

		return date;
	});

	const [clientDate, setClientDate] = useState(DateTime.now());

	useEffect(() => {
		setClientDate(DateTime.now().toLocal());
	}, []);

	return (
		<div className="relative">
			<ul className="grid pb-2 grid-cols-[repeat(7,_minmax(0,_1.25rem))] items-start gap-5 relative">
				{["00", "04", "08", "12", "16", "20", "24"].map((time, i) => (
					<li
						key={i}
						className="flex items-center justify-start text-neutral-400"
					>
						{time}
					</li>
				))}
			</ul>
			<ul className="grid grid-cols-[repeat(25,_minmax(0,_calc(1.25rem/2)))] pl-[calc(((1.25rem/2)+0.12rem)/2)]">
				{Array(25)
					.fill("")
					.map((_, i) => (
						<li key={i} className="flex items-center justify-center">
							<div
								className={`h-4 w-[0.12rem] rounded-sm ${
									i % 4 === 0 ? "bg-neutral-500" : "bg-neutral-700"
								}`}
							></div>
						</li>
					))}
			</ul>
			<div
				style={{
					position: "absolute",
					top: "1rem",
					left: cordobasDate.hour * 10 + 3,
				}}
			>
				<div className="relative pt-[4.50rem] flex items-center justify-center">
					<div className="absolute top-2 left-0 w-[1rem] flex items-center justify-center">
						<div className="h-8 w-[0.03rem] bg-orange-600"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
