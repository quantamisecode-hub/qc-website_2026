import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhyChooseUsGrid from "./why-choose-us-grid";
import whyChooseUsImg from "../public/assets/whyChooseUsImg.jpeg";

export default function WhyChooseUs() {
    return (
        <section className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4">
                            WHY CHOOSE
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Why Businesses Choose <span className="text-[#6366f1]">Quantamise Code</span>
                        </h2>

                        {/* Purple Underline */}
                        <div className="w-20 h-1.5 bg-[#6366f1] rounded-full mb-8" />

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            Clients trust Quantamise Code for our commitment to quality, transparency, and long-term partnership. We focus on delivering measurable business value, not just software.
                        </p>

                        {/* Grid Component */}
                        <div className="mb-12">
                            <WhyChooseUsGrid />
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={whyChooseUsImg}
                            alt="Why Choose Quantamise Code - Office"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Optional subtle overlay */}
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
