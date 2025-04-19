"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={twMerge(
      "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-loyal-full border-none shadow-loyal-sm focus-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-loyal-primary data-[state=unchecked]:bg-loyal-fill",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={twMerge(
        "pointer-events-none block h-[22px] w-[22px] translate-x-0.5 rounded-loyal-full bg-white shadow-loyal-md transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] data-[state=checked]:translate-x-[24px]"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
