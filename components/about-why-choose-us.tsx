"use client";

import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, TrendingUp, Users, Layers, Zap } from 'lucide-react';

const reasons = [
    { icon: Users, title: "Experienced AI & Cloud Engineers" },
    { icon: TrendingUp, title: "Business-Driven Technology Solutions" },
    { icon: Layers, title: "Scalable Architecture Expertise" },
    { icon: ShieldCheck, title: "Strong Data Security Standards" },
    { icon: CheckCircle, title: "Proven Delivery Framework" },
    { icon: Zap, title: "Long-Term Partnership Model" }
];

export default function AboutWhyChooseUs() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="text-[#6366f1] font-extrabold tracking-widest uppercase text-sm">📈 WHY CHOOSE QUANTAMISE CODE</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Why Clients <span className="text-[#eb56f6]">Trust Us</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We don’t just deliver projects — we build partnerships. Our commitment to excellence and client success sets us apart in the digital landscape.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-[#3A0F67]/5 text-[#3A0F67]">
                                        <reason.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-700 font-bold">{reason.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals/Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="bg-[#fafafa] p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center h-48">
                                    <span className="text-4xl font-extrabold text-[#6366f1] mb-2">98%</span>
                                    <span className="text-sm font-bold text-gray-500 uppercase">On-Time Delivery</span>
                                </div>
                                <div className="bg-[#3A0F67] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center h-48 text-white">
                                    <span className="text-4xl font-extrabold text-[#eb56f6] mb-2">24/7</span>
                                    <span className="text-sm font-bold text-gray-300 uppercase">Support & Maint.</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-[#eb56f6] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center h-48 text-white">
                                    <span className="text-4xl font-extrabold text-white mb-2">50+</span>
                                    <span className="text-sm font-bold text-white/80 uppercase">Enterprise Clients</span>
                                </div>
                                <div className="bg-[#fafafa] p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center h-48">
                                    <span className="text-4xl font-extrabold text-[#3A0F67] mb-2">100%</span>
                                    <span className="text-sm font-bold text-gray-500 uppercase">Transparency</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
