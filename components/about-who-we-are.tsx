"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import anoutChooseImage from '@/public/assets/aboutChooseImage.png'

export default function AboutWhoWeAre() {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
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
                            <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm">WHO WE ARE</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Simplifying Digital <br />
                            <span className="text-[#6366f1]">Transformation</span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Founded with a vision to simplify digital transformation, Quantamise Code partners with ambitious businesses to build intelligent, scalable, and secure technology solutions. Our multidisciplinary team brings together engineers, architects, data scientists, and consultants who are passionate about solving complex business challenges.
                        </p>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                            We combine technical excellence with strategic thinking to deliver solutions that create long-term value.
                        </p>

                        <div className="space-y-4">
                            {['Intelligent Solutions', 'Scalable Architecture', 'Secure Technology'].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-[#6366f1]/10 text-[#6366f1]">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-[#3A0F67] font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Image/Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="aspect-[4/3] bg-gray-200 relative">
                                <Image
                                    src={anoutChooseImage}
                                    alt="Quantamise Team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#3A0F67]/20 to-transparent" />
                            </div>
                        </div>

                        {/* Decorative Pattern - lighter and cleaner */}
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#eb56f6]/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#6366f1]/5 rounded-full blur-3xl -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
