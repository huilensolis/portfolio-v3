"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function GmailBtn({ gmail }: { gmail: string }) {
	const [hasEmailBeenCopied, setHasEmailBeenCopied] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setHasEmailBeenCopied(false);
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [hasEmailBeenCopied]);

	return (
		<button
			onClick={() => {
				navigator.clipboard.writeText(gmail);
				setHasEmailBeenCopied(true);
			}}
			className="hover:cursor-copy focus:outline-none flex items-center group gap-1"
		>
			{gmail}
			{hasEmailBeenCopied ? (
				<Check className="w-4 h-4 duration-150 transition-all" />
			) : (
				<Copy className="w-4 h-4 duration-150 transition-all group-hover:scale-125" />
			)}
		</button>
	);
}
