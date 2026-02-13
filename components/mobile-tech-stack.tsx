import React from "react";
import {
    SiReact, SiNextdotjs, SiVuedotjs,
    SiNodedotjs, SiPython, SiPhp,
    SiPostgresql, SiMongodb, SiMysql,
    SiAmazon, SiGooglecloud,
    SiDocker, SiKubernetes,
    SiGraphql, SiSwift, SiKotlin, SiFlutter, SiFastapi, SiFirebase, SiSupabase
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { ArrowRight, Globe, Brain, Activity } from "lucide-react";

const techCategories = [
    {
        title: "Native & Cross-Platform",
        description: "High-performance apps for iOS and Android using modern frameworks.",
        techs: [
            { name: "iOS (Swift)", icon: SiSwift, color: "#F05138" },
            { name: "Android (Kotlin)", icon: SiKotlin, color: "#7F52FF" },
            { name: "React Native", icon: SiReact, color: "#61DAFB" },
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "PWA", icon: Globe, color: "#5A0FC8" },
        ]
    },
    {
        title: "Backend & AI Integration",
        description: "Robust server-side logic and intelligence pipelines.",
        techs: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "AI Models", icon: Brain, color: "#E10098" },
            { name: "Data Pipelines", icon: Activity, color: "#47A248" },
        ]
    },
    {
        title: "Cloud, DevOps & Analytics",
        description: "Scalable infrastructure and continuous delivery pipelines.",
        techs: [
            { name: "AWS", icon: SiAmazon, color: "#FF9900" },
            { name: "Azure", icon: VscAzure, color: "#0078D4" },
            { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        ]
    }
];

export default function MobileTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-left mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Full-Stack Mobile <br />
                        <span className="text-[#6366f1]">Development Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Our engineers handle every layer of your mobile ecosystem - from interface design to cloud deployment.
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
