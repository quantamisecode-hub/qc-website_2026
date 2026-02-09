"use client";

import React from "react";
import { CloudCog, Scale, ArrowLeftRight, TrendingDown, ClipboardCheck } from "lucide-react";

const engagementModels = [
    {
        id: "transformation",
        title: "Cloud Transformation Program",
        description: "End-to-end strategic overhaul of your legacy systems to modern cloud infrastructure.",
        icon: CloudCog,
        color: "text-blue-600",
        borderColor: "group-hover:border-blue-200"
    },
    {
        id: "advisory",
        title: "Advisory & Architecture Retainers",
        description: "Ongoing expert guidance on cloud architecture, design patterns, and best practices.",
        icon: Scale,
        color: "text-indigo-600",
        borderColor: "group-hover:border-indigo-200"
    },
    {
        id: "migration",
        title: "Migration-Focused Engagements",
        description: "Specialized projects to move specific workloads or data centers to the cloud securely.",
        icon: ArrowLeftRight,
        color: "text-amber-600",
        borderColor: "group-hover:border-amber-200"
    },
    {
        id: "cost",
        title: "Cost Optimization Projects",
        description: "Targeted analysis and implementation of FinOps strategies to reduce cloud spend.",
        icon: TrendingDown,
        color: "text-emerald-600",
        borderColor: "group-hover:border-emerald-200"
    },
    {
        id: "managed",
        title: "Managed Cloud Advisory",
        description: "Continuous oversight and strategic management of your cloud environment.",
        icon: ClipboardCheck,
        color: "text-purple-600",
        borderColor: "group-hover:border-purple-200"
    }
];

export default function CloudConsultingEngagement() {
    return (
        <section className="py-12 bg-gray-50 border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ENGAGEMENT MODELS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Flexible Engagement <span className="text-[#6366f1]">Models</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We offer consulting models tailored to your organization’s needs, ensuring predictable outcomes and cost transparency.
                    </p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {engagementModels.map((model, index) => (
                            <div
                                key={model.id}
                                className={`
                                    group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50
                                    ${(index < engagementModels.length - 1) ? 'border-b md:border-b-0 border-slate-100' : ''}
                                `}
                            >
                                <div className="mb-6 inline-block">
                                    <model.icon size={40} className={`${model.color} mb-2 transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.5} />
                                </div>
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
