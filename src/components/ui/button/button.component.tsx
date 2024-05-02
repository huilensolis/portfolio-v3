import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";

import { ReactNode, forwardRef } from "react";

const buttonVariants = cva(
  "flex items-center w-max justify-center focus:outline-none",
  {
    variants: {
      variant: {
        default: "dark:bg-neutral-800",
        destructive: "bg-orange-700 text-neutral-50",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-[0.2rem]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading = false,
      disabled = false,
      variant,
      size,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        {...props}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {loading ? <Loader className="animate-spin w-4 h-4" /> : children}
      </button>
    );
  },
);

Button.displayName = "Button";
