"use client";

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, TestTube, Rocket, LifeBuoy } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: "Discover & Analyze",
        description: "We dive deep into your business goals, user needs, and market landscape to define a clear roadmap.",
        color: "text-blue-500",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200"
    },
    {
        icon: Lightbulb,
        title: "Strategize & Design",
        description: "We craft a comprehensive strategy and intuitive designs that align with your brand's vision.",
        color: "text-amber-500",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200"
    },
    {
        icon: Code2,
        title: "Develop & Integrate",
        description: "Our experts build robust, scalable solutions using cutting-edge technologies and seamless integrations.",
        color: "text-purple-500",
        bg: "bg-purple-50",
        border: "group-hover:border-purple-200"
    },
    {
        icon: TestTube,
        title: "Test & Optimize",
        description: "Rigorous testing ensures your product is bug-free, secure, and optimized for peak performance.",
        color: "text-rose-500",
        bg: "bg-rose-50",
        border: "group-hover:border-rose-200"
    },
    {
        icon: Rocket,
        title: "Deploy & Scale",
        description: "We launch your product smoothly and monitor it to ensure it scales effortlessly with your growth.",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200"
    },
    {
        icon: LifeBuoy,
        title: "Support & Enhance",
        description: "Continuous support and iterative improvements keep your solution competitive and up-to-date.",
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        border: "group-hover:border-cyan-200"
    },
];

export default function AboutApproach() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#6366f1] font-extrabold tracking-widest uppercase text-sm">🚀 OUR APPROACH</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#3A0F67] mt-2 mb-4">How We Work</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We follow a structured, agile, and collaborative delivery model. This ensures predictable timelines and consistent quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group ${step.border}`}
                        >
                            <div className={`w-14 h-14 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                                <step.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
