"use client";

import React, { useState } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Which platform is best for me: Shopify or WooCommerce?",
        answer: "Shopify is best for quick setup and low maintenance, making it ideal for most businesses. WooCommerce offers more customization and ownership but requires self-hosting. We help you choose based on your specific needs."
    },
    {
        question: "Do you support Headless Commerce?",
        answer: "Yes! For brands needing extreme performance and custom UX, we build Headless stores using Next.js or Hydrogen with Shopify/BigCommerce as the backend."
    },
    {
        question: "How do you handle payment security?",
        answer: "We ensure all stores are PCI-DSS compliant. We integrate secure gateways like Stripe and PayPal, ensuring that no sensitive card data is stored directly on your servers."
    },
    {
        question: "Can you migrate my store from another platform?",
        answer: "Yes, we handle seamless migrations (e.g., from Magento to Shopify), preserving your products, customer data, orders, and SEO rankings."
    },
    {
        question: "Do you optimize for mobile users?",
        answer: "Absolutely. We adopt a mobile-first approach, ensuring your store offers a frictionless shopping experience on smartphones and tablets, which is crucial for conversion."
    },
    {
        question: "What about SEO for my store?",
        answer: "Our development includes technical SEO best practices: fast load times, proper schema markup, mobile optimization, and clean URL structures to help you rank higher on Google."
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
            className={`rounded-xl p-5 shadow-sm border transition-all duration-300 h-fit ${isActive ? "bg-white border-[#eb56f6]/30 shadow-md" : "bg-white border-slate-100 hover:shadow-md"}`}
        >
            <button onClick={() => toggleFAQ(index)} className="flex items-center justify-between w-full text-left group gap-4">
                <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isActive ? "text-[#eb56f6]" : "text-[#3A0F67] group-hover:text-[#eb56f6]"}`}>
                    {faq.question}
                </span>
                <motion.div animate={{ rotate: isActive ? 180 : 0 }} className={`shrink-0 ${isActive ? "text-[#eb56f6]" : "text-slate-400"}`}>
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

export default function EcommerceFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index);
    const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
    const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#eb56f6] font-bold tracking-widest uppercase text-sm mb-4 block">FAQ</span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">E-commerce <span className="text-[#eb56f6]">Questions</span></h2>
                </div>
                <motion.div className="flex flex-col md:flex-row gap-4 lg:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">{leftFaqs.map((faq, i) => <FAQItem key={i} faq={faq} index={faqs.indexOf(faq)} activeIndex={activeIndex} toggleFAQ={toggleFAQ} />)}</div>
                    <div className="flex flex-col gap-4 w-full md:w-1/2">{rightFaqs.map((faq, i) => <FAQItem key={i} faq={faq} index={faqs.indexOf(faq)} activeIndex={activeIndex} toggleFAQ={toggleFAQ} />)}</div>
                </motion.div>
            </div>
        </section>
    );
}
