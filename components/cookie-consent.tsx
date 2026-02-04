"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Show banner after a small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-950/95 backdrop-blur-md border-t border-white/10 shadow-2xl transition-all duration-500 transform translate-y-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-white font-bold text-lg mb-2">We value your privacy</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                        <Link href="#" className="text-[#eb56f6] hover:underline transition-colors">
                            Cookie Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-[#eb56f6] hover:underline transition-colors">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                    <button
                        onClick={handleDecline}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-md cursor-pointer border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-md cursor-pointer bg-[#eb56f6] text-white hover:bg-[#d94ce3] shadow-[0_0_15px_rgba(235,86,246,0.3)] hover:shadow-[0_0_25px_rgba(235,86,246,0.5)] transition-all duration-300 text-sm font-bold"
                    >
                        Accept All
                    </button>
                </div>

                {/* Close Button (Optional, acts as dismiss/decline) */}
                <button
                    onClick={handleDecline}
                    className="absolute top-4 right-4 text-slate-500 hover:text-white md:hidden"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
}
