import { UserCheck, MessageSquare, BarChart, RefreshCcw, LifeBuoy, BookOpen } from "lucide-react";

const communicationFeatures = [
    {
        id: 1,
        title: "Expert AI Consultants",
        description: "Your dedicated AI specialists explaining complex concepts in clear business terms.",
        icon: UserCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        id: 2,
        title: "Transparent Progress",
        description: "Regular updates on model training metrics, accuracy improvements, and milestone achievements.",
        icon: MessageSquare,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: 3,
        title: "Performance Reports",
        description: "Detailed analytics dashboards showing how the AI model is performing against KPIs.",
        icon: BarChart,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        id: 4,
        title: "Iterative Refinement",
        description: "Continuous feedback loops to fine-tune the model based on real-world usage and edge cases.",
        icon: RefreshCcw,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: 5,
        title: "Long-Term Support",
        description: "Ongoing monitoring and MLOps support to ensure your AI solution stays effective as data evolves.",
        icon: LifeBuoy,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    },
    {
        id: 6,
        title: "Knowledge Transfer Workshops",
        description: "Training your internal team to manage and maintain the AI solution independently.",
        icon: BookOpen,
        color: "text-rose-600",
        bg: "bg-rose-50",
    }
];

export default function AiCommunication() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        PARTNERSHIP FIRST
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Transparent AI <span className="text-[#6366f1]">Partnership</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We demystify AI and work alongside you to ensure successful adoption.
                    </p>
                </div>

                {/* Open Grid - No Card Backgrounds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {communicationFeatures.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-start group border border-slate-200 rounded-3xl p-8 bg-white hover:border-indigo-100 transition-colors duration-300 cursor-pointer select-none">
                            {/* Icon Box - Distinct & Elevated */}
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
            </div>
        </section>
    );
}
