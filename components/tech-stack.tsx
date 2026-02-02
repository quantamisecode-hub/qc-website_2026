import TechStackInteractive from "./tech-stack-interactive";

export default function TechStack() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-24">
                    <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm">
                        Innovation & Mastery
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mt-3 mb-6">
                        Our Technology <span className="text-[#6366f1]">Expertise</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                        We leverage a diverse and powerful stack to build solutions that are secure, scalable, and future-proof.
                    </p>
                </div>

                {/* Interactive Client Component */}
                <TechStackInteractive />

            </div>
        </section>
    );
}
