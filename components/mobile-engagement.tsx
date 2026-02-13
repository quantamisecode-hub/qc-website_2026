"use client";

import React from "react";
import { BadgeDollarSign, Users, Clock, Handshake, ArrowRight, TrendingUp } from "lucide-react";

const engagementModels = [
    {
        id: "mvp",
        title: "MVP Development Program",
        description: "Rapid prototyping and development to validate ideas and launch your mobile product quickly to market.",
        icon: BadgeDollarSign,
        color: "text-blue-600",
        borderColor: "group-hover:border-blue-200"
    },
    {
        id: "dedicated",
        title: "Dedicated Mobile Teams",
        description: "Extended team of agile mobile engineers and architects working exclusively on your product roadmap.",
        icon: Users,
        color: "text-indigo-600",
        borderColor: "group-hover:border-indigo-200"
    },
    {
        id: "enterprise",
        title: "Enterprise Transformation",
        description: "Comprehensive digital transformation plans to modernize legacy systems and adopt mobile-first strategies.",
        icon: Handshake,
        color: "text-emerald-600",
        borderColor: "group-hover:border-emerald-200"
    },
    {
        id: "growth",
        title: "Growth & Optimization",
        description: "Data-driven optimization packages focusing on user retention, feature enhancement, and performance tuning.",
        icon: TrendingUp, // Need to import TrendingUp if not present
        color: "text-amber-600",
        borderColor: "group-hover:border-amber-200"
    }
];

export default function MobileEngagement() {
    return (
        <section className="py-12 bg-gray-50 border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        FLEXIBLE ENGAGEMENT MODELS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Flexible Engagement Models for <span className="text-[#6366f1]">Mobile Innovation</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We offer engagement models designed for startups and scaling enterprises to enable predictable costs and faster go-to-markets.
                    </p>
                </div>

                {/* Unified Grid Layout */}
                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {engagementModels.map((model, index) => (
                            <div
                                key={model.id}
                                className={`
                                    group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50 cursor-pointer
                                    ${index < 2 ? 'md:border-b border-slate-100' : ''}
                                `}
                            >
                                {/* Icon */}
                                <div className="mb-6 inline-block">
                                    <model.icon size={40} className={`${model.color} mb-2 transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-[#3A0F67] mb-4 group-hover:text-[#6366f1] transition-colors">
                                    {model.title}
                                </h3>
                                <p className="text-slate-600 text-base leading-relaxed mb-6">
                                    {model.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
