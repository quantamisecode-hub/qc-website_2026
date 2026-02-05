"use client";

import React from "react";
import * as motion from "framer-motion/client";
import {
    SiShopify, SiWoocommerce, SiMagento, SiBigcommerce,
    SiReact, SiNextdotjs, SiVuedotjs,
    SiStripe, SiPaypal, SiRazorpay,
    SiPostgresql, SiStrapi, SiSanity
} from "react-icons/si";

const techCategories = [
    {
        title: "Platforms",
        description: "Leading e-commerce engines for rapid growth.",
        techs: [
            { name: "Shopify", icon: SiShopify, color: "#96BF48" },
            { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
            { name: "Magento", icon: SiMagento, color: "#EE672F" },
            { name: "BigCommerce", icon: SiBigcommerce, color: "#121118" },
        ]
    },
    {
        title: "Headless & Custom",
        description: "Ultra-fast custom storefronts using modern web tech.",
        techs: [
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Vue Storefront", icon: SiVuedotjs, color: "#4FC08D" },
            { name: "Sanity CMS", icon: SiSanity, color: "#F03E2F" },
            { name: "Strapi", icon: SiStrapi, color: "#4945FF" },
        ]
    },
    {
        title: "Payments & Operations",
        description: "Secure transactions and streamlined operations.",
        techs: [
            { name: "Stripe", icon: SiStripe, color: "#008CDD" },
            { name: "PayPal", icon: SiPaypal, color: "#00457C" },
            { name: "Razorpay", icon: SiRazorpay, color: "#0D2E54" },
        ]
    }
];

export default function EcommerceTechStack() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl lg:text-4xl font-extrabold text-[#3A0F67] mb-4"
                    >
                        Tools for <span className="text-[#eb56f6]">Growth</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        We leverage the best platforms and frameworks to build stores that convert visitors into customers.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-[#3A0F67] mb-2">{category.title}</h3>
                            <p className="text-slate-500 mb-6 text-sm">{category.description}</p>

                            <div className="flex flex-wrap gap-4">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-2 group/icon"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:bg-white group-hover/icon:shadow-md">
                                            <tech.icon
                                                className="w-5 h-5 transition-colors duration-300 grayscale group-hover/icon:grayscale-0"
                                                style={{ color: tech.color }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-semibold text-slate-500 group-hover/icon:text-[#3A0F67] transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
