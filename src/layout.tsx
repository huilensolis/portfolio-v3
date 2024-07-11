import { NavBar } from "@/components/feature/nav-bar";
import { ThemeSwitcher } from "@/components/feature/theme-switcher";
import { ReactNode } from "react";

export default function Layout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between w-full pb-10 py-8">
        <NavBar currentLang={lang} />
        <div className="flex">
          <ThemeSwitcher />
        </div>
      </header>
      {children}
    </div>
  );
}
