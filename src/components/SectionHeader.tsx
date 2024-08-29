import React from "react";

export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title : string,
    eyebrow:string,
    description:string,

}) =>{
    return (
      <>
      
        <div className="flex justify-center">
          <p className="font-semibold uppercase text-center tracking-widest apple bg-gradient-to-t from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            {title}
          </p>
        </div>
        <h2 className="text-3xl font-serif text-center mt-6 md:text-5xl">
          {eyebrow}
        </h2>
        <p className="text-white/60 text-center mt-4 md:text-lg lg:text-xl mx-auto max-w-md">
          {description}
        </p>
      </>
    );
};