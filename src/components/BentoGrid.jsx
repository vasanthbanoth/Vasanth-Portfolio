import React from 'react';
import { motion } from 'framer-motion';

export default function BentoGrid() {
    return (
        <section id="home" className="pt-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* Large Title Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-2 lg:col-span-2 bg-sawad-card rounded-3xl p-8 min-h-[300px] flex flex-col justify-end relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                        <img src="/images/code-icon-dark.png" className="w-24 invert" alt="Code" />
                    </div>
                    <h2 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                        FULL<br />STACK<br /><span className="text-sawad-lime">DEV.</span>
                    </h2>
                </motion.div>

                {/* Location Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-sawad-card rounded-3xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/78.9629,20.5937,3,0/400x400?access_token=YOUR_TOKEN')] bg-cover opacity-50 mix-blend-overlay"></div>
                    <div className="relative z-10">
                        <p className="text-gray-400">Based in</p>
                        <h3 className="text-3xl font-bold text-white">India</h3>
                    </div>
                    <div className="w-full h-32 bg-white/5 mt-4 rounded-xl flex items-center justify-between p-4 border border-white/10 group-hover:border-sawad-orange/50 transition-colors relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Remote</span>
                            </div>
                            <span className="text-lg font-semibold text-white leading-tight block">Open to remote<br />work worldwide</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-sawad-lime/10 flex items-center justify-center text-sawad-lime animate-spin-slow">
                            <i className="fa-solid fa-globe text-2xl"></i>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Block - Expanded to fill row */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1 md:col-span-2 lg:col-span-3 bg-sawad-card rounded-3xl p-8 flex items-center justify-around border border-white/5"
                >
                    <div className="text-center group cursor-default">
                        <i className="fa-solid fa-laptop-code text-2xl text-sawad-lime mb-2 group-hover:scale-110 transition-transform"></i>
                        <h4 className="text-5xl font-bold text-white mb-1">4+</h4>
                        <p className="text-gray-400 text-sm tracking-wider uppercase">Projects</p>
                    </div>
                    <div className="w-px h-16 bg-white/10"></div>
                    <div className="text-center group cursor-default">
                        <i className="fa-solid fa-layer-group text-2xl text-sawad-orange mb-2 group-hover:scale-110 transition-transform"></i>
                        <h4 className="text-5xl font-bold text-white mb-1">10+</h4>
                        <p className="text-gray-400 text-sm tracking-wider uppercase">Techs</p>
                    </div>
                    <div className="w-px h-16 bg-white/10"></div>
                    <div className="text-center group cursor-default">
                        <i className="fa-solid fa-bolt text-2xl text-cyan-400 mb-2 group-hover:scale-110 transition-transform"></i>
                        <h4 className="text-5xl font-bold text-white mb-1">100%</h4>
                        <p className="text-gray-400 text-sm tracking-wider uppercase">Commitment</p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
