"use client";

import React from "react";
// import Link from "next/link"; // Removed
import {
    Layout,
    Server,
    Smartphone,
    Database,
    Cloud,
    Bot,
} from "lucide-react";
import { DiRedis } from "react-icons/di";
import {
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiAngular,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiPython,
    SiGo,
    SiDotnet,
    SiGraphql,
    SiMongodb,
    SiJamstack,
    SiFlutter,
    SiSwift,
    SiKotlin,
    SiPostgresql,
    SiMysql,
    SiAmazon,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiOpenai,
    SiTensorflow,
    SiPytorch
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// Data Structure
const technologiesData = [
    {
        id: "frontend",
        label: "Frontend",
        icon: Layout,
        description: "Building beautiful, responsive, and interactive user interfaces.",
        techs: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vue.js", icon: SiVuedotjs },
            { name: "Angular", icon: SiAngular },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "TypeScript", icon: SiTypescript },
        ]
    },
    {
        id: "backend",
        label: "Backend",
        icon: Server,
        description: "Robust server-side solutions for scalable applications.",
        techs: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Python", icon: SiPython },
            { name: "Go", icon: SiGo },
            { name: "Java", icon: FaJava },
            { name: ".NET Core", icon: SiDotnet },
            { name: "GraphQL", icon: SiGraphql },
        ]
    },
    {
        id: "fullstack",
        label: "Full Stack",
        icon: Layout,
        description: "End-to-end development for complete web solutions.",
        techs: [
            { name: "MERN Stack", icon: SiMongodb }, // Representative
            { name: "MEAN Stack", icon: SiAngular }, // Representative
            { name: "Jamstack", icon: SiJamstack },
            { name: "T3 Stack", icon: SiNextdotjs }, // T3 is built on Next.js
        ]
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        description: "Native and cross-platform mobile apps for iOS and Android.",
        techs: [
            { name: "React Native", icon: SiReact },
            { name: "Flutter", icon: SiFlutter },
            { name: "iOS (Swift)", icon: SiSwift },
            { name: "Android (Kotlin)", icon: SiKotlin },
        ]
    },
    {
        id: "database",
        label: "Database",
        icon: Database,
        description: "Secure and optimized data storage solutions.",
        techs: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Redis", icon: DiRedis },
            { name: "MySQL", icon: SiMysql },
        ]
    },
    {
        id: "cloud",
        label: "Cloud",
        icon: Cloud,
        description: "Scalable cloud infrastructure and DevOps services.",
        techs: [
            { name: "AWS", icon: SiAmazon },
            { name: "Azure", icon: VscAzure },
            { name: "Google Cloud", icon: SiGooglecloud },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
        ]
    },
    {
        id: "ai",
        label: "AI & ML",
        icon: Bot,
        description: "Intelligent solutions powering the next generation of apps.",
        techs: [
            { name: "OpenAI API", icon: SiOpenai },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Python", icon: SiPython },
        ]
    }
];

export default function TechnologiesMegaMenu() {
    return (
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl pt-6 z-[100]">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200 max-h-[75vh] overflow-y-auto">

                {/* Decorative Top Border using Brand Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3A0F67] via-[#6366f1] to-[#EA56F7]" />

                {technologiesData.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-2 p-8">
                        <div className="flex items-center gap-2 mb-2">
                            {/* Optional: Show Category Icon */}
                            {/* <section.icon className="w-5 h-5 text-[#3A0F67]" /> */}
                            <h3 className="font-extrabold text-lg text-[#3A0F67]">{section.label}</h3>
                        </div>
                        <div className="flex flex-col gap-1">
                            {section.techs.map((item, itemIdx) => (
                                <a
                                    key={itemIdx}
                                    href={`/technologies/${section.id}/${item.name.toLowerCase().replace(/ /g, "-").replace(/\./g, "").replace(/\+/g, "cpp").replace(/\#/g, "sharp")}`}
                                    className="group flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="p-1.5 rounded-md bg-[#F9FAFC] group-hover:bg-[#3A0F67]/10 transition-colors">
                                        <item.icon className="w-5 h-5 text-[#6366f1] group-hover:text-[#EA56F7] transition-colors" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-[#2A2A2A] text-sm group-hover:text-[#3A0F67] transition-colors block">
                                            {item.name}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Optional decorative background blob */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#6366f1] opacity-5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </div>
    );
}
