import { SectionHeader } from "<prefix>/components/SectionHeader";
import { Card } from "<prefix>/components/Card";
import { CardHeader } from "<prefix>/components/CardHeader";
import { ToolboxItems } from "<prefix>/components/ToolboxItems";
import Starsvg from "<prefix>/assets/icons/star.svg";
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
    left : "",
    top: "",
  },
  {
    title: "Photography",
    icon: "📷",
    left : "",
    top: "",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left : "",
    top: "",
  },

  {
    title: "Hiking",
    icon: "⛷️",
    left : "",
    top: "",
  },
  {
    title: "Music",
    icon: "🎵",
    left : "",
    top: "",
  },
  {
    title: "Horse Writing",
    icon: "🏇",
    left : "",
    top: "",
  },
  {
    title: "Reading",
    icon: "📚",
    left : "",
    top: "",
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
          <Card className="lg:h-auto h-[320px] md-h-auto ">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8 ">
              <Image src={bookImage} alt="Book Image" />
            </div>
          </Card>
          <Card className="lg:h-auto h-[320px] md-h-auto p-0 ">
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
          <Card className="lg:h-auto h-[320px] md-h-auto p-0 flex flex-col">
            <CardHeader
              title="Beyound the Code"
              description="Explore my interests and hobbies beyound the digital realm."
              className="px-6 pt-6 "
            />

            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="inline-flex items-center rounded-full gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 py-1.5 absolute">
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.icon}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="lg:h-auto h-auto md-h-auto">
            <Image src={mapImage} alt="map" />
            <Image src={SmileImoji} alt="Smile Image" />
          </Card>
        </div>
      </div>
    </div>
  );
};
