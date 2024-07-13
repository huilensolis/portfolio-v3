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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-gray-50 dark:bg-[#151519] text-neutral-700 dark:text-neutral-300 tracking-tight",
        GeistSans.variable,
        GeistSans.className,
        GeistMono.variable,
      )}
    >
      <body className="antialiased min-h-screen overflow-x-hidden sticky">
        <div className="w-full h-full xl:px-0 px-5 flex justify-center">
          <div className="max-w-6xl w-full min-w-0 flex flex-col">
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
