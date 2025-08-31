import { cn } from "@/utils/cn";
import { SVGAttributes } from "react";

export function Spqr({
	className,
	...props
}: SVGAttributes<HTMLOrSVGElement>) {
    const width = 45
    const height = 28
    const borderRadious = width / 14

    const textFontSize = 13
	return (
		<svg
			{...props}
			className={cn("", className)}
            width={width}
            height={height}
			role="img"
			/* viewBox="0 0 24 24" */
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Spqr</title>
            <rect className="w-full h-full fill-red-500 rounded-md" rx={borderRadious}></rect>
            <text className="fill-amber-200 font-semibold" x={width/2} fontSize={textFontSize} y={(height / 2) + (textFontSize * 0.35)} textAnchor="middle">SPQR</text>
		</svg>
	);
}
