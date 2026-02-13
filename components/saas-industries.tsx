import React from "react";
import * as motion from "framer-motion/client";
import { BarChart3, Building2, GraduationCap, ShoppingBag, HeartPulse, Stethoscope } from "lucide-react";

const industries = [
    {
        id: "healthcare",
        title: "Healthcare SaaS",
        icon: HeartPulse,
        description: "HIPAA-compliant telemedicine and practice management platforms."
    },
    {
        id: "fintech",
        title: "FinTech Platforms",
        icon: BarChart3,
        description: "Secure investment portals, tax automation, and banking-as-a-service."
    },
    {
        id: "crm",
        title: "Vertical CRM/ERP",
        icon: Building2,
        description: "Specialized management tools for niche industries like construction or legal."
    },
    {
        id: "ecommerce",
        title: "E-commerce Enablers",
        icon: ShoppingBag,
        description: "Headless commerce solutions, inventory management, and maximizing tools."
    },
    {
        id: "edtech",
        title: "LMS & EdTech",
        icon: GraduationCap,
        description: "Scalable learning management systems for schools and corporate training."
    },
    {
        id: "proptech",
        title: "PropTech",
        icon: Building2,
        description: "Real estate management, tenant portals, and smart building integrations."
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

export default function SaasIndustries() {
    return (
        <section className="py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Industry Expertise
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        SaaS Solutions for <span className="text-[#6366f1]">Every Cloud</span>
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
                                className="bg-white rounded-[1.5rem] border border-gray-100 p-8 hover:shadow-xl hover:shadow-[#6366f1]/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer select-none"
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
