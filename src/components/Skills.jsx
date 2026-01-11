import React from 'react';

const Skills = () => {
    const languages = ["C", "C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"];
    const core = ["Data Structures & Algorithms", "DBMS", "Operating Systems", "OOP", "Computer Networks"];
    const backend = ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "Microservices"];
    const frontend = ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"];
    const dataAI = ["OpenCV", "MediaPipe", "Pandas", "NumPy", "Scikit-learn", "RAG", "LangChain"];
    const devops = ["Git", "Docker", "CI/CD", "AWS", "GCP", "VS Code", "Linux"];

    const icons1 = [
        "devicon-c-plain colored", "devicon-cplusplus-plain colored", "devicon-python-plain colored",
        "devicon-javascript-plain colored", "devicon-typescript-plain colored", "devicon-java-plain colored",
        "devicon-mysql-plain colored", "devicon-react-original colored", "devicon-nodejs-plain colored"
    ];

    const icons2 = [
        "devicon-html5-plain colored", "devicon-css3-plain colored", "devicon-tailwindcss-plain colored",
        "devicon-nextjs-plain text-white", "devicon-express-original text-white", "devicon-git-plain colored",
        "devicon-docker-plain colored", "devicon-amazonwebservices-original colored", "devicon-linux-plain text-white"
    ];


    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-start pt-16 pb-20 relative overflow-hidden"
        >
            <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Skills</span>
            </h2>

            <div className="skills-container w-full max-w-[1400px] flex flex-col gap-4">

                {/* Languages & Core */}
                <div className="scroll" style={{ "--time": "35s" }}>
                    <div>
                        {languages.map((s, i) => <span key={i}>{s}</span>)}
                        {core.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                    <div>
                        {languages.map((s, i) => <span key={i}>{s}</span>)}
                        {core.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                </div>

                {/* Backend & Frontend */}
                <div className="scroll" style={{ "--time": "30s" }} dir="rtl">
                    <div>
                        {backend.map((s, i) => <span key={i}>{s}</span>)}
                        {frontend.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                    <div>
                        {backend.map((s, i) => <span key={i}>{s}</span>)}
                        {frontend.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                </div>

                {/* Data/AI & DevOps */}
                <div className="scroll" style={{ "--time": "40s" }}>
                    <div>
                        {dataAI.map((s, i) => <span key={i}>{s}</span>)}
                        {devops.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                    <div>
                        {dataAI.map((s, i) => <span key={i}>{s}</span>)}
                        {devops.map((s, i) => <span key={i + 100}>{s}</span>)}
                    </div>
                </div>

                {/* Icons Row 1 */}
                <div className="scroll imgBox" style={{ "--time": "25s" }}>
                    <div>
                        {icons1.map((icon, i) => (
                            <i key={i} className={`${icon} text-5xl mx-8`}></i>
                        ))}
                    </div>
                    <div>
                        {icons1.map((icon, i) => (
                            <i key={`clone-${i}`} className={`${icon} text-5xl mx-8`}></i>
                        ))}
                    </div>
                </div>

                {/* Icons Row 2 */}
                <div className="scroll imgBox" style={{ "--time": "25s" }} dir="rtl">
                    <div>
                        {icons2.map((icon, i) => (
                            <i key={i} className={`${icon} text-5xl mx-8`}></i>
                        ))}
                    </div>
                    <div>
                        {icons2.map((icon, i) => (
                            <i key={`clone-${i}`} className={`${icon} text-5xl mx-8`}></i>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
        .skills-container {
             mask-image: linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent);
        }
        
        .scroll {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .scroll > div {
          display: flex;
          white-space: nowrap;
          animation: animate var(--time) linear infinite;
          gap: 2rem;
          padding-left: 2rem; 
        }

        .scroll > div > span {
            background-color: #1a1a1a;
            color: #d1d5db;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            font-family: monospace;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
        }
        .scroll > div > span:hover {
            color: white;
            border-color: rgba(168, 85, 247, 0.5);
            background-color: #262626;
        }

        .imgBox > div {
            display: flex;
            align-items: center;
        }

        @keyframes animate {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* For RTL support in simple flex animation, we just animate normally but the flex-direction handles the visual flow? 
           Actually, simply utilizing animation-direction: reverse might be cleaner for the RTL rows 
           to ensure they flow correctly without complex transforms.
        */
        
        [dir="rtl"] .scroll > div {
             animation-direction: reverse;
        }

        /* 
           Fix for gap consistency: 
           We use two identical children divs. 
           Animation slides first one completely out -100%, 
           while second one follows. 
        */

      `}</style>
        </section>
    );
};

export default Skills;
