import React from 'react';
import { motion } from 'framer-motion';

export default function Sidebar() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-[400px] lg:h-screen lg:fixed lg:left-0 lg:top-0 p-4 z-50 flex flex-col"
        >
            <div className="bg-sawad-card h-full w-full rounded-3xl p-8 flex flex-col border border-white/5 relative overflow-y-auto overflow-x-hidden group no-scrollbar">
                {/* Background gradient hint */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sawad-lime/5 rounded-full blur-3xl -z-10 group-hover:bg-sawad-lime/10 transition-colors duration-500"></div>

                <div>
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-8 border border-white/10">
                        <img src="/images/user-profile.jpg" alt="Vasanth Banoth" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-medium text-white/90">Available for work</span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Vasanth Banoth</h1>
                    <p className="text-gray-400 text-lg mb-6">Full Stack Developer based in India.</p>

                    {/* Location */}
                    <a href="https://www.google.com/maps/place/Hyderabad,+Telangana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-web3-primary/50 transition-all group/item">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-web3-primary to-web3-secondary flex items-center justify-center text-black shadow-lg shadow-web3-primary/20 animate-pulse group-hover/item:scale-110 transition-transform">
                            <i className="fa-solid fa-location-dot text-lg"></i>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1 group-hover/item:text-web3-primary transition-colors">Home Town</p>
                            <p className="text-white font-medium leading-tight">Hyderabad, Telangana</p>
                        </div>
                    </a>

                    {/* Email */}
                    <div className="flex items-center gap-3 mb-4 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-sawad-orange/50 transition-all group/item">
                        <div className="w-10 h-10 rounded-full bg-sawad-orange flex items-center justify-center text-black shadow-lg shadow-sawad-orange/20 group-hover/item:scale-110 transition-transform">
                            <i className="fa-solid fa-envelope text-lg"></i>
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1 group-hover/item:text-sawad-orange transition-colors">Email</p>
                            <a href="mailto:thevasanthbanoth@gmail.com" className="text-white font-medium leading-tight hover:text-sawad-orange transition-colors block truncate">thevasanthbanoth@gmail.com</a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 mb-6 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-cyan-400/50 transition-all group/item">
                        <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-black shadow-lg shadow-cyan-400/20 group-hover/item:scale-110 transition-transform">
                            <i className="fa-solid fa-phone text-lg"></i>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1 group-hover/item:text-cyan-400 transition-colors">Phone</p>
                            <a href="tel:+919912860300" className="text-white font-medium leading-tight hover:text-cyan-400 transition-colors">+91-9912860300</a>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex gap-4 mb-6">
                        <a href="https://GitHub.com/vasanthbanoth" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <i className="fa-brands fa-github"></i> G
                        </a>
                        <a href="https://twitter.com/vasanthonx" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <i className="fa-brands fa-twitter"></i> X
                        </a>
                        <a href="https://www.linkedin.com/in/vasanthbanoth" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <i className="fa-brands fa-linkedin"></i> In
                        </a>
                    </div>

                    <a href="/Vasanth_Resume.pdf" download className="w-full block text-center py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-sawad-lime transition-colors duration-300">
                        Download Resume
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
