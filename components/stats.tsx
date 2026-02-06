"use client";

import { useEffect, useRef } from "react";
import * as motion from "framer-motion/client";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 70,
    });
    const isInView = useInView(ref, { once: true, margin: "-10px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
    return (
        <section className="py-16 bg-[#6366f1] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-4"
                    >
                        <div className="text-5xl sm:text-6xl font-extrabold mb-2 text-white">
                            <Counter value={45} suffix="+" />
                        </div>
                        <div className="text-lg font-medium text-white/80 uppercase tracking-widest">
                            Projects Delivered
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-4 pt-12 md:pt-4"
                    >
                        <div className="text-5xl sm:text-6xl font-extrabold mb-2 text-white">
                            <Counter value={8} suffix="+" />
                        </div>
                        <div className="text-lg font-medium text-white/80 uppercase tracking-widest">
                            Years of Experience
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="p-4 pt-12 md:pt-4"
                    >
                        <div className="text-5xl sm:text-6xl font-extrabold mb-2 text-white">
                            <Counter value={98} suffix="%" />
                        </div>
                        <div className="text-lg font-medium text-white/80 uppercase tracking-widest">
                            Success Rate
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
