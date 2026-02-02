import React from "react";
import * as motion from "framer-motion/client";
import { Search, PenTool, Code, Rocket, Settings } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery & Planning",
        description: "We dive deep into your business goals, analyzing requirements and risks to architect a rock-solid project roadmap.",
        icon: Search,
    },
    {
        number: "02",
        title: "Design & Prototyping",
        description: "Our designers craft intuitive, high-fidelity wireframes and interactive prototypes that validate user flow and aesthetics.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Development & Testing",
        description: "We build with clean, secure code, running rigorous automated tests to ensure performance, security, and scalability.",
        icon: Code,
    },
    {
        number: "04",
        title: "Deployment & Launch",
        description: "Using automated CI/CD pipelines, we deploy your solution seamlessly to the cloud with zero downtime strategies.",
        icon: Rocket,
    },
    {
        number: "05",
        title: "Optimization & Growth",
        description: "Post-launch, we provide 24/7 monitoring, real-time analytics, and continuous updates to keep you ahead.",
        icon: Settings,
    }
];

export default function Process() {
    return (
        <section className="py-24 lg:py-32 bg-[#f9fbfa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#0F52BA] font-bold tracking-widest uppercase text-sm">
                            How We Work
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-[#3A0F67] mt-3 mb-6 leading-tight">
                            Our Proven <span className="text-[#6366f1]">Development Process</span>
                        </h2>
                        <p className="text-lg text-[#4A4A4A] leading-relaxed">
                            A transparent, agile journey from concept to deployment. We ensure every step is optimized for quality and speed.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#eb56f6]/20 via-[#0F52BA]/20 to-transparent lg:-translate-x-1/2" />

                    <div className="flex flex-col gap-12 lg:gap-24 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center relative ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 pl-20 lg:pl-0 ${index % 2 === 0 ? "lg:text-right lg:pr-24" : "lg:text-left lg:pl-24"}`}>
                                    <div className="lg:hidden absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-[#eb56f6] flex items-center justify-center z-20">
                                        <span className="text-xs font-bold text-[#eb56f6]">{step.number}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#3A0F67] mb-3 group-hover:text-[#eb56f6] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#4A4A4A] leading-relaxed text-base lg:text-lg">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Center Icon / Node */}
                                <div className="absolute left-[20px] lg:left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-[#E6E8F0] shadow-lg shadow-slate-200/50 z-20 group hover:scale-110 transition-transform duration-300">
                                    <step.icon className={`w-7 h-7 text-[#eb56f6]`} />
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-[#eb56f6]/5 animate-ping opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                </div>

                                {/* Spacer Side (to balance the flex) */}
                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
