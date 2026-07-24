"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen flex items-center justify-center py-32 px-6">
      <motion.div 
        className="max-w-4xl mx-auto space-y-12"
        style={{ y, opacity }}
      >
        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500">The Philosophy</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Software should be secure,<br className="hidden md:block" />
            <span className="text-zinc-600">scalable, and heavily optimized.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
          <p>
            I architect enterprise-level solutions with a strict focus on data security using JWT and JWE, ensuring that sensitive information remains protected across all communication workflows.
          </p>
          <p>
            By designing robust REST APIs and optimizing complex SQL databases, I consistently improve delivery times and system performance, reducing operational latency by up to 35% in large-scale applications.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
