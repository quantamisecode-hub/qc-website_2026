"use client";

import { motion } from 'framer-motion';

export default function ContactForm() {
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

            <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-[#3A0F67] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#3A0F67] mb-1.5">Company Name</label>
                        <input type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-[#3A0F67] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#3A0F67] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-[#3A0F67] mb-1.5">Project Type</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 transition-all">
                            <option>Select a service</option>
                            <option>Custom Software Development</option>
                            <option>AI & Machine Learning</option>
                            <option>Mobile App Development</option>
                            <option>Web Development</option>
                            <option>Cloud Consulting</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[#3A0F67] mb-1.5">Budget Range (Optional)</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 transition-all">
                            <option>Select a range</option>
                            <option>$5k - $10k</option>
                            <option>$10k - $25k</option>
                            <option>$25k - $50k</option>
                            <option>$50k+</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-[#3A0F67] mb-1.5">Project Description <span className="text-red-500">*</span></label>
                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none text-gray-800 placeholder:text-gray-400 transition-all resize-none" />
                </div>

                <button className="w-full py-4 rounded-xl bg-[#6366f1] text-white font-bold text-lg hover:bg-[#5053ca] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#6366f1]/25 group">
                    Submit Inquiry
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                    Your information is kept confidential and protected.
                </p>
            </form>
        </motion.div>
    );
}
