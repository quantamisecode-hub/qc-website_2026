import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

export default function About() {
    const aboutParagraphs = [
        "Quantamise Code was founded with a vision to help organizations leverage modern technology and artificial intelligence to solve complex business challenges.",
        "We work closely with our clients to understand their objectives, technical requirements, and market dynamics. Our team then designs and develops customized solutions that align with long-term business goals.",
        "With a strong focus on innovation, performance, and cybersecurity, we ensure that every product we deliver meets enterprise-grade quality standards."
    ];

    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                    >
                        <header>
                            <span className="text-[#3A0F67] font-bold tracking-widest uppercase text-sm mb-3 block">
                                Who We Are
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-8 leading-tight">
                                Your Reliable Digital <span className="text-[#6366f1]"> Transformation Partner</span>
                            </h2>
                        </header>

                        <div className="space-y-6 text-lg text-[#2A2A2A] leading-relaxed font-medium">
                            {aboutParagraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="flex items-center gap-2 mt-10">
                            <Link
                                href="/contact"
                                className="group rounded-md px-8 py-4 bg-[#eb56f6] text-white font-extrabold flex items-center gap-2 hover:bg-[#d035db] transition-colors duration-300">
                                Work With Us
                                <ArrowRight
                                    className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:rotate-0 rotate-[-45deg] "
                                />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                    >
                        <div className="relative group">
                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#3A0F67]/5 rounded-full blur-3xl -z-10"></div>

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-[#3A0F67]/5 mix-blend-multiply z-10 pointer-events-none"></div>

                                <Image
                                    src="/assets/aboutImg.jpeg"
                                    alt="Quantamise team collaborating on digital solutions"
                                    width={800}
                                    height={600}
                                    priority // Ensures fast loading for high-fold content
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}