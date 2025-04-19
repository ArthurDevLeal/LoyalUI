"use client";

import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={twMerge(
      "flex h-9 items-center space-x-1 rounded-loyal-md border border-loyal-separator bg-loyal-background p-1 shadow-loyal-sm",
      className
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={twMerge(
      "flex cursor-default select-none items-center rounded-loyal-sm px-3 py-1 text-sm font-medium outline-none transition-colors duration-200 focus-ring",
      "data-[state=open]:bg-loyal-tertiaryBackground data-[state=open]:text-loyal-blue hover:bg-loyal-fill",
      className
    )}
    {...props}
  />
));

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={twMerge(
      "flex cursor-default select-none items-center rounded-loyal-sm px-2 py-1.5 text-sm outline-none transition-colors duration-200 focus-ring",
      "data-[state=open]:bg-loyal-tertiaryBackground data-[state=open]:text-loyal-blue hover:bg-loyal-fill",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4 text-loyal-secondaryLabel" />
  </MenubarPrimitive.SubTrigger>
));

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={twMerge(
      "z-50 min-w-[8rem] overflow-hidden rounded-loyal-lg border border-loyal-separator bg-loyal-popover p-1 text-loyal-label shadow-loyal-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "origin-[--radix-menubar-content-transform-origin]",
      "transition-all duration-200",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={twMerge(
        "z-50 min-w-[12rem] overflow-hidden rounded-loyal-lg border border-loyal-separator bg-loyal-popover p-1 text-loyal-label shadow-loyal-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-[--radix-menubar-content-transform-origin]",
        "transition-all duration-200",
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-loyal-sm px-2 py-1.5 text-sm outline-none transition-colors duration-200 focus-ring",
      "hover:bg-loyal-fill",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-loyal-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors duration-200 focus-ring",
      "hover:bg-loyal-fill",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-loyal-blue" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={twMerge(
      "relative flex cursor-default select-none items-center rounded-loyal-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors duration-200 focus-ring",
      "hover:bg-loyal-fill",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-loyal-blue text-loyal-blue" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={twMerge(
      "px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-loyal-tertiaryLabel",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={twMerge("-mx-1 my-1 h-px border-b", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

type KeyboardKey = string;
type KeyCombo = KeyboardKey[];
interface MenubarShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The keyboard shortcut to display and register
   * If a string is provided, it will be displayed as-is and parsed into keys
   * If an array is provided, it will be used directly as keys
   */
  keys?: string | KeyCombo;

  /**
   * Callback function to execute when the shortcut is triggered
   */
  onShortcut?: (event: KeyboardEvent) => void;

  /**
   * Options for the keyboard shortcut
   */
  shortcutOptions?: {
    enabled?: boolean;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    exactMatch?: boolean;
  };
}

interface MenubarShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The keyboard shortcut to display and register
   * If a string is provided, it will be displayed as-is and parsed into keys
   * If an array is provided, it will be used directly as keys
   */
  keys?: string | KeyCombo;

  /**
   * Callback function to execute when the shortcut is triggered
   */
  onShortcut?: (event: KeyboardEvent) => void;

  /**
   * Options for the keyboard shortcut
   */
  shortcutOptions?: {
    enabled?: boolean;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    exactMatch?: boolean;
  };
}

const MenubarShortcut = ({
  className,
  children,
  keys,
  onShortcut,
  shortcutOptions,
  ...props
}: MenubarShortcutProps) => {
  const parseShortcut = (shortcut: string): KeyCombo => {
    return shortcut.split("+").map((key) => {
      const trimmedKey = key.trim();
      const keyMap: Record<string, string> = {
        "⌘": "Meta",
        "⌥": "Alt",
        "⇧": "Shift",
        "⌃": "Control",
        "⎋": "Escape",
        "⏎": "Enter",
        "⌫": "Backspace",
        "⌦": "Delete",
        "↑": "ArrowUp",
        "↓": "ArrowDown",
        "←": "ArrowLeft",
        "→": "ArrowRight",
      };

      return keyMap[trimmedKey] || trimmedKey;
    });
  };

  const keyCombo: KeyCombo | undefined = React.useMemo(() => {
    if (!keys) return undefined;
    return typeof keys === "string" ? parseShortcut(keys) : keys;
  }, [keys]);

  const shortcutOptionsRef = React.useRef(shortcutOptions);
  React.useEffect(() => {
    shortcutOptionsRef.current = shortcutOptions;
  }, [shortcutOptions]);

  const onShortcutRef = React.useRef(onShortcut);
  React.useEffect(() => {
    onShortcutRef.current = onShortcut;
  }, [onShortcut]);

  React.useEffect(() => {
    if (!keyCombo || !keyCombo.length || !onShortcutRef.current) return;

    const options = {
      enabled: shortcutOptionsRef.current?.enabled ?? true,
      preventDefault: shortcutOptionsRef.current?.preventDefault ?? true,
      stopPropagation: shortcutOptionsRef.current?.stopPropagation ?? false,
      exactMatch: shortcutOptionsRef.current?.exactMatch ?? false,
    };

    const handler = (event: KeyboardEvent) => {
      onShortcutRef.current?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const allKeysPressed = keyCombo.every((key) => {
        if (key === "Meta") return event.metaKey;
        if (key === "Control") return event.ctrlKey;
        if (key === "Alt") return event.altKey;
        if (key === "Shift") return event.shiftKey;
        return event.key.toLowerCase() === key.toLowerCase();
      });

      if (allKeysPressed) {
        if (options.preventDefault) event.preventDefault();
        if (options.stopPropagation) event.stopPropagation();
        handler(event);
      }
    };

    if (options.enabled) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyCombo]);

  return (
    <span
      className={twMerge("ml-auto text-xs tracking-widest text-loyal-secondaryLabel", className)}
      {...props}
    >
      {children}
    </span>
  );
};

MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
