import React from "react";
import * as motion from "framer-motion/client";
import { Search, PenTool, Code, Rocket, Settings } from "lucide-react";

const roadmapSteps = [
    {
        id: 1,
        title: "Requirement & Skill Assessment",
        description: "We analyze your project goals and technical needs to define the ideal team structure.",
        icon: Search,
    },
    {
        id: 2,
        title: "Candidate Shortlisting",
        description: "We identify top talent from our pool that matches your specific skill and culture requirements.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "Technical Interviews",
        description: "You interview and approve every team member before engagement to ensure the perfect fit.",
        icon: Code,
    },
    {
        id: 4,
        title: "Trial Sprint (Optional)",
        description: "Test the team's capabilities with a short trial period before committing to a long-term engagement.",
        icon: Rocket,
    },
    {
        id: 5,
        title: "Full-Scale Onboarding",
        description: "We handle all logistics to integrate the team into your workflows for rapid productivity.",
        icon: Settings,
    }
];

export default function DedicatedTeamRoadmap() {
    return (
        <section id="roadmap" className="py-12 bg-[#F9FBFA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR PROCESS
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Seamless Onboarding <span className="text-[#6366f1]">& Team Integration</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We enable rapid onboarding within 2–4 weeks.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
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
                                    {/* Content Side */}
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                                        }`}>
                                        <h3 className="text-2xl font-bold text-[#3A0F67] mb-3">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-base font-medium">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Icon Center */}
                                    <div className="absolute left-0 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border-2 border-[#6366f1]/20 shadow-lg text-[#6366f1] z-10 top-0 md:top-1/2">
                                        <step.icon className="w-5 h-5 md:w-7 md:h-7" />
                                    </div>

                                    {/* Empty Side (for balance) */}
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
