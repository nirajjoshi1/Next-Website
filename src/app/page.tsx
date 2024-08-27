
import { Header } from "<prefix>/sections/Header"
import { HeroSection } from "<prefix>/sections/Hero";
import { ProjectsSection } from "<prefix>/sections/Projects";
import { TapeSection } from "<prefix>/sections/Tape";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
    </div>
  );
}
