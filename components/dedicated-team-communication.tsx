import { UserCheck, MessageSquare, Calendar, RefreshCcw, LifeBuoy, BarChart } from "lucide-react";

const communicationFeatures = [
    {
        id: 1,
        title: "Full-Time Resource Allocation",
        description: "Your team is dedicated 100% to your project, avoiding context switching and ensuring focus.",
        icon: UserCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        id: 2,
        title: "Direct Communication Channels",
        description: "Interact directly with your developers via Slack, Teams, or Zoom without administrative bottlenecks.",
        icon: MessageSquare,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: 3,
        title: "Agile Sprint Planning",
        description: "We follow Agile methodologies with regular sprint planning, standups, and retrospectives.",
        icon: Calendar,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        id: 4,
        title: "Daily/Weekly Reporting",
        description: "Comprehensive updates on progress, roadblocks, and next steps to keep you completely informed.",
        icon: RefreshCcw,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: 5,
        title: "Project Dashboards",
        description: "Real-time access to Jira, Trello, or other project management tools to track every task.",
        icon: BarChart,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    },
    {
        id: 6,
        title: "Time-Zone Aligned Collaboration",
        description: "We adjust strict working hours to ensure sufficient overlap with your local team.",
        icon: LifeBuoy, // Using LifeBuoy as generic support/collaboration optimization
        color: "text-purple-600",
        bg: "bg-purple-50",
    }
];

export default function DedicatedTeamCommunication() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        WORKFLOW & GOVERNANCE
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        How Our Dedicated <span className="text-[#6366f1]">Teams Work</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our teams function as an extension of your organization, maintaining full control over priorities and deliverables.
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
