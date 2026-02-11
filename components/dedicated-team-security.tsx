import { Lock, ShieldCheck, Zap, Server, Cloud, UserCheck, Eye } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "NDA & IP Agreements",
        description: "Strict legal contracts to ensure all intellectual property remains solely yours.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Secure Access Controls",
        description: "Role-based access management ensuring only authorized personnel access sensitive data.",
        icon: UserCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Encrypted Communication",
        description: "All data storage and transmission channels are encrypted to industry standards.",
        icon: ShieldCheck,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Compliance-Ready Processes",
        description: "Adherence to GDPR, HIPAA, and other regulatory frameworks as required by your industry.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Secure Environments",
        description: "Development environments are isolated and secured against external threats.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "Continuous Monitoring",
        description: "24/7 security monitoring and threat detection to protect your development infrastructure.",
        icon: Eye,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export default function DedicatedTeamSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST FOUNDATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Security, Compliance <span className="text-[#6366f1]">& Confidentiality</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We ensure enterprise-grade data protection and confidentiality.
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
