"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-60"
        style={{ y: backgroundY }}
      />
      
      {/* Animated Glowing Orb / Shape */}
      <motion.div
        className="absolute w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] bg-red-500/20 md:bg-red-500/10 rounded-full blur-[80px] md:blur-[100px] z-0"
        style={{ y: backgroundY }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center px-4"
        style={{ y: textY, opacity }}
      >
        {/* Subtitle Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/40 backdrop-blur-md mb-2 cursor-default"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] text-zinc-300 uppercase">
            Project Engineer @ C-DAC
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Engineering <br />
          <span className="text-zinc-500">Robust Systems</span>
        </motion.h1>
        
        <motion.p
          className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Hi, I am Kumar Dhawale. I design, secure, and optimize enterprise-scale web applications. Specializing in Java, Spring Boot, and database performance tuning, with a focus on compliant architecture and Safe-to-Host (STH) security audits.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div 
          className="flex flex-row items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a 
            href="#projects" 
            className="px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-md shadow-white/5 active:scale-95"
          >
            Selected Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3.5 border border-zinc-800 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-all duration-300 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-white/20 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
