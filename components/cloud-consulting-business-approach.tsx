import { Map, Layers, RefreshCw, Server, ShieldCheck, TrendingDown } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "Cloud Strategy & Roadmap Development",
        description: "Cloud readiness assessment, business-aligned roadmap, platform selection advisory, AI & data workload planning, and legacy modernization strategy.",
        icon: Map,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    },
    {
        id: 2,
        title: "Cloud Architecture & Design",
        description: "High-availability architecture, scalable SaaS infrastructure, microservices-ready environments, hybrid & multi-cloud frameworks, and disaster recovery.",
        icon: Layers,
        color: "text-blue-600",
        bg: "bg-blue-50",
        borderColor: "border-blue-100"
    },
    {
        id: 3,
        title: "Cloud Migration & Modernization",
        description: "Application & data migration, re-platforming, lift-and-shift optimization, zero-downtime migration protocols, and post-migration validation.",
        icon: RefreshCw,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        borderColor: "border-emerald-100"
    },
    {
        id: 4,
        title: "Hybrid & Multi-Cloud Enablement",
        description: "Vendor-neutral architecture design, cross-cloud workload management, interoperability planning, risk diversification, and performance benchmarking.",
        icon: Server,
        color: "text-amber-600",
        bg: "bg-amber-50",
        borderColor: "border-amber-100"
    },
    {
        id: 5,
        title: "Cloud Governance & Compliance",
        description: "Security governance frameworks, access control policies, regulatory compliance mapping, audit readiness, and data protection standards.",
        icon: ShieldCheck,
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        id: 6,
        title: "Cloud Cost Optimization (FinOps)",
        description: "Cloud cost assessment, budget forecasting models, resource optimization, reserved capacity planning, and usage monitoring dashboards.",
        icon: TrendingDown,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        borderColor: "border-cyan-100"
    }
];

export default function CloudConsultingBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR EXPERTISE
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        End-to-End <span className="text-[#6366f1]">Cloud Consulting Solutions</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide comprehensive cloud advisory and implementation support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {businessValues.map((value) => (
                        <div key={value.id} className={`flex flex-col items-start ${value.bg} border ${value.borderColor} rounded-3xl p-8 group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-300`}>
                            <div className={`w-14 h-14 bg-white ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-in-out shadow-sm`}>
                                <value.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6366f1] transition-colors duration-300">
                                {value.title}
                            </h3>
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
