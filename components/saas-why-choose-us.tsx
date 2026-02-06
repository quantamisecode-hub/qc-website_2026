import Image from "next/image";
import whyChooseUsImg from "../public/assets/whyChooseUsImg.jpeg";

export default function SaasWhyChooseUs() {
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
                            Your Partner for <span className="text-[#6366f1]">SaaS Success</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Building a SaaS product is more than just coding features; it's about creating a scalable, multi-tenant architecture that can handle growth from day one. At Quantamise Code, we specialize in cloud-native development that ensures your platform is secure, resilient, and ready for enterprise adoption.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            We understand the nuances of subscription economies, user onboarding, and churn reduction. Our holistic approach combines technical excellence with product strategy to help you build a SaaS business, not just a software application.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={whyChooseUsImg}
                            alt="Why Choose Quantamise Code - SaaS Development Team"
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
