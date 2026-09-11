import React from 'react';
import { motion } from 'framer-motion';

export default function BentoGrid() {
  return (
    <section id="home" className="pb-8 pt-2 sm:pb-12 sm:pt-4">
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="group relative col-span-1 flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl bg-sawad-card p-5 sm:min-h-[260px] sm:p-8 md:col-span-2 lg:col-span-2 lg:min-h-[300px]"
        >
          <div className="absolute right-0 top-0 p-4 opacity-20 transition-opacity group-hover:opacity-100 sm:p-8">
            <img src="/images/code-icon-dark.png" className="h-14 w-14 invert sm:h-24 sm:w-24" alt="" aria-hidden />
          </div>
          <h2 className="relative z-10 text-4xl font-black leading-[0.95] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            AI &amp;
            <br />
            SOFTWARE
            <br />
            <span className="text-sawad-lime">ENG.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-sawad-card p-5 sm:p-8"
        >
          <div className="relative z-10">
            <p className="text-gray-400">Based in</p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">India</h3>
          </div>
          <div className="relative mt-4 flex min-h-[7rem] items-center justify-between gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 sm:h-32 sm:p-4">
            <div className="relative z-10 min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 sm:text-xs">Remote</span>
              </div>
              <span className="block text-sm font-semibold leading-tight text-white sm:text-lg">
                Open to remote
                <br />
                work worldwide
              </span>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sawad-lime/10 text-sawad-lime sm:h-12 sm:w-12" style={{ animation: 'spin 6s linear infinite' }}>
              <i className="fa-solid fa-globe text-xl sm:text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 flex flex-col items-stretch justify-around gap-4 rounded-3xl border border-white/5 bg-sawad-card p-5 sm:flex-row sm:items-center sm:gap-0 sm:p-8 md:col-span-2 lg:col-span-3"
        >
          <div className="cursor-default text-center group">
            <i className="fa-solid fa-laptop-code mb-2 text-xl text-sawad-lime transition-transform group-hover:scale-110 sm:text-2xl" />
            <h4 className="mb-1 text-3xl font-bold text-white sm:text-4xl md:text-5xl">10+</h4>
            <p className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">Projects</p>
          </div>
          <div className="mx-auto hidden h-px w-16 bg-white/10 sm:mx-0 sm:block sm:h-16 sm:w-px" />
          <div className="cursor-default text-center group">
            <i className="fa-solid fa-layer-group mb-2 text-xl text-sawad-orange transition-transform group-hover:scale-110 sm:text-2xl" />
            <h4 className="mb-1 text-3xl font-bold text-white sm:text-4xl md:text-5xl">10+</h4>
            <p className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">Techs</p>
          </div>
          <div className="mx-auto hidden h-px w-16 bg-white/10 sm:mx-0 sm:block sm:h-16 sm:w-px" />
          <div className="cursor-default text-center group">
            <i className="fa-solid fa-bolt mb-2 text-xl text-cyan-400 transition-transform group-hover:scale-110 sm:text-2xl" />
            <h4 className="mb-1 text-3xl font-bold text-white sm:text-4xl md:text-5xl">100%</h4>
            <p className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">Commitment</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
