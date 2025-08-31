import { cn } from "@/utils/cn";
import { SVGAttributes } from "react";

type TProps = {
    width?: number
    height?: number
    textFontSize?: number
}

export function AtticGreekFlag({
	className,
    width = 45,
    height = 28,
    textFontSize=13,
	...props
}: SVGAttributes<HTMLOrSVGElement> & TProps) {
    const borderRadious = width / 14

    const iconSize = width / 2.3
	return (
		<svg
			{...props}
			className={cn("", className)}
            width={width}
            height={height}
			role="img"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Attic Greek Flag</title>
            <rect className="w-full h-full fill-blue-400 rounded-md" rx={borderRadious}></rect>
            {/* <text className="fill-stone-100 font-semibold" x={width/2} fontSize={textFontSize} y={(height / 2) + (textFontSize * 0.35)} textAnchor="middle">Φ</text> */}
            <image href="/greek-icon.png" width={iconSize} x={(width - iconSize) / 2} y={(height - iconSize) / 2} className="invert"></image>
		</svg>
	);
}
