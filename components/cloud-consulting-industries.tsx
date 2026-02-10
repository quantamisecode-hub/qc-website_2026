import React from "react";
import * as motion from "framer-motion/client";
import { BrainCircuit, Layers, Database, Activity, Building2 } from "lucide-react";

const industries = [
    {
        id: "ai",
        title: "AI & Machine Learning Platforms",
        icon: BrainCircuit,
        description: "Optimized cloud environments for training, inference, and scalable AI workloads."
    },
    {
        id: "saas",
        title: "SaaS Product Infrastructure",
        icon: Layers,
        description: "Multi-tenant architectures designed for high availability and seamless scaling."
    },
    {
        id: "bigdata",
        title: "Big Data & Analytics Systems",
        icon: Database,
        description: "Robust data lakes and pipelines for processing massive datasets efficiently."
    },
    {
        id: "traffic",
        title: "High-Traffic Web Platforms",
        icon: Activity,
        description: "Elastic infrastructure capable of handling millions of concurrent users without latency."
    },
    {
        id: "enterprise",
        title: "Enterprise Ecosystems",
        icon: Building2,
        description: "Secure, compliant, and integrated cloud systems for large-scale global operations."
    },
    {
        id: "iot",
        title: "IoT & Edge Computing",
        icon: Activity,
        description: "Low-latency edge processing architectures for real-time device management."
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

export default function CloudConsultingIndustries() {
    return (
        <section className="py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        INDUSTRIES & SOLUTIONS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        Cloud Solutions for <span className="text-[#6366f1]">AI, SaaS & Enterprise</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We design cloud environments optimized for modern digital workloads, ensuring resilience and scalability.
                    </p>
                </div>

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
                                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] text-[#6366f1] flex items-center justify-center mb-6 group-hover:bg-[#6366f1] group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>
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
