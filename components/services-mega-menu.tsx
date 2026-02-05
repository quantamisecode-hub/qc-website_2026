
import React from "react";
import Link from "next/link";

import {
    Smartphone,
    Bot,
    Cloud,
    Layers,
    Settings,
    Globe,
    ShoppingCart,
    Zap,
    RefreshCw,
    Users,
    Database,
    Activity,
    Cpu,
    Palette,
    Brain,
} from "lucide-react";

export const servicesData = [
    {
        category: "Development Services",
        items: [
            { name: "Full Stack Development", icon: Globe, href: "/full-stack-development" },
            { name: "SaaS Development", icon: Layers, href: "/saas-development" },
            { name: "E-Commerce Development", icon: ShoppingCart, href: "/ecommerce-development" },
            { name: "UX/UI Design", icon: Palette, href: "/ui-ux-design" },
            { name: "IIoT Development", icon: Cpu, href: "/iiot-development" },
        ],
    },
    {
        category: "Specialized Development",
        items: [
            { name: "Mobile Application Development", icon: Smartphone, href: "/mobile-app-development" },
            { name: "Next.js Development", icon: Zap, href: "/services/nextjs" },
            { name: "Dedicated Development Team", icon: Users, href: "/services/dedicated-team" },
        ],
    },
    {
        category: "AI & Data",
        items: [
            { name: "AI Solutions", icon: Brain, href: "/ai-solutions" },
            { name: "Data Engineering", icon: Database, href: "/services/data-engineering" },
        ],
    },
    {
        category: "Infrastructure & Operations",
        items: [
            { name: "Cloud Consulting Services", icon: Cloud, href: "/services/cloud-consulting" },
            { name: "DevOps Services", icon: Activity, href: "/services/devops" },
        ],
    },
];

export default function ServicesMegaMenu() {
    return (
        <div
            className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl pt-6 z-[100]"
        >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200">

                {/* Decorative Top Border using Brand Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3A0F67] via-[#6366f1] to-[#EA56F7]" />

                {servicesData.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-4 p-8">
                        <h3 className="font-extrabold text-lg text-[#3A0F67] mb-2">{section.category}</h3>
                        <div className="flex flex-col gap-3">
                            {section.items.map((item, itemIdx) => (
                                <Link
                                    key={itemIdx}
                                    href={item.href}
                                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="p-1.5 rounded-md bg-[#F9FAFC] group-hover:bg-[#3A0F67]/10 transition-colors">
                                        <item.icon className="w-5 h-5 text-[#6366f1] group-hover:text-[#EA56F7] transition-colors" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-[#2A2A2A] text-sm group-hover:text-[#3A0F67] transition-colors block">
                                            {item.name}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Optional decorative background blob */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#6366f1] opacity-5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </div>
    );
}
