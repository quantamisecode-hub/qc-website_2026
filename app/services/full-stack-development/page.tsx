
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import FullStackHero from "@/components/full-stack-hero";
import FullStackRoadmap from "@/components/full-stack-roadmap";
import FullStackTechStack from "@/components/full-stack-tech-stack";
import FullStackSecurity from "@/components/full-stack-security";
import FullStackCommunication from "@/components/full-stack-communication";
import FullStackFAQ from "@/components/full-stack-faq";
import FullStackIndustries from "@/components/full-stack-industries";
import FullStackEngagement from "@/components/full-stack-engagement";
import FullStackWhyChooseUs from "@/components/full-stack-why-choose-us";
import FullStackBusinessApproach from "@/components/full-stack-business-approach";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Full-Stack Development Services | Custom Web & App Solutions",
    description: "Leading Full-Stack Development Company specializing in custom web applications, SaaS, and enterprise software. Hire expert full-stack developers in India.",
    keywords: [
        "Full-stack development company",
        "Full-stack development services",
        "Custom web application development",
        "Software development company",
        "Full-stack developers in India",
        "SaaS development",
        "Enterprise software development",
        "Web and mobile development",
        "Scalable web applications",
        "Cloud-based application development"
    ],
    openGraph: {
        title: "Full-Stack Development Services | Quantamise Code",
        description: "Transform your business with scalable, high-performance web and mobile applications developed by our expert full-stack engineers.",
        url: "https://quantamise.com/services/full-stack-development",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/fullStackDevelopmentChooseImg.jpeg",
                width: 1200,
                height: 630,
                alt: "Full Stack Development Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Full-Stack Development Services | Quantamise Code",
        description: "Leading Full-Stack Development Company specializing in custom web applications and SaaS.",
        images: ["/assets/fullStackDevelopmentChooseImg.jpeg"],
    },
    alternates: {
        canonical: "https://quantamise.com/services/full-stack-development",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full-Stack Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "Software Development",
    "areaServed": "Global",
    "description": "Custom full-stack development for web and mobile applications, SaaS platforms, and enterprise solutions.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Custom",
        "availability": "https://schema.org/InStock"
    }
};

export default function FullStackDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Nav />
            <br /><br /><br />

            {/* Hero Section */}
            <FullStackHero />

            {/* Why Choose Us Section */}
            <FullStackWhyChooseUs />

            {/* Business Focused Approach Section */}
            <FullStackBusinessApproach />

            {/* Tech Stack Section */}
            <FullStackTechStack />

            {/* Roadmap Section */}
            <FullStackRoadmap />

            {/* Security Section */}
            <FullStackSecurity />

            {/* Communication Section */}
            <FullStackCommunication />

            {/* Industries Section */}
            <FullStackIndustries />

            {/* Engagement Models Section */}
            <FullStackEngagement />

            {/* FAQ Section */}
            <FullStackFAQ />

            {/* CTA Section */}
            <CTA />

            <Footer />
        </main>
    );
}
