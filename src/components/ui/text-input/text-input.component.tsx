import { cn } from "@/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

type TProps = InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        {...props}
        className={cn(
          "bg-neutral-900 border border-neutral-800 rounded-md py-1 px-2 text-neutral-300 focus:outline-none outline-none focus:border-neutral-700 transition-all duration-150",
          className,
        )}
      />
    );
  },
);

TextInput.displayName = "TextInput";
