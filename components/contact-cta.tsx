"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCta() {
    return (
        <section className="py-20 lg:py-24 bg-[#3A0F67] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#eb56f6]/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#6366f1]/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl max-w-full">
                        <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eb56f6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-full w-full bg-[#eb56f6]"></span>
                        </span>
                        <span className="text-xs md:text-sm font-bold text-white tracking-wider md:tracking-widest uppercase text-left whitespace-normal leading-tight">Start Your Digital Transformation Today</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Let's Explore How We Can Help <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb56f6] to-[#6366f1]">Achieve Your Goals</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Ready to build intelligent technology solutions?
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact-form"
                            className="group px-8 py-4 bg-white text-[#3A0F67] rounded-xl font-bold text-lg hover:bg-[#eb56f6] hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                        >
                            Contact Our Experts Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
