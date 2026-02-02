import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import * as motion from "framer-motion/client";

export default function Hero() {
    return (
        <section className="relative h-screen pt-32 pb-20 lg:pt-55 lg:pb-22 bg-white overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
                <div className="max-w-7xl mx-auto text-center">

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#3A0F67] mb-6 leading-[1.15]">
                            Building AI-Driven Software Solutions for <span className="text-[#6366f1]">High-Growth Businesses</span>
                        </h1>
                    </motion.div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl sm:text-xl lg:text-lg font-medium text-[#2A2A2A] mb-8 max-w-5xl mx-auto leading-relaxed"
                    >
                        A trusted AI and software development company in India delivering secure, scalable, and future-ready digital solutions for startups and enterprises worldwide.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <div className="flex items-center gap-2">
                            <Link
                                href="/contact"
                                className="group rounded-md px-8 py-4 bg-[#eb56f6] text-white font-extrabold flex items-center gap-2 hover:bg-[#d035db] transition-colors duration-300">
                                Get Free Consultation
                                <ArrowRight
                                    className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:rotate-0 rotate-[-45deg] "
                                />
                            </Link>
                        </div>
                        <Link href="/company-profile" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-[#3A0F67] bg-white border-2 border-[#3A0F67] rounded-lg hover:bg-[#F9FAFC] hover:shadow-md transition-all duration-300">
                            Download Company Profile <Download className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Trust Indicators / Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-16 sm:mt-20 border-t border-[#E6E8F0] pt-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
                            {/* Stat 1 */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl sm:text-5xl font-extrabold text-[#3A0F67] mb-2">
                                    45+
                                </div>
                                <div className="text-lg font-bold text-[#2A2A2A] mb-2">Projects Delivered</div>
                                <p className="text-sm text-gray-600 max-w-[250px] mx-auto leading-relaxed">
                                    Delivering outstanding work and exceeding expectations on every project.
                                </p>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl sm:text-5xl font-extrabold text-[#3A0F67] mb-2">
                                    5+
                                </div>
                                <div className="text-lg font-bold text-[#2A2A2A] mb-2">Years of Experience</div>
                                <p className="text-sm text-gray-600 max-w-[250px] mx-auto leading-relaxed">
                                    A highly skilled and passionate team dedicated to your success.
                                </p>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col items-center">
                                <div className="text-4xl sm:text-5xl font-extrabold text-[#3A0F67] mb-2">
                                    98%
                                </div>
                                <div className="text-lg font-bold text-[#2A2A2A] mb-2">Success Rate</div>
                                <p className="text-sm text-gray-600 max-w-[250px] mx-auto leading-relaxed">
                                    Consistently trusted and highly rated by satisfied clients worldwide.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

        </section>
    );
}
