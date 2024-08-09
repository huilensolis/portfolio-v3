import { ThemeSwitcher } from "@/components/feature/theme-switcher";
import { NavBar } from "./_components/nav-bar.component";
import { Footer } from "./_components/footer.component";

import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { BASE_URL } from "@/app/sitemap";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Huilen Solis portfolio",
    template: "%s | Huilen Solis Portfolio",
  },
  description:
    "Personal Portfolio, explore education, projects, tech stack and get in touch.",
  openGraph: {
    title: "Huilen Solis portfolio",
    description:
      "Personal Portfolio, explore education, projects, tech stack and get in touch.",
    url: BASE_URL,
    siteName: "Huilen Solis portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-gray-50 dark:bg-cm-indigo-bg text-neutral-700 dark:text-neutral-300 tracking-tight",
        GeistSans.variable,
        GeistSans.className,
        GeistMono.variable,
      )}
    >
      <body className="antialiased min-h-screen overflow-x-hidden sticky">
        <div className="w-full h-full xl:px-0 px-5 flex justify-center">
          <div className="max-w-6xl w-full min-w-0 flex flex-col">
            <div className="flex flex-col w-full pt-48">
              <div
                aria-hidden
                className="w-full h-96 pointer-events-none absolute top-0 left-0 mx-auto bg-[linear-gradient(to_bottom,_rgb(29_23_56/0.15)_0%,_transparent_100%)] dark:bg-[linear-gradient(to_bottom,_rgb(229_229_229_/12%)_0%,_transparent_100%)]"
              ></div>
              <header className="flex justify-center fixed z-50 top-0 left-0 w-full py-3 backdrop-blur-sm border-b dark:border-neutral-800/40 border-gray-200/20">
                <div className="max-w-6xl w-full min-w-0 flex justify-between">
                  <NavBar />
                  <div className="flex">
                    <ThemeSwitcher />
                  </div>
                </div>
              </header>
              {children}
              {modal}
              <Footer />
            </div>
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
