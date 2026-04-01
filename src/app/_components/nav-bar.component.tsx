"use client";

import Link from "next/link";
import {
	HTMLAttributeAnchorTarget,
	useEffect,
	useState,
} from "react";
import { usePathname } from "next/navigation";
import { Locale } from "../[lang]/dictionaries";

type LinksContent = {
home: string, commentary: string, library: string, contact: string
}

export function NavBar({linksContent, lang}: {linksContent: LinksContent, lang: Locale}) {
	return (
		<nav>
			<NavLinks linksContent={linksContent} lang={lang}/>
		</nav>
	);
}

type TLink = {
	href: string;
	target?: HTMLAttributeAnchorTarget;
	title: string;
};


function NavLinks({linksContent, lang}: {linksContent: LinksContent, lang: Locale}) {
const {home, commentary, library, contact} = linksContent
const LINKS: TLink[] = [
	{
		href: `/${lang}`,
		title: home ,
	},
	{
		href: `/${lang}/commentaria`,
		title: commentary,
	},
	{
		href: `/${lang}/bibliotheca`,
		title: library,
	},
	{
		href: `/${lang}/#contact`,
		title: contact,
	},
];

	return (
		<ul className="flex flex-wrap gap-4">
			{LINKS.map((linkItem, i) => (
				<li key={i}>
					<LinkItem href={linkItem.href} title={linkItem.title}>
						{linkItem.title}
					</LinkItem>
				</li>
			))}
		</ul>
	);
}

function LinkItem({ href, title, target = "_self" }: TLink&{children: string}) {
	const [isActive, setIsActive] = useState(false);
	const pathName = usePathname();

	useEffect(() => {
		if (href === "/") {
			if (pathName === href) {
				setIsActive(true);
				return;
			}
			setIsActive(false);
			return;
		}

		if (pathName.startsWith(href)) {
			setIsActive(true);
			return;
		}

		setIsActive(false);
	}, [pathName]);

	return (
		<Link
			href={href}
			target={target}
			title={title}
			className={[
				isActive ? "bg-neutral-200/60" : "",
				"flex items-center justify-center rounded-sm px-5 xl:px-2 py-0.5",
                "font-fraunces uppercase"
			].join(" ")}
		>
            <>{title}</>
		</Link>
	);
}
