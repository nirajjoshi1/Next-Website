export const Header = () => {
  return (
    <div className="flex fixed w-full justify-center items-center top-3 font-medium z-[9999]">
      <nav className="flex gap-1 p-0.5 border border-white/10 rounded-full bg-white/15 backdrop-blur-0 z-10">
        <a
          href="#"
          className="px-4 py-1.5 rounded-full text-white-70 font-semibold 
           hover:text-white hover:bg-white/10 text-sm transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="px-4 py-1.5 rounded-full hover:text-white hover:bg-white/10  text-white-70 font-semibold text-sm transition-all duration-300"
        >
          Projects
        </a>
        <a
          href="#"
          className="px-4 py-1.5 rounded-full text-white-70 
          font-semibold text-sm hover:text-white hover:bg-white/10  transition-all duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="px-4 py-1.5 rounded-full text-gray-900 bg-white font-semibold 
          text-sm hover:text-gray-900 hover:bg-white/70  transition duration-300"
        >
          Contact
        </a>
      </nav>
    </div> 
  );
};
