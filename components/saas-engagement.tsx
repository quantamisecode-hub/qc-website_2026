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
                        FLEXIBLE ENGAGEMENT OPTIONS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Flexible Engagement Options for <span className="text-[#6366f1]">SaaS Companies</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We adapt to your business stage, ensuring you get the right support at the right time.
                    </p>
                </div>

                {/* Unified Grid Layout */}
                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50 md:border-b border-slate-100">
                            {/* Icon */}
                            <div className="mb-6 inline-block">
                                <Rocket size={40} className="text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-[#3A0F67] mb-4 group-hover:text-[#6366f1] transition-colors">
                                Startup MVP Program
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-6">
                                rapidly build and launch a Minimum Viable Product to validate your idea and start acquiring users.
                            </p>
                        </div>

                        <div className="group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50 md:border-b border-slate-100">
                            {/* Icon */}
                            <div className="mb-6 inline-block">
                                <Users size={40} className="text-indigo-600 mb-2 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-[#3A0F67] mb-4 group-hover:text-[#6366f1] transition-colors">
                                Growth-Stage Engineering Teams
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-6">
                                Scale your development capacity with dedicated engineering teams that integrate seamlessly with your workflow.
                            </p>
                        </div>

                        <div className="group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50">
                            {/* Icon */}
                            <div className="mb-6 inline-block">
                                <RefreshCw size={40} className="text-amber-600 mb-2 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-[#3A0F67] mb-4 group-hover:text-[#6366f1] transition-colors">
                                Enterprise SaaS Modernization
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-6">
                                Transform legacy systems into modern, scalable SaaS platforms without business disruption.
                            </p>
                        </div>

                        <div className="group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50">
                            {/* Icon */}
                            <div className="mb-6 inline-block">
                                <BadgeDollarSign size={40} className="text-emerald-600 mb-2 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-[#3A0F67] mb-4 group-hover:text-[#6366f1] transition-colors">
                                Subscription-Based Development
                            </h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-6">
                                Flexible development services with a predictable monthly subscription model.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
