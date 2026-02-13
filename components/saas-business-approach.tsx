import { Rocket, Cloud, BadgeDollarSign, TrendingUp, Users, PieChart } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "SaaS Product Strategy & MVP Acceleration",
        description: "We help you validate ideas quickly and reduce time-to-market. Includes market analysis, MVP development, and concept validation to ensure your product is built on real user demand.",
        icon: Rocket,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        id: 2,
        title: "Cloud-First, Multi-Tenant SaaS Architecture",
        description: "We engineer SaaS platforms for scale with secure multi-tenant systems, microservices, and cost-optimized cloud infrastructure to keep your platform stable as you grow.",
        icon: Cloud,
        color: "text-sky-600",
        bg: "bg-sky-50",
        borderColor: "border-sky-100"
    },
    {
        id: 3,
        title: "Revenue Enablement & Monetization Engineering",
        description: "We design systems for sustainable growth, implementing subscription billing, usage-based pricing, and payment integrations to convert users into long-term customers.",
        icon: BadgeDollarSign,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        borderColor: "border-emerald-100"
    },
    {
        id: 4,
        title: "User Retention & Product Optimization",
        description: "We design for long-term engagement using behavior tracking, performance monitoring, and continuous UX improvements to reduce churn and maximize lifetime value.",
        icon: TrendingUp,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        id: 5,
        title: "Long-Term Product Partnership Model",
        description: "We support you beyond launch with dedicated engineers, agile planning, and scaling guidance. We grow with your product.",
        icon: Users,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    },
    {
        id: 6,
        title: "Data-Driven Iteration",
        description: "Using analytics to continuously refine features and improve user satisfaction.",
        icon: PieChart,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        borderColor: "border-cyan-100"
    }
];

export default function SaasBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR STRATEGY
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Growth-Oriented <span className="text-[#6366f1]">SaaS Architecture</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We build platforms that not only function flawlessly but are engineered for business growth.
                    </p>
                </div>

                {/* Grid */}
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
