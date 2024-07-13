import { ThemeSwitcher } from "@/components/feature/theme-switcher";
import { ReactNode } from "react";
import { NavBar } from "./_components/nav-bar.component";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full pt-16">
      <header className="flex justify-center fixed top-0 left-0 w-full py-3 backdrop-blur-sm border-b dark:border-neutral-800/40 border-gray-300/40">
        <div className="max-w-7xl w-full min-w-0 flex justify-between">
          <NavBar />
          <div className="flex">
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
