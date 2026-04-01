import { cn } from "@/utils/cn";
import { SVGAttributes } from "react";

type TProps = {
    width?: number;
    height?: number;
};

export function SpainFlag({
    className,
    width = 45,
    height = 28,
    ...props
}: SVGAttributes<SVGElement> & TProps) {
    const borderRadius = width / 14;

    return (
        <svg
            {...props}
            className={cn("", className)}
            width={width}
            height={height}
            viewBox="0 0 3 2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Spain</title>

            {/* Top red */}
            <rect width="3" height="0.5" y="0" fill="#AA151B" rx={borderRadius} />

            {/* Middle gold */}
            <rect width="3" height="1" y="0.5" fill="#F1BF00" />

            {/* Bottom red */}
            <rect width="3" height="0.5" y="1.5" fill="#AA151B" />
        </svg>
    );
}
