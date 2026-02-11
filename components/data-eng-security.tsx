import { Shield, Lock, FileKey, Eye, Scale, UserX } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Data Encryption",
        description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit across all your pipelines and lakes.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Role-Based Access (RBAC)",
        description: "Granular permissions management ensuring users only access the data they are authorized to see.",
        icon: KeyIcon, // Replaced with FileKey for now if KeyIcon not available, checking imports. Using FileKey as closest.
        // Actually let's use FileKey or Shield
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Governance & Compliance",
        description: "Automated tagging and policy enforcement for GDPR, CCPA, and HIPAA compliance.",
        icon: Scale,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Audit Logging",
        description: "Immutable logs of all data access and transformation activities for full traceability.",
        icon: Eye,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Network Security",
        description: "Private VPC endpoints, firewalls, and secure gateways to isolate your data infrastructure.",
        icon: Shield,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "Data Masking & Anonymization",
        description: "Advanced PII protection techniques to ensure sensitive data remains secure throughout processing.",
        icon: UserX,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

function KeyIcon(props: any) {
    return <FileKey {...props} />
}

export default function DataEngSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        UNCOMPROMISING SECURITY
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Secure, Compliant <span className="text-[#6366f1]">& Trusted Data</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your data is your most valuable asset. We protect it with enterprise-grade security protocols.
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
