import { getWritingItems } from "@/utils/writings";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export async function WritingsItemsSection() {
  const writingItems = await getWritingItems();

  return writingItems.map((writing, i) => (
    <li key={i} className={["col-span-4", "group"].join(" ")}>
      <Link href={`/writings/item/${writing.slug}`}>
        <article className="flex flex-col gap-24 bg-gray-100 rounded-md border border-gray-200/40 p-4 hover:bg-gray-200/60 duration-150 transition-all">
          <header className="w-full flex justify-between">
            <span className="font-medium">writing</span>
            <ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-all duration-150" />
          </header>
          <footer className="flex flex-col gap-4">
            <header className="flex flex-col">
              <h1 className="text-3xl font-medium">{writing.title}</h1>
              <span>
                {new Date(writing.date).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </span>
            </header>
            <p className="text-pretty font-medium line-clamp-4">
              {writing.description}
            </p>
          </footer>
        </article>
      </Link>
    </li>
  ));
}
