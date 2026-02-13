import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden" style={{ fontFamily: "var(--font-geist-sans)" }}>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A0F67]/20 to-transparent pointer-events-none" />

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1.8fr_0.6fr_1.2fr] gap-8 lg:gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <a href="/" className="flex flex-row items-center justify-start gap-3 mb-6 flex-nowrap">
                            <Image
                                src="/assets/logo.png"
                                alt="Quantamise Code Logo"
                                width={180}
                                height={60}
                                className="h-8 w-auto object-contain brightness-0 invert shrink-0"
                            />
                            <span className="font-extrabold text-lg text-white pb-1 whitespace-nowrap">Quantamise Code</span>
                        </a>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Empowering businesses with secure, scalable, and intelligent digital solutions. Your partner in digital transformation.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/quantamise/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#eb56f6] hover:text-white transition-all duration-300">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/quantamise/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#eb56f6] hover:text-white transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column (Split into 2) */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                            <ul className="space-y-4">
                                <li><a href="/services/ai-solutions" className="hover:text-[#eb56f6] transition-colors">AI & Machine Learning</a></li>
                                <li><a href="/services/cloud-consulting" className="hover:text-[#eb56f6] transition-colors">Cloud Consulting</a></li>
                                <li><a href="/services/data-engineering" className="hover:text-[#eb56f6] transition-colors">Data Engineering</a></li>
                                <li><a href="/services/data-engineering-consulting" className="hover:text-[#eb56f6] transition-colors">Data Eng. Consulting</a></li>
                                <li><a href="/services/dedicated-development-team" className="hover:text-[#eb56f6] transition-colors">Dedicated Team</a></li>
                                <li><a href="/services/devops-services" className="hover:text-[#eb56f6] transition-colors">DevOps Services</a></li>
                                <li><a href="/services/ecommerce-development" className="hover:text-[#eb56f6] transition-colors">E-commerce Dev</a></li>
                            </ul>
                            <ul className="space-y-4">
                                <li><a href="/services/full-stack-development" className="hover:text-[#eb56f6] transition-colors">Full Stack Dev</a></li>
                                <li><a href="/services/industrial-iot-development" className="hover:text-[#eb56f6] transition-colors">Industrial IoT</a></li>
                                <li><a href="/services/mobile-app-development" className="hover:text-[#eb56f6] transition-colors">Mobile App Dev</a></li>
                                <li><a href="/services/nextjs-development" className="hover:text-[#eb56f6] transition-colors">Next.js Development</a></li>
                                <li><a href="/services/saas-development" className="hover:text-[#eb56f6] transition-colors">SaaS Development</a></li>
                                <li><a href="/services/UX-UI-design" className="hover:text-[#eb56f6] transition-colors">UI/UX Design</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="/about" className="hover:text-[#eb56f6] transition-colors">About Us</a></li>
                            <li><a href="/blogs-post" className="hover:text-[#eb56f6] transition-colors">Blogs</a></li>
                            <li><a href="/contact" className="hover:text-[#eb56f6] transition-colors">Contact Us</a></li>
                            <li><a href="/cookie-policy" className="hover:text-[#eb56f6] transition-colors">Cookie Policy</a></li>
                            <li><a href="/privacy-policy" className="hover:text-[#eb56f6] transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-conditions" className="hover:text-[#eb56f6] transition-colors">Terms & conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4 text-slate-400">
                                <MapPin className="w-5 h-5 text-[#eb56f6] mt-1 shrink-0" />
                                <span>
                                    <span className="whitespace-nowrap">A-207, KSSIDC Complex, Phase 1, Electronics City,</span><br />
                                    Bengaluru, Karnataka - 560100
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400">
                                <Phone className="w-5 h-5 text-[#eb56f6] shrink-0" />
                                <span>080-29554662</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400">
                                <Mail className="w-5 h-5 text-[#eb56f6] shrink-0" />
                                <span>business@quantamisecode.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-12 mb-8">
                    <p className="text-slate-500 text-xs leading-relaxed max-w-full mb-6">
                        We use cookies and similar technologies to improve your experience on our website and services, including when you contact us through chat. These help us analyze website traffic, personalize content, and support our marketing activities. By continuing to browse or use our website, you consent to the use of cookies and similar technologies by us and our trusted partners. You can manage or disable cookies anytime through your browser settings. For more details, please review our <a href="/cookie-policy" className="underline hover:text-[#eb56f6] transition-colors">Cookie Policy</a>, <a href="/privacy-policy" className="underline hover:text-[#eb56f6] transition-colors">Privacy Policy</a> and <a href="/terms-conditions" className="underline hover:text-[#eb56f6] transition-colors">Terms & Conditions</a>.
                    </p>
                    <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Quantamise Code. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
