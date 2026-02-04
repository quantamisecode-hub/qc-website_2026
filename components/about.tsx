import { ArrowRight, ArrowUpRight, Clover } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { Counter } from "./counter";

export default function About() {
    return (
        <section className="py-20 lg:py-32 bg-[#f9fbfa] overflow-hidden text-[#2A2A2A] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6 text-[#3A0F67]">
                                <span className="font-bold tracking-widest uppercase text-sm">
                                    ABOUT Us
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                                Your Reliable Digital <span className="text-[#6267f1]">Transformation Partner</span> <br />
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center mb-10">
                                {/* Experience Stat */}
                                <div className="shrink-0 group">
                                    <div className="flex items-start leading-none">
                                        <span className="text-[120px] font-bold text-[#6267f1] group-hover:text-[#3A0F67] transition-colors duration-300">
                                            <Counter from={0} to={5} />
                                        </span>
                                        <span className="text-6xl font-bold text-[#6267f1] mt-4">+</span>
                                    </div>
                                    <p className="text-[#3A0F67] font-bold text-lg tracking-wide pl-2 mt-[-10px]">
                                        Years Of Experience
                                    </p>
                                </div>

                                {/* Divider & Description */}
                                <div className="flex gap-6 border-l-2 border-[#3A0F67]/10 pl-8 py-2">
                                    <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                                        At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences.
                                    </p>
                                </div>
                            </div>

                            <div className="relative inline-block group">
                                <Link
                                    href="/contact"
                                    className="relative z-10 w-65 rounded-md px-8 py-4 bg-[#eb56f6] text-white font-extrabold flex items-center gap-2 hover:bg-[#d035db] transition-colors duration-300"
                                >
                                    Get Free Consultation
                                    <ArrowRight
                                        className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:rotate-0 rotate-[-45deg]"
                                    />
                                </Link>

                                {/* Fun Curly Arrow SVG */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [10, 5, 10]
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        opacity: { duration: 0.5 },
                                        scale: { duration: 0.5 },
                                        default: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    className="absolute -bottom-8 -left-32 w-32 h-32 text-[#6366f1] pointer-events-none hidden sm:block"
                                >
                                    <svg
                                        viewBox="0 0 500 500"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g>
                                            <g>
                                                <path
                                                    d="M437.65 228.63c-11-11.3-28.02-30.74-43.85-33.25-13.68.4-4.24 16.99 4.72 15.98 1.67-.27 14.6 12 20.99 18.95-73.13-19.32-152.62-31.59-224.6-2.19-24.36-20.09-70.46-5.55-97.86 2.74-10.7 4.38-44.74 15.3-45.58 27.63 2.63 10.11 14.03 9.62 19.87 2.58 6.8-4.63 14.23-8.1 21.77-11.33 27.16-10.03 57.65-20.38 86.74-14.81-19.75 10.96-45.07 24.46-49.37 48.67-.98 20.42 24.81 26.36 39.14 16.1 18.7-11.31 37.58-31.54 34.51-54.98 67.16-28.65 141.54-17.06 210.28.69a634.53 634.53 0 0 0-26.86 9.82c-4.5 1.55-4.87 7.28-1.98 10.53 6.02 8.29 15.78 3.88 23.3.63 8.17-3.12 16.31-6.28 24.61-9.03 22.39-5.78 16.3-15.12 4.17-28.72Zm-286.98 58.93c4.9-15.45 20.39-24.72 33.42-32.9-6.02 14.67-18.84 26.87-33.42 32.9Z"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </motion.div>

                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Decorative Squiggle Top Left */}
                            <svg className="absolute -top-12 -left-12 w-24 h-24 text-[#eb56f6] z-0 opacity-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 50 Q 25 25 40 50 T 70 50 T 100 50" />
                                <path d="M10 70 Q 25 45 40 70 T 70 70 T 100 70" />
                                <path d="M10 30 Q 25 5 40 30 T 70 30 T 100 30" />
                            </svg>

                            <div className="relative rounded-lg overflow-hidden shadow-2xl z-10">
                                <Image
                                    src="/assets/aboutImg.jpeg"
                                    alt="Quantamise Team at work"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />
                                {/* Gradient Overlay for better integration */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3A0F67]/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Decorative Blob Bottom Right */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3A0F67] rounded-full blur-10 md:blur-3xl opacity-10 -z-10" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}