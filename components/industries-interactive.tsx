"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { Landmark, HeartPulse, ShoppingCart, GraduationCap, Factory, Plane, Building2, Leaf } from "lucide-react";

const industries = [
    {
        id: "finance",
        title: "Finance & Banking",
        icon: Landmark,
        description: "Secure fintech solutions, payment gateways, and banking automation."
    },
    {
        id: "healthcare",
        title: "Healthcare",
        icon: HeartPulse,
        description: "HIPAA-compliant apps, telemedicine platforms, and health analytics."
    },
    {
        id: "ecommerce",
        title: "E-Commerce & Retail",
        icon: ShoppingCart,
        description: "Scalable marketplaces, inventory systems, and omnichannel solutions."
    },
    {
        id: "education",
        title: "Education",
        icon: GraduationCap,
        description: "Learning management systems, EdTech platforms, and virtual classrooms."
    },
    {
        id: "manufacturing",
        title: "Manufacturing",
        icon: Factory,
        description: "IoT integration, supply chain optimization, and predictive maintenance."
    },
    {
        id: "travel",
        title: "Travel & Hospitality",
        icon: Plane,
        description: "Booking engines, loyalty programs, and customer experience platforms."
    },
    {
        id: "realestate",
        title: "Real Estate",
        icon: Building2,
        description: "Property management systems, virtual tours, and CRM solutions."
    },
    {
        id: "sustainability",
        title: "Sustainability",
        icon: Leaf,
        description: "Carbon tracking, ESG reporting, and green technology solutions."
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

export default function IndustriesInteractive() {
    return (
        <div className="relative">
            {/* Grid Layout */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                            whileTap={{ scale: 0.98 }}
                            className="bg-white rounded-[1.5rem] border border-gray-100 p-8 hover:shadow-xl hover:shadow-[#6366f1]/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
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
    );
}
