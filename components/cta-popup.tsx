"use client";

import React, { useState, useEffect } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

export default function CTAPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 7000); // 7 seconds

        return () => clearTimeout(timer);
    }, []);

    // Scroll Lock
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isVisible]);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-white/30 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 cursor-pointer right-4 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-red-500 transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-6 md:p-10">
                            <div className="text-center mb-6 md:mb-8">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#3A0F67] mb-2 leading-tight">
                                    Get Your Free Consultation
                                </h3>
                                <p className="text-sm sm:text-base text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <form className="space-y-4 md:space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                                    <div>
                                        <label htmlFor="popup-name" className="block text-xs sm:text-sm font-bold text-[#3A0F67] mb-1.5">Your Name</label>
                                        <input
                                            type="text"
                                            id="popup-name"
                                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-4 focus:ring-[#eb56f6]/10 transition-all outline-none text-[#2A2A2A] text-sm sm:text-base placeholder:text-gray-400"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="popup-email" className="block text-xs sm:text-sm font-bold text-[#3A0F67] mb-1.5">Email Address</label>
                                        <input
                                            type="email"
                                            id="popup-email"
                                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-4 focus:ring-[#eb56f6]/10 transition-all outline-none text-[#2A2A2A] text-sm sm:text-base placeholder:text-gray-400"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                                    <div>
                                        <label htmlFor="popup-phone" className="block text-xs sm:text-sm font-bold text-[#3A0F67] mb-1.5">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="popup-phone"
                                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-4 focus:ring-[#eb56f6]/10 transition-all outline-none text-[#2A2A2A] text-sm sm:text-base placeholder:text-gray-400"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="popup-company" className="block text-xs sm:text-sm font-bold text-[#3A0F67] mb-1.5">Company Name</label>
                                        <input
                                            type="text"
                                            id="popup-company"
                                            className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-4 focus:ring-[#eb56f6]/10 transition-all outline-none text-[#2A2A2A] text-sm sm:text-base placeholder:text-gray-400"
                                            placeholder="Your Company Ltd."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="popup-message" className="block text-xs sm:text-sm font-bold text-[#3A0F67] mb-1.5">Message</label>
                                    <textarea
                                        id="popup-message"
                                        rows={3}
                                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#eb56f6] focus:ring-4 focus:ring-[#eb56f6]/10 transition-all outline-none resize-none text-[#2A2A2A] text-sm sm:text-base placeholder:text-gray-400"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 sm:py-4 rounded-xl bg-[#3A0F67] text-white font-bold text-base sm:text-lg hover:bg-[#520d91] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#3A0F67]/20"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
