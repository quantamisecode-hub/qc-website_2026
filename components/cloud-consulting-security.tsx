import { ShieldCheck, UserCheck, Lock, Activity, AlertTriangle, Shield } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Zero-Trust Architecture",
        description: "We assume no implicit trust, validating every stage of digital interaction.",
        icon: ShieldCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Identity & Access Management (IAM)",
        description: "Strict control over who can access what, ensuring least privilege access.",
        icon: UserCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Encryption & Key Management",
        description: "Robust encryption protocols for data at rest and in transit.",
        icon: Lock,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Continuous Risk Assessment",
        description: "Ongoing monitoring and evaluation to identify potential vulnerabilities.",
        icon: Activity,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Incident Response Planning",
        description: "Structured protocols to detect, respond to, and recover from security incidents.",
        icon: AlertTriangle,
        color: "text-rose-600",
        bg: "bg-rose-100"
    },
    {
        id: 6,
        title: "Network Security",
        description: "Private VPC endpoints, firewalls, and secure gateways to isolate your data infrastructure.",
        icon: Shield,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
];

export default function CloudConsultingSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        SECURE BY DESIGN
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Security-First & <span className="text-[#6366f1]">Compliance-Driven</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Security is embedded into every consulting engagement. Your cloud environment remains protected and compliant.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 justify-center">
                    {securityFeatures.map((feature) => (
                        <div key={feature.id} className="flex items-start gap-5">
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
