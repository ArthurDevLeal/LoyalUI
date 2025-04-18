import * as React from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `flex w-full rounded-loyal-md border bg-loyal-quaternaryFill px-loyal-md py-loyal-sm text-loyal-xs shadow-loyal-md file:text-loyal-secondaryLabel placeholder:text-loyal-secondaryLabel focus-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-loyal-sm`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
