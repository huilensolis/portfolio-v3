import { ReactNode } from "react";

export function DotWithChildren({ children }: { children: ReactNode }) {
  return (
    <div className="h-5 w-5 flex items-center justify-center bg-neutral-800 rounded-md">
      {children}
    </div>
  );
}
