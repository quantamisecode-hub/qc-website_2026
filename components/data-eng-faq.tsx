"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import * as motion from "framer-motion/client";

const faqs = [
    {
        question: "What is data engineering and why is it important?",
        answer: "Data engineering involves building systems that collect, process, and manage data at scale. It is essential for enabling analytics, AI, reporting, and data-driven decision-making."
    },
    {
        question: "Do you help with cloud data migration?",
        answer: "Yes, we specialize in migrating on-premise and legacy data systems to modern cloud platforms with minimal downtime and zero data loss."
    },
    {
        question: "Can you build real-time analytics platforms?",
        answer: "Absolutely. We design streaming data pipelines and real-time dashboards for use cases like fraud detection, IoT monitoring, and live business intelligence."
    },
    {
        question: "How do you ensure data quality and reliability?",
        answer: "We implement automated validation, monitoring, anomaly detection, and governance frameworks to ensure consistent data accuracy."
    },
    {
        question: "Do you support AI and machine learning initiatives?",
        answer: "Yes, we build AI-ready data pipelines, feature stores, and MLOps infrastructure to support machine learning and advanced analytics."
    },
    {
        question: "Which industries do you serve?",
        answer: "We serve FinTech, EdTech, Healthcare, SaaS, E-commerce, Manufacturing, and enterprise organizations."
    }
];

export default function DataEngFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about our Data Engineering & Consulting services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-[#3A0F67]">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-[#6366f1] shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                                )}
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
