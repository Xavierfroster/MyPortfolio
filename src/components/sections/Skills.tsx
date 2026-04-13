"use client";

import { motion } from "framer-motion";

const skills = [
  "Java", "Spring Boot", "Spring MVC", "Hibernate / JPA", 
  "JavaScript / ReactJS", "MySQL & PostgreSQL", 
  "REST APIs", "JWT & JWE Security", 
  "Docker & DevOps", "PL/SQL"
];

export function Skills() {
  return (
    <section className="relative min-h-screen py-32 px-6 bg-black flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-16 text-center">Core Capabilities</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-lg md:text-2xl font-light tracking-wide text-zinc-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
