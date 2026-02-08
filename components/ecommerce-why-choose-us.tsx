import Image from "next/image";
import ecommerceImg from "../public/assets/E-CommerceMarketplace.jpg";

export default function EcommerceWhyChooseUs() {
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
                            Why Choose <span className="text-[#6366f1]">Quantamise Code</span> for AI-Powered E-commerce Development?
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At Quantamise Code, we design and develop intelligent, high-conversion, and scalable e-commerce platforms that help brands maximize online revenue and customer lifetime value. Our solutions combine modern technology, automation, and data intelligence to deliver seamless shopping experiences across web and mobile.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            From custom online stores to enterprise-grade marketplaces, we build e-commerce systems engineered for performance, security, and sustainable growth.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={ecommerceImg}
                            alt="E-commerce Development"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
