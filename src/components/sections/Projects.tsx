"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Enterprise SLCMS Suite",
    problem: "Massive scale institutions (SAIL Rourkela, AIIMS, DMER) required synchronous, secure multi-tenant management modules.",
    solution: "Engineered robust, highly secure web applications processing 100,000+ records via encrypted internal APIs.",
    stack: "Java, Spring MVC, Hibernate, JSP, PL/SQL",
    link: "#",
  },
  {
    title: "NPPA (IPDMS)",
    problem: "Data pipelines were bottlenecking, causing downtime and inefficient data traversal during peak usage.",
    solution: "Re-architected backend endpoints improving stability by 40% and deploying a centralized PostgreSQL data-store.",
    stack: "Java, PostgreSQL, Spring Boot",
    link: "#",
  },
  {
    title: "Automated Comms Engine",
    problem: "High manual overhead mapping administrative notifications to end-users.",
    solution: "Designed custom API integrations utilizing WhatsApp services to seamlessly automate 5,000+ daily operational messages.",
    stack: "Java, REST APIs, Third-party Webhooks",
    link: "#",
  },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Intro text for the section */}
        <div className="absolute left-8 top-8 md:left-24 md:top-24 z-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500">Selected Work</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-[10vw] md:px-[20vw]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center gap-8"
            >
              <h3 className="text-4xl md:text-7xl font-bold tracking-tighter w-full max-w-[90%] text-wrap">
                {project.title}
              </h3>
              
              <div className="space-y-6 max-w-xl">
                <div>
                  <span className="block text-sm text-zinc-500 uppercase tracking-widest mb-1">Problem</span>
                  <p className="text-lg md:text-xl text-zinc-300 font-light">{project.problem}</p>
                </div>
                <div>
                  <span className="block text-sm text-zinc-500 uppercase tracking-widest mb-1">Solution</span>
                  <p className="text-lg md:text-xl text-zinc-300 font-light">{project.solution}</p>
                </div>
                <div>
                  <span className="block text-sm text-zinc-500 uppercase tracking-widest mb-1">Tech Stack</span>
                  <p className="text-zinc-400 font-mono text-sm">{project.stack}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
