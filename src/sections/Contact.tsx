import ArrowUp from "<prefix>/assets/icons/arrow-up-right.svg";
import GrainImage from "<prefix>/assets/images/grain.jpg"

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 flex flex-col items-center justify-center lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r relative from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 text-center md:text-left rounded-3xl z-0 overflow-hidden ">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif">
                {"Let's create something amazing together"}
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? {"Let's"} connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className=" gap-2 text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl w-max border border-gray-950">
                <span className="font-semibold">Contact Me</span>
                <ArrowUp className="scale-[1.1]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
