import React from "react";
import {
    SiReact, SiNextdotjs, SiVuedotjs, SiSvelte,
    SiTailwindcss, SiSass, SiStyledcomponents, SiChakraui,
    SiTypescript, SiRedux, SiGraphql, SiStorybook,
    SiVite, SiWebpack, SiJest, SiCypress,
    SiVercel, SiFramer, SiPrisma
} from "react-icons/si";
import { ArrowRight } from "lucide-react";

const techCategories = [
    {
        title: "Next.js Ecosystem",
        description: "The core framework and its powerful features",
        techs: [
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "React SC", icon: SiReact, color: "#61DAFB" },
            { name: "Vercel", icon: SiVercel, color: "#000000" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        ]
    },
    {
        title: "Styling & UI",
        description: "Tools for creating beautiful, responsive designs",
        techs: [
            { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
            { name: "Sass", icon: SiSass, color: "#CC6699" },
            { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
            { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
        ]
    },
    {
        title: "Data & State",
        description: "Managing data fetching and application state",
        techs: [
            { name: "Redux", icon: SiRedux, color: "#764ABC" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        ]
    },
    {
        title: "Build & Test",
        description: "Ensuring code quality and reliability",
        techs: [
            { name: "Jest", icon: SiJest, color: "#C21325" },
            { name: "Cypress", icon: SiCypress, color: "#17202C" },
            { name: "Turborepo", icon: SiVercel, color: "#000000" },
            { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
        ]
    }
];

export default function NextJsTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-left mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Modern Next.js <br />
                        <span className="text-[#6366f1]">Technology Stack</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        We leverage the full potential of the Next.js ecosystem to build high-performance, edge-ready applications.
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
