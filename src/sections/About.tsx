import { SectionHeader } from "<prefix>/components/SectionHeader";
import { Card } from "<prefix>/components/Card";
import { TechIcon } from "<prefix>/components/TechIcon";
import Starsvg from "<prefix>/assets/icons/star.svg";
import JSIcon from "<prefix>/assets/icons/square-js.svg";
import HtmlIcon from "<prefix>/assets/icons/html5.svg";
import CssIcon from "<prefix>/assets/icons/css3.svg";
import ReactIcon from "<prefix>/assets/icons/react.svg";
import ChromeIcon from "<prefix>/assets/icons/chrome.svg";
import GitIcon from "<prefix>/assets/icons/github.svg";
import bookImage from "<prefix>/assets/images/book-cover.png";
import SmileImoji from "<prefix>/assets/images/memoji-smile.png";
import mapImage from "<prefix>/assets/images/map.png";
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
  },
  {
    title: "Photography",
    icon: "📷",
  },
  {
    title: "Gaming",
    icon: "🎮",
  },

  {
    title: "Hiking",
    icon: "⛷️",
  },
  {
    title: "Music",
    icon: '🎵',
  },
  {
    title: "Horse Writing",
    icon: '🏇',
  },
  {
    title: "Reading",
    icon: '📚',
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        title="About Me"
        eyebrow="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />
      <div>
        <Card className="lg:h-auto h-auto md-h-auto">
          <div>
            <Starsvg />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book Image" className="size-[30rem]" />
        </Card>
        <Card className="lg:h-auto h-auto md-h-auto">
          <div>
            <Starsvg />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools use to craft expectional
              digital experinces.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="lg:h-auto h-auto md-h-auto">
          <div>
            <Starsvg />
            <h3>Beyound the Code</h3>
            <p>Explore my interests and hobbies beyound the digital realm.</p>
          </div>
          <Image src={bookImage} alt="Book Image" className="size-[30rem]" />
        </Card>
        <Card className="lg:h-auto h-auto md-h-auto">
          <Image src={mapImage} alt="map" />
          <Image src={SmileImoji} alt="Smile Image" />
        </Card>
        
      </div>
    </div>
  );
};
