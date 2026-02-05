"use client";

import React from "react";
import * as motion from "framer-motion/client";
import {
    SiFigma, SiSketch, SiAdobexd,
    SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects,
    SiInvision, SiFramer, SiTrello, SiStorybook
} from "react-icons/si";

const techCategories = [
    {
        title: "Interface Design",
        description: "Standard tools for crafting vector interfaces.",
        techs: [
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Sketch", icon: SiSketch, color: "#F7B500" },
            { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
        ]
    },
    {
        title: "Visual & Motion",
        description: "Advanced graphics and animation software.",
        techs: [
            { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
            { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
            { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF" },
        ]
    },
    {
        title: "Prototyping & Handoff",
        description: "Interaction design and developer handoff.",
        techs: [
            { name: "ProtoPie", icon: SiFramer, color: "#0055FF" },
            { name: "InVision", icon: SiInvision, color: "#FF3366" },
            { name: "Zeplin", icon: SiTrello, color: "#0079BF" },
            { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
        ]
    }
];

export default function UiUxTechStack() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-4"
                    >
                        Our <span className="text-[#6366f1]">Toolbox</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        We use industry-leading software to create pixel-perfect designs and seamless interactions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-2">{category.title}</h3>
                            <p className="text-slate-500 mb-6 text-sm">{category.description}</p>

                            <div className="flex flex-wrap gap-4">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2 group/icon"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:bg-white group-hover/icon:shadow-md">
                                            <tech.icon
                                                className="w-5 h-5 transition-colors duration-300 grayscale group-hover/icon:grayscale-0"
                                                style={{ color: tech.color }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-semibold text-slate-500 group-hover/icon:text-[#3A0F67] transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
