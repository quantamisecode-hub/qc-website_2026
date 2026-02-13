"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can you build custom LLMs?",
        answer: "Yes, we specialize in fine-tuning open-source models (like Llama 2, Mistral) on your private data to create secure, domain-specific LLMs."
    },
    {
        question: "How do you handle data privacy?",
        answer: "Security is paramount. We deploy models within correctly secured environments (VPCs), ensure data encryption, and implement strict access controls. Your data is never used to train public models."
    },
    {
        question: "What is RAG (Retrieval-Augmented Generation)?",
        answer: "RAG allows AI models to answer questions based on your specific documents or databases, providing accurate and up-to-date information without halluncinating."
    },
    {
        question: "Do you integrate with existing apps?",
        answer: "Yes, we build APIs and microservices to integrate AI capabilities seamlessly into your web, mobile, or enterprise applications."
    },
    {
        question: "What is the typical timeline for an AI project?",
        answer: "A Proof of Concept (PoC) can take 4-6 weeks. Production-grade deployment typically takes 3-6 months depending on complexity and data readiness."
    },
    {
        question: "Do I need a large amount of data?",
        answer: "Not necessarily. While training from scratch requires massive data, fine-tuning or using pre-trained models with RAG is effective even with smaller, high-quality datasets."
    }
];

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
};

const FAQItem = ({ faq, index, activeIndex, toggleFAQ }: any) => {
    const isActive = activeIndex === index;
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`rounded-xl p-5 shadow-sm border transition-all duration-300 h-fit group cursor-pointer ${isActive ? "bg-white border-[#6366f1]/30 shadow-md" : "bg-white border-slate-100 hover:shadow-md"}`}
        >
            <button onClick={() => toggleFAQ(index)} className="flex items-center justify-between w-full text-left gap-4 cursor-pointer">
                <span className={`text-base sm:text-lg font-medium transition-colors duration-300 cursor-pointer select-none ${isActive ? "text-[#6366f1]" : "text-[#3A0F67] group-hover:text-[#6366f1]"}`}>
                    {faq.question}
                </span>
                <motion.div animate={{ rotate: isActive ? 180 : 0 }} className={`shrink-0 ${isActive ? "text-[#6366f1]" : "text-slate-400 group-hover:text-[#6366f1]"}`}>
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

export default function AiSolutionsFaq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index);
    const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
    const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">FAQ</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">AI <span className="text-[#6366f1]">Questions</span></h2>
                </div>
                <motion.div className="flex flex-col md:flex-row gap-4 lg:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">{leftFaqs.map((faq, i) => <FAQItem key={i} faq={faq} index={faqs.indexOf(faq)} activeIndex={activeIndex} toggleFAQ={toggleFAQ} />)}</div>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">{rightFaqs.map((faq, i) => <FAQItem key={i} faq={faq} index={faqs.indexOf(faq)} activeIndex={activeIndex} toggleFAQ={toggleFAQ} />)}</div>
                </motion.div>
            </div>
        </section>
    );
}
