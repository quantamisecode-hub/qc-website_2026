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
        <section className="bg-[#f8f9fa] relative overflow-hidden">
            {/* Wave Animation */}
            <div className="w-full overflow-hidden leading-[0] -mb-1">
                <motion.svg
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1549.87 403.06"
                    className="w-full h-auto"
                >
                    <defs>
                        <clipPath id="wave-clip">
                            <rect x="54.35" y="-26.56" width="1441.18" height="456.18" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#wave-clip)">
                        <motion.path
                            fill="#dd2080"
                            d="M26.72,286.8c29.54,14.35,59.5,29.84,91.9,36.58,33.3,6.93,66.53,2.68,97.22-11.95,56.23-26.81,93.28-80.69,147.29-111.05,52.42-29.47,115.4-40.74,174.82-31.41,28.09,4.41,55.12,13.3,80.37,26.33,22.4,11.56,43.45,25.55,64.16,39.86,40.64,28.07,81.11,58.99,128.63,74.49,22.92,7.48,47.4,10.7,71.43,8.07,29.73-3.25,57.91-14.21,83.31-29.79,28.95-17.75,54.3-40.55,82.23-59.76,25.89-17.81,55.65-34.08,87.81-35.07,55.12-1.68,89.1,46.44,113.32,89.42,12.89,22.88,27.7,45.96,47.94,63.07,20.92,17.68,46.22,26.47,73.59,22.28,16.75-2.56,32.63-9.1,48.59-14.49,12.79-4.32,26.58-7.77,39.05-9.17,25.26-2.83,51.44-2.78,76.34,2.68,13.45,2.95,26.39,7.51,38.24,14.58,8.77,5.23,16.74-8.44,7.99-13.67-24.93-14.89-54.5-20.18-83.19-21.06-24.43-.75-49.73,1.2-73.19,8.32-28.54,8.66-57.98,24.59-88.34,15.14-24.09-7.5-42.24-27.73-56.16-47.86-15.14-21.89-26.32-46.15-42.38-67.45-15.45-20.48-34.22-39.14-58.14-49.34-61.65-26.3-122.62,15.02-169.85,51.39-26.29,20.25-52.88,41.36-84.01,53.7-24.05,9.53-49.56,13.94-75.38,11.39-48.13-4.75-90.59-32.71-129.41-59.43-41.98-28.89-83.33-60.17-131.92-77.2-57.93-20.3-122.81-20.22-181.16-1.59-29.37,9.38-57.27,23.44-81.93,41.97-24.87,18.69-46.77,40.82-70.7,60.63s-52.14,37.51-84,43c-31.6,5.45-63.2-3.31-92.16-15.54-15.04-6.35-29.67-13.64-44.34-20.77-9.12-4.43-17.16,9.21-7.99,13.67h0Z"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.path
                            fill="#33c5b5"
                            d="M26.97,180.61c29.66,14.41,59.75,29.97,92.28,36.74s67.35,2.71,98.44-12.11c56.24-26.81,93.28-80.69,147.29-111.05,52.02-29.24,114.62-40.51,173.6-31.25,27.95,4.39,54.86,13.2,79.99,26.17,22.4,11.56,43.45,25.55,64.16,39.86,40.77,28.15,81.35,59.1,129.01,74.65,23.04,7.52,47.7,10.77,71.85,8.12,30.01-3.29,58.45-14.27,84.11-30,28.95-17.75,54.3-40.55,82.23-59.76,25.65-17.65,55.14-33.88,87.01-34.85,54.52-1.66,88.02,46.17,111.96,88.64,12.95,22.99,27.85,46.2,48.19,63.39,21.39,18.08,47.15,26.97,75.13,22.69,16.75-2.56,32.63-9.1,48.59-14.49,8.26-2.79,16.61-5.36,25.16-7.07,2.68-.54,5.37-.96,8.07-1.36,2.22-.33-.19,0,1.51-.21,1.3-.16,2.6-.32,3.9-.47,25.12-2.82,51.16-2.81,75.92,2.63,13.33,2.92,26.12,7.41,37.87,14.42,10.52,6.28,20.08-10.13,9.59-16.4-25.17-15.03-55.03-20.39-83.99-21.27-24.55-.75-50.03,1.22-73.61,8.37-28.23,8.56-57.47,24.49-87.5,15.14-23.67-7.37-41.54-27.36-55.21-47.13-15.14-21.89-26.32-46.15-42.38-67.45-15.61-20.69-34.53-39.58-58.7-49.91-62.27-26.61-123.65,14.59-171.45,51.39-26.16,20.15-52.65,41.26-83.63,53.54-23.94,9.49-49.25,13.87-74.95,11.33-47.54-4.69-90.05-32.67-128.61-59.21-42.1-28.98-83.56-60.28-132.3-77.35-58.18-20.38-123.41-20.3-182-1.59-29.49,9.42-57.54,23.52-82.31,42.13-24.98,18.77-46.99,40.98-71.02,60.88-24.34,20.15-51.71,37.15-83.3,42.59s-62.4-3.34-90.94-15.38c-15.04-6.35-29.67-13.64-44.34-20.77-4.61-2.24-10.27-1.26-12.99,3.41-2.44,4.17-1.23,10.74,3.41,12.99h0Z"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                        <motion.path
                            fill="#adc716"
                            d="M25.37,194.58c29.89,14.52,60.25,30.24,93.03,37.06,34.63,7.2,68.98,2.78,100.88-12.43,56.27-26.83,93.32-80.71,147.29-111.05,51.38-28.88,113.49-39.99,171.16-30.94,15.14,2.38,30.08,6.02,44.59,10.96,3.51,1.19,6.99,2.46,10.44,3.8,1.49.58,2.97,1.18,4.45,1.78,1.35.55.2.07-.06-.04.99.42,1.97.85,2.95,1.28,5.71,2.51,11.33,5.22,16.88,8.08,22.4,11.56,43.45,25.55,64.16,39.86,41.02,28.33,81.81,59.32,129.77,74.97,23.28,7.6,48.29,10.91,72.69,8.24,30.59-3.35,59.54-14.39,85.71-30.44,28.95-17.75,54.3-40.55,82.23-59.76,13.41-9.22,27.49-17.9,42.52-24.21,13.91-5.85,28.73-9.77,42.89-10.2,12.43-.38,23.73,1.56,34.79,6.13,10.25,4.24,20.6,11.41,28.7,18.79,19.58,17.84,32.57,38.79,45.73,62.15,13.07,23.2,28.16,46.69,48.68,64.04,22.34,18.89,49.01,27.97,78.21,23.5,16.75-2.56,32.63-9.1,48.59-14.49,8.26-2.79,16.61-5.36,25.16-7.07,2.68-.54,5.37-.96,8.07-1.36,3.22-.48-1.79.19.66-.1,1.3-.15,2.6-.32,3.9-.47,25.12-2.82,51.52-2.66,75.08,2.51,13.66,3,25.44,7.14,37.11,14.1,14.03,8.37,26.78-13.51,12.78-21.87-25.65-15.31-56.08-20.8-85.59-21.71-24.81-.76-50.62,1.26-74.45,8.49-16.72,5.07-32.86,12.01-49.92,15.95-12.6,2.91-23.65,3-35.89-.81-1.44-.45-2.86-.95-4.28-1.47-.24-.09-2.69-1.09-1.48-.57,1.08.46-.85-.4-.85-.4-2.93-1.36-5.77-2.88-8.53-4.56-6.01-3.64-8.73-5.76-13.66-10.22s-9.34-9.11-13.57-14.08-6.92-8.55-10.96-14.39c-15.14-21.89-26.32-46.15-42.38-67.45-15.94-21.12-35.16-40.47-59.84-51.05-28.13-12.05-58.98-10.97-87.6-.92-32.39,11.38-60.11,31.57-87.05,52.31-25.85,19.91-52.89,41.34-82.88,53.22-12.69,5.03-25.88,8.7-39.38,10.75-.29.04-2.49.31-.56.08-.65.08-1.3.16-1.95.22-1.51.15-3.02.31-4.53.43-3.19.26-6.39.41-9.59.47-6.04.11-12.09-.14-18.11-.73-1.43-.14-2.86-.3-4.29-.48-1.5-.19.07,0,.32.04-.81-.12-1.62-.24-2.43-.37-3.03-.49-6.04-1.06-9.03-1.71-5.78-1.25-11.5-2.8-17.13-4.6s-10.85-3.77-16.18-5.91c-2.35-.94-.91-.38-.4-.16-.57-.24-1.14-.49-1.71-.74-1.33-.58-2.65-1.17-3.97-1.78-2.84-1.3-5.66-2.65-8.46-4.04-22.33-11.12-43.21-24.91-63.73-39.03-42.36-29.16-84.03-60.5-133.05-77.67-58.66-20.55-124.6-20.45-183.68-1.59-29.74,9.5-58.09,23.68-83.07,42.45s-47.42,41.3-71.66,61.37c-23.84,19.73-50.84,36.42-81.9,41.77s-60.55-3.33-88.5-15.06c-15.05-6.32-29.67-13.64-44.34-20.77-6.15-2.99-13.69-1.67-17.32,4.54-3.25,5.56-1.63,14.32,4.54,17.32h0Z"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.path
                            fill="#523cac"
                            d="M31.03,278.36c29.89,14.52,60.25,30.24,93.03,37.06,34.63,7.2,68.98,2.78,100.88-12.43,56.27-26.83,93.32-80.71,147.29-111.05,51.38-28.88,113.49-39.99,171.16-30.94,15.14,2.38,30.08,6.02,44.59,10.96,3.51,1.19,6.99,2.46,10.44,3.8,1.49.58,2.97,1.18,4.45,1.78,1.35.55.2.07-.06-.04.99.42,1.97.85,2.95,1.28,5.71,2.51,11.33,5.22,16.88,8.08,22.4,11.56,43.45,25.55,64.16,39.86,41.02,28.33,81.81,59.32,129.77,74.97,23.28,7.6,48.29,10.91,72.69,8.24,30.59-3.35,59.54-14.39,85.71-30.44,28.95-17.75,54.3-40.55,82.23-59.76,13.41-9.22,27.49-17.9,42.52-24.21,13.91-5.85,28.73-9.77,42.89-10.2,12.43-.38,23.73,1.56,34.79,6.13,10.25,4.24,20.6,11.41,28.7,18.79,19.58,17.84,32.57,38.79,45.73,62.15,13.07,23.2,28.16,46.69,48.68,64.04,22.34,18.89,49.01,27.97,78.21,23.5,16.75-2.56,32.63-9.1,48.59-14.49,8.26-2.79,16.61-5.36,25.16-7.07,2.68-.54,5.37-.96,8.07-1.36,3.22-.48-1.79.19.66-.1,1.3-.15,2.6-.32,3.9-.47,25.12-2.82,51.52-2.66,75.08,2.51,13.66,3,25.44,7.14,37.11,14.1,14.03,8.37,26.78-13.51,12.78-21.87-25.65-15.31-56.08-20.8-85.59-21.71-24.81-.76-50.62,1.26-74.45,8.49-16.72,5.07-32.86,12.01-49.92,15.95-12.6,2.91-23.65,3-35.89-.81-1.44-.45-2.86-.95-4.28-1.47-.24-.09-2.69-1.09-1.48-.57,1.08.46-.85-.4-.85-.4-2.93-1.36-5.77-2.88-8.53-4.56-6.01-3.64-8.73-5.76-13.66-10.22s-9.34-9.11-13.57-14.08-6.92-8.55-10.96-14.39c-15.14-21.89-26.32-46.15-42.38-67.45-15.94-21.12-35.16-40.47-59.84-51.05-28.13-12.05-58.98-10.97-87.6-.92-32.39,11.38-60.11,31.57-87.05,52.31-25.85,19.91-52.89,41.34-82.88,53.22-12.69,5.03-25.88,8.7-39.38,10.75-.29.04-2.49.31-.56.08-.65.08-1.3.16-1.95.22-1.51.15-3.02.31-4.53.43-3.19.26-6.39.41-9.59.47-6.04.11-12.09-.14-18.11-.73-1.43-.14-2.86-.3-4.29-.48-1.5-.19.07,0,.32.04-.81-.12-1.62-.24-2.43-.37-3.03-.49-6.04-1.06-9.03-1.71-5.78-1.25-11.5-2.8-17.13-4.6s-10.85-3.77-16.18-5.91c-2.35-.94-.91-.38-.4-.16-.57-.24-1.14-.49-1.71-.74-1.33-.58-2.65-1.17-3.97-1.78-2.84-1.3-5.66-2.65-8.46-4.04-22.33-11.12-43.21-24.91-63.73-39.03-42.36-29.16-84.03-60.5-133.05-77.67-58.66-20.55-124.6-20.45-183.68-1.59-29.74,9.5-58.09,23.68-83.07,42.45-25.2,18.93-47.42,41.3-71.66,61.37-23.84,19.73-50.84,36.42-81.9,41.77-30.34,5.23-60.55-3.33-88.5-15.06-15.05-6.32-29.67-13.64-44.34-20.77-6.15-2.99-13.69-1.67-17.32,4.54-3.25,5.56-1.63,14.32,4.54,17.32h0Z"
                            animate={{ y: [0, -18, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </g>
                </motion.svg>
            </div>

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
