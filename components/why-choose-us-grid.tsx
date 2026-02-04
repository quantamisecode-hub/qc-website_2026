"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { TrendingUp, Users, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
    {
        title: "Proven Track Record",
        icon: TrendingUp,
        description: "Consistently delivering high-impact digital solutions that drive growth."
    },
    {
        title: "Industry Experts",
        icon: Users,
        description: "A team of certified professionals with deep domain knowledge."
    },
    {
        title: "Guaranteed Results",
        icon: ShieldCheck,
        description: "We define clear KPIs and don't stop until we achieve them."
    },
    {
        title: "24/7 Support",
        icon: Headphones,
        description: "Always available to ensure your business never faces downtime."
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

export default function WhyChooseUsGrid() {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {reasons.map((reason, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group flex items-start gap-4"
                >
                    <motion.div
                        variants={{
                            hover: { scale: 1.1, rotate: 10 }
                        }}
                        transition={{ duration: 0.4, type: "spring" }}
                        className="w-14 h-14 rounded-full bg-[#6366f1] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#6366f1]/30"
                    >
                        <reason.icon className="w-7 h-7" />
                    </motion.div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-[#3A0F67] mb-2">
                            {reason.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {reason.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
