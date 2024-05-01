import { Loader } from "lucide-react";

import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, TProps>(
  ({ children, loading = false, disabled = false, ...props }, ref) => {
    return (
      <button ref={ref} disabled={disabled || loading} {...props}>
        {loading ? <Loader className="animate-spin w-4 h-4" /> : children}
      </button>
    );
  },
);

Button.displayName = "Button";
