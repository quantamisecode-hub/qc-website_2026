"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Updated FAQs
const faqs = [
    {
        question: "What is a dedicated development team?",
        answer: "A dedicated development team is a group of full-time professionals assigned exclusively to your project, working as an extension of your in-house team."
    },
    {
        question: "How is this different from project-based outsourcing?",
        answer: "Unlike fixed projects, dedicated teams offer long-term collaboration, flexible scope, and complete control over priorities."
    },
    {
        question: "Can I interview and select developers?",
        answer: "Yes, you can interview and approve every team member before onboarding."
    },
    {
        question: "How quickly can a team be onboarded?",
        answer: "Typically, within 2–4 weeks, depending on requirements."
    },
    {
        question: "Do you offer IP protection and NDAs?",
        answer: "Yes, all engagements include strict IP protection and confidentiality agreements."
    },
    {
        question: "Can I scale the team size anytime?",
        answer: "Yes, teams can be scaled up or down based on evolving project needs."
    },
    {
        question: "Do you support AI and SaaS product teams?",
        answer: "Absolutely. We specialize in building dedicated teams for AI-driven and SaaS platforms."
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
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

export default function DedicatedTeamFAQ() {
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
                        Answers to your questions about hiring dedicated development teams.
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
