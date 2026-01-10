import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative inline-block"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-web3-primary to-web3-secondary rounded-full blur opacity-20 animate-pulse"></div>
                    <img src="/images/user-profile.jpg" alt="Profile" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 mx-auto" />
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl mt-6 font-light tracking-wide text-gray-300"
                >
                    Hi! I'm Vasanth Banoth
                </motion.h3>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold mt-4 font-Outfit tracking-tighter"
                >
                    <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">FULL STACK</span>
                    <br />
                    <span className="bg-gradient-to-r from-web3-primary to-web3-secondary bg-clip-text text-transparent">DEVELOPER</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 max-w-xl mx-auto text-gray-400 text-lg"
                >
                    Based in India. Transforming ideas into digital reality with modern web technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="px-8 py-3 rounded-full bg-web3-primary text-black font-semibold hover:shadow-[0_0_20px_rgba(0,255,238,0.5)] transition-shadow duration-300">
                        Contact Me
                    </a>
                    <a href="/Vasanth_Resume.pdf" download className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300 text-white flex items-center gap-2">
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
