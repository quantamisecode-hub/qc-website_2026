"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { Target, Users, MessageSquare, Zap, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
    {
        title: "Business-centric development approach",
        icon: Target,
        description: "We align our technical strategies with your business goals."
    },
    {
        title: "Experienced and certified professionals",
        icon: Users,
        description: "Vetted experts dedicated to high coding standards."
    },
    {
        title: "Transparent communication",
        icon: MessageSquare,
        description: "Clear, constant communication throughout the project."
    },
    {
        title: "Agile delivery framework",
        icon: Zap,
        description: "Adaptive planning and iterative development."
    },
    {
        title: "Enterprise-grade security",
        icon: ShieldCheck,
        description: "Security baked in to protect against threats."
    },
    {
        title: "Dedicated post-launch support",
        icon: Headphones,
        description: "Ongoing support to keep your software running smoothly."
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
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
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
                    className="group"
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-[#6366f1] transition-colors duration-300">
                            <reason.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors">
                            {reason.title}
                        </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed pl-[64px]">
                        {reason.description}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
}
