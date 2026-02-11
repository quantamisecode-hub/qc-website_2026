import {
    Cpu,
    Globe,
    Smartphone,
    Layers,
    Cloud,
    Palette
} from "lucide-react";
import * as motion from "framer-motion/client";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const services = [
    {
        title: "AI Development Services",
        description: "We design and implement advanced artificial intelligence systems that enable businesses to automate processes, analyze data, and improve decision-making. Our AI solutions include machine learning models, predictive analytics, natural language processing, computer vision, and intelligent chatbots, all built with strong data security and compliance standards.",
        icon: Cpu,
        bg: "bg-[#FDF8FF] border-[#eb56f6]/20"
    },
    {
        title: "Web Development Services",
        description: "Our web development team builds fast, responsive, and SEO-optimized websites and web applications tailored to business objectives. We use modern frameworks and secure coding practices to deliver platforms that are scalable, accessible, and easy to maintain.",
        icon: Globe,
        bg: "bg-[#EFF6FF] border-[#0F52BA]/20"
    },
    {
        title: "Mobile App Development Services",
        description: "We develop intuitive and high-performance mobile applications for Android and iOS platforms using industry best practices. Our mobile solutions focus on usability, scalability, and data protection, ensuring long-term reliability and user satisfaction.",
        icon: Smartphone,
        bg: "bg-[#F0FDF4] border-green-200"
    },
    {
        title: "SaaS Development Services",
        description: "We help businesses build robust and scalable SaaS platforms with multi-tenant architecture, subscription management, and analytics dashboards. From MVP development to enterprise-grade platforms, our SaaS solutions are designed for performance, security, and growth.",
        icon: Layers,
        bg: "bg-[#F5F3FF] border-[#3A0F67]/20"
    },
    {
        title: "Cloud Solutions Services",
        description: "We provide cloud consulting, migration, and DevOps services to improve infrastructure reliability, performance, and cost efficiency. Our experts design secure cloud architectures using AWS, Google Cloud, and Microsoft Azure with automated monitoring and backup systems.",
        icon: Cloud,
        bg: "bg-[#FFF7ED] border-orange-200"
    },
    {
        title: "UI/UX Design Services",
        description: "Our UI/UX designers create intuitive, engaging, and conversion-focused digital experiences. We combine user research, prototyping, usability testing, and modern design principles to deliver interfaces that align with business goals and accessibility standards.",
        icon: Palette,
        bg: "bg-[#FFF1F2] border-rose-200"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

export default function Services() {
    return (
        <section className="py-12 lg:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Our End-to-End <span className="text-[#6366f1]">Software Development Services</span>
                        </h2>
                        <p className="text-lg text-[#2A2A2A] font-medium leading-relaxed">
                            We provide comprehensive software development services that cover the complete digital product lifecycle — from strategy and design to development, deployment, and long-term support.
                        </p>
                        <p className="text-lg text-[#2A2A2A] font-medium leading-relaxed mt-4">
                            Our solutions are designed to deliver scalability, security, and sustainable business value.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`p-8 rounded-2xl border ${service.bg} hover:shadow-2xl hover:border-[#eb56f6]/50 transition-all duration-300 group cursor-pointer`}
                        >
                            <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#eb56f6] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-3 group-hover:text-[#eb56f6] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-[#2A2A2A] leading-relaxed group-hover:text-slate-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
