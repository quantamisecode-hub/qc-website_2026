import { icons } from "lucide-react";
import { Sparkles, Search, Tag, TrendingUp, MessageSquare, Megaphone } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "Personalized Recommendations",
        description: "AI-driven product suggestions tailored to individual user behavior and preferences.",
        icon: Sparkles,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        id: 2,
        title: "Smart Search & Filtering",
        description: "Advanced search capabilities that understand intent and deliver relevant results instantly.",
        icon: Search,
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        id: 3,
        title: "Dynamic Pricing Optimization",
        description: "AI-powered pricing strategies to maximize margins while remaining competitive.",
        icon: Tag,
        color: "text-pink-600",
        bg: "bg-pink-50",
        borderColor: "border-pink-100"
    },
    {
        id: 4,
        title: "Demand Forecasting",
        description: "Predictive analytics to optimize inventory levels and prevent stockouts or overstocking.",
        icon: TrendingUp,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        id: 5,
        title: "Automated Chatbots",
        description: "Intelligent support agents available 24/7 to assist customers and resolve queries.",
        icon: MessageSquare,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    },
    {
        id: 6,
        title: "Marketing Automation",
        description: "Behavior-based campaigns that engage customers at the right time with the right message.",
        icon: Megaphone,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        borderColor: "border-cyan-100"
    }
];

export default function EcommerceBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        INTELLIGENT COMMERCE
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Intelligent Commerce <span className="text-[#6366f1]">Solutions</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We leverage artificial intelligence and automation to create smarter, more personalized shopping journeys.
                    </p>
                </div>

                {/* Grid */}
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
                {/* Footer Text */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-500 font-medium">
                        We help you convert visitors into loyal customers.
                    </p>
                </div>
            </div>
        </section>
    );
}
