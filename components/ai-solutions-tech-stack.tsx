"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { Database } from "lucide-react";
import {
    SiOpenai, SiGoogle, SiAnthropic,
    SiTensorflow, SiPytorch, SiScikitlearn,
    SiPandas, SiApachespark, SiDatabricks
} from "react-icons/si";

const techCategories = [
    {
        title: "LLMs & GenAI",
        description: "State-of-the-art language models.",
        techs: [
            { name: "OpenAI", icon: SiOpenai, color: "#000000" },
            { name: "Google Gemini", icon: SiGoogle, color: "#4285F4" },
        ]
    },
    {
        title: "ML Frameworks",
        description: "Building and training intelligent models.",
        techs: [
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        ]
    },
    {
        title: "Data Processing",
        description: "Handling massive datasets efficiently.",
        techs: [
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
            { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
        ]
    },
    {
        title: "Infrastructure",
        description: "Vector DBs and deployment.",
        techs: [
            { name: "Vector DB", icon: Database, color: "#000000" },
        ]
    }
];

export default function AiSolutionsTechStack() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-4"
                    >
                        AI <span className="text-[#6366f1]">Tech Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Leveraging the most powerful AI tools and frameworks to deliver intelligent results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-2">{category.title}</h3>
                            <p className="text-slate-500 mb-6 text-sm">{category.description}</p>

                            <div className="flex flex-wrap gap-4">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2 group/icon"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:bg-white group-hover/icon:shadow-md">
                                            <tech.icon
                                                className="w-5 h-5 transition-colors duration-300 grayscale group-hover/icon:grayscale-0"
                                                style={{ color: tech.color }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-semibold text-slate-500 group-hover/icon:text-[#3A0F67] transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
