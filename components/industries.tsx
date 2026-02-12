import IndustriesInteractive from "./industries-interactive";
import * as motion from "framer-motion/client";

export default function Industries() {
    return (
        <section className="py-12 lg:py-16 bg-[#f9fbfa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header (Server Rendered) */}
                <div className="text-left mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Transforming Industries with <br />
                            <span className="text-[#6366f1]">Tailored IT Solutions</span>
                        </h2>
                        <p className="text-lg text-[#2A2A2A] font-medium max-w-3xl leading-relaxed">
                            At Quantamise Code, we specialize in delivering tailored IT solutions that address the unique challenges and needs of various industries. Our innovative technologies ensure businesses thrive in the digital world.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Client Component */}
                <IndustriesInteractive />

            </div>
        </section>
    );
}
