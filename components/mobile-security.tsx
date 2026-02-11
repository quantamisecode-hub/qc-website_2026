import { Lock, ShieldCheck, Zap, Server, Cloud, Code } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Secure Authentication",
        description: "Implementation of OAuth, Biometric Logic (FaceID/TouchID), and SSO for seamless yet secure access.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Data Encryption",
        description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit to prevent unauthorized access.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "GDPR & Privacy Compliance",
        description: "Strict adherence to global privacy standards ensuring user data rights and regulatory compliance.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "API Security & Monitoring",
        description: "Rate limiting, input validation, and real-time monitoring to protect backend services from abuse.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Load Testing & Crash Analysis",
        description: "Proactive stress testing and automated crash reporting to ensure stability under high load.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "Code Obfuscation",
        description: "Advanced code protection techniques to prevent reverse engineering and unauthorized access.",
        icon: Code,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export default function MobileSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST FOUNDATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Security, Compliance <span className="text-[#6366f1]">& Performance</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Security is critical for mobile platforms handling sensitive user data.
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
