"use client";

import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip/tooltip";
import "./dock.css";    

const scaleValue = (value: number, from: [number, number], to: [number, number]): number => {
  const scale = (to[1] - to[0]) / (from[1] - from[0]);
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
  return Math.floor(capped * scale + to[0]);
};

export interface DockItemProps {
  name: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItemProps[];
  className?: string;
  maxAdditionalSize?: number;
}

const DockItem: React.FC<
  DockItemProps & {
    onMouseMove: (e: React.MouseEvent<HTMLLIElement>) => void;
  }
> = ({ name, icon, href, onClick, onMouseMove }) => {
  return (
    <li
      className="dock-item transition-all duration-100 ease-[cubic-bezier(0.25,1,0.5,1)] w-[60px] h-[60px] relative hover:w-[90px] hover:h-[90px] hover:mt-[-30px]"
      onMouseMove={onMouseMove}
    >
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full block rounded-[12px] bg-loyal-background/0"
                onClick={onClick}
              >
                <img src={icon || "/placeholder.svg"} alt={name} className="w-full h-full" />
              </a>
            ) : (
              <button className="w-full h-full block rounded-[12px] bg-loyal-background/0" onClick={onClick}>
                <img src={icon || "/placeholder.svg"} alt={name} className="w-full h-full" />
              </button>
            )}
          </TooltipTrigger>
          <TooltipContent side="top">{name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
};

export const Dock: React.FC<DockProps> = ({ items, className, maxAdditionalSize = 5 }) => {
  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(cursorDistance, [0, 1], [maxAdditionalSize * -1, maxAdditionalSize]);

    dockRef.current.style.setProperty("--dock-offset-left", `${offsetPixels * -1}px`);

    dockRef.current.style.setProperty("--dock-offset-right", `${offsetPixels}px`);
  };

  return (
    <div
      ref={dockRef}
      className={twMerge(
        "dock mx-auto mb-3 rounded-loyal-2xl px-3 bg-gradient-to-b bg-loyal-container-grouped-background border w-fit shadow-loyal-md",
        className
      )}
    >
      <ul className="flex list-none p-0">
        {items.map((item, index) => (
          <DockItem key={index} {...item} onMouseMove={handleAppHover} />
        ))}
      </ul>
    </div>
  );
};
