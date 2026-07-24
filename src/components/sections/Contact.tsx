"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center py-32 px-6 bg-black overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black z-0 pointer-events-none" />

      <motion.div 
        className="relative z-10 max-w-2xl w-full text-center space-y-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Let's Talk.</h2>
          <p className="text-xl text-zinc-400 font-light">
            Based in Nagpur, India. I am always open to discussing new opportunities, secure systems, and scalable enterprise solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="mailto:kd61413@gmail.com" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors">
            kd61413@gmail.com
          </a>
          <a href="/Kumar_Dhawale_8208910466.pdf" download="Kumar_Dhawale_Resume.pdf" className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors">
            Download Resume
          </a>
        </div>
        
        <div className="flex justify-center gap-8 pt-12">
          <a href="https://github.com/Xavierfroster" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kumardhawale" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
            LinkedIn
          </a>
          <a href="tel:+918208910466" className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
            +91-8208910466
          </a>
        </div>
      </motion.div>
      
      <div className="absolute bottom-6 text-zinc-700 text-xs text-center w-full">
        © {new Date().getFullYear()} Kumar Dhawale. All rights reserved.
      </div>
    </section>
  );
}
