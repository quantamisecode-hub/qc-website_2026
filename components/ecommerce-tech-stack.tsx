
import {
    SiShopify, SiWoocommerce, SiMagento,
    SiReact, SiNextdotjs,
    SiMysql, SiPostgresql, SiRedis,
    SiAmazon, SiGooglecloud,
} from "react-icons/si";
import { ArrowRight, Server, Globe, Cpu, Cloud, Zap, Smartphone, Palette, Code, CreditCard, Package, Database } from "lucide-react";

// Scalable Architecture Data
const architectureFeatures = [
    {
        title: "Headless Commerce",
        description: "Decoupled frontend and backend for ultimate flexibility.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "API-Driven Storefronts",
        description: "Seamless data exchange between systems via robust APIs.",
        icon: Globe,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    },
    {
        title: "Microservices Backend",
        description: "Modular architecture for easier maintenance and scaling.",
        icon: Cpu,
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        title: "Cloud Auto-Scaling",
        description: "Infrastructure that adapts to traffic spikes instantly.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-50"
    },
    {
        title: "CDN Content Delivery",
        description: "Lightning-fast content loading globally.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-50"
    }
];

// Tech Expertise Data
const techCategories = [
    {
        title: "Frontend & Store Experience",
        description: "React, Next.js, Headless CMS, Mobile-first, UI/UX, PWA",
        techs: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Mobile First", icon: Smartphone, color: "#3A0F67" },
            { name: "UI/UX", icon: Palette, color: "#EC4899" },
            { name: "PWA", icon: Globe, color: "#6366f1" },
        ]
    },
    {
        title: "Backend & Commerce Engine",
        description: "Platforms, Payments, Inventory, ERP & CRM",
        techs: [
            { name: "Shopify Plus", icon: SiShopify, color: "#96BF48" },
            { name: "Magento", icon: SiMagento, color: "#EE672F" },
            { name: "Custom Platforms", icon: Code, color: "#64748B" },
            { name: "Payments", icon: CreditCard, color: "#10B981" },
            { name: "Inventory Systems", icon: Package, color: "#F59E0B" },
        ]
    },
    {
        title: "Data, Cloud & DevOps",
        description: "Databases, Cloud Providers, CI/CD",
        techs: [
            { name: "MySql", icon: SiMysql, color: "#4479A1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "AWS", icon: SiAmazon, color: "#FF9900" },
            { name: "Azure", icon: Cloud, color: "#0078D4" },
            { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
            { name: "CI/CD", icon: Server, color: "#6366f1" },
        ]
    }
];

export default function EcommerceTechStack() {
    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Section 1: Scalable Architecture */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                            ARCHITECTURE
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-6">
                            Scalable <span className="text-[#6366f1]">Architecture</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We engineer platforms that handle traffic spikes, flash sales, and seasonal demand without performance drops.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {architectureFeatures.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${feature.bg} ${feature.color} mb-4`}>
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="font-bold text-[#3A0F67] mb-2 text-sm">{feature.title}</h3>
                                {/* <p className="text-xs text-slate-500">{feature.description}</p> */}
                            </div>
                        ))}
                    </div>

                </div>


                {/* Section 2: End-to-End Technology Expertise */}
                <div className="text-left mb-16">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        TECHNOLOGY STACK
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                        End-to-End <br />
                        <span className="text-[#6366f1]">Technology Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        We deliver fully integrated e-commerce ecosystems from storefront to fulfillment.
                    </p>
                </div>

                <div className="flex flex-col gap-12 lg:gap-16">
                    {techCategories.map((category) => (
                        <div key={category.title} className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start border-b border-slate-100 pb-12 last:border-0 last:pb-0">
                            {/* Left: Category Title */}
                            <div className="lg:col-span-1 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#ede9fe] flex items-center justify-center shrink-0">
                                    <ArrowRight className="text-[#6366f1] w-5 h-5 -rotate-45" strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#3A0F67]">{category.title}</h3>
                                    {/* <p className="text-sm text-slate-500 mt-1">{category.description}</p> */}
                                </div>
                            </div>

                            {/* Right: Tech List */}
                            <div className="lg:col-span-3 flex flex-wrap gap-4">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:bg-slate-50 transition-all duration-300 group cursor-default"
                                    >
                                        <tech.icon
                                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: tech.color }}
                                        />
                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-[#3A0F67] transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
