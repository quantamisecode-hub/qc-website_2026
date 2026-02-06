"use client";

import React from "react";
import { BadgeDollarSign, Users, Clock, Handshake } from "lucide-react";

const engagementModels = [
    {
        title: "Fixed-Price Projects",
        description: "Clear scope, defined deliverables, and a set budget. Ideal for well-documented projects with specific requirements.",
        icon: BadgeDollarSign,
        color: "text-blue-600",
        bg: "bg-blue-50",
        borderColor: "border-blue-100"
    },
    {
        title: "Dedicated Teams",
        description: "Your own extended team of experts working exclusively on your project, offering complete control and flexibility.",
        icon: Users,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    },
    {
        title: "Time & Material",
        description: "Pay only for the hours worked. Perfect for agile projects with evolving requirements and undefined scope.",
        icon: Clock,
        color: "text-amber-600",
        bg: "bg-amber-50",
        borderColor: "border-amber-100"
    },
    {
        title: "Long-Term Partnership",
        description: "Ongoing strategic collaboration to drive digital transformation, innovation, and continuous improvement.",
        icon: Handshake,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        borderColor: "border-emerald-100"
    }
];

export default function FullStackEngagement() {
    return (
        <section className="py-24 bg-white border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        FLEXIBLE ENGAGEMENT MODELS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Engagement Models to <span className="text-[#6366f1]">Suit Your Needs</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We offer multiple engagement models to suit your business needs, helping you optimize cost while maintaining quality.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {engagementModels.map((model, index) => (
                        <div
                            key={index}
                            className={`flex flex-col bg-white rounded-2xl p-6 border ${model.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl ${model.bg} ${model.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <model.icon size={28} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-[#3A0F67] mb-3 group-hover:text-[#6366f1] transition-colors">
                                {model.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                                {model.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-slate-500 italic">
                        This flexibility helps you optimize cost while maintaining quality.
                    </p>
                </div>
            </div>
        </section>
    );
}
