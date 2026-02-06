import { Lock, ShieldCheck, Zap, Server, Cloud } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Secure Authentication",
        description: "Robust authentication and authorization systems ensuring only the right people have access.",
        icon: Lock,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        id: 2,
        title: "Data Encryption",
        description: "End-to-end encryption and strict compliance best practices to protect sensitive user data.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: 3,
        title: "Performance Optimization",
        description: "Code splitting, image optimization, and efficient algorithms for lightning-fast load times.",
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        id: 4,
        title: "Load Balancing & Caching",
        description: "Advanced caching strategies and load balancing to handle high traffic without downtime.",
        icon: Server,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: 5,
        title: "Scalable Cloud Infrastructure",
        description: "Auto-scaling architecture that grows seamlessly with your user base and business needs.",
        icon: Cloud,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    }
];

export default function FullStackSecurity() {
    return (
        <section className="py-24 bg-white">
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
                        Security and performance are not optional — they are part of our foundation.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {securityFeatures.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-start bg-white border border-slate-200 rounded-2xl p-8 group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-100">
                            {/* Icon Box */}
                            <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-in-out shadow-sm group-hover:shadow-md`}>
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6366f1] transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-slate-500 italic">
                        This ensures your application remains fast, reliable, and secure as your user base grows.
                    </p>
                </div>
            </div>
        </section>
    );
}
