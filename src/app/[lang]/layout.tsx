import { LangSwitcher } from "@/components/feature/lang-switcher";
import { NavBar } from "@/components/feature/nav-bar";
import { ReactNode } from "react";

export default function Layout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col py-16">
      <header className="flex justify-between w-full pb-10">
        <NavBar currentLang={lang} />
        <LangSwitcher currentLang={lang} />
      </header>
      {children}
    </div>
  );
}
