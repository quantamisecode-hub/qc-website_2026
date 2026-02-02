"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
        question: "How can I start a project?",
        answer: "You can contact us to schedule a free consultation. We'll discuss your vision, analyze your requirements, and provide a tailored roadmap to bring your idea to life."
    }
];

export default function FAQInteractive() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="border-b border-slate-200"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full py-6 text-left group"
                    >
                        <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${activeIndex === index ? "text-[#eb56f6]" : "text-[#3A0F67] group-hover:text-[#eb56f6]"
                            }`}>
                            {faq.question}
                        </span>
                        <div className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-[#eb56f6]" : "text-slate-400 group-hover:text-[#eb56f6]"
                            }`}>
                            <ChevronDown className="w-6 h-6" />
                        </div>
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pb-6 text-[#4A4A4A] leading-relaxed max-w-2xl">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
