"use client";

import { useState } from "react";
import {
    Landmark,
    HeartPulse,
    GraduationCap,
    ShoppingBag,
    Truck,
    Building2,
    Factory,
    Laptop,
    ChevronDown,
    ArrowRight
} from "lucide-react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";

// Data Structure
const industries = [
    {
        id: "fintech",
        name: "FinTech & Banking",
        icon: Landmark,
        heading: "Secure & Scalable Financial Technology",
        description: "We deliver high-performance banking and financial solutions that ensure security, compliance, and seamless user experiences. From digital wallets to algorithmic trading platforms, we empower financial institutions to lead in the digital era.",
        bullets: [
            "Digital Banking Solutions",
            "Blockchain & Smart Contracts",
            "Fraud Detection Systems",
            "Automated Trading Platforms"
        ],
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: HeartPulse,
        heading: "Innovating Patient Care with Technology",
        description: "Our healthcare IT solutions bridge the gap between providers and patients. We build HIPAA-compliant platforms, telemedicine apps, and AI-driven diagnostic tools to improve care delivery and operational efficiency.",
        bullets: [
            "Telemedicine Platforms",
            "EHR/EMR Systems Integration",
            "AI-Powered Diagnostics",
            "IoT for Remote Monitoring"
        ],
    },
    {
        id: "education",
        name: "Education",
        icon: GraduationCap,
        heading: "Transforming Learning Experiences",
        description: "Empowering educational institutions and startups with immersive EdTech solutions. We create LMS platforms, virtual classrooms, and gamified learning experiences that engage students and streamline administration.",
        bullets: [
            "Learning Management Systems (LMS)",
            "Virtual Classroom Solutions",
            "Gamified Learning Apps",
            "Student Information Systems"
        ],
    },
    {
        id: "ecommerce",
        name: "E-commerce",
        icon: ShoppingBag,
        heading: "Boosting Sales with Strategic Tech",
        description: "We optimize online retail with robust e-commerce platforms, headless architecture, and personalized shopping experiences. Our solutions help brands scale effortlessly and drive higher conversion rates.",
        bullets: [
            "Omnichannel Retail Solutions",
            "Custom E-commerce Platforms",
            "Inventory & Supply Chain Tools",
            "AI-Driven Personalization"
        ],
    },
    {
        id: "logistics",
        name: "Logistics",
        icon: Truck,
        heading: "Streamlining Supply Chains",
        description: "Optimize fleet management, route planning, and warehouse operations with our smart logistics software. We leverage real-time data and AI to reduce costs and improve delivery times.",
        bullets: [
            "Fleet Management Systems",
            "Real-Time Tracking & IoT",
            "Warehouse Automation",
            "Route Optimization Algorithms"
        ],
    },
    {
        id: "realestate",
        name: "Real Estate",
        icon: Building2,
        heading: "Digitizing Property Management",
        description: "From virtual tours to property management CRMs, we build tools that simplify buying, selling, and managing real estate. Enhance customer engagement and operational efficiency.",
        bullets: [
            "Property Management CRM",
            "Virtual Tour Integrations",
            "Real Estate Marketplaces",
            "Smart Building Solutions"
        ],
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        icon: Factory,
        heading: "Industry 4.0 & Smart Manufacturing",
        description: "Embrace the future of manufacturing with digital twins, predictive maintenance, and process automation. We help factories become smarter, safer, and more productive.",
        bullets: [
            "Industrial IoT (IIoT)",
            "Predictive Maintenance",
            "Production Line Automation",
            "Digital Twin Technology"
        ],
    },
    {
        id: "saas",
        name: "SaaS",
        icon: Laptop,
        heading: "Building the Next Unicorn",
        description: "We partner with startups to build scalable, multi-tenant SaaS products. From MVP to IPO, our engineering ensures your platform is robust, secure, and ready for growth.",
        bullets: [
            "MVP Development",
            "Multi-Tenant Architecture",
            "Cloud Native Solutions",
            "API First Development"
        ],
    }
];

export default function IndustriesInteractive() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Start with first open or null for closed

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col border-t border-gray-200">
            {industries.map((industry, index) => {
                const isActive = activeIndex === index;
                const paddedIndex = (index + 1).toString().padStart(2, '0');

                return (
                    <div key={industry.id} className="border-b border-gray-200">
                        {/* Header Row */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex items-center justify-between py-8 sm:py-10 text-left group transition-all"
                        >
                            <div className="flex items-center gap-6 sm:gap-10">
                                <span className={`text-xl sm:text-2xl font-bold transition-colors ${isActive ? "text-[#eb56f6]" : "text-gray-300 group-hover:text-gray-400"}`}>
                                    {paddedIndex}.
                                </span>
                                <span className={`text-xl sm:text-3xl font-extrabold transition-colors ${isActive ? "text-[#3A0F67]" : "text-[#2A2A2A] group-hover:text-[#6366f1]"}`}>
                                    {industry.name}
                                </span>
                            </div>
                            <div className={`
                                w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                ${isActive ? "bg-[#3A0F67] border-[#3A0F67] text-white rotate-180" : "border-gray-300 text-gray-400 group-hover:border-[#6366f1] group-hover:text-[#6366f1]"}
                            `}>
                                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-12 pt-2 flex flex-col gap-8 pl-0 sm:pl-[70px] max-w-4xl"> {/* Indent to align with text */}

                                        {/* Text Section - Full Width */}
                                        <div className="w-full flex flex-col justify-center">
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#3A0F67] mb-4">
                                                {industry.heading}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                                                {industry.description}
                                            </p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {industry.bullets.map((bullet, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-[#2A2A2A] font-medium text-sm sm:text-base">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb56f6] shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>

                                            <a href="#" className="inline-flex items-center text-[#6366f1] font-bold hover:text-[#3A0F67] transition-colors group/link">
                                                Learn more about {industry.name}
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
