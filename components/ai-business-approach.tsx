import { Zap, Brain, Users, Search, TrendingUp, ShieldCheck, Cloud, Lock, BarChart, Handshake } from "lucide-react";

const businessValues = [
    {
        id: 1,
        title: "Applied AI for Real-World Business Challenges",
        description: "We specialize in building practical AI systems that solve measurable business problems. Our applied AI services include: Predictive analytics & demand forecasting, Computer vision systems, Natural language processing solutions, Recommendation engines, Fraud detection & anomaly detection, Intelligent process automation. Every model is trained, validated, and optimized for production environments.",
        icon: Brain,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "border-violet-100"
    },
    {
        id: 2,
        title: "Advanced Data Engineering & Model Development",
        description: "High-performing AI starts with high-quality data. Our AI engineering framework includes: Data pipeline architecture, ETL & data warehousing, Feature engineering, Model training & evaluation, Continuous learning pipelines. We ensure your AI systems remain accurate, relevant, and scalable.",
        icon: Search,
        color: "text-rose-600",
        bg: "bg-rose-50",
        borderColor: "border-rose-100"
    },
    {
        id: 3,
        title: "Cloud-Native AI Deployment & MLOps",
        description: "We build AI platforms that are production-ready from day one. Our deployment capabilities include: Automated model deployment pipelines, Real-time & batch inference systems, MLOps monitoring frameworks, Auto-scaling AI infrastructure, Model versioning & governance. This enables rapid experimentation without compromising reliability.",
        icon: Cloud,
        color: "text-blue-600",
        bg: "bg-blue-50",
        borderColor: "border-blue-100"
    },
    {
        id: 4,
        title: "Responsible AI, Security & Compliance",
        description: "We prioritize transparency, security, and ethical AI practices. Our AI governance standards include: Explainable AI frameworks, Bias detection & mitigation, Secure data handling, Regulatory compliance support, Audit-ready documentation. Your AI systems remain trusted by users and regulators.",
        icon: Lock,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        borderColor: "border-emerald-100"
    },
    {
        id: 5,
        title: "Continuous Optimization & Performance Management",
        description: "AI systems require ongoing refinement to deliver sustained value. Our optimization process focuses on: Model performance monitoring, Drift detection, Accuracy improvement cycles, Cost optimization, Infrastructure efficiency. We ensure your AI investments continue to deliver ROI.",
        icon: TrendingUp,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "border-orange-100"
    },
    {
        id: 6,
        title: "Strategic AI Partnership & Innovation Support",
        description: "We collaborate closely with your leadership, product, and engineering teams. With Quantamise Code, you receive: Dedicated AI architects, Data scientists & ML engineers, Business analysts, Agile project governance, Long-term innovation roadmap. We act as your AI transformation partner.",
        icon: Handshake,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100"
    }
];

export default function AiBusinessApproach() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header: Brand Design Language (Centered, Purple, Bold) */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        OUR APPROACH
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Business-Centric <span className="text-[#6366f1]">AI Strategy</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We don’t just train models — we build intelligent systems aligned with your business goals.
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
