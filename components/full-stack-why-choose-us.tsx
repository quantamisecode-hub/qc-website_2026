import Image from "next/image";
import WhyChooseUsGrid from "./why-choose-us-grid";
import whyChooseUsImg from "../public/assets/whyChooseUsImg.jpeg";
import fullStackDevelopmentChooseImg from "../public/assets/fullStackDevelopmentChooseImg.jpeg"

export default function FullStackWhyChooseUs() {
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
                            Why Choose <span className="text-[#6366f1]">Quantamise Code</span> for Full-Stack Development?
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At Quantamise Code, we partner with startups to turn early ideas into scalable, market-ready products. From validating concepts to building and launching full-stack applications, we take care of the entire development process so you can focus on growing your business.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            Whether you’re building an MVP, a SaaS platform, or a custom web or mobile product, we help you move fast without compromising quality. Our solutions are designed to scale, stay secure, and evolve with your startup as it grows.
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
