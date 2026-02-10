import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function Hero() {
    return (
        <section className="relative pt-32 lg:pt-40 bg-white overflow-hidden">
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
                        A trusted AI and software partner, helping startups and businesses worldwide build secure, scalable and future-ready digital products.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
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
                    </motion.div>

                    {/* Decorative Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative z-10 flex justify-center"
                    >
                        <div className="relative w-full max-w-[500px] flex justify-center">
                            {/* Gradient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[100%] bg-gradient-to-tr from-[#eb56f6]/30 via-[#6366f1]/30 to-[#3A0F67]/30 rounded-full blur-3xl -z-10"></div>
                            <Image
                                src="/assets/DecorVRIMGnonBG.png"
                                alt="Future Tech Decoration"
                                width={500}
                                height={500}
                                priority
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />

                            {/* Floating Service Chips */}
                            {/* Chip 1: Web Development (Top Left) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                                className="absolute top-10 md:-left-4 lg:-left-24 xl:-left-50 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/40 hidden md:flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#eb56f6]/10 flex items-center justify-center text-[#eb56f6]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                </div>
                                <span className="text-sm font-bold text-[#3A0F67]">Web Development</span>
                            </motion.div>

                            {/* Chip 2: App Development (Bottom Right) */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 md:-right-4 lg:-right-32 xl:-right-60 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/40 hidden md:flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#6366f1]/10 flex items-center justify-center text-[#6366f1]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                </div>
                                <span className="text-sm font-bold text-[#3A0F67]">App Development</span>
                            </motion.div>

                            {/* Chip 3: UI/UX Design (Top Right) */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-20 md:-right-4 lg:-right-24 xl:-right-50 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/40 hidden md:flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                                </div>
                                <span className="text-sm font-bold text-[#3A0F67]">UI/UX Design</span>
                            </motion.div>

                            {/* Chip 4: AI Solutions (Bottom Left) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute bottom-32 md:-left-8 lg:-left-32 xl:-left-60 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/40 hidden md:flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 14a2 2 0 1 0-2-2 2 2 0 0 0 2 2z"></path><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <span className="text-sm font-bold text-[#3A0F67]">AI Solutions</span>
                            </motion.div>

                            {/* Chip 5: SaaS Development (Middle Left) */}
                            <motion.div
                                animate={{ y: [0, -9, 0] }}
                                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                                className="absolute top-40 md:-left-10 lg:-left-40 xl:-left-70 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/40 hidden md:flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                </div>
                                <span className="text-sm font-bold text-[#3A0F67]">SaaS Development</span>
                            </motion.div>

                            {/* Chip 6: Cloud Solutions (Middle Right) */}
                            <motion.div
                                animate={{ y: [0, -11, 0] }}
                                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                                className="absolute top-60 md:-right-10 lg:-right-40 xl:-right-70 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/40 hidden md:flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                                </div>
                                <span className="text-sm font-bold text-[#3A0F67]">Cloud Solutions</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

        </section>
    );
}
