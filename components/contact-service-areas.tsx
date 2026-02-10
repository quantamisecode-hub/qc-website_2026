"use client";

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const areas = [
    "India",
    "USA",
    "UK",
    "Europe",
    "Middle East",
    "Asia-Pacific"
];

export default function ContactServiceAreas() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#6366f1]/10 rounded-lg text-[#6366f1]">
                    <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3A0F67]">Global Service Delivery</h3>
            </div>

            <p className="text-gray-600 mb-6 text-sm">
                We serve clients across the globe through remote-first collaboration and global delivery models.
            </p>

            <div className="flex flex-wrap gap-3">
                {areas.map((area, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#6366f1] hover:text-[#6366f1] transition-colors cursor-default">
                        {area}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
