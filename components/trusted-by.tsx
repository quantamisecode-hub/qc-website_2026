import * as motion from "framer-motion/client";

export default function TrustedBy() {
    const companies = [
        { name: "Startups & Enterprises", isHeader: true }, // Placeholder for context if needed, but per request it's the section title
        // Actual items requested: TC, IL, FF, DD
        { name: "TC" },
        { name: "IL" },
        { name: "FF" },
        { name: "DD" },
        // Duplicate for seamless loop
        { name: "TC" },
        { name: "IL" },
        { name: "FF" },
        { name: "DD" },
        { name: "TC" },
        { name: "IL" },
        { name: "FF" },
        { name: "DD" },
        { name: "TC" },
        { name: "IL" },
        { name: "FF" },
        { name: "DD" },
    ];

    return (
        <section className="pb-10 pt-0 bg-[#6267f1] overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 pt-10">
                    <p className="text-white/80 text-sm font-semibold tracking-wider uppercase">Trusted by Startups & Enterprises</p>
                </div>

                <div className="relative w-full">
                    <div className="flex w-[200%] animate-marquee">
                        {/* First Set */}
                        <div className="flex justify-around min-w-[50%] px-4">
                            {["TC", "IL", "FF", "DD"].map((item, index) => (
                                <div key={`logo-1-${index}`} className="flex items-center justify-center mx-8 sm:mx-16">
                                    <span className="text-3xl sm:text-4xl font-black text-white opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate Set for smooth loop */}
                        <div className="flex justify-around min-w-[50%] px-4">
                            {["TC", "IL", "FF", "DD"].map((item, index) => (
                                <div key={`logo-2-${index}`} className="flex items-center justify-center mx-8 sm:mx-16">
                                    <span className="text-3xl sm:text-4xl font-black text-white opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
