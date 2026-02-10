import { Lock, ShieldCheck, CreditCard, Key, FileCheck } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "PCI-DSS Payment Systems",
        description: "PCI-DSS compliant payment systems ensuring secure handling of transaction data.",
        icon: CreditCard,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Secure Checkout Flows",
        description: "Optimized and encrypted checkout processes to protect sensitive customer information.",
        icon: Lock,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Fraud Detection",
        description: "Advanced fraud detection algorithms to identify and prevent suspicious activities.",
        icon: ShieldCheck,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Data Encryption & APIs",
        description: "End-to-end data encryption and secure API integrations for data safety.",
        icon: Key,
        color: "text-red-600",
        bg: "bg-red-100"
    },
    {
        id: 5,
        title: "GDPR & Privacy Compliance",
        description: "Full compliance with GDPR and privacy regulations to build customer trust.",
        icon: FileCheck,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    }
];

export default function EcommerceSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        SAFE & SECURE
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Secure Payments, Compliance & <span className="text-[#6366f1]">Fraud Protection</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Security is critical in digital commerce.
                    </p>
                </div>

                {/* Feature List */}
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
                {/* Footer Text */}

            </div>
        </section>
    );
}
