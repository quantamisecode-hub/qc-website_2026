"use client";

import React from "react";
import { BadgeDollarSign, Users, Clock, Handshake } from "lucide-react";

const engagementModels = [
    {
        id: "fixed",
        title: "Fixed-Scope Projects",
        description: "Ideal for migrations, audits, or setting up new pipelines where requirements are clear and timeline is fixed.",
        icon: BadgeDollarSign,
        color: "text-blue-600",
        borderColor: "group-hover:border-blue-200"
    },
    {
        id: "dedicated",
        title: "Dedicated DevOps Teams",
        description: "Augment your staff with our certified engineers. Perfect for long-term platform maintenance and continuous improvement.",
        icon: Users,
        color: "text-indigo-600",
        borderColor: "group-hover:border-indigo-200"
    },
    {
        id: "managed",
        title: "Managed Services",
        description: "We take full responsibility for your infrastructure uptime and performance, allowing you to focus on product features.",
        icon: Clock,
        color: "text-amber-600",
        borderColor: "group-hover:border-amber-200"
    },
    {
        id: "consulting",
        title: "Strategic Consulting",
        description: "Expert guidance on architecture, security compliance, and digital transformation initiatives.",
        icon: Handshake,
        color: "text-emerald-600",
        borderColor: "group-hover:border-emerald-200"
    }
];

export default function DevOpsEngagement() {
    return (
        <section className="py-12 bg-gray-50 border-t border-slate-50">
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
                        Choose the model that best fits your infrastructure needs and business goals.
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
