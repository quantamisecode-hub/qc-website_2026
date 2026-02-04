
import React from "react";
import * as motion from "framer-motion/client";
import { Send } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-[#6366f1] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

                    {/* Left Side: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 pt-8"
                    >
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Start Your Digital <br />
                            <span className="text-[#eb56f6]">Transformation</span>
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                            Partner with Quantamise Code to build secure, scalable, and intelligent digital solutions. Fill out the form, and our experts will get back to you within 24 hours.
                        </p>

                        <div className="border-l-2 border-[#eb56f6] pl-6 py-2">
                            <p className="text-white font-semibold">Prefer to email?</p>
                            <a href="mailto:hello@quantamisecode.com" className="text-white/80 hover:text-[#eb56f6] transition-colors">
                                hello@quantamisecode.com
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <form className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-[#3A0F67] mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-2 focus:ring-[#eb56f6]/20 transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-[#3A0F67] mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-2 focus:ring-[#eb56f6]/20 transition-all outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="country" className="block text-sm font-semibold text-[#3A0F67] mb-2">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-2 focus:ring-[#eb56f6]/20 transition-all outline-none"
                                        placeholder="USA"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-[#3A0F67] mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-2 focus:ring-[#eb56f6]/20 transition-all outline-none"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="company" className="block text-sm font-semibold text-[#3A0F67] mb-2">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-2 focus:ring-[#eb56f6]/20 transition-all outline-none"
                                    placeholder="Your Company Ltd."
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-[#3A0F67] mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-2 focus:ring-[#eb56f6]/20 transition-all outline-none resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-[#3A0F67] text-white font-bold text-lg hover:bg-[#6366f1] transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
