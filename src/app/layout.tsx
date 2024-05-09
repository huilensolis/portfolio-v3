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
        "dark:bg-[#111010] prose prose-neutral dark:prose-invert prose-headings:text-neutral-200 prose-p:text-neutral-300/70 prose-p:text-pretty prose-headings:text-balance prose-p:my-1 prose-a:text-neutral-400 font-medium prose-h1:my-4 prose-headings:font-medium prose-h3:my-0 prose-h4:my-0 prose-h5:my-0 prose-h2:mb-2 prose-h2:mt-4 tracking-tighter max-w-none prose-strong:text-neutral-200 prose-strong:font-medium",
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
