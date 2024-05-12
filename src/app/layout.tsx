import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
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
        "dark:bg-[#111010] prose prose-neutral dark:prose-invert prose-p:text-[#d4d4d4] prose-p:text-pretty prose-p:tracking-tight prose-headings:text-balance prose-p:my-1 prose-a:tracking-tight prose-a:text-neutral-400 prose-headings:font-medium prose-headings:text-white prose-headings:tracking-tighter prose-h1:my-4 prose-h1:text-2xl prose-h2:text-xl prose-h3:my-0 prose-h3:text-lg prose-h4:my-0 prose-h5:my-0 prose-h2:mb-2 prose-h2:mt-4 max-w-none prose-strong:text-neutral-200 prose-strong:font-medium",
        GeistSans.className,
      )}
    >
      <body className="antialiased min-h-screen xl:px-0 px-5 flex justify-center">
        <main className="max-w-2xl w-full min-w-0 py-5 flex flex-col">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
