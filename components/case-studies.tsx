"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import aboutImg from "../public/assets/aboutImg.jpeg"; // Using as placeholder

const caseStudies = [
    {
        id: 1,
        tag: "Finance",
        title: "FinTech Payment Platform",
        description: "Built a secure, PCI-compliant payment processing platform handling $50M+ monthly transactions with 99.99% uptime.",
        imageOverlay: "from-purple-600/90 to-blue-600/90",
    },
    {
        id: 2,
        tag: "Healthcare",
        title: "Healthcare Telemedicine App",
        description: "Developed a HIPAA-compliant telemedicine platform connecting 10,000+ patients with doctors for virtual consultations.",
        imageOverlay: "from-emerald-500/90 to-teal-600/90",
    },
    {
        id: 3,
        tag: "Retail",
        title: "E-Commerce Marketplace",
        description: "Created a multi-vendor marketplace with AI-powered recommendations, increasing conversion rates by 35%.",
        imageOverlay: "from-orange-400/90 to-red-500/90",
    }
];

export default function CaseStudies() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-4">
                        Delivering <span className="text-[#6366f1]">Measurable Results</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how we help businesses transform and scale with our custom software solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Image Header */}
                            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                {/* Placeholder Image */}
                                <Image
                                    src={aboutImg}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${study.imageOverlay} mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-100`}></div>

                                {/* Tag */}
                                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-sm font-bold text-gray-800 shadow-sm z-10">
                                    {study.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-[#3A0F67] mb-3 leading-tight group-hover:text-[#6366f1] transition-colors">{study.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                                    {study.description}
                                </p>


                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
