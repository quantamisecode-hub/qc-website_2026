import { Lock, ShieldCheck, Zap, Database, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Data Privacy & Anonymization",
        description: "Strict PII redaction and data masking techniques to ensure user privacy is never compromised during training or inference.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Model Robustness",
        description: "Defense mechanisms against adversarial attacks to prevent model manipulation and ensure reliable outputs.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Low-Latency Inference",
        description: "Optimized model serving using quantization and edge deployment for lightning-fast real-time predictions.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Secure Data Pipelines",
        description: "Encryption at rest and in transit for all data flowing through your AI infrastructure.",
        icon: Database,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Bias Detection & Fairness",
        description: "Rigorous testing to identify and mitigate algorithmic bias, ensuring ethical and fair AI decisions.",
        icon: Eye,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "Compliance & Governance",
        description: "Automated policy enforcement for GDPR, CCPA, and AI ethics frameworks to ensure regulatory compliance.",
        icon: FileCheck,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export default function AiSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST FOUNDATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Security, Ethics <span className="text-[#6366f1]">& Performance</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Building AI that is safe, compliant, and trustworthy.
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
