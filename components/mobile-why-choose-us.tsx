import Image from "next/image";
import WhyChooseUsGrid from "./why-choose-us-grid";
import whyChooseUsImg from "../public/assets/whyChooseUsImg.jpeg";
import fullStackDevelopmentChooseImg from "../public/assets/fullStackDevelopmentChooseImg.jpeg"

export default function MobileWhyChooseUs() {
    return (
        <section className="bg-white py-12 lg:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-2/3 flex flex-col">
                        <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4">
                            WHY CHOOSE US
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Why Choose <span className="text-[#6366f1]">Quantamise Code</span> for Mobile App Development?
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            We specialize in building Mobile Apps for Startups, SaaS companies, and enterprises - combining advanced analytics, machine learning, and modern mobile frameworks to deliver exceptional digital experiences.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Dedicated Mobile Engineers & Architects",
                                "AI Specialists & Product Managers",
                                "Agile Delivery Framework",
                                "Continuous Improvement Cycles"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            From idea validation to global product launch, we help you build mobile products that stand out in competitive markets.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={fullStackDevelopmentChooseImg}
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
