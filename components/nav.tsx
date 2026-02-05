"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav className="fixed w-full z-50 bg-white border-b border-gray-100" style={{ fontFamily: "var(--font-geist-sans)" }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">

                    {/* Left Section: Logo */}
                    <Link href="/" className="flex items-center gap-2 z-50 relative">
                        <Image
                            src="/assets/logo.png"
                            alt="Quantamise Logo"
                            width={200}
                            height={200}
                            className={`h-18 w-auto object-contain transition-all duration-300 ${isOpen ? "brightness-0 invert" : ""}`}
                        />
                        <span className={`font-extrabold text-xl hover:text-[#6366f1] transition-colors hidden sm:block ${isOpen ? "text-white" : "text-[#2A2A2A]"}`}>
                            Quantamise Code
                        </span>
                    </Link>

                    {/* Center Section: Desktop Navigation (Restored Design) */}
                    <div className="hidden xl:flex items-center space-x-8">
                        <Link href="/" className="text-[#6366f1] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                            About
                        </Link>
                        <div className="relative group flex items-center gap-1 cursor-pointer">
                            <span className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                                Services
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2A2A2A] group-hover:text-[#3A0F67]">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>

                        <Link href="/case-studies" className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                            Case Studies
                        </Link>
                        <Link href="/blogs" className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                            Blogs
                        </Link>
                        <Link href="/contact" className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Right Section: CTA Button (Restored Design) */}
                    <div className="hidden xl:flex items-center gap-2">
                        <Link
                            href="/contact"
                            className="group rounded-sm px-8 py-2 bg-[#4f46e5] text-white font-extrabold flex items-center gap-2 hover:bg-[#3A0F67] transition-colors duration-300"
                        >
                            Let&apos;s Talk
                            <ArrowRight
                                className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:rotate-0 rotate-[-45deg]"
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="xl:hidden z-50 p-2 text-[#3A0F67] relative focus:outline-none"
                    >
                        <div className="relative w-6 h-6">
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 text-white"
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </button>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-[#3A0F67] xl:hidden flex flex-col pt-32 px-6"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-white hover:text-[#eb56f6] transition-colors inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full rounded-xl px-6 py-4 bg-white text-[#3A0F67] font-bold flex items-center justify-center gap-2 hover:bg-[#eb56f6] hover:text-white transition-all duration-300"
                                >
                                    Let&apos;s Talk
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#eb56f6] rounded-full blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2" />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}