import { Rocket, BadgeDollarSign, Eye, TrendingUp, BookOpen, ShieldCheck } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "Faster Time-to-Market",
        description: "Accelerate product development without recruitment delays.",
        icon: Rocket,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        id: 2,
        title: "Cost Efficiency",
        description: "Reduce hiring, training, and infrastructure expenses.",
        icon: BadgeDollarSign,
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        id: 3,
        title: "Full Transparency",
        description: "Track progress, productivity, and deliverables in real time.",
        icon: Eye,
        color: "text-pink-600",
        bg: "bg-pink-50",
        borderColor: "border-pink-100"
    },
    {
        id: 4,
        title: "Scalability on Demand",
        description: "Scale team size up or down based on project needs.",
        icon: TrendingUp,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        id: 5,
        title: "Knowledge Retention",
        description: "Long-term teams build deep understanding of your product.",
        icon: BookOpen,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    },
    {
        id: 6,
        title: "IP Protection",
        description: "All intellectual property belongs to you.",
        icon: ShieldCheck,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        borderColor: "border-emerald-100"
    }
];

export default function DedicatedTeamBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header: Brand Design Language (Centered, Purple, Bold) */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR APPROACH
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Benefits of Hiring a <span className="text-[#6366f1]">Dedicated Development Team</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Partnering with Quantamise Code gives you measurable advantages.
                    </p>
                </div>

                {/* Grid: Clean, Borderless Layout (Matching Image) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {businessValues.map((value) => (
                        <div key={value.id} className={`flex flex-col items-start ${value.bg} border ${value.borderColor} rounded-3xl p-8 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-300`}>
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
