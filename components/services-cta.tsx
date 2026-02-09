
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
    return (
        <section className="py-24 bg-slate-950 overflow-hidden relative" style={{ fontFamily: "var(--font-geist-sans)" }}>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A0F67]/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Build Intelligent Systems That Drive{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Business Growth
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Ready to implement AI solutions that create measurable business impact?
                        Partner with Quantamise Code to design, deploy, and optimize enterprise-grade AI systems.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 bg-[#5D5CDE] hover:bg-[#4B4AC0] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(93,92,222,0.3)] hover:shadow-[0_0_30px_rgba(93,92,222,0.5)]"
                        >
                            Schedule a Free Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
