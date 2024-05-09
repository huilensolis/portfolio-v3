import { cn } from "@/utils/cn";
import { HTMLAttributes, ReactNode } from "react";

type TProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Box({ children, className, ...props }: TProps) {
  return (
    <article
      {...props}
      className={cn(
        "flex flex-col gap-2 p-5 rounded-2xl bg-[#121212] border border-neutral-700/40",
        className,
      )}
    >
      {children}
    </article>
  );
}
