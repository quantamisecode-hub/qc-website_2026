
import React from "react";
import * as motion from "framer-motion/client";
import { BarChart3, Building2, GraduationCap, ShoppingBag, HeartPulse, BrainCircuit } from "lucide-react";

const industries = [
    {
        id: "predictive_maintenance",
        title: "Predictive Maintenance",
        icon: BarChart3,
        description: "Systems that anticipate failures before they happen, reducing downtime and maintenance costs."
    },
    {
        id: "smart_factory",
        title: "Smart Factory Platforms",
        icon: Building2,
        description: "Integrated solutions for digitizing manufacturing processes and optimizing production lines."
    },
    {
        id: "remote_monitoring",
        title: "Remote Asset Monitoring",
        icon: BrainCircuit,
        description: "Real-time visibility into asset performance and health from anywhere in the world."
    },
    {
        id: "energy_analytics",
        title: "Energy Analytics",
        icon: ShoppingBag, // Using as placeholder, ideally replace with Zap or similar if available/imported
        description: "Detailed insights into energy consumption patterns to drive efficiency and cost savings."
    },
    {
        id: "worker_safety",
        title: "Workforce Safety",
        icon: HeartPulse,
        description: "Wareables and monitoring systems to ensure the safety and wellbeing of industrial workers."
    },
    {
        id: "logistics",
        title: "Logistics & Transportation",
        icon: GraduationCap, // Placeholder, ideally Truck or Map
        description: "End-to-end tracking and fleet management solutions for modern supply chains."
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

export default function IiotIndustries() {
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
