import Image from "next/image";
import WhyChooseUsGrid from "./why-choose-us-grid";
import aboutImg from "../public/assets/aboutImg.jpeg"; // Reusing about image or similar as placeholder

export default function WhyChooseUs() {
    return (
        <section className="bg-[#6366f1] overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[800px]">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 relative min-h-[400px]">
                    <Image
                        src={aboutImg}
                        alt="Why Choose Quantamise Code"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#3A0F67]/20 mix-blend-multiply" />
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 lg:p-20">
                    <div className="max-w-xl">
                        <span className="text-white/80 font-bold tracking-widest uppercase text-sm mb-4 block">
                            WHY CHOOSE US
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Why Businesses Choose Quantamise Code
                        </h2>
                        <p className="text-lg text-white/90 leading-relaxed mb-12">
                            Clients trust Quantamise Code for our commitment to quality, transparency, and long-term partnership. We focus on delivering measurable business value, not just software.
                        </p>

                        {/* Grid (Client Component for Animations) */}
                        <WhyChooseUsGrid />
                    </div>
                </div>
            </div>
        </section>
    );
}
