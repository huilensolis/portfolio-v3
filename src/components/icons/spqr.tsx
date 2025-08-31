import { cn } from "@/utils/cn";
import { SVGAttributes } from "react";

type TProps = {
    width?: number
    height?: number
    textFontSize?: number
}

export function Spqr({
	className,
    width = 45,
    height = 28,
    textFontSize=13,
	...props
}: SVGAttributes<HTMLOrSVGElement> & TProps) {
    const borderRadious = width / 14
	return (
		<svg
			{...props}
			className={cn("", className)}
            width={width}
            height={height}
			role="img"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Spqr</title>
            <rect className="w-full h-full fill-red-500 rounded-md" rx={borderRadious}></rect>
            <text className="fill-amber-200 font-semibold" x={width/2} fontSize={textFontSize} y={(height / 2) + (textFontSize * 0.35)} textAnchor="middle">SPQR</text>
		</svg>
	);
}
