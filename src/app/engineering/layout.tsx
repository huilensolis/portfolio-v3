import { ThemeSwitcher } from "@/components/feature/theme-switcher";
import { ReactNode } from "react";
import { NavBar } from "./_components/nav-bar.component";
import { Footer } from "./_components/footer.component";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full pt-16">
      <div
        aria-hidden
        className="w-full h-96 pointer-events-none absolute top-0 left-0 mx-auto bg-[linear-gradient(to_bottom,_rgb(29_23_56/0.15)_0%,_transparent_100%)] dark:bg-[linear-gradient(to_bottom,_rgb(229_229_229_/12%)_0%,_transparent_100%)]"
      ></div>
      <header className="flex justify-center fixed z-50 top-0 left-0 w-full py-3 backdrop-blur-sm border-b dark:border-neutral-800/40 border-gray-300/40">
        <div className="max-w-6xl w-full min-w-0 flex justify-between">
          <NavBar />
          <div className="flex">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      {children}
      <Footer />
    </div>
  );
}
