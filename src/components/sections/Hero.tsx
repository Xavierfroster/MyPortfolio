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
      
      {/* Double Glowing Tech Orbs (Recruiter Catching Visuals) */}
      <motion.div
        className="absolute w-[120vw] h-[120vw] md:w-[50vw] md:h-[50vw] max-w-[600px] max-h-[600px] bg-indigo-500/10 rounded-full blur-[110px] z-0 top-[15%] left-[10%]"
        style={{ y: backgroundY }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[120vw] h-[120vw] md:w-[50vw] md:h-[50vw] max-w-[600px] max-h-[600px] bg-sky-500/10 rounded-full blur-[110px] z-0 bottom-[15%] right-[10%]"
        style={{ y: backgroundY }}
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 12,
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-950/20 backdrop-blur-md mb-2 cursor-default"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
            Project Engineer @ C-DAC Noida
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Engineering <br />
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Robust Systems
          </span>
        </motion.h1>
        
        <motion.p
          className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Hi, I am Kumar Dhawale. I design, secure, and optimize enterprise web systems. Specializing in Java, Spring Boot, and PostgreSQL database performance, with proven experience delivering audited, Safe-to-Host (STH) solutions at national scale.
        </motion.p>

        {/* Recruiter-centric Call to action buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 active:scale-95 text-center"
          >
            Explore Projects
          </a>
          <a 
            href="/Kumar_Dhawale_8208910466.pdf" 
            download="Kumar_Dhawale_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-700 bg-slate-900/40 text-slate-200 font-medium text-sm rounded-full hover:bg-slate-800/60 hover:text-white transition-all duration-300 active:scale-95 text-center flex items-center justify-center gap-2"
          >
            Get Resume / CV
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
