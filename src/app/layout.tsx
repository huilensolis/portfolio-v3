import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

import { NavBar } from "./_components/nav-bar.component";
import { Footer } from "./_components/footer/footer.component";
import { BASE_URL } from "@/app/sitemap";
import "./global.css";
import { cn } from "@/utils/cn";

const FrauncesDefault = localFont({
  src: "../../public/fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf",
  style: "normal",
  variable: "--font-fraunces-default",
});

const FrauncesItalic = localFont({
  src: "../../public/fonts/fraunces/Fraunces-Italic-VariableFont_SOFT,WONK,opsz,wght.ttf",
  style: "italic",
  variable: "--font-fraunces-italic",
});

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
        "bg-stone-100 text-neutral-700 tracking-tight",
        GeistSans.className,
        GeistSans.variable,
        FrauncesDefault.variable,
        FrauncesItalic.variable,
      )}
    >
      <body className="antialiased min-h-screen overflow-x-hidden sticky">
        <div className="w-full h-full xl:px-0 px-5 flex justify-center">
          <div className="max-w-screen-xl w-full min-w-0 flex flex-col">
            <div className="flex flex-col w-full pt-48">
              <header className="flex justify-center fixed z-50 top-0 left-0 w-full py-3 bg-stone-100 p-1 border-b border-stone-300">
                <div className="max-w-screen-xl w-full min-w-0 flex justify-start">
                  <div className="flex justify-between">
                    <NavBar />
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
