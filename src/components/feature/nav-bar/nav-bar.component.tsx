import { SUPPORTED_LANGS } from "@/utils/consts";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/feature/drawer";
import { Button } from "@/components/ui/button/button.component";
import { Menu, X } from "lucide-react";

export function NavBar({
  currentLang,
}: {
  currentLang: (typeof SUPPORTED_LANGS)[number];
}) {
  return (
    <nav className="flex gap-4 items-center dark:text-neutral-400">
      <div className="hidden sm:block">
        <NavLinks currentLang={currentLang} />
      </div>
      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="dark:bg-neutral-950 bg-gray-100">
            <DrawerHeader>
              <DrawerClose>
                <Button variant="ghost" className="p-0">
                  <X />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <DrawerFooter>
              <NavLinks currentLang={currentLang} />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

function NavLinks({
  currentLang,
}: {
  currentLang: (typeof SUPPORTED_LANGS)[number];
}) {
  return (
    <div className="flex gap-4 items-start sm:flex-row flex-col dark:text-neutral-400">
      <Link
        href="/"
        className="no-underline dark:text-neutral-50 font-medium text-base text-neutral-950 duration-150 transition-all"
      >
        huilen
      </Link>
      <Link
        href={`/${currentLang}/guestbook`}
        className="no-underline dark:hover:text-neutral-100 hover:text-neutral-500 duration-150 transition-all"
      >
        Guestbook
      </Link>
      <Link
        href={`/${currentLang}/blog`}
        className="no-underline dark:hover:text-neutral-100 hover:text-neutral-500 duration-150 transition-all"
      >
        Blog
      </Link>
      {/* <Link */}
      {/*   href={`/${currentLang}/journey`} */}
      {/* className="no-underline dark:hover:text-neutral-100 hover:text-neutral-500 duration-150 transition-all" */}
      {/* > */}
      {/*   Journey */}
      {/* </Link> */}
      {/* <Link */}
      {/*   href={`/${currentLang}/workspace`} */}
      {/* className="no-underline dark:hover:text-neutral-100 hover:text-neutral-500 duration-150 transition-all" */}
      {/* > */}
      {/*   Workspace */}
      {/* </Link> */}
      <Link
        href={`/${currentLang}#contact`}
        className="no-underline dark:hover:text-neutral-100 hover:text-neutral-500 duration-150 transition-all"
      >
        Contact
      </Link>
    </div>
  );
}
