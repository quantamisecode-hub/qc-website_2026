"use client";

import * as motion from "framer-motion/client";
import { ArrowRight, Cloud } from "lucide-react";
import Link from "next/link";
import {
    SiAmazon, SiGooglecloud,
    SiDocker, SiKubernetes, SiTerraform,
    SiAnsible, SiPrometheus, SiGrafana,
    SiLinux, SiNginx, SiDatadog
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function CloudConsultingHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />

            {/* Floating Logos */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0, x: tech.initialX, y: tech.initialY }}
                        animate={{
                            opacity: 0.8,
                            scale: 1,
                            y: [tech.initialY, tech.initialY - 10, tech.initialY],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                        style={{
                            '--mobile-left': tech.mobileLeft,
                            '--mobile-top': tech.mobileTop,
                            '--mobile-right': tech.mobileRight,
                            '--mobile-bottom': tech.mobileBottom,
                            '--desktop-left': tech.left,
                            '--desktop-top': tech.top,
                            '--desktop-right': tech.right,
                            '--desktop-bottom': tech.bottom,
                        } as React.CSSProperties}
                        className="absolute flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-100/50 left-[var(--mobile-left)] top-[var(--mobile-top)] right-[var(--mobile-right)] bottom-[var(--mobile-bottom)] lg:left-[var(--desktop-left)] lg:top-[var(--desktop-top)] lg:right-[var(--desktop-right)] lg:bottom-[var(--desktop-bottom)]"
                    >
                        <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                        <span className="text-xs font-semibold text-slate-700">{tech.name}</span>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-xs font-bold uppercase tracking-wider mb-6">
                        <Cloud className="w-4 h-4" />
                        <span>Cloud Modernization Experts</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A0F67] mb-6 tracking-tight leading-[1.15]">
                        <span className="text-[#3A0F67]">Cloud Consulting Services <br /> for</span> <span className="text-[#6366f1]">Secure, Scalable & </span><br className="hidden sm:block" />
                        Cost-Efficient Digital Transformation
                    </h1>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        We help organizations design, migrate, and optimize cloud environments that support business growth, innovation, and operational excellence. Quantamise Code delivers expert cloud consulting services for startups and enterprises building modern digital platforms.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#eb56f6] text-white font-bold text-base hover:bg-[#d035db] transition-all flex items-center justify-center gap-2"
                        >
                            Get a Free Cloud Readiness Assessment
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const technologies = [
    { name: "AWS", icon: SiAmazon, color: "#FF9900", initialX: 0, initialY: 0, left: "10%", top: "15%", mobileLeft: "2%", mobileTop: "2%" },
    { name: "Azure", icon: VscAzure, color: "#0078D4", initialX: 0, initialY: 0, right: "15%", top: "12%", mobileRight: "2%", mobileTop: "2%" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4", initialX: 0, initialY: 0, left: "5%", top: "45%", mobileLeft: "8%", mobileTop: "12%" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", initialX: 0, initialY: 0, right: "8%", top: "40%", mobileRight: "8%", mobileTop: "12%" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", initialX: 0, initialY: 0, left: "15%", bottom: "20%", mobileLeft: "45%", mobileBottom: "2%" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC", initialX: 0, initialY: 0, right: "20%", bottom: "25%", mobileRight: "25%", mobileBottom: "10%" },
    { name: "Ansible", icon: SiAnsible, color: "#EE0000", initialX: 0, initialY: 0, left: "25%", top: "10%", mobileLeft: "30%", mobileTop: "1%" },
    { name: "Prometheus", icon: SiPrometheus, color: "#E6522C", initialX: 0, initialY: 0, right: "28%", top: "18%", mobileRight: "30%", mobileTop: "1%" },
    { name: "Grafana", icon: SiGrafana, color: "#F46800", initialX: 0, initialY: 0, left: "8%", bottom: "40%", mobileLeft: "2%", mobileBottom: "15%" },
    { name: "Linux", icon: SiLinux, color: "#FCC624", initialX: 0, initialY: 0, right: "5%", bottom: "45%", mobileRight: "2%", mobileBottom: "15%" },
    { name: "Nginx", icon: SiNginx, color: "#009639", initialX: 0, initialY: 0, left: "20%", top: "60%", mobileLeft: "15%", mobileBottom: "8%" },
    { name: "Datadog", icon: SiDatadog, color: "#632CA6", initialX: 0, initialY: 0, right: "18%", top: "65%", mobileRight: "15%", mobileBottom: "8%" },
];
