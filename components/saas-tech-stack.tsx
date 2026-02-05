"use client";

import React from "react";
import * as motion from "framer-motion/client";
import {
    SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiGo, SiPython,
    SiPostgresql, SiRedis,
    SiAmazon, SiDocker, SiKubernetes, SiTerraform
} from "react-icons/si";

const techCategories = [
    {
        title: "Modern Frontend",
        description: "Responsive, fast, and interactive user interfaces.",
        techs: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        ]
    },
    {
        title: "Scalable Backend",
        description: "High-performance APIs and microservices.",
        techs: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Go", icon: SiGo, color: "#00ADD8" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
        ]
    },
    {
        title: "Cloud & DevOps",
        description: "Automated deployment and infrastructure as code.",
        techs: [
            { name: "AWS", icon: SiAmazon, color: "#FF9900" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
        ]
    },
    {
        title: "Data & Caching",
        description: "Reliable storage and ultra-fast caching layers.",
        techs: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
        ]
    }
];

export default function SaasTechStack() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
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
                        Built for <span className="text-[#6366f1]">Scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        Our SaaS technology stack ensures high availability, security, and the ability to handle millions of users.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
