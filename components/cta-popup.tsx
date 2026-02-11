"use client";

import React, { useState, useEffect } from "react";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import RequirementForm from "./requirement-form";

export default function CTAPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Event listener for custom trigger
        const handleOpenPopup = () => setIsVisible(true);
        window.addEventListener('open-cta-popup', handleOpenPopup);

        // Check if user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem("hasSeenCTAPopup");

        // Only show popup if user hasn't seen it in this session
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsVisible(true);
                // Mark as seen for this session only
                sessionStorage.setItem("hasSeenCTAPopup", "true");
            }, 7000); // 7 seconds

            return () => {
                clearTimeout(timer);
                window.removeEventListener('open-cta-popup', handleOpenPopup);
            };
        }

        return () => window.removeEventListener('open-cta-popup', handleOpenPopup);
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/40 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full max-w-2xl bg-transparent overflow-hidden max-h-[95vh] overflow-y-auto custom-scrollbar"
                    >
                        {/* Close Button - positioned to overlay the form header slightly or stay separate */}
                        <button
                            onClick={closePopup}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-red-500 transition-colors z-20 shadow-sm"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-2 sm:p-4">
                            <RequirementForm
                                title="Get Free Consultation"
                                subtitle="Fill out the form and our experts will get back to you within 24 hours."
                                onSuccess={() => setTimeout(closePopup, 3000)}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
