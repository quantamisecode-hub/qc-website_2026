import React from "react";
import * as motion from "framer-motion/client";
import { BarChart3, Building2, GraduationCap, ShoppingBag, HeartPulse, BrainCircuit } from "lucide-react";

const industries = [
    {
        id: "saas",
        title: "SaaS Dashboards",
        icon: BarChart3,
        description: "Complex, data-rich analytical dashboards with interactive charts and real-time updates."
    },
    {
        id: "fintech_edtech",
        title: "FinTech & EdTech",
        icon: GraduationCap,
        description: "Secure, intuitive interfaces for financial management and engaging learning platforms."
    },
    {
        id: "healthcare",
        title: "Healthcare Portals",
        icon: HeartPulse,
        description: "Accessible, compliant patient portals and management systems focused on usability."
    },
    {
        id: "ecommerce",
        title: "E-commerce Storefronts",
        icon: ShoppingBag,
        description: "High-conversion product pages and seamless checkout flows optimized for sales."
    },
    {
        id: "enterprise",
        title: "Enterprise UI",
        icon: Building2,
        description: "Standardized design systems and internal tools that streamline employee workflows."
    },
    {
        id: "ai",
        title: "AI Interfaces",
        icon: BrainCircuit,
        description: "Modern chat interfaces and visualization layers for AI interacting applications."
    }
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

export default function NextJsIndustries() {
    return (
        <section className="py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Proven Results Across Industries
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        We deliver exceptional <span className="text-[#6366f1]">Next.js Experiences</span> for:
                    </h2>
                </div>

                {/* Grid Layout matching Homepage */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {industries.map((industry) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.id}
                                variants={cardVariants}
                                className="bg-white rounded-[1.5rem] border border-gray-100 p-8 hover:shadow-xl hover:shadow-[#6366f1]/10 transition-all duration-300 hover:-translate-y-1 group"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] text-[#6366f1] flex items-center justify-center mb-6 group-hover:bg-[#6366f1] group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-[#050511] mb-3 group-hover:text-[#6366f1] transition-colors">
                                    {industry.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {industry.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
