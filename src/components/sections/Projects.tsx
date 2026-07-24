"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiTerminal, FiServer } from "react-icons/fi";

const projects = [
  {
    title: "e-SLCMS",
    problem: "Needed a multi-tenant administration platform for 2 AIIMS and 65 state medical colleges with zero data leakage.",
    solution: "Developed secure core modules (Digital Notice Board, Registration, Fees, Alumni) and built an analytical dashboard for Nodal Officers, Directors, and Collectors. Cleared security audit with Safe-to-Host (STH) certification by MQAS Global.",
    stack: "Java, Spring MVC, Hibernate, JSP, PL/SQL, Oracle DB",
    link: "https://e-slcms.in/AHIMSG5/hissso/Login",
    visual: (
      <div className="w-full h-44 rounded-xl border border-white/5 bg-zinc-950/80 p-4 font-sans text-xs text-zinc-400 flex flex-col justify-between">
        {/* Browser Top */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] text-zinc-600 bg-white/5 px-3 py-0.5 rounded-md border border-white/5">
            e-slcms.in
          </span>
          <div className="w-6" />
        </div>
        {/* Mock stats widget */}
        <div className="grid grid-cols-3 gap-2 py-3">
          <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
            <div className="text-zinc-500 text-[10px]">AIIMS Nodes</div>
            <div className="text-white font-bold text-sm">2 Active</div>
          </div>
          <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
            <div className="text-zinc-500 text-[10px]">DMER Colleges</div>
            <div className="text-white font-bold text-sm">65 Active</div>
          </div>
          <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 text-center text-emerald-400">
            <div className="text-emerald-500 text-[10px]">STH Audit</div>
            <div className="font-bold text-sm">PASSED</div>
          </div>
        </div>
        {/* Recent modules alert */}
        <div className="text-[9px] bg-white/5 py-1 px-2.5 rounded border border-white/5 flex items-center justify-between text-zinc-500">
          <span>Module Logs: Notice Board, Fee collection, Alumni Sync</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    title: "NPPA (IPDMS)",
    problem: "Government pharmaceutical pricing database suffered high request latencies, halting drug pricing compliance reports.",
    solution: "Re-engineered data access layers, optimized SQL databases, and deployed PostgreSQL index patterns, elevating API response stability by 40%.",
    stack: "Java, Spring Boot, REST APIs, PostgreSQL, Hibernate",
    link: "https://nppa.gov.in/en",
    visual: (
      <div className="w-full h-44 rounded-xl border border-white/5 bg-zinc-950/80 p-4 font-mono text-[11px] text-zinc-400 flex flex-col justify-between">
        {/* Browser Top */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[9px] text-zinc-600">PostgreSQL Analytics</span>
          <FiServer className="text-zinc-600" />
        </div>
        {/* DB stats */}
        <div className="space-y-2 py-2">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-zinc-500">API Response Stability:</span>
            <span className="text-emerald-400 font-bold">+40%</span>
          </div>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[90%]" />
          </div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-zinc-500">Latency Overhead:</span>
            <span className="text-zinc-300">-35% Reduction</span>
          </div>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-[35%]" />
          </div>
        </div>
        <div className="text-[9px] text-zinc-600 text-center">
          Query optimization logs output: SUCCESS [200 OK]
        </div>
      </div>
    ),
  },
  {
    title: "Project HOPE",
    problem: "Voice assistants rely heavily on cloud APIs, presenting high latencies and potential privacy/data privacy leaks.",
    solution: "Designed a fully offline Python desktop agent (Human-Oriented Personal Engine) utilizing speech-to-text, custom command mappings, SQLite memory layers, and a cynical personality response model.",
    stack: "Python, SpeechRecognition, PyAudio, SQLite, OpenCV",
    link: "https://github.com/Xavierfroster/hope.git",
    visual: (
      <div className="w-full h-44 rounded-xl border border-white/5 bg-black p-4 font-mono text-[10px] text-emerald-400 flex flex-col justify-between">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          </div>
          <div className="flex items-center gap-1 text-zinc-500">
            <FiTerminal className="w-3.5 h-3.5" />
            <span>hope-engine ~ main.py</span>
          </div>
          <div className="w-6" />
        </div>
        {/* Terminal Text logs */}
        <div className="space-y-1.5 py-2 font-light text-zinc-400">
          <p><span className="text-zinc-600">[sys]</span> Initializing Cynical Voice Engine...</p>
          <p><span className="text-zinc-600">[user]</span> "Hey Hope, volume up."</p>
          <p><span className="text-red-400/80">[HOPE]</span> "Volume set to 80%. Are you deaf or just ignoring me?"</p>
          <p><span className="text-emerald-500">[sys]</span> Memory active (10/10 recent commands cached).</p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-zinc-600">
          <span>SQLite DB Connected</span>
          <span className="text-emerald-500">Online</span>
        </div>
      </div>
    ),
  },
];

export function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-auto md:h-[300vh] bg-zinc-950">
      <div className="relative md:sticky md:top-0 h-auto md:h-screen flex flex-col md:flex-row md:items-center overflow-visible md:overflow-hidden py-20 md:py-0">
        
        {/* Left side overlay mask to hide scrolling cards behind the title (Desktop only) */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[35vw] bg-gradient-to-r from-[#080c14] via-[#080c14]/85 to-transparent z-20 pointer-events-none" />

        {/* Section Title */}
        <div className="relative md:absolute left-6 md:left-24 top-0 md:top-24 mb-12 md:mb-0 px-6 md:px-0 space-y-2 max-w-xs z-30">
          <h2 className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-semibold">Selected Architecture</h2>
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
            Enterprise Applications & Tools
          </p>
        </div>

        {/* Horizontal Scroll Container on Desktop / Vertical Stack on Mobile */}
        <motion.div 
          style={{ x }} 
          className="flex flex-col md:flex-row gap-16 md:gap-32 px-6 md:px-0 md:pr-[25vw] max-md:!transform-none items-start"
        >
          {/* Structural spacer to guarantee gap between section title and first card (Desktop only) */}
          <div className="hidden md:block w-[40vw] flex-shrink-0" />

          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-full md:w-[65vw] flex-shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Text Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl md:text-5xl font-extrabold tracking-tighter text-white">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    title="View Project Link"
                  >
                    <FiExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] text-indigo-400 uppercase tracking-widest font-semibold mb-1">Challenge</span>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-indigo-400 uppercase tracking-widest font-semibold mb-1">Execution</span>
                    <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-indigo-400 uppercase tracking-widest font-semibold mb-1">Technology Deck</span>
                    <p className="text-slate-400 font-mono text-[11px] bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 inline-block mt-1">
                      {project.stack}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Mockup Card */}
              <div className="lg:col-span-5 w-full">
                <div className="p-1 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-md shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    {project.visual}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
