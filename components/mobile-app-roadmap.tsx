"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { PenTool, Code, Smartphone, Rocket, ShieldCheck } from "lucide-react";

const roadmapSteps = [
    {
        id: 1,
        title: "Product Discovery",
        description: "We work with you to define the app's features, target audience, and monetization strategy.",
        icon: PenTool,
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Designing intuitive, platform-specific interfaces (Material Design for Android, Human Interface Guidelines for iOS).",
        icon: Smartphone,
    },
    {
        id: 3,
        title: "Development",
        description: "Agile development sprints using React Native or Flutter for cross-platform, or Swift/Kotlin for native.",
        icon: Code,
    },
    {
        id: 4,
        title: "Testing & QA",
        description: "Rigorous testing on real devices using TestFlight and Google Play Console to ensure bug-free performance.",
        icon: ShieldCheck,
    },
    {
        id: 5,
        title: "Store Submission",
        description: "Handling the complex submission process to the Apple App Store and Google Play Store.",
        icon: Rocket,
    }
];

export default function MobileAppRoadmap() {
    return (
        <section id="roadmap" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                        APP LIFECYCLE
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Concept to <span className="text-[#6366f1]">Launch</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A structured approach to building world-class mobile applications.
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
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
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
