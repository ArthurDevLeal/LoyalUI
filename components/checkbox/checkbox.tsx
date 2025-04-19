"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={twMerge(
      "peer h-5 w-5 shrink-0 rounded-[4px] border border-loyal-separator bg-loyal-secondaryBackground cursor-pointer",
      "shadow-loyal-sm ",
      "focus-ring",
      "hover:bg-loyal-tertiaryBackground",
      "disabled:cursor-not-allowed disabled:opacity-40",
      "data-[state=checked]:bg-loyal-primary data-[state=checked]:border-loyal-blue data-[state=checked]:hover:bg-loyal-primary/90",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={twMerge("flex items-center justify-center text-white", "animate-in zoom-in-50 duration-150")}
    >
      <Check className="h-3.5 w-3.5 stroke-[2.5px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
