import { Lock, ShieldCheck, Zap, Globe, Smartphone, Search } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "XSS & CSRF Protection",
        description: "Implementing strict content security policies and sanitization to prevent malicious script injection.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        id: 2,
        title: "Secure Authentication",
        description: "Seamless integration with OAuth, JWT, and session management systems for robust user identity protection.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    },
    {
        id: 3,
        title: "Performance auditing",
        description: "Regular audits using Lighthouse and Web Vitals to ensure optimal speed and user experience.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-100"
    },
    {
        id: 4,
        title: "Cross-Browser Compatibility",
        description: "Rigorous testing across Chrome, Firefox, Safari, and Edge to ensure consistent behavior everywhere.",
        icon: Globe,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        id: 5,
        title: "Responsive Assurance",
        description: "Validating layouts on real devices to guarantee a perfect experience from mobile to ultra-wide screens.",
        icon: Smartphone,
        color: "text-cyan-600",
        bg: "bg-cyan-100"
    },
    {
        id: 6,
        title: "SEO Security",
        description: "Secure server-side rendering and metadata management to protect against SEO attacks.",
        icon: Search,
        color: "text-purple-600",
        bg: "bg-purple-100"
    }
];

export default function NextJsSecurity() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        ROBUST FOUNDATION
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Secure & <span className="text-[#6366f1]">Scalable</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We prioritize security and performance at every layer of your Next.js application.
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
