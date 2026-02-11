"use client";

import { Send, Phone, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import * as motion from "framer-motion/client";
import { useState, useEffect, FormEvent } from "react";
import { getCalApi } from "@calcom/embed-react";
import Cal from "@calcom/embed-react";
import RequirementForm from "./requirement-form";

export default function CTA() {
    const [activeTab, setActiveTab] = useState<"contact" | "schedule">("contact");

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section className="bg-[#f8f9fa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

                    {/* Left Side: Content */}
                    <div className="lg:w-1/2 pt-4">
                        <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Let's Build Something <br />
                            <span className="text-[#6366f1]">Extraordinary</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                            Ready to transform your digital presence? Schedule a free consultation with our experts and discover how we can help your business scale.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#6366f1] shadow-md group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold">Email Us</p>
                                    <a href="mailto:business@quantamisecode.com" className="text-[#3A0F67] font-bold text-lg hover:text-[#6366f1] transition-colors">
                                        business@quantamisecode.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#6366f1] shadow-md group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold">Call Us</p>
                                    <a href="tel:080-29554662" className="text-[#3A0F67] font-bold text-lg hover:text-[#6366f1] transition-colors">
                                        080-29554662
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form / Calendar Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-7/12 flex flex-col items-center"
                    >
                        {/* Toggle Switch */}
                        <div className="bg-gray-100 p-1.5 rounded-2xl flex w-full max-w-md mb-8 relative border border-gray-200 shadow-inner">
                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`flex-1 py-3 text-sm font-extrabold rounded-xl transition-all duration-300 z-10 ${activeTab === "contact" ? "bg-white text-[#6366f1] shadow-lg" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Contact Us
                            </button>
                            <button
                                onClick={() => setActiveTab("schedule")}
                                className={`flex-1 py-3 text-sm font-extrabold rounded-xl transition-all duration-300 z-10 ${activeTab === "schedule" ? "bg-white text-[#6366f1] shadow-lg" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Schedule Meeting
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="w-full">
                            {activeTab === "contact" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <RequirementForm className="shadow-2xl" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="h-[600px] w-full bg-white p-6 rounded-3xl shadow-2xl border border-gray-100"
                                >
                                    <Cal
                                        namespace="30min"
                                        calLink="quantamise/30min"
                                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                                        config={{ layout: "month_view" }}
                                    />
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
