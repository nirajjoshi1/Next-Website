import Starsvg from "<prefix>/assets/icons/star.svg";
import React from "react";
import { twMerge } from "tailwind-merge";
export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className? : string;
}) => {
  return (
    <div>
      <div className={ twMerge("flex flex-col", className)}>
        <div className="inline-flex items-center gap-2">
          <Starsvg className="scale-[1.35] text-emerald-300" />
          <h3 className="font-serif text-3xl">{title}</h3>
        </div>
        <p className="text-sm text-white/60 mt-2">{description} </p>
      </div>
    </div>
  );
};
