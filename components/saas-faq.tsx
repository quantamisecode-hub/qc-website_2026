"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How do you handle multi-tenancy in SaaS?",
        answer: "We tackle multi-tenancy through either database separation (isolated databases per tenant) or distinct schemas/row-level security, ensuring strict data isolation and security for every user."
    },
    {
        question: "Is my SaaS application scalable?",
        answer: "Yes. We build on cloud-native architectures (AWS/Azure) using microservices and serverless components, allowing individual parts of your application to scale automatically based on demand."
    },
    {
        question: "How do you handle subscription billing?",
        answer: "We integrate robust payment gateways like Stripe or Paddle, implementing logic for recurring billing, free trials, prorated upgrades, and dunning management to secure your revenue."
    },
    {
        question: "What about data security and compliance?",
        answer: "Security is built-in. We implement encryption at rest/transit, SOC2 compliant logging, automated backups, and adhere to GDPR/CCPA regulations to protect user data."
    },
    {
        question: "Can I offer a white-label solution?",
        answer: "Absolutely. We can architect the frontend to be fully themeable, allowing your enterprise clients to brand the platform with their own logos, colors, and domains."
    },
    {
        question: "Do you build MVPs?",
        answer: "Yes, we specialize in rapid MVP development. We focus on core value propositions to launch quickly (4-8 weeks), allowing you to validate your market before heavy investment."
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
};

const FAQItem = ({ faq, index, activeIndex, toggleFAQ }: any) => {
    const isActive = activeIndex === index;
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`rounded-xl p-5 shadow-sm border transition-all duration-300 h-fit ${isActive ? "bg-white border-[#6366f1]/30 shadow-md" : "bg-white border-slate-100 hover:shadow-md"}`}
        >
            <button onClick={() => toggleFAQ(index)} className="flex items-center justify-between w-full text-left group gap-4">
                <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isActive ? "text-[#6366f1]" : "text-[#3A0F67] group-hover:text-[#6366f1]"}`}>
                    {faq.question}
                </span>
                <motion.div animate={{ rotate: isActive ? 180 : 0 }} className={`shrink-0 ${isActive ? "text-[#6366f1]" : "text-slate-400"}`}>
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="pt-3 text-slate-600 text-sm sm:text-base leading-relaxed">{faq.answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function SaasFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index);
    const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
    const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">FAQ</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">SaaS <span className="text-[#6366f1]">Questions</span></h2>
                </div>
                <motion.div className="flex flex-col md:flex-row gap-4 lg:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">{leftFaqs.map((faq, i) => <FAQItem key={i} faq={faq} index={faqs.indexOf(faq)} activeIndex={activeIndex} toggleFAQ={toggleFAQ} />)}</div>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">{rightFaqs.map((faq, i) => <FAQItem key={i} faq={faq} index={faqs.indexOf(faq)} activeIndex={activeIndex} toggleFAQ={toggleFAQ} />)}</div>
                </motion.div>
            </div>
        </section>
    );
}
