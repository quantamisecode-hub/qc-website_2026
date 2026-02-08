import { Zap, Layout, Users, ShieldCheck, TrendingUp, ArrowUpRight } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "Personalized User Experiences",
        description: "Adaptive interfaces that tailor content and interactions based on individual user behavior.",
        icon: Zap,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        id: 2,
        title: "Predictive Behavior Analysis",
        description: "Leveraging data to anticipate user needs and drive proactive engagement.",
        icon: TrendingUp,
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        id: 3,
        title: "Voice & Speech Recognition",
        description: "Integrating natural language processing for hands-free and intuitive app control.",
        icon: Users,
        color: "text-pink-600",
        bg: "bg-pink-50",
        borderColor: "border-pink-100"
    },
    {
        id: 4,
        title: "Image & Video Processing",
        description: "Advanced media processing capabilities for filtering, recognition, and augmented reality features.",
        icon: Layout,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        id: 5,
        title: "AI-Powered Chatbots",
        description: "Smart virtual assistants that provide instant support and automate customer interactions.",
        icon: ShieldCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    }
];

export default function MobileBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header: Brand Design Language (Centered, Purple, Bold) */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        INTELLIGENT SOLUTIONS
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Intelligent Mobile Experiences <span className="text-[#6366f1]">Powered by AI</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We integrate artificial intelligence into mobile applications to make them adaptive, personalized, and data driven.
                    </p>
                </div>

                {/* Grid: Clean, Borderless Layout (Matching Image) */}
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