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
    <div className="flex flex-col">
      <header className="flex justify-between">
        <NavBar currentLang={lang} />
        <section className="flex gap-2">
          <LangSwitcher currentLang={lang} />
        </section>
      </header>
      <div className="flex flex-col py-32">{children}</div>
    </div>
  );
}
