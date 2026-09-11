import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectList() {
    const projects = [
        {
            title: "Medi-Core-Gen-AI",
            type: "AI & Healthcare",
            year: "2025",
            image: "work-3.png", // Reusing/Placeholder
            link: "https://github.com/vasanthbanoth/Medi-Core-Gen-AI",
            github: "https://github.com/vasanthbanoth/Medi-Core-Gen-AI",
            desc: "Advanced Generative AI system for medical diagnostics and core healthcare data analysis using LLMs.",
            stack: [
                { icon: "fa-solid fa-brain text-rose-400", name: "GenAI" },
                { icon: "devicon-python-plain colored", name: "Python" },
                { icon: "devicon-tensorflow-original colored", name: "TensorFlow" }
            ]
        },
        {
            title: "NewsScanAI-NLP",
            type: "NLP & ML",
            year: "2025",
            image: "work-1.png", // Reusing/Placeholder
            link: "https://github.com/vasanthbanoth/NewsScanAI-NLP",
            github: "https://github.com/vasanthbanoth/NewsScanAI-NLP",
            desc: "NLP-powered news aggregator that scans, categorizes, and summarizes global news streams in real-time.",
            stack: [
                { icon: "devicon-python-plain colored", name: "Python" },
                { icon: "fa-solid fa-language text-blue-400", name: "NLP" },
                { icon: "devicon-scikitlearn-plain colored", name: "Scikit-learn" }
            ]
        },
        {
            title: "FitFrame",
            type: "Web Application",
            year: "2025",
            image: "fitframe.png",
            link: "https://fit-frame.vercel.app/",
            github: "https://github.com/vasanthbanoth",
            desc: "AI-powered fitness tracking application developed to revolutionize home workouts with real-time posture correction.",
            stack: [
                { icon: "devicon-react-original colored", name: "React" },
                { icon: "devicon-tailwindcss-plain colored", name: "Tailwind" },
                { icon: "fa-solid fa-brain text-rose-400", name: "AI" }
            ]
        },
        {
            title: "Music App", // Renamed from KT Music Player
            type: "Web App",
            year: "2024",
            image: "music-app.png",
            link: "https://github.com/vasanthbanoth/kt-music-player",
            github: "https://github.com/vasanthbanoth/kt-music-player",
            desc: "A feature-rich music player built with modern technologies, supporting custom playlists and equalizer settings.",
            stack: [
                { icon: "devicon-javascript-plain colored", name: "JS" },
                { icon: "devicon-css3-plain colored", name: "CSS" },
                { icon: "fa-solid fa-music text-blue-400", name: "Audio API" }
            ]
        },
    ];

    return (
        <section id="projects" className="py-12 sm:py-16 lg:py-20">
            <h2 className="mb-10 text-center text-3xl font-bold sm:mb-16 sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-0 sm:gap-8 sm:px-2 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-xl shadow-black h-full flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden bg-black sm:h-64">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10"></div>

                            {/* Hover Scale Effect on Image */}
                            <div className={`w-full h-full bg-black flex items-center justify-center group-hover:scale-105 transition-transform duration-700`}>
                                <img
                                    src={`/images/${project.image}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<i class="fa-solid fa-layer-group text-6xl text-white/5"></i>'; }}
                                />
                            </div>

                            {/* Year Badge */}
                            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-purple-400">
                                {project.year}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-20 flex flex-1 flex-col p-5 pt-2 sm:p-8 sm:pt-2">
                            <div className="mb-4 flex items-start justify-between">
                                <div className="min-w-0">
                                    <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400 sm:text-2xl">{project.title}</h3>
                                    <p className="line-clamp-3 text-sm text-gray-400 sm:line-clamp-2">{project.desc}</p>
                                </div>
                            </div>

                            <div className="mt-auto">
                                {/* Tech Stack Row */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:border-purple-500/30 transition-colors" title={tech.name}>
                                            <i className={`${tech.icon} text-lg`}></i>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>

                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors inline-flex items-center gap-2">
                                        Check Live <i className="fa-solid fa-arrow-right text-xs"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
