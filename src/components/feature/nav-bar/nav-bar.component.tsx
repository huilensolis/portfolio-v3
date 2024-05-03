import { SUPPORTED_LANGS } from "@/utils/consts";
import { Route } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export function NavBar({
  currentLang,
}: {
  currentLang: (typeof SUPPORTED_LANGS)[number];
}) {
  return (
    <nav className="flex gap-8 items-center">
      <div>
        <Link href="/">
          <h1 className="font-bold text-xl">
            HS <span className="text-orange-600">v3</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <NavLink href={`/${currentLang}/guestbook`}>Guestbook</NavLink>
        {/* <NavLink href={`/${currentLang}/guestbook`}>Journey</NavLink> */}
        {/* <NavLink href={`/${currentLang}/guestbook`}>Workspace</NavLink> */}
        {/* <NavLink href={`/${currentLang}/guestbook`}>Blogs</NavLink> */}
      </div>
    </nav>
  );
}

type TProps = {
  children: ReactNode;
  href: Route;
};
function NavLink({ children, href }: TProps) {
  return (
    <Link className="flex gap-2" href={href}>
      {children}
    </Link>
  );
}
