import { Lock, ShieldCheck, Zap, Server, Cloud, AlertTriangle } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "DevSecOps Integration",
        description: "Security at speed. We embed security checks directly into your CI/CD pipelines so code is secure by default.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Compliance As Code",
        description: "Automated policy enforcement ensuring adherence to SOC2, HIPAA, GDPr, and other standards.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Secrets Management",
        description: "Enterprise-grade vaulting for API keys, credentials, and certificates. No more hardcoded secrets.",
        icon: Zap, // Using Zap for "Action/Power" or could use Key. Sticking to FullStack icons where possible.
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Vulnerability Scanning",
        description: "Continuous scanning of containers, dependencies, and infrastructure for known vulnerabilities.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Infrastructure Security",
        description: "Hardened OS images, network segmentation, and strict IAM policies to minimize attack surface.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "Incident Response",
        description: "Automated incident detection and response protocols to quickly address security threats.",
        icon: AlertTriangle,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export default function DevOpsSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST GOVERNANCE
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Security, Compliance <span className="text-[#6366f1]">& Peace of Mind</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We deny the trade-off between speed and security. With DevSecOps, you get best of both worlds.
                    </p>
                </div>

                {/* Feature List (Icon Style) - Matching FullStackSecurity */}
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
