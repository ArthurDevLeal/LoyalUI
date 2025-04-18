import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap focus-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer shadow-loyal-md ",
  {
    variants: {
      variant: {
        default:
          "bg-loyal-primary text-loyal-background/90 active:bg-loyal-primary hover:bg-loyal-primary/90 hover:text-loyal-background",
        destructive:
          "bg-loyal-tertiary text-loyal-background/90 active:bg-loyal-tertiary hover:bg-loyal-tertiary/85 hover:text-loyal-background",
        ghost:
          "text-loyal-label/90 shadow-none active:bg-loyal-fill hover:bg-loyal-secondaryFill hover:text-loyal-label ",
        outline:
          "text-loyal-label/90 border active:bg-loyal-fill hover:bg-loyal-secondaryFill hover:text-loyal-label ",
        link: "text-loyal-label/90 underline-offset-4 hover:text-loyal-label hover:underline shadow-none",
      },
      size: {
        default: "rounded-loyal-full px-loyal-md py-loyal-sm text-loyal-base font-semibold",
        xs: "rounded-loyal-full px-loyal-sm py-loyal-xs text-loyal-xs",
        sm: "rounded-loyal-md px-loyal-md py-loyal-sm text-loyal-sm",
        md: "rounded-loyal-md px-loyal-lg py-loyal-md text-loyal-md font-medium",
        lg: "rounded-loyal-lg px-loyal-xl py-loyal-lg text-loyal-lg font-medium",
        xl: "rounded-loyal-xl px-loyal-2xl py-loyal-xl text-loyal-xl font-semibold",
        xxl: "rounded-loyal-2xl px-loyal-2xl py-loyal-xl text-loyal-2xl font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={buttonVariants({ variant, size, className })} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
