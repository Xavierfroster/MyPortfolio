"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex flex-col items-center justify-center py-32 px-6 bg-slate-950 overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/45 via-slate-950 to-slate-950 z-0 pointer-events-none" />

      <motion.div 
        className="relative z-10 max-w-2xl w-full text-center space-y-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Let's Talk.</h2>
          <p className="text-xl text-slate-300 font-light">
            Based in Nagpur, India. I am always open to discussing new opportunities, secure systems, and scalable enterprise solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="mailto:kd61413@gmail.com" className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 active:scale-95">
            kd61413@gmail.com
          </a>
          <a href="/Kumar_Dhawale_8208910466.pdf" download="Kumar_Dhawale_Resume.pdf" className="px-8 py-4 border border-slate-700 bg-slate-900/40 text-slate-200 font-medium rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300 active:scale-95">
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
