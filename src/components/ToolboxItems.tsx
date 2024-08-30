import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import React, { ReactElement } from "react";

export const ToolboxItems = ({
  items,
  className,
  iclassname, // Add iclassname here to the props
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  iclassname?: string; // Add it to the type definition
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", iclassname)}>
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
