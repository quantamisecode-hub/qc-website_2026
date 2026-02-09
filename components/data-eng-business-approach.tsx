import { Zap, Database, CheckCircle, TrendingUp, Layers } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "Data Quality First",
        description: "We implement rigorous validation rules so business decisions are made on accurate, trusted data.",
        icon: CheckCircle,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        id: 2,
        title: "Scalable Architecture",
        description: "Decoupled storage and compute ensure your platform grows with your data without exponential costs.",
        icon: Layers,
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        id: 3,
        title: "High Performance",
        description: "Optimized partitions, indexing, and caching for sub-second query responses.",
        icon: Zap,
        color: "text-pink-600",
        bg: "bg-pink-50",
        borderColor: "border-pink-100"
    },
    {
        id: 4,
        title: "Single Source of Truth",
        description: "Consolidating siloed data into a unified warehouse for consistent reporting across the org.",
        icon: Database,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        id: 5,
        title: "Business Value Focus",
        description: "We prioritize pipelines that drive revenue, insights, and operational efficiency.",
        icon: TrendingUp,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    }
];

export default function DataEngBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header: Brand Design Language (Centered, Purple, Bold) */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR APPROACH
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        More Than Just <span className="text-[#6366f1]">Pipelines</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We build intelligent data ecosystems that drive business growth.
                    </p>
                </div>

                {/* Grid: Clean, Borderless Layout (Matching FullStackBusinessApproach) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {businessValues.map((value) => (
                        <div key={value.id} className={`flex flex-col items-start ${value.bg} border ${value.borderColor} rounded-3xl p-8 group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-300`}>
                            {/* Icon Box */}
                            <div className={`w-14 h-14 bg-white ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-in-out shadow-sm`}>
                                <value.icon size={28} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6366f1] transition-colors duration-300">
                                {value.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                                {value.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
