"use client";

import { motion } from 'framer-motion';

export default function ContactGetInTouch() {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#eb56f6] font-extrabold tracking-widest uppercase text-sm">📌 GET IN TOUCH</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#3A0F67] mt-4 mb-6">
                        Get in Touch with Our Team
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We’d love to learn more about your business, goals, and technology requirements. Reach out to us and our consultants will respond within 24 hours.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
