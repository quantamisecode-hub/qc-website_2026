import { Lock, ShieldCheck, Zap, Database, Globe } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Multi-Tenant Isolation",
        description: "Logical separation of tenant data to ensuring zero cross-contamination between customers.",
        icon: Database,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "SOC 2 & GDPR Readiness",
        description: "Implementing audit logs, data retention policies, and ‘right to be forgotten’ workflows.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "DDoS Protection",
        description: "Cloudflare/AWS Shield integration to protect your application from malicious traffic.",
        icon: Globe,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Role-Based Access Control",
        description: "Granular permission systems (RBAC) allowing your customers to manage their own team's access.",
        icon: Lock,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "High Availability",
        description: "Redundant infrastructure and automated failover strategies to guarantee 99.9% uptime.",
        icon: Zap,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    }
];

export default function SaasSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST FOUNDATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Enterprise-Grade <span className="text-[#6366f1]">Security</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Security isn't an afterthought; it's a core feature of your SaaS.
                    </p>
                </div>

                {/* Feature List (Icon Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {securityFeatures.map((feature) => (
                        <div key={feature.id} className="flex items-start gap-5">
                            {/* Colorful Icon */}
                            <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${feature.bg} ${feature.color}`}>
                                <feature.icon size={24} strokeWidth={2} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-[#3A0F67] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
