"use client";

import { motion } from "framer-motion";

export default function InfinityMarquee() {
    const tagline = "BUILDING DIGITAL PRODUCTS THAT SCALE";
    const repeats = 4; // Number of times to repeat the text for smooth looping

    return (
        <div className="w-full relative overflow-hidden bg-[#6366f1] py-4 sm:py-6">
            {/* Decorative Top Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-20" />
            <div className="absolute top-2 left-0 w-full h-[1px] bg-white opacity-20" />

            {/* Marquee Track */}
            <div className="flex overflow-hidden relative z-10">
                <motion.div
                    className="flex shrink-0 min-w-full items-center gap-8 sm:gap-16 px-4"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...Array(repeats)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8 sm:gap-16 shrink-0">
                            <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wider whitespace-nowrap">
                                {tagline}
                            </span>
                            {/* Separator Line */}
                            <div className="w-12 h-1 bg-white/50 rounded-full" />
                        </div>
                    ))}
                </motion.div>

                {/* Second identical track for seamless loop (often needed if just one track isn't enough to fill width + scroll) */}
                {/* Actually, the typical way is to have TWO identical motion divs animating side by side, 
                     OR one motion div with enough content to scroll fully before resetting. 
                     A robust pattern is: Parent flex -> 2 x Motion Divs animating together.
                 */}
                <motion.div
                    className="flex shrink-0 min-w-full items-center gap-8 sm:gap-16 px-4"
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...Array(repeats)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8 sm:gap-16 shrink-0">
                            <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wider whitespace-nowrap">
                                {tagline}
                            </span>
                            <div className="w-12 h-1 bg-white/50 rounded-full" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative Bottom Lines (Optional, matching top for symmetry) */}
            <div className="absolute bottom-2 left-0 w-full h-[1px] bg-white opacity-20" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-20" />
        </div>
    );
}
