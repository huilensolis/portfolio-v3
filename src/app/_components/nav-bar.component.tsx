"use client";

import Link from "next/link";
import {
	HTMLAttributeAnchorTarget,
	useEffect,
	useState,
} from "react";
import { usePathname } from "next/navigation";
import { Locale } from "../[lang]/dictionaries";
import { ClassNameValue } from "tailwind-merge";

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
		<ul className="flex flex-wrap content-center justify-between gap-4">
			{LINKS.map((linkItem, i) => (
				<li key={i} className="flex justify-center content-center">
					<LinkItem href={linkItem.href} title={linkItem.title} />
				</li>
			))}
            <LangSwitcher lang={lang} />
		</ul>
	);
}

function LinkItem({ className= "", href, title, target = "_self" }: TLink&{ className?: ClassNameValue }) {
	const [isActive, setIsActive] = useState(false);
	const pathName = usePathname();
	useEffect(() => {
		if (href === "/") {
			if (pathName === href) {
                console.log("se to true because pathname=" + pathName+" y href="+href)
				setIsActive(true);
				return;
			}
			setIsActive(false);
			return;
		}

		if (pathName.startsWith(href) && (href !== "/la-VA" && href !== "/en-UK" && href !== "/es-ES")) {
            console.log({href})
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
                "font-fraunces uppercase",
                className
			].join(" ")}
		>
            <>{title}</>
		</Link>
	);
}

function LangSwitcher({lang}: {lang: Locale}){
    const pathName = usePathname()
    const pathNameWithoutLocale = pathName.replace("en-UK", "").replace("es-ES", "").replace("la-VA", "").split("") 
    // removing starting "/"
    pathNameWithoutLocale.shift()

    const cleanPathName = pathNameWithoutLocale.join("") 

        const rawLinkList:  (TLink)[] = [
        {
            title: "EN",
            href: `/en-UK${cleanPathName}`,
        },
        {
            title: "ES",
            href: `/es-ES${cleanPathName}`,
        },
        {
            title: "LA",
            href: `/la-VA${cleanPathName}`,
        }
    ]
    return <div className="flex bg-stone-200 p-1">
         <ul className="flex gap-4">
            {rawLinkList.map(({href, title}) =>
                        <li key={href}>
                            <LinkItem title={title} href={href} className={`${lang === href.split("/")[1] ? "bg-stone-100 shadow-xs shadow-stone-400" : ""}`} />
                        </li>
                    )
            } 
        </ul>
    </div>
}
