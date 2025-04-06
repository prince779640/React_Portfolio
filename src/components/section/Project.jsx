import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
    return (
        <section 
        id="project"
        className="min-h-screen flex items-center justify-center py-20"
        >

            <RevealOnScroll>

            <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                 {" "}
                 Featured Project 
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div 
                    className="p-6 rounded-xl border border-white/10 
                    hover:translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Portfolio created using Reactjs Framework</h3>
                        <p className="text-gray-400 mb-4 ">
                        A clean and minimalist portfolio built with React to 
                        showcase projects and skills with elegance and clarity.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Reactjs", "Vite", "Javascript", "TailwindCSS", "VScode", "APIs", "Async-await", "DOM"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                 {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="#home" className="text-blue-400 hover:text-blue-300 transition-colors">View Project → </a>
                        </div>

                    </div>







                    <div 
                    className="p-6 rounded-xl border border-white/10 
                    hover:translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Bank Management System using Java</h3>
                        <p className="text-gray-400 mb-4 ">
                        A robust Bank Management System built in Java to efficiently 
                        handle customer accounts, transactions, and banking operations..
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java", "Mysql", "OOPS", "Error-Handling", "JDBC", "Mysql-Workbench", "Netbeans", "Authentication"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                 {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://github.com/prince779640/Bank_Management_System" className="text-blue-400 hover:text-blue-300 transition-colors">View Project → </a>
                        </div>

                    </div>







                    <div 
                    className="p-6 rounded-xl border border-white/10 
                    hover:translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Malware Detection using Machine learning</h3>
                        <p className="text-gray-400 mb-4 ">
                        An intelligent Malware Detection system leveraging Machine Learning to 
                        identify and prevent malicious threats in real time.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Anaconda", "Machine-Learning", "Feature Extraction", "Filter-Based Method", "Wrapper-Based Method", "Pandas", "numpy", "sktlearn",].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                 {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://github.com/prince779640/Malware_Detection_Using_Machine_Learning" className="text-blue-400 hover:text-blue-300 transition-colors">View Project → </a>
                        </div>

                    </div>








                    <div 
                    className="p-6 rounded-xl border border-white/10 
                    hover:translate-y-1 hover:border-blue-500/30 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Currency Converter</h3>
                        <p className="text-gray-400 mb-4 ">
                        A dynamic Currency Converter built with HTML, CSS, and 
                        JavaScript, using a powerful API to fetch real-time exchange rates.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "Javascript", "DOM", "Error-handling", "API", "VScode"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                 {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="https://github.com/prince779640/Currency-Converter" className="text-blue-400 hover:text-blue-300 transition-colors">View Project → </a>
                        </div>

                    </div>

                </div>

            </div>

          </RevealOnScroll>  

        </section>
    );
};