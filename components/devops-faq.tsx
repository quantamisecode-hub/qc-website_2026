"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What are DevOps services?",
        answer: "DevOps services focus on automating software development, testing, deployment, and operations to improve delivery speed and system reliability."
    },
    {
        question: "Can you integrate DevOps with our existing tools?",
        answer: "Yes, we work with tools like GitHub, GitLab, Jenkins, Bitbucket, Jira, and modern CI/CD platforms."
    },
    {
        question: "Do you implement DevSecOps practices?",
        answer: "Absolutely. We integrate security testing, compliance checks, and vulnerability scanning into CI/CD pipelines."
    },
    {
        question: "How does DevOps improve SaaS scalability?",
        answer: "DevOps enables automated scaling, faster releases, and improved system stability, which supports rapid SaaS growth."
    },
    {
        question: "Do you offer managed DevOps services?",
        answer: "Yes, we provide continuous monitoring, optimization, and operational support."
    },
    {
        question: "Can you support AI and ML pipelines?",
        answer: "Yes, we implement MLOps frameworks for model deployment, monitoring, and retraining automation."
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
            className={`rounded-xl p-5 shadow-sm border transition-all duration-300 h-fit group cursor-pointer ${isActive
                ? "bg-white border-[#6366f1]/30 shadow-md"
                : "bg-white border-slate-100 hover:shadow-md hover:border-[#6366f1]/20"
                }`}
        >
            <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left gap-4 cursor-pointer"
            >
                <span className={`text-base sm:text-lg font-medium transition-colors duration-300 cursor-pointer select-none ${isActive ? "text-[#6366f1]" : "text-[#3A0F67] group-hover:text-[#6366f1]"
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

export default function DevOpsFAQ() {
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
                        DevOps Services <span className="text-[#6366f1]">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Common questions about our DevOps consulting and engineering services.
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
