"use client";

import { Send, Phone, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import * as motion from "framer-motion/client";
import { useState, useEffect, FormEvent } from "react";
import { getCalApi } from "@calcom/embed-react";
import Cal from "@calcom/embed-react";
import { submitCTA, CTAData } from "@/lib/api";

export default function CTA() {
    const [activeTab, setActiveTab] = useState<"contact" | "schedule">("contact");
    const [formData, setFormData] = useState<CTAData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const result = await submitCTA(formData);

        if (result.success) {
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });
        } else {
            setError(result.message);
        }
        setLoading(false);
    };

    return (
        <section className="py-12 bg-[#f8f9fa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                        className="lg:w-5/12 bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100 flex flex-col items-center"
                    >
                        {/* Toggle Switch */}
                        <div className="bg-gray-100 p-1.5 rounded-xl flex w-full mb-8 relative">
                            <button
                                onClick={() => setActiveTab("contact")}
                                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-300 z-10 ${activeTab === "contact" ? "bg-[#6366f1] text-white shadow-md" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Contact Us
                            </button>
                            <button
                                onClick={() => setActiveTab("schedule")}
                                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-300 z-10 ${activeTab === "schedule" ? "bg-[#6366f1] text-white shadow-md" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Schedule Meeting
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="w-full">
                            {activeTab === "contact" ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-[#3A0F67] mb-2">Fill a Form</h3>
                                        <p className="text-gray-500 text-sm">We'll get back to you as soon as possible</p>
                                    </div>
                                    <form className="space-y-5" onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-[#3A0F67] mb-1.5">Your Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold text-[#3A0F67] mb-1.5">Email <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-bold text-[#3A0F67] mb-1.5">Phone <span className="text-red-500">*</span></label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-bold text-[#3A0F67] mb-1.5">Company Name (Optional)</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-[#3A0F67] mb-1.5">Message <span className="text-red-500">*</span></label>
                                            <textarea
                                                id="message"
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none resize-none text-gray-800 placeholder:text-gray-400"
                                                placeholder="How can we help you?"
                                            />
                                        </div>

                                        {/* Status Messages for Desktop/Inline Form */}
                                        {error && (
                                            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                                <p>{error}</p>
                                            </div>
                                        )}
                                        {success && (
                                            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg text-sm">
                                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                                <p>Message sent successfully! We'll be in touch soon.</p>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={loading || success}
                                            className="w-full py-4 rounded-xl bg-[#6366f1] text-white font-bold text-lg hover:bg-[#5053ca] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#6366f1]/25 group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : success ? (
                                                <span>Sent!</span>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-[550px] w-full"
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
