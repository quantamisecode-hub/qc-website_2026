"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Helper for generating dummy tech stacks
const services = [
    {
        id: "web",
        title: "Web Development",
        tags: ["Next.js", "React", "Node.js", "SEO", "E-Commerce", "Web 3.0"],
        description: "We design and engineer world-class websites tailored to your specific needs. Our process starts by understanding your goals, technical requirements, and existing infrastructure so we can build solutions that integrate seamlessly with your systems.",
        subDesc: "Every website is carefully coded for performance, scalability, and adaptability across devices while maintaining bespoke design.",
        images: ["/assets/aboutImg.jpeg"] // Using existing asset as placeholder
    },
    {
        id: "app",
        title: "App Development",
        tags: ["iOS", "Android", "React Native", "Flutter", "Cross-Platform"],
        description: "From concept to launch, we build mobile applications that provide intuitive user experiences and robust performance. Whether native or cross-platform, our apps are designed to scale.",
        subDesc: "We focus on user-centric design and efficient code to ensure your app stands out in the crowded marketplace.",
        images: ["/assets/aboutImg.jpeg"]
    },
    {
        id: "cloud",
        title: "Cloud Solutions",
        tags: ["AWS", "Azure", "Google Cloud", "DevOps", "Serverless"],
        description: "Modernize your infrastructure with our secure and scalable cloud solutions. We help businesses migrate, optimize, and manage their cloud environments for maximum efficiency.",
        subDesc: "Our cloud experts ensure high availability, security, and cost-effectiveness for your mission-critical applications.",
        images: ["/assets/aboutImg.jpeg"]
    },
    {
        id: "uiux",
        title: "UI/UX Design",
        tags: ["Figma", "Prototyping", "User Research", "Wireframing", "Design Systems"],
        description: "We craft digital experiences that are aesthetically pleasing and highly functional. Our design process relies on deep user research and iterative testing to solve real problems.",
        subDesc: "Create products that users love with designs that perfectly balance form and function.",
        images: ["/assets/aboutImg.jpeg"]
    },
    {
        id: "ai",
        title: "AI Solutions",
        tags: ["Machine Learning", "NLP", "Computer Vision", "Chatbots", "Predictive Analytics"],
        description: "Leverage the power of Artificial Intelligence to automate processes and gain actionable insights. We build custom AI models that drive innovation and efficiency.",
        subDesc: "From intelligent chatbots to complex data analysis tools, our AI solutions are tailored to your business goals.",
        images: ["/assets/aboutImg.jpeg"]
    },
    {
        id: "saas",
        title: "SaaS Development",
        tags: ["Multi-tenant", "Subscription Models", "API Integration", "Scalable Architecture"],
        description: "We build robust SaaS platforms that are secure, scalable, and ready for growth. specialized in creating multi-tenant architectures that support thousands of users.",
        subDesc: "Launch your product faster with our comprehensive SaaS development framework and expertise.",
        images: ["/assets/aboutImg.jpeg"]
    }
];

export default function ServicesShowcase() {
    const [activeId, setActiveId] = useState("web");
    const activeService = services.find(s => s.id === activeId) || services[0];

    return (
        <section className="bg-[#050511] py-20 lg:py-32 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Navigation List */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                className={`text-left text-3xl sm:text-4xl lg:text-5xl font-bold transition-all duration-300 hover:opacity-80
                                    ${activeId === service.id ? "text-white opacity-100 pl-4 border-l-4 border-[#eb56f6]" : "text-gray-600 opacity-50 pl-0 border-l-0 border-transparent"}
                                `}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Content Detail */}
                    <div className="w-full lg:w-2/3 relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col gap-8"
                            >
                                {/* Tags / Tech Stack */}
                                <div className="flex flex-wrap gap-3">
                                    {activeService.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 text-sm text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Descriptions */}
                                <div className="space-y-6 max-w-2xl">
                                    <h3 className="text-2xl font-bold text-[#eb56f6] hidden lg:block">
                                        {activeService.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {activeService.description}
                                    </p>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        {activeService.subDesc}
                                    </p>
                                </div>

                                {/* Visuals / Placeholders */}
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative h-64 w-full bg-[#1a1a2e] rounded-xl overflow-hidden group border border-gray-800">
                                        {/* Placeholder or Image */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#3A0F67]/50 to-transparent z-10" />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <p className="font-bold text-white">Project Showcase 1</p>
                                        </div>
                                        <motion.div
                                            className="w-full h-full bg-gray-800"
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    </div>
                                    <div className="relative h-64 w-full bg-[#1a1a2e] rounded-xl overflow-hidden group border border-gray-800">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#eb56f6]/30 to-transparent z-10" />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <p className="font-bold text-white">Project Showcase 2</p>
                                        </div>
                                        <motion.div
                                            className="w-full h-full bg-gray-800"
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
