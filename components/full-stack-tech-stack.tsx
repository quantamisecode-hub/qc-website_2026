import React from "react";
import {
    SiReact, SiNextdotjs, SiVuedotjs,
    SiNodedotjs, SiPython, SiPhp,
    SiPostgresql, SiMongodb, SiMysql,
    SiAmazon, SiGooglecloud,
    SiDocker, SiKubernetes
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const techCategories = [
    {
        title: "Frontend Technologies",
        description: "Responsive UI/UX Design, Progressive Web Applications (PWA)",
        borderColor: "border-indigo-500",
        techs: [
            { name: "React.js", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        ]
    },
    {
        title: "Backend Technologies",
        description: "RESTful & GraphQL APIs, Microservices Architecture",
        borderColor: "border-pink-500",
        techs: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
        ]
    },
    {
        title: "Database & Cloud",
        description: "Scalable cloud infrastructure and secure database solutions.",
        borderColor: "border-amber-500",
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

export default function FullStackTechStack() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR EXPERTISE
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Comprehensive <span className="text-[#6366f1]">Full-Stack Technology Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Our engineers work across the complete technology stack to deliver seamless and integrated systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techCategories.map((category) => (
                        <div
                            key={category.title}
                            className={`bg-white rounded-xl p-8 border border-slate-100 border-t-4 ${category.borderColor} shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}
                        >
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-3">{category.title}</h3>
                            <p className="text-slate-500 mb-8 text-sm h-12 leading-relaxed">{category.description}</p>

                            <div className="flex flex-wrap gap-4">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2 group/icon"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:bg-white group-hover/icon:shadow-md">
                                            <tech.icon
                                                className="w-6 h-6 transition-colors duration-300 text-slate-400 group-hover/icon:text-[color:var(--icon-color)]"
                                                style={{ "--icon-color": tech.color } as React.CSSProperties}
                                            />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-500 group-hover/icon:text-[#3A0F67] transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-16 text-center">
                    <p className="text-slate-500 italic">
                        This full-stack expertise enables us to build high-performance applications that scale with your business.
                    </p>
                </div>
            </div>
        </section>
    );
}
