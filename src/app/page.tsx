
import { Header } from "<prefix>/sections/Header"
import { HeroSection } from "<prefix>/sections/Hero";
import { ProjectsSection } from "<prefix>/sections/Projects";
import { TapeSection } from "<prefix>/sections/Tape";
import { TestimonialsSection } from "../sections/Testimonials";
import { AboutSection } from "<prefix>/sections/About";
import { ContactSection } from "<prefix>/sections/Contact";
import { Footer } from "<prefix>/sections/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
