"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitCTA, CTAData } from "@/lib/api";

interface RequirementFormProps {
    title?: string;
    subtitle?: string;
    showSocialLinks?: boolean;
    className?: string;
    onSuccess?: () => void;
}

export default function RequirementForm({
    title = "Share Your Requirements",
    subtitle = "Fill out the form below and we will get back to you.",
    className = "",
    onSuccess
}: RequirementFormProps) {
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
    const [projectType, setProjectType] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Add project type to message if selected
        const messageWithDetails = projectType && projectType !== "Select a service"
            ? `Project Type: ${projectType}\n\n${formData.message}`
            : formData.message;

        const result = await submitCTA({
            ...formData,
            message: messageWithDetails
        });

        if (result.success) {
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
            });
            setProjectType("");
            if (onSuccess) onSuccess();
            // Reset success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        } else {
            setError(result.message);
        }
        setLoading(false);
    };

    return (
        <div className={`bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 ${className}`}>
            <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#3A0F67] mb-1.5 sm:mb-2 tracking-tight">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">{subtitle}</p>
            </div>

            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    <div>
                        <label htmlFor="name" className="block text-[10px] sm:text-sm font-bold text-[#3A0F67] mb-1 sm:mb-2 px-1">
                            Full Name <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/10 outline-none text-slate-800 placeholder:text-slate-400 transition-all font-medium text-xs sm:text-base"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-[10px] sm:text-sm font-bold text-[#3A0F67] mb-1 sm:mb-2 px-1">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            value={formData.company || ""}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/10 outline-none text-slate-800 placeholder:text-slate-400 transition-all font-medium text-xs sm:text-base"
                            placeholder="Your Company"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    <div>
                        <label htmlFor="email" className="block text-[10px] sm:text-sm font-bold text-[#3A0F67] mb-1 sm:mb-2 px-1">
                            Email Address <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/10 outline-none text-slate-800 placeholder:text-slate-400 transition-all font-medium text-xs sm:text-base"
                            placeholder="john@company.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-[10px] sm:text-sm font-bold text-[#3A0F67] mb-1 sm:mb-2 px-1">
                            Phone Number <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/10 outline-none text-slate-800 placeholder:text-slate-400 transition-all font-medium text-xs sm:text-base"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="projectType" className="block text-[10px] sm:text-sm font-bold text-[#3A0F67] mb-1 sm:mb-2 px-1">
                        Project Type
                    </label>
                    <div className="relative">
                        <select
                            id="projectType"
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}
                            className="w-full appearance-none px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/10 outline-none text-slate-800 transition-all cursor-pointer font-medium text-sm sm:text-base"
                        >
                            <option>Select a service</option>
                            <option>Free Consultation</option>
                            <option>AI Solutions</option>
                            <option>E-commerce Development</option>
                            <option>Mobile App Development</option>
                            <option>Web Development</option>
                            <option>Data Engineering</option>
                            <option>Cloud Consulting</option>
                            <option>UI/UX Design</option>
                            <option>IIoT Systems</option>
                            <option>Other</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-[10px] sm:text-sm font-bold text-[#3A0F67] mb-1 sm:mb-2 px-1">
                        Project Description <span className="text-red-500 font-bold">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/10 outline-none text-slate-800 placeholder:text-slate-400 transition-all font-medium resize-none min-h-[80px] text-sm sm:text-base"
                        placeholder="Tell us about your project..."
                    />
                </div>

                {/* Status Messages */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl text-sm font-medium border border-red-100"
                    >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p>{error}</p>
                    </motion.div>
                )}
                {success && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 text-emerald-600 bg-emerald-50 p-4 rounded-xl text-sm font-medium border border-emerald-100"
                    >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <p>Message sent successfully! We'll get back to you within 24 hours.</p>
                    </motion.div>
                )}

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading || success}
                        className="w-full py-3 rounded-xl bg-[#6366f1] text-white font-extrabold text-sm sm:text-base hover:bg-[#5053ca] transition-all flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(99,102,241,0.5)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : success ? (
                            <span>Request Sent!</span>
                        ) : (
                            <span>Submit Inquiry</span>
                        )}
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                        Your information is kept confidential and protected.
                    </p>
                </div>
            </form>
        </div>
    );
}
