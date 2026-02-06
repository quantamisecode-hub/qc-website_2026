"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link"; // Keeping Link if it's external or nav, but wait, we need to use <a> tags now? 
// Actually, generic CTA usually uses Link. But for this specific task, I should use <a> if I want to be consistent with previous task.
// However, the previous task was about "Refactor Navigation to use <a> tags".
// Let's use <a> tags to be safe and consistent.

export default function AiCTA() {
    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6366f1] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.05]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366f1] opacity-10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#eb56f6] font-bold text-sm mb-8 animate-fade-in-up">
                    <Sparkles className="w-4 h-4" />
                    <span>Build Intelligent Systems</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    Build Intelligent Systems That Drive <span className="text-[#6366f1]">Business Growth</span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Ready to implement AI solutions that create measurable business impact? Partner with Quantamise Code to design, deploy, and optimize enterprise-grade AI systems.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6366f1] text-white font-bold text-lg hover:bg-[#4f46e5] transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                    >
                        Schedule a Free Consultation
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    Free AI strategy consultation today.
                </p>
            </div>
        </section>
    );
}
