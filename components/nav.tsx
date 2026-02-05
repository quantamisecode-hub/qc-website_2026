"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, ChevronDown, ChevronUp, LayoutGrid, Database, Cpu, Globe, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesMegaMenu, { servicesData } from "./services-mega-menu";
import AboutMegaMenu from "./about-mega-menu";
import TechnologiesMegaMenu from "./technologies-mega-menu";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Technologies", href: "/technologies", hasDropdown: true },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    // { name: "Stats", href: "/stats" },
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isServicesExpanded, setIsServicesExpanded] = useState(false);
    const [isTechnologiesExpanded, setIsTechnologiesExpanded] = useState(false);
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);

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
                        <div
                            className="relative h-full flex items-center gap-1 cursor-pointer"
                            onMouseEnter={() => setHoveredItem("About")}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link href="/about" className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors flex items-center gap-1">
                                About
                                <ChevronDown className={`w-4 h-4 text-[#2A2A2A] transition-transform duration-200 ${hoveredItem === "About" ? "rotate-180 text-[#6366f1]" : ""}`} />
                            </Link>

                            {hoveredItem === "About" && (
                                <div className="fixed left-0 w-full top-20 md:top-24 z-[99]">
                                    <div className="w-full h-4 absolute -top-4 bg-transparent" />
                                    <AboutMegaMenu />
                                </div>
                            )}
                        </div>
                        <div
                            className="relative h-full flex items-center gap-1 cursor-pointer"
                            onMouseEnter={() => setHoveredItem("Services")}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                                Services
                            </span>
                            <ChevronDown className={`w-4 h-4 text-[#2A2A2A] transition-transform duration-200 ${hoveredItem === "Services" ? "rotate-180 text-[#6366f1]" : ""}`} />

                            {hoveredItem === "Services" && (
                                <div className="fixed left-0 w-full top-20 md:top-24 z-[99]">
                                    <div className="w-full h-4 absolute -top-4 bg-transparent" /> {/* Safe bridge area */}
                                    <ServicesMegaMenu />
                                </div>
                            )}
                        </div>

                        <div
                            className="relative h-full flex items-center gap-1 cursor-pointer"
                            onMouseEnter={() => setHoveredItem("Technologies")}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <span className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">
                                Technologies
                            </span>
                            <ChevronDown className={`w-4 h-4 text-[#2A2A2A] transition-transform duration-200 ${hoveredItem === "Technologies" ? "rotate-180 text-[#6366f1]" : ""}`} />

                            {hoveredItem === "Technologies" && (
                                <div className="fixed left-0 w-full top-20 md:top-24 z-[99]">
                                    <div className="w-full h-4 absolute -top-4 bg-transparent" />
                                    <TechnologiesMegaMenu />
                                </div>
                            )}
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
                        {/* <Link href="/stats" className="text-[#2A2A2A] font-extrabold text-md hover:text-[#6366f1] transition-colors">Stats</Link> */}
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
                        className="fixed inset-0 z-40 bg-[#3A0F67] xl:hidden overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#eb56f6] rounded-full blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2 pointer-events-none" />

                        {/* Scrollable Content Container */}
                        <div className="absolute inset-0 flex flex-col pt-24 px-6 overflow-y-auto overflow-x-hidden">
                            <div className="flex flex-col gap-6 pb-10">
                                {navLinks.map((link, index) => (
                                    <div key={link.name} className="w-full">
                                        {link.name === "Services" ? (
                                            // Mobile Accordion for Services
                                            <div className="flex flex-col">
                                                <button
                                                    onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                                                    className="flex items-center justify-between w-full text-2xl font-bold text-white hover:text-[#eb56f6] transition-colors py-2 border-b border-white/10"
                                                >
                                                    {link.name}
                                                    {isServicesExpanded ? (
                                                        <ChevronUp className="w-6 h-6 text-[#eb56f6]" />
                                                    ) : (
                                                        <ChevronDown className="w-6 h-6 text-white" />
                                                    )}
                                                </button>

                                                <AnimatePresence>
                                                    {isServicesExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden bg-white/5 rounded-b-xl backdrop-blur-sm"
                                                        >
                                                            <div className="pl-4 py-4 flex flex-col gap-6">
                                                                {servicesData.map((category, idx) => (
                                                                    <div key={idx} className="flex flex-col gap-3">
                                                                        {/* Category Header */}
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="p-2 rounded-lg bg-white/10 text-[#eb56f6]">
                                                                                {idx === 0 && <LayoutGrid className="w-5 h-5" />}
                                                                                {idx === 1 && <Cpu className="w-5 h-5" />}
                                                                                {idx === 2 && <Database className="w-5 h-5" />}
                                                                                {idx === 3 && <Globe className="w-5 h-5" />}
                                                                            </div>
                                                                            <h4 className="font-bold text-lg text-white">{category.category}</h4>
                                                                        </div>
                                                                        <div className="w-full h-[1px] bg-white/10 ml-12" />

                                                                        {/* Category Items */}
                                                                        <div className="pl-12 flex flex-col gap-3">
                                                                            {category.items.map((item, i) => (
                                                                                <Link
                                                                                    key={i}
                                                                                    href={item.href}
                                                                                    onClick={() => setIsOpen(false)}
                                                                                    className="flex items-center gap-3 group"
                                                                                >
                                                                                    <item.icon className="w-5 h-5 text-[#eb56f6] group-hover:text-white transition-colors" />
                                                                                    <span className="font-medium text-gray-300 group-hover:text-white text-sm transition-colors">
                                                                                        {item.name}
                                                                                    </span>
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : link.name === "Technologies" ? (
                                            // Mobile Accordion for Technologies
                                            <div className="flex flex-col">
                                                <button
                                                    onClick={() => setIsTechnologiesExpanded(!isTechnologiesExpanded)}
                                                    className="flex items-center justify-between w-full text-2xl font-bold text-white hover:text-[#eb56f6] transition-colors py-2 border-b border-white/10"
                                                >
                                                    {link.name}
                                                    {isTechnologiesExpanded ? (
                                                        <ChevronUp className="w-6 h-6 text-[#eb56f6]" />
                                                    ) : (
                                                        <ChevronDown className="w-6 h-6 text-white" />
                                                    )}
                                                </button>

                                                <AnimatePresence>
                                                    {isTechnologiesExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden bg-white/5 rounded-b-xl backdrop-blur-sm"
                                                        >
                                                            <div className="pl-4 py-4 flex flex-col gap-3">
                                                                {["Frontend", "Backend", "Full Stack", "Mobile", "Database", "Cloud", "AI & ML"].map((tech, idx) => (
                                                                    <Link
                                                                        key={tech}
                                                                        href={`/technologies/${tech.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")}`}
                                                                        onClick={() => setIsOpen(false)}
                                                                        className="flex items-center gap-3 group"
                                                                    >
                                                                        <div className="p-1 rounded bg-white/10 text-[#eb56f6]">
                                                                            <Cpu className="w-4 h-4" />
                                                                        </div>
                                                                        <span className="font-medium text-gray-300 group-hover:text-white text-lg">{tech}</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : link.name === "About" ? (
                                            // Mobile Accordion for About
                                            <div className="flex flex-col">
                                                <button
                                                    onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                                                    className="flex items-center justify-between w-full text-2xl font-bold text-white hover:text-[#eb56f6] transition-colors py-2 border-b border-white/10"
                                                >
                                                    {link.name}
                                                    {isAboutExpanded ? (
                                                        <ChevronUp className="w-6 h-6 text-[#eb56f6]" />
                                                    ) : (
                                                        <ChevronDown className="w-6 h-6 text-white" />
                                                    )}
                                                </button>

                                                <AnimatePresence>
                                                    {isAboutExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden bg-white/5 rounded-b-xl backdrop-blur-sm"
                                                        >
                                                            <div className="p-4 flex flex-col gap-6">
                                                                {/* Image Section */}
                                                                <div className="relative rounded-lg overflow-hidden h-48 w-full">
                                                                    <Image
                                                                        src="/assets/aboutImg.jpeg"
                                                                        alt="About Quantamise Code"
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#3A0F67]/80 via-transparent to-transparent" />
                                                                    <div className="absolute bottom-3 left-3 text-white">
                                                                        <p className="font-bold">Our Culture</p>
                                                                        <p className="text-xs text-gray-200">Building the future together</p>
                                                                    </div>
                                                                </div>

                                                                {/* Text Content */}
                                                                <div>
                                                                    <Link
                                                                        href="/about"
                                                                        onClick={() => setIsOpen(false)}
                                                                        className="flex items-center gap-2 mb-2 group"
                                                                    >
                                                                        <h3 className="font-extrabold text-xl text-white group-hover:text-[#eb56f6] transition-colors">
                                                                            About Quantamise Code
                                                                        </h3>
                                                                        <ArrowRight className="w-4 h-4 text-[#eb56f6] group-hover:translate-x-1 transition-transform" />
                                                                    </Link>
                                                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                                        Transforming businesses with innovative technology solutions.
                                                                    </p>

                                                                    {/* Stats Grid */}
                                                                    <div className="grid grid-cols-2 gap-3">
                                                                        <div className="p-3 rounded-lg bg-white/10 border border-white/5">
                                                                            <div className="text-2xl font-extrabold text-[#eb56f6] mb-0.5">5+</div>
                                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Years</p>
                                                                        </div>
                                                                        <div className="p-3 rounded-lg bg-white/10 border border-white/5">
                                                                            <div className="text-2xl font-extrabold text-[#eb56f6] mb-0.5">99%</div>
                                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Success</p>
                                                                        </div>
                                                                        <div className="p-3 rounded-lg bg-white/10 border border-white/5">
                                                                            <div className="text-2xl font-extrabold text-[#eb56f6] mb-0.5">45+</div>
                                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Projects</p>
                                                                        </div>
                                                                        <div className="p-3 rounded-lg bg-white/10 border border-white/5">
                                                                            <div className="text-2xl font-extrabold text-[#eb56f6] mb-0.5">4.9/5</div>
                                                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Rating</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Footer / Career Link */}
                                                                <div className="pt-4 border-t border-white/10">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="p-2 bg-white/10 rounded-lg text-[#eb56f6]">
                                                                            <Users className="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <Link
                                                                                href="/careers"
                                                                                onClick={() => setIsOpen(false)}
                                                                                className="font-bold text-white hover:text-[#eb56f6] transition-colors flex items-center gap-1"
                                                                            >
                                                                                Career <ArrowRight className="w-4 h-4" />
                                                                            </Link>
                                                                            <p className="text-xs text-gray-400">Join our dynamic team</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-2xl font-bold text-white hover:text-[#eb56f6] transition-colors block py-2 border-b border-white/10"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full rounded-xl px-6 py-4 bg-white text-[#3A0F67] font-bold flex items-center justify-center gap-2 hover:bg-[#eb56f6] hover:text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                                    >
                                        Let&apos;s Talk
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}