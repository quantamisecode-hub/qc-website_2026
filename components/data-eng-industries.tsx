import React from "react";
import * as motion from "framer-motion/client";
import { BadgeDollarSign, HeartPulse, GraduationCap, ShoppingBag, Factory, Plane } from "lucide-react";

const industries = [
    {
        id: "fintech",
        title: "FinTech & Banking",
        icon: BadgeDollarSign,
        description: "Secure, real-time transaction processing pipelines and fraud detection data lakes."
    },
    {
        id: "healthcare",
        title: "Healthcare",
        icon: HeartPulse,
        description: "HIPAA-compliant data warehouses for patient records and clinical trial analysis."
    },
    {
        id: "ecommerce",
        title: "Retail & E-commerce",
        icon: ShoppingBag,
        description: "Recommendation engines powered by customer behavior analysis and inventory syncing."
    },
    {
        id: "manufacturing",
        title: "Manufacturing (IIoT)",
        icon: Factory,
        description: "Streaming ingest from sensors for predictive maintenance and supply chain optimization."
    },
    {
        id: "edtech",
        title: "EdTech",
        icon: GraduationCap,
        description: "Learning analytics platforms to track student performance and engagement."
    },
    {
        id: "logistics",
        title: "Logistics & Supply Chain",
        icon: Plane,
        description: "Route optimization data and real-time fleet tracking pipelines."
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

export default function DataEngIndustries() {
    return (
        <section className="py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Transforming Industries
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        We Power Data for <span className="text-[#6366f1]">Diverse Sectors</span>
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
