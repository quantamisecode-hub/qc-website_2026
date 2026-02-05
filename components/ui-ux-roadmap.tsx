"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { Search, Layout, PenTool, Play, Users } from "lucide-react";

const roadmapSteps = [
    {
        id: 1,
        title: "Discovery & User Research",
        description: "We analyze competitor landscapes, conduct user interviews, and define personas to understand who we are designing for.",
        icon: Search,
    },
    {
        id: 2,
        title: "Wireframing & IA",
        description: "Creating low-fidelity wireframes and information architecture to map out the user journey and structure.",
        icon: Layout,
    },
    {
        id: 3,
        title: "Visual Design (UI)",
        description: "Applying brand identity, typography, color theory, and modern aesthetics to create high-fidelity designs.",
        icon: PenTool,
    },
    {
        id: 4,
        title: "Interactive Prototyping",
        description: "Building clickable prototypes to simulate the actual product experience for testing and feedback.",
        icon: Play,
    },
    {
        id: 5,
        title: "Usability Testing",
        description: "Validating the design with real users to identify friction points and iterate before development.",
        icon: Users,
    }
];

export default function UiUxRoadmap() {
    return (
        <section id="roadmap" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                        DESIGN THINKING
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Concept to <span className="text-[#6366f1]">Reality</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A user-centric approach to designing world-class products.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366f1]/20 via-[#6366f1] to-[#6366f1]/20 md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {roadmapSteps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0 ${isEven ? "" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                                        }`}>
                                        <h3 className="text-2xl font-bold text-[#3A0F67] mb-3">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-base font-medium">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="absolute left-0 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border-2 border-[#6366f1]/20 shadow-lg text-[#6366f1] z-10 top-0 md:top-1/2">
                                        <step.icon className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>

                                    <div className="hidden md:block w-[45%]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
