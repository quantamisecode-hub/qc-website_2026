"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import RevealOnScroll from "@/components/reveal-on-scroll";
import { Shield, ChevronRight, Info, Mail, MapPin, Globe, Menu, X, FileText } from "lucide-react";

const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "services", title: "2. Description of Services" },
    { id: "responsibilities", title: "3. User Responsibilities" },
    { id: "intellectual-property", title: "4. Intellectual Property" },
    { id: "privacy", title: "5. Privacy & Data Protection" },
    { id: "liability", title: "6. Limitation of Liability" },
    { id: "indemnification", title: "7. Indemnification" },
    { id: "termination", title: "8. Termination" },
    { id: "governing-law", title: "9. Governing Law" },
    { id: "updates", title: "10. Changes to Terms" },
    { id: "contact-us", title: "11. Contact Us" },
];

function SummaryBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-8 p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider mb-3">
                <Info className="w-4 h-4" />
                <span>Legal stuff made easy</span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed italic">
                {children}
            </p>
        </div>
    );
}

export default function TermsConditionsPage() {
    const [activeSection, setActiveSection] = useState("");
    const lastUpdated = "February 12, 2026";

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-100px 0px -20% 0px" }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <Nav />

            {/* Background Aesthetic Glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-50/40 rounded-full blur-[120px]" />
            </div>

            <main className="relative pt-32 pb-24">
                {/* Hero / Header */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <RevealOnScroll>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#3A0F67] mb-6 tracking-tighter">
                            Terms & Conditions
                        </h1>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-[2px] bg-indigo-600 rounded-full"></span>
                            <p className="text-slate-500 font-medium">
                                Last updated: {lastUpdated}
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">

                        {/* Main Content */}
                        <div className="prose prose-lg max-w-none prose-headings:text-[#3A0F67] prose-headings:font-extrabold prose-p:text-slate-600 prose-p:leading-[1.8] prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-headings:tracking-tight">

                            <p className="text-xl text-slate-700 leading-relaxed mb-12">
                                Welcome to <strong>Quantamise Code</strong>. By accessing our platform or using our digital services, you agree to comply with and be bound by the following terms and conditions.
                            </p>

                            <section id="acceptance" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">1. Acceptance of Terms</h2>
                                <SummaryBox>
                                    By using this site or our services, you’re agreeing to the rules outlined here. If you don't agree, please don't use our services.
                                </SummaryBox>
                                <p>This agreement constitutes a legally binding contract between you and Quantamise Code. Your continued use of the platform signifies your full acceptance of these terms.</p>
                            </section>

                            <section id="services" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">2. Description of Services</h2>
                                <SummaryBox>
                                    We provide high-end software development, AI solutions, and digital transformation services.
                                </SummaryBox>
                                <p>Quantamise Code provides a range of technology services, including but not limited to custom software development, cloud consulting, data engineering, and artificial intelligence integration.</p>
                            </section>

                            <section id="responsibilities" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">3. User Responsibilities</h2>
                                <SummaryBox>
                                    You agree to use our site fairly and legally. Don't try to hack us or use our content without permission.
                                </SummaryBox>
                                <p>Users are responsible for maintaining the confidentiality of their credentials and for all activities that occur under their account. You agree not to engage in any activity that disrupt our services or security.</p>
                            </section>

                            <section id="intellectual-property" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">4. Intellectual Property</h2>
                                <SummaryBox>
                                    All content, code, and design on this site belongs to us unless we say otherwise in a specific contract.
                                </SummaryBox>
                                <p>The content, trademarks, logos, and software provided on this platform are the property of Quantamise Code or its licensors and are protected by international copyright and intellectual property laws.</p>
                            </section>

                            <section id="privacy" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">5. Privacy & Data Protection</h2>
                                <SummaryBox>
                                    We take your privacy seriously. Check out our Privacy Policy for the details on how we handle your data.
                                </SummaryBox>
                                <p>Your use of our services is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these terms by reference.</p>
                            </section>

                            <section id="liability" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">6. Limitation of Liability</h2>
                                <SummaryBox>
                                    We do our best, but we aren't responsible if things go wrong due to issues beyond our control or misuse of our services.
                                </SummaryBox>
                                <p>In no event shall Quantamise Code be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.</p>
                            </section>

                            <section id="indemnification" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">7. Indemnification</h2>
                                <SummaryBox>
                                    If your actions lead to a legal claim against us, you agree to cover the costs.
                                </SummaryBox>
                                <p>You agree to indemnify and hold Quantamise Code harmless from any claims, losses, or damages resulting from your violation of these terms.</p>
                            </section>

                            <section id="termination" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">8. Termination</h2>
                                <SummaryBox>
                                    We can stop providing services if you break these rules.
                                </SummaryBox>
                                <p>We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users or our business interests.</p>
                            </section>

                            <section id="governing-law" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">9. Governing Law</h2>
                                <SummaryBox>
                                    These terms are governed by the laws of India. Any disputes will be handled in Bengaluru courts.
                                </SummaryBox>
                                <p>These terms and conditions are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>
                            </section>

                            <section id="updates" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">10. Changes to Terms</h2>
                                <SummaryBox>
                                    We update these terms occasionally. We'll update the date at the top when we do.
                                </SummaryBox>
                                <p>Quantamise Code reserves the right to modify these terms at any time. We will indicate the date of the latest update at the top of this page.</p>
                            </section>

                            <section id="contact-us" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">11. Contact Us</h2>
                                <p>If you have any questions about these Terms & Conditions, please reach out:</p>

                                <div className="not-prose mt-10 grid sm:grid-cols-2 gap-4">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-100">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#3A0F67] mb-1">Legal Inquiry</p>
                                            <a href="mailto:business@quantamisecode.com" className="text-sm text-slate-500 hover:text-indigo-600 break-all font-medium">business@quantamisecode.com</a>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
                                        <div className="w-12 h-12 rounded-xl bg-[#eb56f6] text-white flex items-center justify-center shrink-0 shadow-lg shadow-pink-100">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#3A0F67] mb-1">HQ Address</p>
                                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                                Electronics City, Phase 1, Bengaluru, Karnataka - 560100
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sticky Sidebar */}
                        <aside className="hidden lg:block sticky top-32 self-start">
                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <h4 className="text-[#3A0F67] font-bold mb-6 text-sm uppercase tracking-widest">Table of Contents</h4>
                                <nav className="space-y-4">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`block text-left text-sm font-semibold transition-all duration-300 w-full hover:translate-x-1 ${activeSection === section.id
                                                ? "text-indigo-600 translate-x-1"
                                                : "text-slate-400 hover:text-slate-600"
                                                }`}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <p className="text-xs text-slate-400 font-medium leading-loose">
                                        Need clarification? <br />
                                        <a href="/contact" className="text-indigo-600 hover:underline">Contact Support</a>
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
