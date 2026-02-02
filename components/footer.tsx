import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#6366f1] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            {/* Assuming logo might need a white version or filter, 
                                but using text for now or existing logo with brightness filter if needed. 
                                For now keeping text simple or using the image if it works on dark bg. */}
                            <span className="font-extrabold text-2xl">Quantamise Code</span>
                        </Link>
                        <p className="text-white/80 leading-relaxed mb-6">
                            Empowering businesses with secure, scalable, and intelligent digital solutions. Your partner in digital transformation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#6366f1] transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#6366f1] transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#6366f1] transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#6366f1] transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">AI & Machine Learning</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Mobile App Development</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Cloud Solutions</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">UI/UX Design</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">SaaS Development</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="/blogs" className="text-white/80 hover:text-white transition-colors">Blogs</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Info</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-white/60 mt-1" />
                                <span className="text-white/80">
                                    123 Innovation Drive,<br />
                                    Tech City, TC 90210
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-white/60" />
                                <span className="text-white/80">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-white/60" />
                                <span className="text-white/80">hello@quantamisecode.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} Quantamise Code. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
