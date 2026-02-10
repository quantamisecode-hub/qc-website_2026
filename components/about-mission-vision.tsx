"use client";

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function AboutMissionVision() {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#eb56f6] font-extrabold tracking-widest uppercase text-sm">🎯 OUR MISSION & VISION</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#3A0F67] mt-2">
                        Driving Future Technology
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:border-[#6366f1]/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366f1]/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-110" />

                        <div className="w-16 h-16 rounded-xl bg-[#6366f1]/10 flex items-center justify-center text-[#6366f1] mb-6 group-hover:bg-[#6366f1] group-hover:text-white transition-colors">
                            <Target className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#3A0F67] mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                            To empower organizations with cutting-edge technology solutions that enable sustainable growth, operational excellence, and data-driven decision-making.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:border-[#eb56f6]/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#eb56f6]/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:scale-110" />

                        <div className="w-16 h-16 rounded-xl bg-[#eb56f6]/10 flex items-center justify-center text-[#eb56f6] mb-6 group-hover:bg-[#eb56f6] group-hover:text-white transition-colors">
                            <Eye className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-[#3A0F67] mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                            To become a globally trusted technology partner for AI-powered and cloud-native digital platforms.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
