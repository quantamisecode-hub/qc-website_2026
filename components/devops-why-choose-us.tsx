import Image from "next/image";
import fullStackDevelopmentChooseImg from "../public/assets/fullStackDevelopmentChooseImg.jpeg" // Using same image for now

export default function DevOpsWhyChooseUs() {
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
                            Why Choose <span className="text-[#6366f1]">Quantamise Code</span> for DevOps Services?
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            At Quantamise Code, we help organizations build high-performance DevOps ecosystems that enable faster development cycles, stable deployments, and resilient production environments.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Our DevOps services focus on eliminating manual processes, reducing deployment risks, and improving collaboration between development and operations teams. We create automated systems that support rapid innovation without compromising reliability or security.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            Whether you are launching a new SaaS platform or scaling an enterprise application, our DevOps engineers ensure your delivery pipelines are optimized for speed, quality, and consistency.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={fullStackDevelopmentChooseImg}
                            alt="DevOps Team"
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
