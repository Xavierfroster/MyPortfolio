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
          className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Hi, I am Kumar Dhawale. A Software Engineer specializing in Java, Spring Boot, and building scalable full-stack applications with an emphasis on secure and optimized architecture.
        </motion.p>
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
