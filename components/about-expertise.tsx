"use client";

import { motion } from 'framer-motion';
import { Brain, Cloud, Code2, Database, BarChart, Server, Users } from 'lucide-react';

const expertiseItems = [
    { icon: Brain, title: "AI & Machine Learning Development" },
    { icon: Code2, title: "SaaS Product Engineering" },
    { icon: Code2, title: "Full-Stack Development" },
    { icon: Database, title: "Data Engineering & Analytics" },
    { icon: Cloud, title: "Cloud Consulting & Migration" },
    { icon: Server, title: "DevOps & Automation" },
    { icon: Server, title: "Next.js Development" },
    { icon: Server, title: "E-commerce Development" },
    { icon: Users, title: "Dedicated Development Teams" }
];

export default function AboutExpertise() {
    return (
        <section className="py-20 lg:py-28 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#eb56f6] font-extrabold tracking-widest uppercase text-sm">⚙️ OUR EXPERTISE</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#3A0F67] mt-2 mb-4">Our Areas of Expertise</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We deliver end-to-end digital solutions across a wide range of technologies. Our integrated approach ensures seamless execution across technology layers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileTap={{ scale: 0.98 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#6366f1]/30 transition-all flex items-center gap-4 cursor-pointer"
                        >
                            <div className="p-3 rounded-lg bg-[#fafafa] text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-[#3A0F67] group-hover:text-[#6366f1] transition-colors">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
