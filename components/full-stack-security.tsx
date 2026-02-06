import { CheckCircle2 } from "lucide-react";

const securityFeatures = [
    {
        id: 1,
        title: "Secure Authentication",
        description: "Robust authentication and authorization systems ensuring only the right people have access.",
    },
    {
        id: 2,
        title: "Data Encryption",
        description: "End-to-end encryption and strict compliance best practices to protect sensitive user data.",
    },
    {
        id: 3,
        title: "Performance Optimization",
        description: "Code splitting, image optimization, and efficient algorithms for lightning-fast load times.",
    },
    {
        id: 4,
        title: "Load Balancing & Caching",
        description: "Advanced caching strategies and load balancing to handle high traffic without downtime.",
    },
    {
        id: 5,
        title: "Scalable Cloud Infrastructure",
        description: "Auto-scaling architecture that grows seamlessly with your user base and business needs.",
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

                {/* Feature List (Checkmark Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {securityFeatures.map((feature) => (
                        <div key={feature.id} className="flex items-start gap-4">
                            {/* Checkmark Icon */}
                            <CheckCircle2 className="w-7 h-7 text-[#6366f1] shrink-0 mt-1" strokeWidth={2} />

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
