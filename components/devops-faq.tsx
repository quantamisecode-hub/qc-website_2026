"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import * as motion from "framer-motion/client";

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

export default function DevOpsFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Common questions about our DevOps consulting and engineering services.
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
