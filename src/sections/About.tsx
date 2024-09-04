import { SectionHeader } from "<prefix>/components/SectionHeader";
import { Card } from "<prefix>/components/Card";
import { CardHeader } from "<prefix>/components/CardHeader";
import { ToolboxItems } from "<prefix>/components/ToolboxItems";
import JSIcon from "<prefix>/assets/icons/square-js.svg";
import HtmlIcon from "<prefix>/assets/icons/html5.svg";
import CssIcon from "<prefix>/assets/icons/css3.svg";
import ReactIcon from "<prefix>/assets/icons/react.svg";
import ChromeIcon from "<prefix>/assets/icons/chrome.svg";
import GitIcon from "<prefix>/assets/icons/github.svg";
import bookImage from "<prefix>/assets/images/book-cover.png";
import SmileImoji from "<prefix>/assets/images/memoji-smile.png";
import mapImage from "<prefix>/assets/images/nepal.png";
import Image from "next/image";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JSIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },

  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GitIcon,
  },
];

const hobbies = [
  {
    title: "Watching",
    icon: "📺",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    icon: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    icon: "⛷️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    icon: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Writing",
    icon: "🖋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    icon: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8 md:px-6 ">
            <div className="md:col-span-2">
              <Card className=" h-[320px]  ">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />
                <div className="w-40 mx-auto mt-8 ">
                  <Image src={bookImage} alt="Book Image" />
                </div>
              </Card>
            </div>
            <div className="md:col-span-2 mt-8 md:mt-0">
              <Card className=" h-[320px]  p-0 md:col-span-3 md:w-[55vw]">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools use to craft expectional
                digital experinces."
                  className="px-6 pt-6"
                />
                <ToolboxItems items={toolboxItems} className="mt-6" />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6 "
                  iclassname="-translate-x-1/2"
                />
              </Card>
            </div>
          </div>
          <div className="md:grid md:grid-cols-5 md:gap-8 md:px-6">
            <div className="md:col-span-3">
              <Card className=" h-[320px] p-0 flex flex-col ">
                <CardHeader
                  title="Beyound the Code"
                  description="Explore my interests and hobbies beyound the digital realm."
                  className="px-6 py-6 "
                />

                <div className="relative flex-1">
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.title}
                      className="inline-flex items-center rounded-full gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.icon}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="md:col-span-2 mt-8 md:mt-0 ">
              <Card className=" h-[320px] p-0  relative   ">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-fu object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3] rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <Image
                    src={SmileImoji}
                    alt="Smile Image"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
