import { Route } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export function NavBar() {
  return (
    <nav className="flex gap-8 items-center">
      <div>
        <Link href="/">
          <h1 className="font-bold text-xl">
            Huilén Solís <span className="text-orange-600">v3</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <NavLink href="/guestbook">Guestbook</NavLink>
        <NavLink href="/guestbook">Journey</NavLink>
        <NavLink href="/guestbook">Workspace</NavLink>
        <NavLink href="/guestbook">Blogs</NavLink>
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
