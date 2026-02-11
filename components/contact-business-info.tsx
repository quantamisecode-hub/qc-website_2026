"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactBusinessInfo() {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#eb56f6]/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-[#eb56f6]/10" />

                <h3 className="text-2xl font-bold text-[#3A0F67] mb-8 flex items-center gap-3">
                    <span className="p-2 bg-[#eb56f6]/10 rounded-lg text-[#eb56f6]">
                        <Mail className="w-6 h-6" />
                    </span>
                    Email Us
                </h3>

                <div className="space-y-2">
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">General Inquiries</p>
                    <a href="mailto:contact@quantamisecode.com" className="block text-xl font-bold text-slate-800 hover:text-[#eb56f6] transition-colors break-words">
                        business@quantamisecode.com
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366f1]/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-[#6366f1]/10" />

                <h3 className="text-2xl font-bold text-[#3A0F67] mb-8 flex items-center gap-3">
                    <span className="p-2 bg-[#6366f1]/10 rounded-lg text-[#6366f1]">
                        <Phone className="w-6 h-6" />
                    </span>
                    Call Us
                </h3>

                <div className="space-y-2">
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Support & Sales</p>
                    <a href="tel:+919876543210" className="block text-xl font-bold text-slate-800 hover:text-[#6366f1] transition-colors">
                        080-29554662
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-emerald-500/10" />

                <h3 className="text-2xl font-bold text-[#3A0F67] mb-8 flex items-center gap-3">
                    <span className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                        <MapPin className="w-6 h-6" />
                    </span>
                    Visit Us
                </h3>

                <div className="space-y-2">
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Headquarters</p>
                    <p className="text-lg font-bold text-slate-800 leading-relaxed">
                        <p className='bg-green-50 text-green-600 inline-block px-2 py-1 rounded-lg'>Bengaluru, India</p><br />
                        A-207, KSSIDC Complex, Phase 1, Electronics City,<br />
                        Bengaluru, Karnataka - 560100  <br /><br />
                        {/* <p className='bg-green-50 text-green-600 inline-block'>Gorkey Sadan, Kolkata </p> */}
                        <p className='bg-green-50 text-green-600 inline-block px-2 py-1 rounded-lg'>Kolkata, India</p><br />
                        Ground Floor, #5, Victoria Terrace, Gorkey Sadan, Kolkata - 7000 20 <br />
                        <span className="text-sm font-medium text-slate-500">Serving clients worldwide via remote-first model.</span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
