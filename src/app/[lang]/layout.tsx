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
      <div className="fixed top-0 left-0 w-screen flex items-center justify-center bg-neutral-950/70 backdrop-blur-sm ">
        <header className="flex justify-between py-10 xl:px-0 px-5 w-full xl:max-w-7xl xl:pr-2.5">
          <NavBar currentLang={lang} />
          <section className="flex gap-2">
            <LangSwitcher currentLang={lang} />
          </section>
        </header>
      </div>
      <div className="flex flex-col py-32">{children}</div>
    </div>
  );
}
