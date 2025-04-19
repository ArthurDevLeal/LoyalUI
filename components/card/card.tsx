import * as React from "react"
import { twMerge } from "tailwind-merge"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "standard" | "elevated" | "grouped" | "sheet" | "popover";
  }
>(({ className, variant = "standard", ...props }, ref) => {
  const variantClasses = {
    standard: "bg-loyal-card shadow-loyal-sm",
    elevated: "bg-loyal-card shadow-loyal-md",
    grouped: "bg-loyal-groupedBackground",
    sheet: "bg-loyal-sheet",
    popover: "bg-loyal-popover shadow-loyal-lg"
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        "rounded-loyal-lg border border-loyal-thinSeparator transition-all duration-loyal-fast",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge("flex flex-col space-y-loyal-sm p-loyal-xl", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={twMerge(
      "text-loyal-lg font-semibold leading-none tracking-tight text-loyal-label",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={twMerge(
      "text-loyal-base text-loyal-secondaryLabel",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge("p-loyal-xl pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      "flex items-center justify-end gap-loyal-md p-loyal-xl pt-0",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={twMerge(
      "h-px w-full bg-loyal-separator my-loyal-sm",
      className
    )}
    {...props}
  />
));
CardDivider.displayName = "CardDivider";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardDivider
}