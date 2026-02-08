import { Lock, ShieldCheck, Zap, Server, Cloud } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Secure Device Authentication",
        description: "Robust mechanisms ensuring only authorized devices can connect to your network.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "End-to-End Encryption",
        description: "Protecting data integrity from the edge device all the way to the cloud and user interface.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Role-Based Access Control",
        description: "Granular permission settings to ensure users only access what they need.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Audit Logging & Compliance",
        description: "Detailed logs and reporting to meet industry standards and regulatory requirements.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Cyber Threat Resilience",
        description: "Proactive monitoring and defense strategies to safeguard your infrastructure against attacks.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    }
];

export default function IiotSecurity() {
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
                        In industrial environments, safety and security are top priorities. Your data and infrastructure remain protected across every layer.
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
