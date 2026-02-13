import { Zap, Layout, Users, ShieldCheck, TrendingUp, ArrowUpRight, Tag } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "Human-Centered Design for AI",
        description: "We bridge the gap between complex algorithms and real-world usability through user research, behavior analysis, and cognitive load optimization.",
        icon: Zap,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        id: 2,
        title: "Data-Driven UX Optimization",
        description: "We use real product data, funnel visualization, and A/B testing frameworks to continuously refine experiences for higher retention.",
        icon: TrendingUp,
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        id: 3,
        title: "Product Interface Design",
        description: "Designing scalable interfaces for SaaS dashboards, analytics panels, and workflow automation systems that evolve with your product.",
        icon: Layout,
        color: "text-pink-600",
        bg: "bg-pink-50",
        borderColor: "border-pink-100"
    },
    {
        id: 4,
        title: "Design Systems for Scale",
        description: "Creating modular design systems with reusable components and documentation to reduce development time and improve product quality.",
        icon: ShieldCheck,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        id: 5,
        title: "Conversion-Focused Engineering",
        description: "Onboarding optimization, upgrade journeys, and churn reduction patterns engineered to move users closer to value.",
        icon: Users,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    },
    {
        id: 6,
        title: "Brand Consistency",
        description: "Ensuring every interaction reinforces your brand identity and values.",
        icon: Tag,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        borderColor: "border-cyan-100"
    }
];

export default function UiUxBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header: Brand Design Language (Centered, Purple, Bold) */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR APPROACH
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Business-Focused <span className="text-[#6366f1]">UI/UX Design</span> Strategy
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We don’t just design screens — we build intelligent product experiences aligned with your business goals.
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
