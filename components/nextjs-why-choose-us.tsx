import { Zap, Search, Layout, Database, Cloud, ShieldCheck, BarChart, Users } from "lucide-react";
import Image from "next/image";
import NextJsWhyChooseImage from "../public/assets/NextJsWhyChooseImage.png";

const features = [
    {
        title: "Performance-Driven Engineering",
        description: "Website speed directly impacts user experience, SEO rankings, and conversion rates.",
        bullets: ["Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Incremental Static Regeneration (ISR)", "Core Web Vitals optimization"],
        icon: Zap,
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        title: "SEO-First Architecture",
        description: "We design Next.js applications with SEO at the core for maximum visibility.",
        bullets: ["Search-engine-friendly routing", "Optimized metadata & Open Graph", "Schema markup integration", "Crawl optimization"],
        icon: Search,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Conversion-Focused UI/UX",
        description: "We build user interfaces that not only look great but also convert visitors into customers.",
        bullets: ["Responsive design systems", "Component-driven architecture", "Accessibility (WCAG compliance)", "CRO-focused layouts"],
        icon: Layout,
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        title: "Full-Stack Integration",
        description: "Seamlessly integrate with your backend, CMS, and third-party platforms.",
        bullets: ["Headless CMS integrations", "REST & GraphQL API development", "Authentication systems", "Real-time data synchronization"],
        icon: Database,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "Cloud Deployment & DevOps",
        description: "Production-ready deployment pipelines for reliable and scalable systems.",
        bullets: ["Vercel & AWS deployments", "CI/CD pipeline automation", "CDN & edge optimization", "Disaster recovery planning"],
        icon: Cloud,
        color: "text-sky-600",
        bg: "bg-sky-50",
    },
    {
        title: "Enterprise-Level Security",
        description: "Security is embedded into every stage of development.",
        bullets: ["Secure authentication (OAuth, SSO)", "Role-based access control", "OWASP vulnerability mitigation", "Data encryption"],
        icon: ShieldCheck,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        title: "Advanced Data Analytics",
        description: "Make data-driven decisions through advanced analytics and monitoring.",
        bullets: ["Google Analytics & GA4", "Performance monitoring", "User behavior analysis", "Conversion tracking"],
        icon: BarChart,
        color: "text-rose-600",
        bg: "bg-rose-50",
    },
    {
        title: "Dedicated Next.js Teams",
        description: "Specialized teams focused exclusively on Next.js development working as your extension.",
        bullets: ["Certified Next.js engineers", "Frontend architects", "QA specialists", "Project managers"],
        icon: Users,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
    }
];

export default function NextJsWhyChooseUs() {
    return (
        <section className="bg-white py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Intro Section with Image */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20">
                    <div className="w-full lg:w-1/2 text-left">
                        <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                            WHY CHOOSE QUANTAMISE CODE
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-8 leading-tight">
                            Why Choose Quantamise Code for <span className="text-[#6366f1]">Next.js Services?</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At Quantamise Code, we specialize in building high-performance, SEO-friendly, and scalable web applications using Next.js. We help startups, SaaS companies, and enterprises create fast-loading, conversion-optimized, and search-engine-ready digital platforms.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            From marketing websites and SaaS dashboards to enterprise portals and headless commerce platforms, we deliver modern web solutions engineered for speed, security, and long-term growth.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={NextJsWhyChooseImage}
                            alt="Next.js Development Team"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-8 rounded-3xl border border-slate-300 bg-white hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-3 group-hover:text-[#6366f1] transition-colors">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {feature.description}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-2 list-disc pl-5">
                                {feature.bullets.map((bullet, idx) => (
                                    <li key={idx} className={`text-sm ${feature.color}`}>
                                        <span className="text-slate-500">
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
