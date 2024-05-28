import { SUPPORTED_LANGS } from "@/utils/consts";
import Link from "next/link";

export function NavBar({
  currentLang,
}: {
  currentLang: (typeof SUPPORTED_LANGS)[number];
}) {
  return (
    <nav className="flex gap-4 items-center dark:text-neutral-400">
      <div>
        <Link href="/" className="no-underline">
          Home
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href={`/${currentLang}/guestbook`} className="no-underline">
          Guestbook
        </Link>
        <Link href={`/${currentLang}/blog`} className="no-underline">
          Blog
        </Link>
        <Link href={`/${currentLang}/guestbook`} className="no-underline">
          Journey
        </Link>
        <Link href={`/${currentLang}/guestbook`} className="no-underline">
          Workspace
        </Link>
        <Link href={`/${currentLang}/guestbook`} className="no-underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
