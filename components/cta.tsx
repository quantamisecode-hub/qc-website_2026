import { Send, Phone, Mail, MapPin } from "lucide-react";
import * as motion from "framer-motion/client";

export default function CTA() {
    return (
        <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
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
                                    <a href="mailto:hello@quantamisecode.com" className="text-[#3A0F67] font-bold text-lg hover:text-[#6366f1] transition-colors">
                                        hello@quantamisecode.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#6366f1] shadow-md group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold">Call Us</p>
                                    <a href="tel:+15550000000" className="text-[#3A0F67] font-bold text-lg hover:text-[#6366f1] transition-colors">
                                        +1 (555) 000-0000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-5/12 bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all outline-none text-gray-800 placeholder:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all outline-none text-gray-800 placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all outline-none text-gray-800 placeholder:text-gray-400"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all outline-none text-gray-800 placeholder:text-gray-400"
                                        placeholder="Company Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 transition-all outline-none resize-none text-gray-800 placeholder:text-gray-400"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-[#6366f1] text-white font-bold text-lg hover:bg-[#5053ca] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#6366f1]/25 group"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
