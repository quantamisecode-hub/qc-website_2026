"use client";

import React from "react";
import { Users, Clock, Handshake } from "lucide-react";

// Icons mapped to models loosely
const engagementModels = [
    {
        id: "monthly",
        title: "Monthly Dedicated Team",
        description: "Full-time team allocated on a monthly recurring basis. You have full control and flexibility.",
        icon: Users,
        color: "text-blue-600",
        borderColor: "group-hover:border-blue-200"
    },
    {
        id: "retainer",
        title: "Long-Term Retainer Model",
        description: "Strategic partnership with guaranteed resource availability for extended periods.",
        icon: Handshake,
        color: "text-indigo-600",
        borderColor: "group-hover:border-indigo-200"
    },
    {
        id: "staff-augmentation",
        title: "Staff Augmentation",
        description: "Supplement your existing team with individual experts to fill specific skill gaps.",
        icon: Users, // Duplicate icon is fine, or use something else
        color: "text-amber-600",
        borderColor: "group-hover:border-amber-200"
    },

    {
        id: "bot",
        title: "Build-Operate-Transfer (BOT)",
        description: "We build the team, manage operations, and eventually transfer ownership to you.",
        icon: Clock,
        color: "text-purple-600",
        borderColor: "group-hover:border-purple-200"
    }
];

export default function DedicatedTeamEngagement() {
    return (
        <section className="py-12 bg-gray-50 border-t border-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        FLEXIBLE ENGAGEMENT MODELS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6">
                        Flexible Hiring & <span className="text-[#6366f1]">Engagement Models</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose the engagement structure that fits your needs. All models are transparent and customizable.
                    </p>
                </div>

                {/* Unified Grid Layout */}
                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-slate-100">
                        {engagementModels.map((model, index) => (
                            <div
                                key={model.id}
                                className={`
                                    group relative p-10 md:p-12 transition-all duration-300 hover:bg-slate-50 cursor-pointer
                                    ${index % 2 === 0 ? 'md:border-r border-slate-100' : ''}
                                    ${index < engagementModels.length - 2 ? 'md:border-b border-slate-100' : ''}
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
