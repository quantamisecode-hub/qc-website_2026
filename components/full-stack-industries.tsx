
import React from "react";
import * as motion from "framer-motion/client";
import { BarChart3, Building2, GraduationCap, ShoppingBag, HeartPulse, BrainCircuit } from "lucide-react";

const industries = [
    {
        id: "saas",
        title: "SaaS Platforms",
        icon: BarChart3,
        description: "Scalable, multi-tenant architectures tailored for global reach and high availability."
    },
    {
        id: "fintech_edtech",
        title: "FinTech & EdTech",
        icon: GraduationCap,
        description: "Secure financial transaction systems and engaging, interactive learning environments."
    },
    {
        id: "healthcare",
        title: "Healthcare Systems",
        icon: HeartPulse,
        description: "HIPAA-compliant platforms enhancing patient care through digital innovation."
    },
    {
        id: "ecommerce",
        title: "E-commerce Platforms",
        icon: ShoppingBag,
        description: "High-conversion storefronts with seamless payment and inventory integrations."
    },
    {
        id: "enterprise",
        title: "Enterprise Software",
        icon: Building2,
        description: "Robust management solutions streamlining workflow and operational efficiency."
    },
    {
        id: "ai",
        title: "AI-Powered Apps",
        icon: BrainCircuit,
        description: "Intelligent applications leveraging machine learning for predictive insights."
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

export default function FullStackIndustries() {
    return (
        <section className="py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Proven Results Across Industries
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        We have successfully delivered <span className="text-[#6366f1]">full-stack solutions</span> for:
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
