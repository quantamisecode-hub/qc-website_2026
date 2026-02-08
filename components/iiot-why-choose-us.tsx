import Image from "next/image";
import WhyChooseUsGrid from "./why-choose-us-grid";
import whyChooseUsImg from "../public/assets/whyChooseUsImg.jpeg";
import fullStackDevelopmentChooseImg from "../public/assets/fullStackDevelopmentChooseImg.jpeg"

export default function IiotWhyChooseUs() {
    return (
        <section className="bg-white py-12 lg:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-2/3 flex flex-col">
                        <span className="text-gray-900 font-bold tracking-widest uppercase text-sm mb-4">
                            WHY CHOOSE US
                        </span>

                        <h2 className="text-3xl sm:text-4xl  lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            What Makes Us <span className="text-[#6366f1]">Different?</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            We combine deep domain expertise in IoT, edge computing, cloud architecture, and data analytics to deliver custom IIoT solutions that drive measurable business outcomes - from predictive maintenance to smart asset tracking and real-time operational dashboards.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Deep Industrial Domain Expertise",
                                "End-to-End Services (Device to Cloud)",
                                "Agile, Transparent Delivery",
                                "Long-Term Support & Evolution"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            We deliver systems that connect sensors, factories, machines, and cloud systems into one intelligent network that works in real time.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={fullStackDevelopmentChooseImg}
                            alt="Industrial IoT Solutions"
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
