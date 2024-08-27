import memojiImage from "<prefix>/assets/images/memoji-computer.png";
import grainImage from "<prefix>/assets/images/grain.jpg";
import Image from "next/image";
import ArrowDown from "<prefix>/assets/icons/arrow-down.svg";
import Starsvg from "<prefix>/assets/icons/star.svg";
export const HeroSection = () => {
  return (
    <div className="py-36 md:pt-44 relative md:px-60 z-0 overflow-x-clip overflow-y-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="absolute inset-0 size-[600px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-0 size-[800px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-0 size-[900px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-0 size-[1000px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-0 size-[1200px] rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5  border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[500px]  animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[4] text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[450px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="size- text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[300px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="size- text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[400px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="size- text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[600px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[6] text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[800px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[5.2] text-emerald-700" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[1000px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[4] text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[920px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[3] text-emerald-900" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[1100px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[2] text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[700px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[3.5] text-emerald-500" />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" size-[1100px]   animate-spin [animation-duration:30s]">
          <div className="inline-flex animate-spin [animation-duration:5s]">
            <Starsvg className="scale-[5] text-emerald-300" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image className="size-[100px]" src={memojiImage} alt="A picture" />
          <div className="bg-gray-950 border px-4 mt-1 py-1.5 border-gray-800 inline-flex rounded-lg gap-4 items-center">
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-[25rem] mx-auto">
          <h1 className="font-serif text-3xl mt-6 tracking-wide text-center md:text-4xl">
            Building Exceptional User Experience
          </h1>
          <p className="mt-2 text-center text-white/60 md:text-lg">
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
