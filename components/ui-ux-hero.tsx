"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { ArrowRight, PenTool } from "lucide-react";
import Link from "next/link";
import {
    SiFigma, SiSketch, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator,
    SiAdobeaftereffects, SiMaze, SiInvision, SiTrello, SiStorybook
} from "react-icons/si";

export default function UiUxHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.name}
                        className="absolute flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-100/50"
                        initial={{ opacity: 0, x: tool.initialX, y: tool.initialY }}
                        animate={{
                            opacity: 0.8,
                            y: [tool.initialY, tool.initialY - 20, tool.initialY],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                        style={{
                            left: tool.left,
                            top: tool.top,
                            right: tool.right,
                            bottom: tool.bottom,
                        }}
                    >
                        <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                        <span className="text-xs font-semibold text-slate-700">{tool.name}</span>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-xs font-bold uppercase tracking-wider mb-6">
                        <PenTool className="w-4 h-4" />
                        <span>Pixel-Perfect Experiments</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A0F67] mb-6 tracking-tight leading-[1.15]">
                        Intuitive <span className="text-[#6366f1]">UX/UI</span><br className="hidden sm:block" />
                        Design
                    </h1>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        We craft engaging digital experiences that blend aesthetics with functionality. From user research to high-fidelity prototypes, we design products users love.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#eb56f6] text-white font-bold text-base hover:bg-[#d035db] transition-all flex items-center justify-center gap-2"
                        >
                            Start Designing
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#roadmap"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white border-2 border-[#3A0F67] text-[#3A0F67] font-bold text-base hover:bg-[#F9FAFC] transition-all flex items-center justify-center gap-2"
                        >
                            Design Process
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const tools = [
    { name: "Figma", icon: SiFigma, color: "#F24E1E", initialX: 0, initialY: 0, left: "10%", top: "15%" },
    { name: "Sketch", icon: SiSketch, color: "#F7B500", initialX: 0, initialY: 0, right: "15%", top: "12%" },
    { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6", initialX: 0, initialY: 0, left: "5%", top: "45%" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF", initialX: 0, initialY: 0, right: "8%", top: "40%" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00", initialX: 0, initialY: 0, left: "15%", bottom: "20%" },
    { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF", initialX: 0, initialY: 0, right: "20%", bottom: "25%" },
    { name: "Maze", icon: SiMaze, color: "#32C5FF", initialX: 0, initialY: 0, left: "25%", top: "10%" },
    { name: "Storybook", icon: SiStorybook, color: "#FF4785", initialX: 0, initialY: 0, right: "28%", top: "18%" },
    { name: "Zeplin", icon: SiTrello, color: "#0079BF", initialX: 0, initialY: 0, left: "8%", bottom: "35%" },
    { name: "InVision", icon: SiInvision, color: "#FF3366", initialX: 0, initialY: 0, right: "5%", bottom: "45%" },
];
