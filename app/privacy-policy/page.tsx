"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import RevealOnScroll from "@/components/reveal-on-scroll";
import { Shield, ChevronRight, Info, Mail, MapPin, Globe, Menu, X } from "lucide-react";

const sections = [
    { id: "info-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use", title: "2. How We Use Your Information" },
    { id: "cookies", title: "3. Cookies & Tracking" },
    { id: "data-sharing", title: "4. Data Sharing & Disclosure" },
    { id: "data-security", title: "5. Data Security" },
    { id: "data-retention", title: "6. Data Retention" },
    { id: "third-party", title: "7. Third-Party Services" },
    { id: "your-rights", title: "8. Your Rights" },
    { id: "childrens-privacy", title: "9. Children’s Privacy" },
    { id: "updates", title: "10. Updates to This Policy" },
    { id: "contact-us", title: "11. Contact Us" },
];

function SummaryBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-8 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-3">
                <Info className="w-4 h-4" />
                <span>Legal stuff made easy</span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed italic">
                {children}
            </p>
        </div>
    );
}

export default function PrivacyPolicyPage() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-slate-500 font-medium">
                            Last updated: {lastUpdated}
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">

                        {/* Main Content */}
                        <div className="prose prose-lg max-w-none prose-headings:text-[#3A0F67] prose-headings:font-extrabold prose-p:text-slate-600 prose-p:leading-[1.8] prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-headings:tracking-tight">

                            <p className="text-xl text-slate-700 leading-relaxed mb-12">
                                At <strong>Quantamise Code</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website or use our software services.
                            </p>

                            <section id="info-we-collect" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">1. Information We Collect</h2>
                                <SummaryBox>
                                    We collect basic identity info (like your name and email) when you contact us, plus some technical data about how you use our site.
                                </SummaryBox>
                                <p>We may collect the following types of information:</p>
                                <h3>a) Personal Information</h3>
                                <ul>
                                    <li>Name, Email address, and Phone number</li>
                                    <li>Company name</li>
                                    <li>Any information you provide through contact forms or service inquiries</li>
                                </ul>
                                <h3>b) Technical Information</h3>
                                <ul>
                                    <li>IP address and Browser type</li>
                                    <li>Device information and Usage behavior</li>
                                </ul>
                                <h3>c) Project & Service Data</h3>
                                <ul>
                                    <li>Project requirements and Technical documentation</li>
                                    <li>Communication records</li>
                                </ul>
                            </section>

                            <section id="how-we-use" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">2. How We Use Your Information</h2>
                                <SummaryBox>
                                    We use your info to manage your projects, answer your questions, and improve our services. We don't sell your data.
                                </SummaryBox>
                                <p>We use collected information to:</p>
                                <ul>
                                    <li>Provide and manage our software services</li>
                                    <li>Communicate regarding projects or support</li>
                                    <li>Improve our products and website</li>
                                    <li>Ensure security and comply with legal obligations</li>
                                </ul>
                            </section>

                            <section id="cookies" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">3. Cookies & Tracking Technologies</h2>
                                <SummaryBox>
                                    We use cookies to remember your preferences and see how people use our site. You can turn them off in your browser.
                                </SummaryBox>
                                <p>
                                    Our website may use cookies to enhance user experience and analyze traffic patterns. You can manage or disable cookies through your browser settings.
                                </p>
                            </section>

                            <section id="data-sharing" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">4. Data Sharing & Disclosure</h2>
                                <SummaryBox>
                                    We only share your data with trusted partners who help us run our business, or if the law requires it.
                                </SummaryBox>
                                <p>
                                    We do not sell or rent your personal information. We may share data only with trusted service providers or when required by law.
                                </p>
                            </section>

                            <section id="data-security" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">5. Data Security</h2>
                                <SummaryBox>
                                    We use high-grade security to protect your data, though no system on the internet is 100% unhackable.
                                </SummaryBox>
                                <p>
                                    We implement appropriate technical measures to protect your data from unauthorized access.
                                </p>
                            </section>

                            <section id="data-retention" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">6. Data Retention</h2>
                                <SummaryBox>
                                    We only keep your data as long as we need it to provide our services or follow the law.
                                </SummaryBox>
                                <p>
                                    We retain personal information only as long as necessary to fulfill the purposes outlined in this policy.
                                </p>
                            </section>

                            <section id="third-party" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">7. Third-Party Services</h2>
                                <SummaryBox>
                                    If you click a link to another site, their privacy rules apply, not ours.
                                </SummaryBox>
                                <p>
                                    Our services may contain links to third-party platforms. We are not responsible for their privacy practices.
                                </p>
                            </section>

                            <section id="your-rights" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">8. Your Rights</h2>
                                <SummaryBox>
                                    You can ask to see, fix, or delete your data at any time.
                                </SummaryBox>
                                <ul>
                                    <li>Access your personal data</li>
                                    <li>Request correction or deletion</li>
                                    <li>Withdraw consent or object to processing</li>
                                </ul>
                            </section>

                            <section id="childrens-privacy" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">9. Children’s Privacy</h2>
                                <SummaryBox>
                                    Our services are for adults. We don't knowingly collect data from kids under 13.
                                </SummaryBox>
                                <p>
                                    Our services are not intended for individuals under the age of 13.
                                </p>
                            </section>

                            <section id="updates" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">10. Updates to This Policy</h2>
                                <SummaryBox>
                                    If we change this policy, we'll update the date at the top of this page.
                                </SummaryBox>
                                <p>
                                    We may update this policy periodically. Changes will be posted here with a revised date.
                                </p>
                            </section>

                            <section id="contact-us" className="scroll-mt-32 mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A0F67] mb-8 tracking-tight">11. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us:</p>

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
