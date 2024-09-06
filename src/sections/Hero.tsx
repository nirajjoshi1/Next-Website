import memojiImage from "<prefix>/assets/images/memoji-computer.png";
import grainImage from "<prefix>/assets/images/grain.jpg";
import Image from "next/image";
import ArrowDown from "<prefix>/assets/icons/arrow-down.svg";
import Starsvg from "<prefix>/assets/icons/star.svg";
import {HeroOrbit} from "<prefix>/components/HeroOrbit"
export const HeroSection = () => {
  return (
    <div className="py-[13rem] md:py-56 md:pt-44 relative md:px-60 z-0 overflow-x-clip ">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="absolute inset-0 size-[600px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-0 size-[700px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-0 size-[800px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute opacity-0 md:opacity-100 inset-0 size-[900px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute opacity-0 inset-0 md:opacity-100 size-[1000px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <HeroOrbit size={323} rotation={92}>
        <Starsvg className="text-emerald-300 scale-[1.5] opacity-20" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={92}>
        <Starsvg className="text-emerald-300 scale-[1.8] opacity-0 md:opacity-45" />
      </HeroOrbit>
      <HeroOrbit size={400} rotation={98}>
        <Starsvg className="text-emerald-300 scale-[2] opacity-10" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79}>
        <Starsvg className="text-emerald-300 scale-[2] opacity-0 md:opacity-45" />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={78}>
        <Starsvg className="text-emerald-300 scale-[2.5]  opacity-0 md:opacity-45" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41}>
        <Starsvg className="text-sky-400 opacity-10 animate-bounce scale-[1.3] " />
      </HeroOrbit>
      <HeroOrbit size={540} rotation={-5}>
        <Starsvg className="text-emerald-300 scale-[1.3] opacity-45" />
      </HeroOrbit>
      <div className="container ">
        <div className="flex flex-col items-center">
          <Image className="size-[100px]" src={memojiImage} alt="A picture" />
          <div className="bg-gray-950 border px-4 mt-1 py-1.5 border-gray-800 inline-flex rounded-lg gap-4 items-center">
            <div className="bg-green-500 rounded-full size-2.5 ">
              <div className="bg-green-500 rounded-full size-2.5 animate-ping"></div>
            </div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-[25rem] mx-auto">
          <h1 className="font-serif text-3xl mt-6 tracking-wide text-center md:text-4xl">
            Building Exceptional User Experience
          </h1>
          <p className="z-20 mt-2 text-center text-white/60 md:text-lg">
            I specialize in transforming designs in functional, high performing
            web applications. Lets discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex  items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white text-gray-900 bg-white rounded-xl h-12 px-6">
            <span>👋</span>
            <span className="font-semibold">Lets connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
