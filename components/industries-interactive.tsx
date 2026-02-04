"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    Landmark,
    HeartPulse,
    GraduationCap,
    ShoppingBag,
    Truck,
    Building2,
    Factory,
    Laptop
} from "lucide-react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";

// Images (Assumed paths are correct based on previous read)
import fintechImage from "../public/assets/finTechImg.png"
import healthcareImage from "../public/assets/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg"
import educationImage from "../public/assets/educationImage.jpg"
import ecommerceImage from "../public/assets/ecommerceImage.jpg"
import logisticsImage from "../public/assets/logisticImage.jpg"
import realestateImage from "../public/assets/realestateImage.png"

// Data Structure (Moved here as it contains icon components)
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
        mainImage: fintechImage,
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
        mainImage: healthcareImage,
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
        mainImage: educationImage,
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
        mainImage: ecommerceImage,
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
        mainImage: logisticsImage,
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
        mainImage: realestateImage,
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
        mainImage: "https://placehold.co/800x600/D35400/white?text=Smart+Factory"
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
        mainImage: "https://placehold.co/800x600/2980B9/white?text=SaaS+Platform",
    }
];

export default function IndustriesInteractive() {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % industries.length);
        }, 7000); // 7 Seconds
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
        startInterval(); // Reset timer on manual interaction
    };

    const activeData = industries[activeIndex];

    return (
        <>
            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar sm:flex-wrap">
                {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={industry.id}
                            onClick={() => handleTabClick(index)}
                            className={`
                                flex items-center gap-2 px-6 py-3 rounded-md text-sm sm:text-base font-bold whitespace-nowrap transition-all duration-300
                                ${isActive
                                    ? "bg-[#eb56f6]/10 text-[#eb56f6] border border-[#eb56f6]"
                                    : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-gray-900"}
                            `}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? "text-[#eb56f6]" : "text-gray-400"}`} />
                            {industry.name}
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="relative min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full"
                    >

                        {/* Left: Text Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2A2A2A] mb-6">
                                {activeData.heading}
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                                {activeData.description}
                            </p>

                            {/* Bullets */}
                            <motion.ul
                                className="space-y-3 mb-10"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                                    }
                                }}
                            >
                                {activeData.bullets.map((bullet, i) => (
                                    <motion.li
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, x: -10 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        className="flex items-center gap-3 text-[#3A0F67] font-semibold text-sm sm:text-base"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#eb56f6]"></span>
                                        {bullet}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Right: Main Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <motion.div
                                    className="relative w-full h-full"
                                    initial={{ scale: 1 }}
                                    animate={{ scale: 1.05 }}
                                    transition={{ duration: 6, ease: "linear" }}
                                >
                                    <Image
                                        src={activeData.mainImage}
                                        alt={activeData.name}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                {/* Decorative Badge */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-sm shadow-lg z-10">
                                    <p className="text-[#3A0F67] font-extrabold text-lg">
                                        {activeData.name} Solutions
                                    </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
}
