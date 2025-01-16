"use client";

import Link from "next/link";
import {
  HTMLAttributeAnchorTarget,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

export function NavBar() {
  return (
    <nav>
      <NavLinks />
    </nav>
  );
}

type TLink = {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  title: string;
  children: ReactNode;
};

const LINKS: TLink[] = [
  {
    href: "/",
    title: "main",
    children: <>Solis</>,
  },
  {
    href: "/writings",
    title: "writings",
    children: <>Writings</>,
  },
  {
    href: "#contact",
    title: "contact",
    children: <>Contact</>,
  },
];

function NavLinks() {
  return (
    <ul className="flex gap-4">
      {LINKS.map((linkItem, i) => (
        <li key={i}>
          <LinkItem href={linkItem.href} title={linkItem.title}>
            {linkItem.children}
          </LinkItem>
        </li>
      ))}
    </ul>
  );
}

function LinkItem({ children, href, title, target = "_self" }: TLink) {
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
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
