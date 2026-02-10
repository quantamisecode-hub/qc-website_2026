"use client";

import { motion } from 'framer-motion';

const steps = [
    { number: "1️⃣", title: "Discover & Analyze" },
    { number: "2️⃣", title: "Strategize & Design" },
    { number: "3️⃣", title: "Develop & Integrate" },
    { number: "4️⃣", title: "Test & Optimize" },
    { number: "5️⃣", title: "Deploy & Scale" },
    { number: "6️⃣", title: "Support & Enhance" },
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-6 rounded-2xl bg-[#fafafa] border border-gray-100/50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{step.number}</div>
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-2">{step.title}</h3>
                            <div className="h-1 w-12 bg-gray-200 rounded-full group-hover:bg-[#eb56f6] transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
