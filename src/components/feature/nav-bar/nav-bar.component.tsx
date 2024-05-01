import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex gap-2">
      <Link href={"/guestbook"}>GuestBook</Link>
    </nav>
  );
}
