import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background relative selection:bg-white/20 selection:text-white">
      <Hero />
      <div className="relative z-10 bg-background">
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
