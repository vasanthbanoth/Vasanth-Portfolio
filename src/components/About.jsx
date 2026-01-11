import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    const customSkills = [
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "SQL", icon: "devicon-mysql-plain colored" },
        { name: "DSA", icon: "fa-solid fa-code-branch text-yellow-400" },
        { name: "DBMS", icon: "fa-solid fa-database text-blue-400" },
        { name: "OS", icon: "fa-solid fa-microchip text-green-400" },
        { name: "OOP", icon: "fa-solid fa-cubes text-purple-400" },
        { name: "Networks", icon: "fa-solid fa-network-wired text-red-400" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original text-white" },
        { name: "Flask", icon: "devicon-flask-original text-white" },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
        { name: "REST APIs", icon: "fa-solid fa-server text-indigo-400" },
        { name: "Microservices", icon: "fa-solid fa-share-nodes text-pink-400" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-plain text-white" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
        { name: "OpenCV", icon: "devicon-opencv-plain colored" },
        { name: "Pandas", icon: "devicon-pandas-plain text-white" }, // White for visibility
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
        { name: "RAG", icon: "fa-solid fa-brain text-rose-400" },
        { name: "LangChain", icon: "fa-solid fa-link text-emerald-400" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
        { name: "GCP", icon: "devicon-googlecloud-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain text-blue-500" }, // Manual blue
        { name: "Linux", icon: "devicon-linux-plain text-white" } // White for visibility
    ];

    return (
        <section id="about" className="pt-20 pb-24">
            {/* Education Section */}
            <div className="mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 flex items-center gap-4">
                    <span className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></span>
                    EDUCATION
                </h2>
                <div className="bg-sawad-card p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-cyan-400/30 transition-colors duration-500">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0">
                            <img src="/images/iiit-kota-logo.png" alt="IIIT Kota" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            {/* Branch moved from here */}
                            <p className="text-gray-300 text-lg font-medium">Indian Institute of Information Technology, Kota</p>
                            <p className="text-gray-500 mt-1 text-sm">Rajasthan, India</p>
                        </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                        {/* Branch moved here */}
                        <div className="inline-block bg-white/5 px-6 py-3 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                            <span className="text-gray-400 text-xs tracking-wider uppercase font-semibold mr-2">Branch</span>
                            <span className="text-white font-bold text-base">CSE</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
