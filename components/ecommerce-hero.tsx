"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
    SiShopify, SiWoocommerce, SiMagento, SiBigcommerce,
    SiStripe, SiPaypal, SiReact, SiNextdotjs, SiNodedotjs, SiRedis
} from "react-icons/si";

export default function EcommerceHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        className="absolute flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-100/50"
                        initial={{ opacity: 0, x: tech.initialX, y: tech.initialY }}
                        animate={{
                            opacity: 0.8,
                            y: [tech.initialY, tech.initialY - 20, tech.initialY],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                        style={{
                            left: tech.left,
                            top: tech.top,
                            right: tech.right,
                            bottom: tech.bottom,
                        }}
                    >
                        <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                        <span className="text-xs font-semibold text-slate-700">{tech.name}</span>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-xs font-bold uppercase tracking-wider mb-6">
                        <ShoppingBag className="w-4 h-4" />
                        <span>High-Conversion Stores</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A0F67] mb-6 tracking-tight leading-[1.15]">
                        Next-Gen <span className="text-[#6366f1]">E-Commerce</span><br className="hidden sm:block" />
                        Solutions
                    </h1>

                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        We build blazing fast, secure, and scalable online stores. Whether it's Shopify, WooCommerce, or custom Headless architectures, we maximize your sales.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#6366f1] text-white font-bold text-base hover:bg-[#4f46e5] transition-all flex items-center justify-center gap-2"
                        >
                            Launch Your Store
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#roadmap"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white border-2 border-[#3A0F67] text-[#3A0F67] font-bold text-base hover:bg-[#F9FAFC] transition-all flex items-center justify-center gap-2"
                        >
                            Our Process
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const technologies = [
    { name: "Shopify", icon: SiShopify, color: "#96BF48", initialX: 0, initialY: 0, left: "10%", top: "15%" },
    { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A", initialX: 0, initialY: 0, right: "15%", top: "12%" },
    { name: "Magento", icon: SiMagento, color: "#EE672F", initialX: 0, initialY: 0, left: "5%", top: "45%" },
    { name: "BigCommerce", icon: SiBigcommerce, color: "#121118", initialX: 0, initialY: 0, right: "8%", top: "40%" },
    { name: "Stripe", icon: SiStripe, color: "#008CDD", initialX: 0, initialY: 0, left: "15%", bottom: "20%" },
    { name: "PayPal", icon: SiPaypal, color: "#00457C", initialX: 0, initialY: 0, right: "20%", bottom: "25%" },
    { name: "React", icon: SiReact, color: "#61DAFB", initialX: 0, initialY: 0, left: "25%", top: "10%" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", initialX: 0, initialY: 0, right: "28%", top: "18%" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", initialX: 0, initialY: 0, left: "8%", bottom: "35%" },
    { name: "Redis", icon: SiRedis, color: "#DC382D", initialX: 0, initialY: 0, right: "5%", bottom: "45%" },
];
