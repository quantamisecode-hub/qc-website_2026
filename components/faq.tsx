import FAQInteractive from "./faq-interactive";

export default function FAQ() {
    return (
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#eb56f6]/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header (Server Rendered) */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <span className="text-[#0F52BA] font-bold tracking-widest uppercase text-sm">
                        FAQs
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-[#3A0F67] mt-3 mb-6 leading-tight">
                        Frequently Asked <span className="text-[#6366f1]">Questions</span>
                    </h2>
                    <p className="text-lg text-[#4A4A4A] leading-relaxed">
                        Got questions? We've got answers. Here are some common queries about our services, process, and security standards.
                    </p>
                </div>

                {/* Interactive FAQ List */}
                <FAQInteractive />
            </div>
        </section>
    );
}
