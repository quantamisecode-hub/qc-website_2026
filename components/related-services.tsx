import { ArrowRight, Cpu, Globe, Smartphone, Layers, ShoppingCart, Palette, Blocks } from "lucide-react";

interface RelatedServicesProps {
    currentService: "full-stack" | "mobile" | "saas" | "ai" | "ecommerce" | "ui-ux" | "iiot" | "data-engineering" | "devops";
}

const allServices = [
    {
        id: "full-stack",
        title: "Full-Stack Development",
        description: "Scalable web applications using React, Node.js, and modern cloud technologies.",
        icon: Globe,
        href: "/services/full-stack-development",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100"
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android.",
        icon: Smartphone,
        href: "/services/mobile-app-development",
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-100"
    },
    {
        id: "saas",
        title: "SaaS Development",
        description: "Multi-tenant cloud platforms built for scale and security.",
        icon: Layers,
        href: "/services/saas-development",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100"
    },
    {
        id: "ai",
        title: "AI Solutions",
        description: "Intelligent systems with machine learning and predictive analytics.",
        icon: Cpu,
        href: "/services/ai-solutions",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        id: "ecommerce",
        title: "E-Commerce Development",
        description: "High-performance online stores with seamless payment integration.",
        icon: ShoppingCart,
        href: "/services/ecommerce-development",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-100"
    },
    {
        id: "ui-ux",
        title: "UX/UI Design",
        description: "User-centric design solutions that enhance engagement and conversion.",
        icon: Palette,
        href: "/services/UX-UI-design",
        color: "text-pink-600",
        bg: "bg-pink-50",
        border: "border-pink-100"
    },
    {
        id: "iiot",
        title: "IIoT Development",
        description: "Industrial IoT solutions for smart manufacturing and automation.",
        icon: Blocks,
        href: "/services/IIOT",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        border: "border-cyan-100"
    },
    {
        id: "devops",
        title: "DevOps Services",
        description: "Automated CI/CD pipelines and cloud infrastructure management.",
        icon: Layers, // Reusing Layers or maybe specialized icon if imported
        href: "/services/devops",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-100"
    }
];

export default function RelatedServices({ currentService }: RelatedServicesProps) {
    // Filter out the current service
    const otherServices = allServices.filter(service => service.id !== currentService);

    // Limit to 3 or 4 suggestions to keep it clean, or show all? 
    // Showing all might be too much if there are 6 others. Let's show all in a grid.

    return (
        <section className="py-20 bg-white" style={{ fontFamily: "var(--font-geist-sans)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-4">
                        Explore More Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover how our other technology solutions can further accelerate your business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherServices.map((service, index) => (
                        <a
                            key={index}
                            href={service.href}
                            className={`group p-6 rounded-2xl border ${service.border} ${service.bg} hover:shadow-lg transition-all duration-300 flex flex-col h-full`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-white shadow-sm ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div className={`p-2 rounded-full bg-white/50 text-gray-400 group-hover:text-[#3A0F67] group-hover:bg-white transition-colors`}>
                                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3A0F67] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                {service.description}
                            </p>

                            <span className={`text-sm font-bold ${service.color} group-hover:underline decoration-2 underline-offset-4 flex items-center gap-1 mt-auto`}>
                                Learn More
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
