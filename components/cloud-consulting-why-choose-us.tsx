import Image from "next/image";
import CloudWhyChooseImage from "../public/assets/CloudWhyChooseImage.jpeg";

export default function CloudConsultingWhyChooseUs() {
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
                            Why Choose <span className="text-[#6366f1]">Quantamise Code</span> for Cloud Consulting Services?
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At Quantamise Code, we help organizations adopt and scale cloud technologies with confidence. Our cloud consulting services focus on aligning your technology infrastructure with business goals, ensuring security, compliance, and long-term sustainability.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            We work closely with leadership and engineering teams to design cloud strategies that reduce operational complexity, improve system performance, and maximize return on investment.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            From initial cloud assessment to enterprise-wide transformation, we guide you through every stage of your cloud journey.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={CloudWhyChooseImage}
                            alt="Cloud Consulting Team"
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
