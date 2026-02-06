"use client";

import React from "react";
import { BadgeDollarSign, Users, Rocket, RefreshCw } from "lucide-react";

const engagementModels = [
    {
        id: "mvp",
        title: "MVP Launchpad",
        description: "Rapidly build and launch a Minimum Viable Product to validate your idea and start acquiring users in 8-12 weeks.",
        icon: Rocket,
        color: "text-blue-600",
        borderColor: "group-hover:border-blue-200"
    },
    {
        id: "scale",
        title: "SaaS Scaling",
        description: "Refactor and optimize your existing product to handle 10x user growth, improve performance, and reduce infrastructure costs.",
        icon: Users,
        color: "text-indigo-600",
        borderColor: "group-hover:border-indigo-200"
    },
    {
        id: "migration",
        title: "Legacy Migration",
        description: "Move on-premise software to a modern cloud-native SaaS architecture without losing data or customers.",
        icon: RefreshCw,
        color: "text-amber-600",
        borderColor: "group-hover:border-amber-200"
    },
    {
        id: "team",
        title: "Dedicated Product Team",
        description: "A complete squad of product managers, designers, and engineers focusing exclusively on your roadmap.",
        icon: BadgeDollarSign, // Using BadgeDollarSign as a placeholder for 'Hire' concept
        color: "text-emerald-600",
        borderColor: "group-hover:border-emerald-200"
    }
];

export default function SaasEngagement() {
    return (
        <section className="py-12 bg-gray-50 border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        FLEXIBLE ENGAGEMENT MODELS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Partnership Models for <span className="text-[#6366f1]">Growth</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Whether you are a startup needing an MVP or an enterprise needing a platform overhaul, we have a model for you.
                    </p>
                </div>

                {/* Unified Grid Layout */}
                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {engagementModels.map((model, index) => (
                            <div
                                key={model.id}
                                className={`
                                    group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50
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
