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
import { ArrowRight } from "lucide-react";

const techCategories = [
    {
        title: "Frontend Technologies",
        description: "Responsive UI/UX Design, Progressive Web Applications (PWA)",
        techs: [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        ]
    },
    {
        title: "Backend Technologies",
        description: "RESTful & GraphQL APIs, Microservices Architecture",
        techs: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        ]
    },
    {
        title: "Database & Cloud",
        description: "Infrastructure, Data Storage & Containerization",
        techs: [
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "AWS", icon: SiAmazon, color: "#FF9900" },
            { name: "Azure", icon: VscAzure, color: "#0078D4" },
            { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        ]
    }
];

export default function UiUxTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-left mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Comprehensive UI/UX <br />
                        <span className="text-[#6366f1]">Technology Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Our engineers work across the complete technology stack to deliver seamless and integrated systems.
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
                                        className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:bg-slate-50 transition-all duration-300 group cursor-default"
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
