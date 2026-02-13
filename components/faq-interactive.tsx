"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do you provide custom software development services?",
        answer: "Yes, all our solutions are fully customized based on business requirements. We don't believe in one-size-fits-all; we engineer software that fits your specific workflow and goals."
    },
    {
        question: "Do you follow secure coding practices?",
        answer: "Yes, we implement industry-standard security and testing procedures. From secure architecture design to rigorous code reviews and penetration testing, security is embedded in our lifecycle."
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes, we serve clients globally through remote and hybrid delivery models. Our team is experienced in collaborating across time zones to ensure smooth communication and delivery."
    },
    {
        question: "Do you provide long-term maintenance?",
        answer: "Yes, we offer continuous support, updates, and optimization. We monitor your application's health, apply security patches, and ensure it adapts to evolving technologies."
    },
    {
        question: "How can I start a project with Quantamise Code?",
        answer: "You can contact us via our website to schedule a free consultation. We'll discuss your vision, analyze your requirements, and provide a tailored roadmap to bring your idea to life."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We specialize in Fintech, Healthcare, E-commerce, Logistics, and Real Estate. However, our agile development framework allows us to adapt to various other industries effectively."
    },
    {
        question: "Do you offer staff augmentation services?",
        answer: "Yes, we provide dedicated development teams and staff augmentation services to help you scale your technical capabilities quickly without the overhead of hiring full-time employees."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary depending on complexity and scope. A simple MVP might take 4-6 weeks, while complex enterprise solutions can take several months. We provide a detailed timeline during the planning phase."
    },
    {
        question: "Do you sign a Non-Disclosure Agreement (NDA)?",
        answer: "Absolutely. We value confidentiality and intellectual property rights. We are happy to sign an NDA before discussing any sensitive project details."
    },
    {
        question: "What technologies do you use?",
        answer: "We use a modern tech stack including React, Next.js, Node.js, Python, and various cloud platforms like AWS and Azure, ensuring your software is scalable and future-proof."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
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

export default function FAQInteractive() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Split FAQs into two columns: Even indexes (Left) and Odd indexes (Right)
    const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
    const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

    return (
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
    );
}
