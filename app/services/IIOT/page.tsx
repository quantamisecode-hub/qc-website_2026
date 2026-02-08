
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import IiotHero from "@/components/iiot-hero";
import IiotRoadmap from "@/components/iiot-roadmap";
import IiotTechStack from "@/components/iiot-tech-stack";
import IiotSecurity from "@/components/iiot-security";
import IiotCommunication from "@/components/iiot-communication";
import IiotFAQ from "@/components/iiot-faq";
import IiotIndustries from "@/components/iiot-industries";
import IiotEngagement from "@/components/iiot-engagement";
import IiotWhyChooseUs from "@/components/iiot-why-choose-us";
import IiotBusinessApproach from "@/components/iiot-business-approach";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IIOT Development Services | Custom Industrial IoT Solutions",
    description: "Leading IIOT Development Company specializing in industrial IoT solutions, smart manufacturing, and connected devices. Hire expert IIOT developers.",
    keywords: [
        "IIOT development company",
        "Industrial IoT services",
        "Smart manufacturing solutions",
        "IoT software development",
        "IIOT developers",
        "Connected devices",
        "Industrial automation",
        "Industry 4.0 solutions",
        "Scalable IoT applications",
        "Cloud-based IoT platforms"
    ],
    openGraph: {
        title: "IIOT Development Services | Quantamise Code",
        description: "Transform your business with scalable, high-performance IIOT solutions developed by our expert engineers.",
        url: "https://quantamise.com/services/IIOT",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/iiotDevelopmentChooseImg.jpeg", // Placeholder, user to update
                width: 1200,
                height: 630,
                alt: "IIOT Development Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "IIOT Development Services | Quantamise Code",
        description: "Leading IIOT Development Company specializing in industrial IoT solutions.",
        images: ["/assets/iiotDevelopmentChooseImg.jpeg"], // Placeholder
    },
    alternates: {
        canonical: "https://quantamise.com/services/IIOT",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IIOT Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "Software Development",
    "areaServed": "Global",
    "description": "Custom IIOT development for industrial automation, smart factories, and connected enterprise solutions.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Custom",
        "availability": "https://schema.org/InStock"
    }
};

export default function IiotDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Nav />
            <br /><br /><br />

            {/* Hero Section */}
            <IiotHero />

            {/* Why Choose Us Section */}
            <IiotWhyChooseUs />

            {/* Business Focused Approach Section */}
            <IiotBusinessApproach />

            {/* Tech Stack Section */}
            <IiotTechStack />

            {/* Roadmap Section */}
            <IiotRoadmap />

            {/* Security Section */}
            <IiotSecurity />

            {/* Communication Section */}
            <IiotCommunication />

            {/* Industries Section */}
            <IiotIndustries />

            {/* Engagement Models Section */}
            <IiotEngagement />

            {/* FAQ Section */}
            <IiotFAQ />

            {/* CTA Section */}
            <CTA />

            <Footer />
        </main>
    );
}
