
import { Header } from "<prefix>/sections/Header"
import { HeroSection } from "<prefix>/sections/Hero";
import { ProjectsSection } from "<prefix>/sections/Projects";
import { TapeSection } from "<prefix>/sections/Tape";
import { TestimonialsSection } from "../sections/Testimonials";
import { AboutSection } from "<prefix>/sections/About";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection/>
    </div>
  );
}
