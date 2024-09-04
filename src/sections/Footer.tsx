import ArrowUpIcon  from "<prefix>/assets/icons/arrow-up-right.svg"

const FooterLinks = [
  {
    title: "Youtube",
    href: "youtube.com",
  },
  {
    title: "Facebook",
    href: "",
  },
  {
    title: "Instagram",
    href: "",
  },
  {
    title: "GitHub",
    href: "",
  },
];
export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip lg:px-16 md:px-6">
      <div className="absolute h-[500px] w-[1600px] bottom-0 left-1/2 pointer-events-none -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="lg:text-[21px] md:text-[16px]">
            &copy; 2024. All rights reserved.
          </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-4 lg:gap-10 ">
            {FooterLinks.map((link) => (
              <a
                className="inline-flex items-center gap-1.5 cursor-pointer"
                key={link.title}
                href={link.href}
                target="_blank"
              >
                <span className="font-semibold lg:text-[20px] cursor-pointer">
                  {link.title}
                </span>
                <ArrowUpIcon className="scale-[0.7] lg:scale-[0.9]" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
