import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import ResumePreview from '@/components/ResumePreview';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <ResumePreview />
      <Contact />
    </>
  );
}
