"use client";

import { motion } from 'framer-motion';
import { ChevronDown, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { submitCTA, CTAData } from '@/lib/api';

export default function ContactForm() {
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
        const messageWithProjectType = projectType && projectType !== "Select a service"
            ? `Project Type: ${projectType}\n\n${formData.message}`
            : formData.message;

        const result = await submitCTA({
            ...formData,
            message: messageWithProjectType
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
            // Reset success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        } else {
            setError(result.message);
        }
        setLoading(false);
    };

    return (
        <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#3A0F67] mb-2">Share Your Requirements</h3>
                <p className="text-gray-600 text-sm">Fill out the form below and we will get back to you.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-[#3A0F67] mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-bold text-[#3A0F67] mb-1.5">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all"
                            placeholder="Your Company"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-[#3A0F67] mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all"
                            placeholder="john@company.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-[#3A0F67] mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="projectType" className="block text-sm font-bold text-[#3A0F67] mb-1.5">
                        Project Type
                    </label>
                    <div className="relative">
                        <select
                            id="projectType"
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}
                            className="w-full appearance-none px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 transition-all cursor-pointer"
                        >
                            <option>Select a service</option>
                            <option>Free Consultation</option>
                            <option>Custom Software Development</option>
                            <option>AI & Machine Learning</option>
                            <option>Mobile App Development</option>
                            <option>Web Development</option>
                            <option>Cloud Consulting</option>
                            <option>Other</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[#3A0F67] mb-1.5">
                        Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all resize-none"
                        placeholder="Tell us about your project..."
                    />
                </div>

                {/* Status Messages */}
                {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p>{error}</p>
                    </div>
                )}
                {success && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg text-sm">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <p>Message sent successfully! We'll get back to you within 24 hours.</p>
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
                        <span>Submit Inquiry</span>
                    )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                    Your information is kept confidential and protected.
                </p>
            </form>
        </motion.div>
    );
}
