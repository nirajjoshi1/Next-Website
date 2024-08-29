import GrainImage from "<prefix>/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div>
      <div
        className={twMerge(
          "bg-gray-800 overflow-hidden z-0 rounded-3xl relative after:content-[''] after:absolute after:z-[1] after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl  h-[28vh] md-h-[30vh] lg:h-[35vh]  after:outline-white/20  after:pointer-events-none p-6",
          className
        )}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`, // Fixed capitalization and interpolation
          }}
        ></div>
        {children}
      </div>
    </div>
  );
};
