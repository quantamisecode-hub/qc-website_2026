import { UserCheck, Palette, Server, Calendar, TrendingUp } from "lucide-react";

const communicationFeatures = [
    {
        id: 1,
        title: "Dedicated E-commerce Developers",
        description: "Expert developers focused solely on building and maintaining your e-commerce platform.",
        icon: UserCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        id: 2,
        title: "UI/UX Designers & CRO Specialists",
        description: "Designers who understand customer psychology to create high-converting shopping experiences.",
        icon: Palette,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: 3,
        title: "Platform Architects",
        description: "Technical leaders ensuring your system architecture is scalable, secure, and future-proof.",
        icon: Server,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        id: 4,
        title: "Agile Project Management",
        description: "Efficient delivery with regular sprints, ensuring your project stays on time and within budget.",
        icon: Calendar,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: 5,
        title: "Performance Optimization",
        description: "Continuous monitoring and tuning to ensure your store remains fast and responsive.",
        icon: TrendingUp,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    }
];

export default function EcommerceCommunication() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        PARTNERSHIP
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Strategic Partnership & <span className="text-[#6366f1]">Dedicated Teams</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We partner with you as your long-term e-commerce technology provider.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {communicationFeatures.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-start group border border-slate-200 rounded-3xl p-8 bg-white hover:border-indigo-100 transition-colors duration-300">
                            {/* Icon Box */}
                            <div className={`w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-105 group-hover:border-indigo-100`}>
                                <feature.icon size={28} className={`${feature.color} opacity-90`} strokeWidth={1.5} />
                            </div>

                            {/* Title with decorative line */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#6366f1] transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Footer Text */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-500 font-medium">
                        We support your growth at every stage.
                    </p>
                </div>
            </div>
        </section>
    );
}
