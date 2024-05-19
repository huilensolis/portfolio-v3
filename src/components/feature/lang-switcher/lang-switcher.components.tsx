"use client";

import { SUPPORTED_LANGS } from "@/utils/consts";
import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LangSwitcher({
  currentLang,
}: {
  currentLang: (typeof SUPPORTED_LANGS)[number];
}) {
  const otherLang = SUPPORTED_LANGS.find((lang) => lang !== currentLang);

  const path = usePathname();

  return (
    <>
      {otherLang && (
        <Link
          href={path.replace(currentLang, otherLang) as any}
          className="flex items-center dark:text-neutral-50"
        >
          <Languages className="w-5 h-5" />
          {otherLang}
        </Link>
      )}
    </>
  );
}
