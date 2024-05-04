import "./global.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { baseUrl } from "@/app/sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
    url: baseUrl,
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

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white font-medium dark:text-neutral-300 dark:bg-neutral-950",
        GeistMono.className,
      )}
    >
      <body className="antialiased min-h-screen xl:px-0 px-5 flex justify-center">
        <main className="max-w-7xl w-full min-w-0 py-5 flex flex-col">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
