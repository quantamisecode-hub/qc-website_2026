"use client";

import { motion } from 'framer-motion';
import { Building2, GraduationCap, HeartPulse, Rocket, ShoppingCart, Factory, ShieldCheck } from 'lucide-react';

const industries = [
    { icon: Building2, title: "FinTech", description: "Secure financial transaction systems and banking solutions." },
    { icon: GraduationCap, title: "EdTech", description: "Interactive learning platforms and educational management systems." },
    { icon: HeartPulse, title: "HealthTech", description: "HIPAA-compliant platforms enhancing patient care." },
    { icon: Rocket, title: "SaaS & Startups", description: "Scalable architectures tailored for rapid growth." },
    { icon: ShoppingCart, title: "E-commerce", description: "High-conversion storefronts with seamless payments." },
    { icon: Factory, title: "Manufacturing", description: "IoT integration and smart manufacturing solutions." },
    { icon: ShieldCheck, title: "Enterprise IT", description: "Robust management solutions for large-scale operations." }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

export default function AboutIndustries() {
    return (
        <section className="py-20 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        INDUSTRIES WE SERVE
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        We have successfully delivered <span className="text-[#6366f1]">solutions</span> for:
                    </h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white rounded-[1.5rem] border border-gray-100 p-6 hover:shadow-xl hover:shadow-[#6366f1]/10 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#ede9fe] text-[#6366f1] flex items-center justify-center mb-5 group-hover:bg-[#6366f1] group-hover:text-white transition-colors duration-300">
                                <industry.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-[#050511] mb-2 group-hover:text-[#6366f1] transition-colors">
                                {industry.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {industry.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
