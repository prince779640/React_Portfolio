import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
        "Vue",
        "TailwindCSS",
        "HTML",
        "Svelte",
        ];
    
    const backendSkills = [
        "NodeJS",
        "Python",
        "Java",
        "AWS",
        "MongoDB",
        "Mysql"
        ];  

    return (
    <section 
    id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >

        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                About Me 
            </h2>
        

        <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalabel web
                application and creating innovative soutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 
                    className="text-xl font-bold mb-4">
                        Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key) => (
                            <span 
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                             {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 
                    className="text-xl font-bold mb-4">
                        Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                            <span 
                            key={key} 
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                            >
                            {tech}
                            </span>
                        ))}
                    </div>
                </div>


            </div>
            </div>

            <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong> B.Tech in Computer Science </strong> - GH Raisoni University (2020 - 2024)
                    </li>
                    <li>
                        Relevent Coursework: Data Structures,Web Development, Cloud Computing
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">👨‍💼 Work Experience</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">
                            Cloud Computing Intern at Clustor Computing (January-2024 to April-2024)
                        </h4>
                        <p>
                        Assisted in deploying and managing cloud infrastructure using AWS/Azure/GCP, optimizing resource utilization and 
                        reducing costs by 20%.  
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold">
                            Web Developer Intern at InternPe (Remote)
                        </h4>
                        <p>
                        Designed and optimized responsive web applications with HTML, CSS, and JavaScript, enhancing UI/UX for improved 
                        user engagement.
                        </p>
                    </div>

                  </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">✒️ Certification</h3>
                  

                  <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">
                            Python Certification course by KAGGLE (July-2023)
                        </h4>
                        <p>
                        Basics of Python.  
                        </p>
                    </div>

                    

                    <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">
                        ESG	Virtual	Experience	Program by Forage and powered by TCS (March-2023)
                        </h4>
                        <p>
                        Understanding	and	analysing	client	needs,
                        Assess sustainabilityso lutions through a comparative analysis
                        Present	a fitment matrix to	the	clien. 
                        </p>
                    </div>

                    <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">
                        Wordpress Certification course by BitDegree (August-2023)
                        </h4>
                        <p>
                        Learn How to Build a WordPress Website Without Coding
                        </p>
                    </div>

                </div>

            </div>

        </div>
       </div>

       

       </div>
       </div> 
        

        </RevealOnScroll>

    </section>

    );
};