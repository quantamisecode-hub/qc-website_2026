"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do you design UI/UX for AI and SaaS products?",
        answer: "Yes, we specialize in designing user experiences for AI-powered platforms, analytics tools, and SaaS products."
    },
    {
        question: "Can you redesign existing SaaS products?",
        answer: "Yes, we offer UX audits, redesign services, and experience optimization for existing platforms."
    },
    {
        question: "How do you ensure usability for complex systems?",
        answer: "We use research-driven design, prototyping, and usability testing to simplify complex workflows."
    },
    {
        question: "Do you provide developer-ready designs?",
        answer: "Yes, we deliver complete design systems, Figma files, and implementation-ready specifications."
    },
    {
        question: "Do you support mobile and web platforms?",
        answer: "Yes, we design responsive and cross-platform experiences for web, tablets, and mobile users."
    },
    {
        question: "What is your typical design process?",
        answer: "Our process involves discovery, user research, wireframing, high-fidelity prototyping, and iterative testing to ensure the final design meets user needs and business goals."
    },
    {
        question: "How long does a UI/UX project usually take?",
        answer: "Timelines vary based on scope, but a typical project can range from 4-8 weeks for an MVP to several months for a complex enterprise platform."
    },
    {
        question: "Do you work with startups or enterprise clients?",
        answer: "We work with both! We help startups build MVPs and robust products from scratch, and we assist enterprises in scaling and modernizing their digital ecosystems."
    },
    {
        question: "What tools do you use for design and collaboration?",
        answer: "We primarily use Figma for design and prototyping. For communication and handoff, we use tools like Slack, Jira, and Zeplin to ensure seamless collaboration with developers."
    },
    {
        question: "Do you offer branding and logo design services?",
        answer: "Yes, we provide comprehensive branding services, including logo design, visual identity systems, and brand guidelines to ensure a cohesive look and feel across all touchpoints."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    }
};

// Extracted component to prevent re-renders
const FAQItem = ({
    faq,
    index,
    activeIndex,
    toggleFAQ
}: {
    faq: typeof faqs[0],
    index: number,
    activeIndex: number | null,
    toggleFAQ: (index: number) => void
}) => {
    const isActive = activeIndex === index;

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 1)" }}
            className={`rounded-xl p-5 shadow-sm border transition-all duration-300 h-fit ${isActive
                ? "bg-white border-[#6366f1]/30 shadow-md"
                : "bg-white border-slate-100 hover:shadow-md hover:border-[#6366f1]/20"
                }`}
        >
            <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left group gap-4"
            >
                <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isActive ? "text-[#6366f1]" : "text-[#3A0F67] group-hover:text-[#6366f1]"
                    }`}>
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`shrink-0 ${isActive ? "text-[#6366f1]" : "text-slate-400 group-hover:text-[#6366f1]"
                        }`}
                >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-3 text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function UiUxFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Split FAQs into two columns: Even indexes (Left) and Odd indexes (Right)
    const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
    const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                        FAQ
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Common <span className="text-[#6366f1]">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know about our UI/UX Design process.
                    </p>
                </div>

                <motion.div
                    className="flex flex-col md:flex-row gap-4 lg:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Left Column (Even Indexes: 0, 2, 4...) */}
                    <div className="flex flex-col gap-4 lg:gap-6 w-full md:w-1/2">
                        {leftFaqs.map((faq) => {
                            const originalIndex = faqs.indexOf(faq);
                            return (
                                <FAQItem
                                    key={originalIndex}
                                    faq={faq}
                                    index={originalIndex}
                                    activeIndex={activeIndex}
                                    toggleFAQ={toggleFAQ}
                                />
                            );
                        })}
                    </div>

                    {/* Right Column (Odd Indexes: 1, 3, 5...) */}
                    <div className="flex flex-col gap-4 lg:gap-6 w-full md:w-1/2">
                        {rightFaqs.map((faq) => {
                            const originalIndex = faqs.indexOf(faq);
                            return (
                                <FAQItem
                                    key={originalIndex}
                                    faq={faq}
                                    index={originalIndex}
                                    activeIndex={activeIndex}
                                    toggleFAQ={toggleFAQ}
                                />
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
