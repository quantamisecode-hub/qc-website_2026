"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Trophy, Briefcase, Star } from "lucide-react";

export default function AboutMegaMenu() {
    return (
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl pt-6 z-[100]">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 relative overflow-hidden">

                {/* Decorative Top Border using Brand Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3A0F67] via-[#6366f1] to-[#EA56F7]" />

                {/* Left Side: Image */}
                <div className="md:col-span-5 relative rounded-lg overflow-hidden h-full min-h-[300px]">
                    <Image
                        src="/assets/aboutImg.jpeg"
                        alt="About Quantamise Code"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A0F67]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-lg">Our Culture</p>
                        <p className="text-sm text-gray-200">Building the future together</p>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Link href="/about" className="group flex items-center gap-2">
                                <h3 className="font-extrabold text-2xl text-[#3A0F67] group-hover:text-[#6366f1] transition-colors">
                                    About Quantamise Code
                                </h3>
                                <ArrowRight className="w-5 h-5 text-[#6366f1] group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Transforming businesses with innovative technology solutions. We partner with growth-driven businesses to deliver high-impact custom software.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-[#F9FAFC] border border-gray-100 hover:border-[#6366f1]/30 transition-colors group">
                                <div className="text-3xl font-extrabold text-[#6366f1] mb-1 group-hover:scale-110 transition-transform origin-left">5+</div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Years in Market</p>
                            </div>
                            <div className="p-4 rounded-lg bg-[#F9FAFC] border border-gray-100 hover:border-[#6366f1]/30 transition-colors group">
                                <div className="text-3xl font-extrabold text-[#6366f1] mb-1 group-hover:scale-110 transition-transform origin-left">99%</div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Success Rate</p>
                            </div>
                            <div className="p-4 rounded-lg bg-[#F9FAFC] border border-gray-100 hover:border-[#6366f1]/30 transition-colors group">
                                <div className="text-3xl font-extrabold text-[#6366f1] mb-1 group-hover:scale-110 transition-transform origin-left">45+</div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Projects Delivered</p>
                            </div>
                            <div className="p-4 rounded-lg bg-[#F9FAFC] border border-gray-100 hover:border-[#6366f1]/30 transition-colors group">
                                <div className="text-3xl font-extrabold text-[#6366f1] mb-1 group-hover:scale-110 transition-transform origin-left">4.9/5</div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Referral Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
