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

export function NavBar() {
  return (
    <nav className="flex gap-4 items-center text-neutral-800">
      <div className="hidden sm:block">
        <NavLinks />
      </div>
      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="bg-gray-100">
            <DrawerHeader>
              <DrawerClose asChild>
                <Button variant="ghost" className="p-0">
                  <X />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <DrawerFooter>
              <NavLinks />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <div className="flex gap-4 items-start sm:flex-row flex-col">
      <Link
        href="/"
        className="flex items-center gap-2 no-underline text-base text-neutral-950 duration-150 transition-all"
      >
        home
      </Link>
      {/* <Link
      //   href={`/${currentLang}/guestbook`}
      //   className="no-underline hover:text-neutral-500 duration-150 transition-all"
      // >
      //   Guestbook
      // </Link>
				/* */}
      <Link
        href={`/blog`}
        className="no-underline hover:text-neutral-500 duration-150 transition-all"
      >
        Blog
      </Link>
      {/* <Link */}
      {/*   href={`/${currentLang}/journey`} */}
      {/* className="no-underline hover:text-neutral-500 duration-150 transition-all" */}
      {/* > */}
      {/*   Journey */}
      {/* </Link> */}
      {/* <Link */}
      {/*   href={`/${currentLang}/workspace`} */}
      {/* className="no-underline hover:text-neutral-500 duration-150 transition-all" */}
      {/* > */}
      {/*   Workspace */}
      {/* </Link> */}
      <Link
        href={`#contact`}
        className="no-underline hover:text-neutral-500 duration-150 transition-all"
      >
        Contact
      </Link>
    </div>
  );
}
