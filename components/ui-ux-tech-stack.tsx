import React from "react";
import {
    SiFigma, SiAdobexd, SiSketch, SiFramer,
    SiInvision, SiMiro, SiHotjar
} from "react-icons/si";
import { StickyNote, PenTool, PlayCircle, Layers, ArrowRight } from "lucide-react";

const toolsCategories = [
    {
        title: "Design & Prototyping",
        description: "Creating high-fidelity mockups, interactive prototypes, and scalable design systems.",
        tools: [
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
            { name: "Sketch", icon: SiSketch, color: "#F7B500" },
            { name: "Framer", icon: SiFramer, color: "#0055FF" },
            { name: "InVision", icon: SiInvision, color: "#FF3366" },
            { name: "ProtoPie", icon: PlayCircle, color: "#FA4D2C" },
        ]
    },
    {
        title: "Collaboration & Handoff",
        description: "Streamlining communication between designers, developers, and stakeholders.",
        tools: [
            { name: "Miro", icon: SiMiro, color: "#050038" },
            { name: "FigJam", icon: StickyNote, color: "#9747FF" },
            { name: "Zeplin", icon: Layers, color: "#FDBD39" },
        ]
    },
    {
        title: "Research & Wireframing",
        description: "Gathering user insights and structural planning before high-fidelity design.",
        tools: [
            { name: "Balsamiq", icon: PenTool, color: "#CC0200" },
            { name: "Hotjar", icon: SiHotjar, color: "#FD3A5C" },
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
                        <span className="text-[#6366f1]">Tools & Technologies</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        We leverage industry-leading design tools to craft intuitive, engaging, and scalable digital experiences.
                    </p>
                </div>

                <div className="flex flex-col gap-12 lg:gap-16">
                    {toolsCategories.map((category) => (
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

                            {/* Right: Tools List */}
                            <div className="lg:col-span-3 flex flex-wrap gap-4">
                                {category.tools.map((tool) => (
                                    <div
                                        key={tool.name}
                                        className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:bg-slate-50 transition-all duration-300 group cursor-default"
                                    >
                                        <tool.icon
                                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: tool.color }}
                                        />
                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-[#3A0F67] transition-colors">
                                            {tool.name}
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
