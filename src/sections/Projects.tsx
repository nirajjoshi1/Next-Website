import Image from "next/image";
import Link from "next/link";
import darkSaasLandingPage from "<prefix>/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "<prefix>/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "<prefix>/assets/images/ai-startup-landing-page.png";
import greeImage from "<prefix>/assets/images/grain.jpg";
import CheckIcon from "<prefix>/assets/icons/check-circle.svg";
import ArrowUp from "<prefix>/assets/icons/arrow-up-right.svg";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="proj pb-16 lg:py-24 md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center">
      <div className="container lg:max-w-5xl ">
        <div className="flex justify-center">
          <p className="font-semibold uppercase text-center tracking-widest apple bg-gradient-to-t from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="text-3xl font-serif text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-white/60 text-center mt-4 md:text-lg lg:text-xl mx-auto max-w-md">
          See how I transformed into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 overflow-hidden z-0 rounded-3xl relative after:content-[''] 
               after:absolute after:z-[1] after:inset-0 after:outline-2 after:outline after:-outline-offset-2
               after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md-px-10 lg:pt-16 lg-px20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url({greenImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                <div className="inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 hap-2 font-bold uppercase text-sm text-transparent bg-clip-text tracking-widest">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-serif mt-2 md:mt-5 md:text-4xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, index) => (
                    <li
                      key={`${project.title}-${index}`}
                      className="flex gap-2 text-sm md:text-base text-white/50"
                    >
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                {/* No <a> tag, attributes passed directly to Link */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-950 h-12 w-full font-semibold rounded-xl inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                    <span>Visit Live Site</span>
                    <ArrowUp className="size-5 md:mb-1" />
                  </button>
                </Link>
                </div>
                <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:height-full lg:width-auto lg:max-w-none"
                />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
