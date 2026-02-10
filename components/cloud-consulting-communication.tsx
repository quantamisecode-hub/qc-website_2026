import { UserCheck, Waypoints, ShieldAlert, TrendingDown, Users, ClipboardList } from "lucide-react";

const partnershipRoles = [
    {
        id: 1,
        title: "Certified Cloud Consultants",
        description: "Experts to guide your cloud strategy and implementation roadmap.",
        icon: UserCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        id: 2,
        title: "Solution Architects",
        description: "Designing scalable, high-performance cloud architectures tailored to your needs.",
        icon: Waypoints,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: 3,
        title: "Security Specialists",
        description: "Ensuring your infrastructure is secure, compliant, and resilient against threats.",
        icon: ShieldAlert,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        id: 4,
        title: "Cost Optimization Experts",
        description: "Implementing FinOps strategies to maximize ROI and minimize waste.",
        icon: TrendingDown,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: 5,
        title: "Dedicated Engagement Managers",
        description: "Your primary point of contact ensuring smooth project execution and improved outcomes.",
        icon: Users,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    },
    {
        id: 6,
        title: "Quarterly Business Reviews",
        description: "Strategic alignment meetings to ensure our cloud services evolve with your business.",
        icon: ClipboardList,
        color: "text-rose-600",
        bg: "bg-rose-50",
    }
];

export default function CloudConsultingCommunication() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        PARTNERSHIP & ADVISORY
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Strategic Cloud <span className="text-[#6366f1]">Partnership</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We operate as your long-term cloud transformation partner, providing ongoing advisory and execution support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-center">
                    {partnershipRoles.map((role) => (
                        <div key={role.id} className="flex flex-col items-start group border border-slate-200 rounded-3xl p-8 bg-white hover:border-indigo-100 transition-colors duration-300">
                            <div className={`w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-105 group-hover:border-indigo-100`}>
                                <role.icon size={28} className={`${role.color} opacity-90`} strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#6366f1] transition-colors duration-300">
                                    {role.title}
                                </h3>
                                <p className="text-slate-500 text-base leading-relaxed">
                                    {role.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
