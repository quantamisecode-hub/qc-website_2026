import { Lock, ShieldCheck, Zap, Server, Cloud, Shield } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Secure Authentication",
        description: "Robust authentication and authorization systems ensuring only the right people have access.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Data Encryption",
        description: "End-to-end encryption and strict compliance best practices to protect sensitive user data.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Performance Optimization",
        description: "Code splitting, image optimization, and efficient algorithms for lightning-fast load times.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Load Balancing & Caching",
        description: "Advanced caching strategies and load balancing to handle high traffic without downtime.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Scalable Cloud Infrastructure",
        description: "Auto-scaling architecture that grows seamlessly with your user base and business needs.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "API Security",
        description: "Rate limiting, input validation, and secure API endpoints to protect against attacks.",
        icon: Shield,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export default function FullStackSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST FOUNDATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Security, Performance <span className="text-[#6366f1]">& Scalability</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Security and performance are not optional — they are part of our foundation.
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
