import React from "react";
import {
    SiReact, SiNextdotjs, SiVuedotjs,
    SiNodedotjs, SiPython, SiPhp,
    SiPostgresql, SiMongodb, SiMysql,
    SiAmazon, SiGooglecloud,
    SiDocker, SiKubernetes,
    SiGraphql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { ArrowRight, Code, Database, BrainCircuit, Server, PenTool, Users } from "lucide-react";

// Using Lucide icons for roles where tech icons might be mixed
// Mapping technologies or skills to roles

const techCategories = [
    {
        title: "Frontend Developers",
        description: "React, Next.js, Vue",
        techs: [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        ]
    },
    {
        title: "Backend Engineers",
        description: "Node.js, Python, Java, PHP",
        techs: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
        ]
    },
    {
        title: "Specialized Roles",
        description: "AI, Data, QA, DevOps, Design, Product",
        techs: [
            // Using generic icons for non-language specific roles or just representing them
            { name: "Full-Stack", icon: Code, color: "#6366f1" },
            { name: "AI/ML Engineers", icon: BrainCircuit, color: "#E10098" },
            { name: "Data Engineers", icon: Database, color: "#47A248" },
            { name: "QA Engineers", icon: Users, color: "#FF9900" }, // Using Users for QA/Team
            { name: "DevOps", icon: Server, color: "#2496ED" },
            { name: "UI/UX Designers", icon: PenTool, color: "#FFCA28" },
        ]
    }
];

export default function DedicatedTeamTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-left mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Expertise Across <br />
                        <span className="text-[#6366f1]">Modern Tech Stacks</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        We assemble teams based on your project needs, curated after technical and cultural evaluation.
                    </p>
                </div>

                <div className="flex flex-col gap-12 lg:gap-16">
                    {techCategories.map((category) => (
                        <div key={category.title} className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start border-b border-slate-100 pb-12 last:border-0 last:pb-0">
                            {/* Left: Category Title */}
                            <div className="lg:col-span-1 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center shrink-0">
                                    <ArrowRight className="text-[#6366f1] w-5 h-5 -rotate-45" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#3A0F67]">{category.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1">{category.description}</p>
                                </div>
                            </div>

                            {/* Right: Tech List */}
                            <div className="lg:col-span-3 flex flex-wrap gap-4">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:bg-slate-50 transition-all duration-300 group cursor-pointer"
                                    >
                                        <tech.icon
                                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: tech.color }}
                                        />
                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-[#3A0F67] transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
