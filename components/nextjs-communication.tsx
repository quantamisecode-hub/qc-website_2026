import { UserCheck, MessageSquare, Calendar, RefreshCcw, LifeBuoy, FileCode } from "lucide-react";

const communicationFeatures = [
    {
        id: 1,
        title: "Design-Driven Dialogues",
        description: "Close collaboration between designers and developers to ensure the final product matches the vision perfectly.",
        icon: UserCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        id: 2,
        title: "Regular Visual Updates",
        description: "Weekly demos and staging links so you can see and interact with progress as it happens.",
        icon: MessageSquare,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        id: 3,
        title: "Clear Timelines & Milestones",
        description: "Defined deliverables and realistic deadlines to ensure timely launches without surprises.",
        icon: Calendar,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        id: 4,
        title: "Agile Feedback Loops",
        description: "Rapid iteration cycles allowing for quick adjustments based on your feedback and user testing.",
        icon: RefreshCcw,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: 5,
        title: "Post-Launch Support",
        description: "Ongoing monitoring and updates to keep your application looking fresh and working perfectly.",
        icon: LifeBuoy,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    },
    {
        id: 6,
        title: "Full Code Ownership",
        description: "You receive clean, well-documented code with no vendor lock-in.",
        icon: FileCode,
        color: "text-rose-600",
        bg: "bg-rose-50",
    }
];

export default function NextJsCommunication() {
    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4 block">
                        PARTNERSHIP FIRST
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6">
                        Transparent Communication <span className="text-[#6366f1]">& Visual Progress</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See your Next.js application come to life with our transparent and collaborative process.
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
