"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Users, ShieldCheck, Search, BookOpen, Rocket } from 'lucide-react';

const values = [
    {
        icon: Lightbulb,
        title: "Innovation First",
        description: "We embrace emerging technologies to deliver future-ready solutions.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        icon: Users,
        title: "Client-Centric Approach",
        description: "Your success is our priority. We build long-term partnerships.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        icon: ShieldCheck,
        title: "Quality & Reliability",
        description: "We build systems that last, prioritizing security and scalability.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    },
    {
        icon: Search,
        title: "Transparency",
        description: "Clear communication and honest partnerships at every step.",
        color: "text-pink-600",
        bg: "bg-pink-50",
        borderColor: "border-pink-100"
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "We evolve with technology to constantly deliver better value.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        icon: Rocket,
        title: "Agile Delivery",
        description: "Fast iterations and adaptive planning to meet your evolving needs.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        borderColor: "border-emerald-100"
    }
];

export default function AboutCoreValues() {
    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR CORE VALUES
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#3A0F67] mb-6">What Drives Us</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Our core values shape our culture and guide every decision we make.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col items-start ${value.bg} border ${value.borderColor} rounded-3xl p-8 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
                        >
                            <div className={`w-14 h-14 bg-white ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-in-out shadow-sm`}>
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6366f1] transition-colors duration-300">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
