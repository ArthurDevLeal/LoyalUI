import * as React from "react"
import { twMerge } from "tailwind-merge"

export type CardVariant = "standard" | "elevated" | "grouped" | "sheet" | "popover" | "glassMorphism";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "standard", ...props }, ref) => {
    const variantStyles: Record<CardVariant, string> = {
      standard: "bg-loyal-card shadow-loyal-sm rounded-loyal-md",
      elevated: "bg-loyal-card shadow-loyal-md rounded-loyal-lg",
      grouped: "bg-loyal-groupedBackground rounded-loyal-md",
      sheet: "bg-loyal-sheet shadow-loyal-lg rounded-loyal-xl",
      glassMorphism: "bg-loyal-fill backdrop-blur-md shadow-loyal-md rounded-loyal-lg",
      popover: "bg-loyal-popover shadow-loyal-lg rounded-loyal-lg"
    };

    const hasBorder = variant !== "sheet" && variant !== "popover";

    return (
      <div
        ref={ref}
        className={twMerge(
          "transition-all duration-loyal-normal",
          variantStyles[variant],
          hasBorder ? "border " : "",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: CardVariant }
>(({ className, variant = "standard", ...props }, ref) => {
  const paddingMap: Record<CardVariant, string> = {
    standard: "p-loyal-xl pb-loyal-md",
    elevated: "p-loyal-xl pb-loyal-md",
    grouped: "p-loyal-lg pb-loyal-md",
    sheet: "p-loyal-2xl pb-loyal-lg",
    popover: "p-loyal-xl pb-loyal-md",
    glassMorphism: "p-loyal-xl pb-loyal-md"
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        "flex flex-col space-y-loyal-sm", 
        paddingMap[variant],
        className
      )}
      {...props}
    />
  );
});
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
  React.HTMLAttributes<HTMLDivElement> & { variant?: CardVariant }
>(({ className, variant = "standard", ...props }, ref) => {
  const paddingMap: Record<CardVariant, string> = {
    standard: "px-loyal-xl pb-loyal-xl",
    elevated: "px-loyal-xl pb-loyal-xl",
    grouped: "px-loyal-lg pb-loyal-lg",
    sheet: "px-loyal-2xl pb-loyal-2xl",
    popover: "px-loyal-xl pb-loyal-xl",
    glassMorphism: "px-loyal-xl pb-loyal-xl"
  };

  return (
    <div
      ref={ref}
      className={twMerge(paddingMap[variant], className)}
      {...props}
    />
  );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: CardVariant }
>(({ className, variant = "standard", ...props }, ref) => {
  const paddingMap: Record<CardVariant, string> = {
    standard: "px-loyal-xl pb-loyal-xl",
    elevated: "px-loyal-xl pb-loyal-xl",
    grouped: "px-loyal-lg pb-loyal-lg",
    sheet: "px-loyal-2xl pb-loyal-2xl",
    popover: "px-loyal-xl pb-loyal-xl",
    glassMorphism: "px-loyal-xl pb-loyal-xl"
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        "flex items-center justify-end gap-loyal-md",
        paddingMap[variant],
        className
      )}
      {...props}
    />
  );
});
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