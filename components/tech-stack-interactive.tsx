"use client";
import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { Layout, Server, Smartphone, Cloud, Brain, Database } from "lucide-react";

import {
    SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss,
    SiNodedotjs, SiPython, SiGo, SiExpress, SiDjango,
    SiFlutter, SiReact, SiSwift, SiKotlin, SiExpo, SiGooglecloud, SiDocker, SiKubernetes, SiTerraform,
    SiTensorflow, SiPytorch, SiOpenai, SiPandas, SiScikitlearn,
    SiPostgresql, SiMongodb, SiRedis, SiMysql, SiSupabase, SiFirebase,
    SiAmazon,
} from "react-icons/si";

const techCategories = [
    {
        id: "frontend",
        title: "Frontend",
        icon: Layout,
        description: "Building beautiful, responsive, and interactive user interfaces.",
        techs: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vue.js", icon: SiVuedotjs },
            { name: "Angular", icon: SiAngular },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiAngular }
        ],
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50"
    },
    {
        id: "backend",
        title: "Backend",
        icon: Server,
        description: "Powering applications with robust, scalable server-side logic.",
        techs: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Python", icon: SiPython },
            { name: "Java", icon: SiPython },
            { name: "Go", icon: SiGo },
            { name: "Express", icon: SiExpress },
            { name: "Django", icon: SiDjango }
        ],
        gradient: "from-emerald-500 to-green-500",
        bg: "bg-emerald-50"
    },
    {
        id: "mobile",
        title: "Mobile",
        icon: Smartphone,
        description: "Creating native and cross-platform mobile experiences.",
        techs: [
            { name: "Flutter", icon: SiFlutter },
            { name: "React Native", icon: SiReact },
            { name: "Swift", icon: SiSwift },
            { name: "Kotlin", icon: SiKotlin },
            { name: "Expo", icon: SiExpo }
        ],
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-50"
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        icon: Cloud,
        description: "Deploying and managing secure, scalable infrastructure.",
        techs: [
            { name: "AWS", icon: SiAmazon },
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "Azure", icon: Cloud },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Terraform", icon: SiTerraform }
        ],
        gradient: "from-orange-500 to-yellow-500",
        bg: "bg-orange-50"
    },
    {
        id: "ai",
        title: "AI & Data",
        icon: Brain,
        description: "Leveraging intelligent algorithms and big data analytics.",
        techs: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "OpenAI API", icon: SiOpenai },
            { name: "Pandas", icon: SiPandas },
            { name: "Scikit-learn", icon: SiScikitlearn }
        ],
        gradient: "from-indigo-500 to-purple-500",
        bg: "bg-indigo-50"
    },
    {
        id: "database",
        title: "Databases",
        icon: Database,
        description: "Ensuring data integrity, availability, and performance.",
        techs: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Redis", icon: SiRedis },
            { name: "MySQL", icon: SiMysql },
            { name: "Supabase", icon: SiSupabase },
            { name: "Firebase", icon: SiFirebase }
        ],
        gradient: "from-red-500 to-pink-500",
        bg: "bg-red-50"
    }
];

export default function TechStackInteractive() {
    const [activeTab, setActiveTab] = useState(techCategories[0]);

    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sidebar / Tabs */}
            <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {techCategories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveTab(category)}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 text-left min-w-[200px] lg:min-w-0 ${activeTab.id === category.id
                            ? "bg-[#3A0F67] text-white shadow-xl scale-105"
                            : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeTab.id === category.id ? "bg-white/10 text-white" : "bg-slate-100 text-slate-400"
                            }`}>
                            <category.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg">{category.title}</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
                <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`p-8 lg:p-12 rounded-lg border border-slate-100 relative overflow-hidden ${activeTab.bg}`}
                >
                    {/* Decorative Background Blob */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeTab.gradient} opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2`} />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activeTab.gradient} flex items-center justify-center text-white shadow-lg`}>
                                <activeTab.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#3A0F67]">{activeTab.title}</h3>
                        </div>

                        <p className="text-lg text-[#4A4A4A] mb-8 leading-relaxed">
                            {activeTab.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {activeTab.techs.map((tech, idx) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-sm flex flex-col items-center justify-center text-center gap-3 font-semibold text-[#3A0F67] hover:border-[#eb56f6]/30 hover:shadow-md transition-all duration-300 group"
                                >
                                    <tech.icon className="w-8 h-8 text-slate-400 group-hover:text-[#eb56f6] transition-colors duration-300" />
                                    <span>{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
