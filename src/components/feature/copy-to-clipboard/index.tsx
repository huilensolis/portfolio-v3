"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button/button.component";
import { cn } from "@/utils/cn";
import { Copy, CopyCheck } from "lucide-react";

export function CopyToClipboardBtn({
  value,
  className = "",
}: {
  value: string;
  className?: HTMLElement["className"];
}) {
  const [valueHasBeenCopied, setValueHasBeenCopied] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => setValueHasBeenCopied(false), 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [valueHasBeenCopied]);

  return (
    <Button
      onClick={(e) => {
        navigator.clipboard.writeText(value);

        setValueHasBeenCopied(true);
      }}
      className={cn("", className)}
      variant="ghost"
    >
      {valueHasBeenCopied ? (
        <CopyCheck className="w-6 h-6 transition-all duration-150" />
      ) : (
        <Copy className="w-6 h-6 transition-all duration-150" />
      )}
    </Button>
  );
}
