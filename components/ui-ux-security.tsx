import { Lock, ShieldCheck, Zap, Server, Cloud, Palette } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "WCAG Accessibility Compliance",
        description: "Designing inclusive interfaces that meet WCAG 2.1 AA standards, ensuring usability for all abilities.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Privacy-First Interface Patterns",
        description: "UI patterns that prioritize user privacy, data minimization, and transparent data usage disclosures.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Secure Onboarding Flows",
        description: "Frictionless yet secure user verification and onboarding processes that build trust from day one.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Consent Management UI",
        description: "Clear, granular, and user-friendly consent management interfaces for GDPR and CCPA compliance.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Error Prevention Mechanisms",
        description: "Proactive UI design that prevents user errors before they happen, reducing frustration and support costs.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "Secure Design Patterns",
        description: "Implementing security-first design patterns that guide users toward safe behaviors.",
        icon: Palette,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export default function UiUxSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST FOUNDATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Accessibility, Security <span className="text-[#6366f1]">& Compliance</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We design with inclusivity and governance in mind.
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
