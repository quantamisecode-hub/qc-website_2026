"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import RevealOnScroll from "@/components/reveal-on-scroll";
import { Shield, ChevronRight, Info, Mail, MapPin, Globe, Menu, X, Cookie } from "lucide-react";

const sections = [
    { id: "what-are-cookies", title: "1. What Are Cookies?" },
    { id: "how-we-use", title: "2. How We Use Cookies" },
    { id: "types-of-cookies", title: "3. Types of Cookies We Use" },
    { id: "your-choices", title: "4. Your Choices & Consent" },
    { id: "managing-cookies", title: "5. Managing Cookies" },
    { id: "policy-updates", title: "6. Updates to This Policy" },
    { id: "contact-us", title: "7. Contact Us" },
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

export default function CookiePolicyPage() {
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
                            Cookie Policy
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
                                At <strong>Quantamise Code</strong>, we value your privacy and are committed to protecting your personal information. This Cookie Policy explains how we use cookies and similar technologies when you visit our website or use our software services.
                            </p>

                            <section id="what-are-cookies" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">1. What Are Cookies?</h2>
                                <SummaryBox>
                                    Cookies are small text files that websites save on your device to remember your preferences and actions over time.
                                </SummaryBox>
                                <p>A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.</p>
                            </section>

                            <section id="how-we-use" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">2. How We Use Cookies</h2>
                                <SummaryBox>
                                    We use cookies to ensure our site works correctly, understand how you use it, and improve your overall experience.
                                </SummaryBox>
                                <p>We use cookies for following purposes:</p>
                                <ul>
                                    <li><strong>Essential:</strong> Necessary for the website to function properly.</li>
                                    <li><strong>Performance:</strong> Helps us understand how visitors interact with our website.</li>
                                    <li><strong>Functionality:</strong> Remembers your preferences and provides enhanced features.</li>
                                    <li><strong>Analytics:</strong> Collects information about site usage to improve performance.</li>
                                </ul>
                            </section>

                            <section id="types-of-cookies" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">3. Types of Cookies We Use</h2>
                                <SummaryBox>
                                    We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device).
                                </SummaryBox>
                                <p>We categorize cookies into:</p>
                                <ul>
                                    <li><strong>First-party cookies:</strong> Set by the website you are visiting.</li>
                                    <li><strong>Third-party cookies:</strong> Set by other sites that run content on the page you are viewing.</li>
                                </ul>
                            </section>

                            <section id="your-choices" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">4. Your Choices & Consent</h2>
                                <SummaryBox>
                                    You can choose to accept or decline cookies. Most browsers automatically accept them, but you can modify your settings.
                                </SummaryBox>
                                <p>By using our website, you consent to the placement of cookies on your device. You can withdraw your consent at any time by deleting cookies or changing your browser settings.</p>
                            </section>

                            <section id="managing-cookies" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">5. Managing Cookies</h2>
                                <SummaryBox>
                                    Check your browser's help section for instructions on how to manage, block, or delete cookies.
                                </SummaryBox>
                                <p>You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
                            </section>

                            <section id="policy-updates" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">6. Updates to This Policy</h2>
                                <SummaryBox>
                                    We may update this policy from time to time to reflect changes in our practices or for legal reasons.
                                </SummaryBox>
                                <p>We may update this Cookie Policy periodically. We encourage you to review this page regularly for the latest information on our cookie practices.</p>
                            </section>

                            <section id="contact-us" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">7. Contact Us</h2>
                                <p>If you have any questions about our use of cookies, please contact us:</p>

                                <div className="not-prose mt-10 grid sm:grid-cols-2 gap-4">
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-100">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#3A0F67] mb-1">Email Us</p>
                                            <a href="mailto:business@quantamisecode.com" className="text-sm text-slate-500 hover:text-indigo-600 break-all font-medium">business@quantamisecode.com</a>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
                                        <div className="w-12 h-12 rounded-xl bg-[#eb56f6] text-white flex items-center justify-center shrink-0 shadow-lg shadow-pink-100">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#3A0F67] mb-1">Our Location</p>
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
                                        Have questions? <br />
                                        <a href="/contact" className="text-indigo-600 hover:underline">Chat with our team</a>
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
