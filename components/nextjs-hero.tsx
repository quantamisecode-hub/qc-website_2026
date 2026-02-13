"use client";

import * as motion from "framer-motion/client";
import { ArrowRight, Layout, Palette } from "lucide-react";
import {
    SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiTypescript,
    SiRedux, SiSass, SiFramer, SiStorybook, SiGreensock,
    SiVite, SiBootstrap, SiMui, SiVercel, SiPrisma
} from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";

export default function NextJsHero() {
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
                        <Palette className="w-4 h-4" />
                        <span>High-Performance Web Apps</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A0F67] mb-6 tracking-tight leading-[1.15]">
                        High-Performance <span className="text-[#6366f1]">Next.js Development</span> <br className="hidden sm:block" />
                        for Scalable Products
                    </h1>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        We build fast, secure, and SEO-ready web applications using Next.js to help startups and enterprises launch, scale, and grow with confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#eb56f6] text-white font-bold text-base hover:bg-[#d035db] transition-all flex items-center justify-center gap-2"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB", initialX: 0, initialY: 0, left: "10%", top: "15%", mobileLeft: "2%", mobileTop: "2%" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", initialX: 0, initialY: 0, right: "15%", top: "12%", mobileRight: "2%", mobileTop: "2%" },
    { name: "Vercel", icon: SiVercel, color: "#000000", initialX: 0, initialY: 0, left: "5%", top: "45%", mobileLeft: "8%", mobileTop: "12%" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC", initialX: 0, initialY: 0, right: "8%", top: "40%", mobileRight: "8%", mobileTop: "12%" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", initialX: 0, initialY: 0, left: "15%", bottom: "20%", mobileLeft: "45%", mobileBottom: "2%" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", initialX: 0, initialY: 0, right: "20%", bottom: "25%", mobileRight: "25%", mobileBottom: "10%" },
    { name: "Sass", icon: SiSass, color: "#CC6699", initialX: 0, initialY: 0, left: "25%", top: "10%", mobileLeft: "30%", mobileTop: "1%" },
    { name: "Framer", icon: SiFramer, color: "#0055FF", initialX: 0, initialY: 0, right: "28%", top: "18%", mobileRight: "30%", mobileTop: "1%" },
    { name: "GSAP", icon: SiGreensock, color: "#88CE02", initialX: 0, initialY: 0, left: "8%", bottom: "40%", mobileLeft: "2%", mobileBottom: "15%" },
    { name: "Vite", icon: SiVite, color: "#646CFF", initialX: 0, initialY: 0, right: "5%", bottom: "45%", mobileRight: "2%", mobileBottom: "15%" },
    { name: "HTML5", icon: IoLogoHtml5, color: "#E34F26", initialX: 0, initialY: 0, left: "20%", top: "60%", mobileLeft: "15%", mobileBottom: "8%" },
    { name: "CSS3", icon: IoLogoCss3, color: "#1572B6", initialX: 0, initialY: 0, right: "18%", top: "65%", mobileRight: "15%", mobileBottom: "8%" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E", initialX: 0, initialY: 0, left: "30%", bottom: "15%", mobileLeft: "28%", mobileBottom: "2%" },
    { name: "Storybook", icon: SiStorybook, color: "#FF4785", initialX: 0, initialY: 0, right: "32%", bottom: "12%", mobileRight: "55%", mobileBottom: "3%" },
];
