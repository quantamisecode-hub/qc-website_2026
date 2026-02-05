"use client";

import React from "react";
import * as motion from "framer-motion/client";
import {
    SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss,
    SiNodedotjs, SiPython, SiGo, SiExpress, SiDjango,
    SiPostgresql, SiMongodb, SiSupabase,
    SiAmazon, SiDocker, SiKubernetes, SiTerraform
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

const techCategories = [
    {
        title: "Frontend Excellence",
        description: "Building responsive, high-performance user interfaces.",
        techs: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
            { name: "Angular", icon: SiAngular, color: "#DD0031" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        ]
    },
    {
        title: "Backend Power",
        description: "Robust server-side logic and API development.",
        techs: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Go", icon: SiGo, color: "#00ADD8" },
            { name: "Express", icon: SiExpress, color: "#000000" },
            { name: "Django", icon: SiDjango, color: "#092E20" },
        ]
    },
    {
        title: "Database & Cloud",
        description: "Scalable data storage and infrastructure.",
        techs: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: DiRedis, color: "#DC382D" },
            { name: "AWS", icon: SiAmazon, color: "#FF9900" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
        ]
    }
];

export default function FullStackTechStack() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-4"
                    >
                        Our Unified <span className="text-[#6366f1]">Tech Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        We select the best tools for each layer of your application to ensure speed, security, and scalability.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-2">{category.title}</h3>
                            <p className="text-slate-500 mb-8 text-sm">{category.description}</p>

                            <div className="flex flex-wrap gap-4">
                                {category.techs.map((tech, techIdx) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2 group/icon"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:bg-white group-hover/icon:shadow-md">
                                            <tech.icon
                                                className="w-6 h-6 transition-colors duration-300 grayscale group-hover/icon:grayscale-0"
                                                style={{ color: tech.color }} // This will only apply when grayscale is removed via CSS or if we change logic, 
                                            // currently Tailwind grayscale utility handles it precisely.
                                            // Or better: set text color in style always, and use opacity or filter.
                                            // Let's use standard text color approach with hover.
                                            />
                                            {/* Note: In-line style color might override class text color. 
                                                Let's rely on the natural color of the icon or apply it on hover. */}
                                        </div>
                                        <span className="text-xs font-semibold text-slate-500 group-hover/icon:text-[#3A0F67] transition-colors">
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
