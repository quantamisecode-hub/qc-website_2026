
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
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
    title: "Industrial IoT Development Services | Custom IIoT Solutions – Quantamise Code",
    description: "Build secure, scalable Industrial IoT (IIoT) platforms with Quantamise Code. Optimize operations, enable predictive maintenance, and gain real-time insights with custom device-to-cloud solutions.",
    keywords: [
        "industrial IoT development",
        "IIoT solutions",
        "industrial IoT services",
        "custom IIoT platform",
        "IoT for manufacturing",
        "predictive maintenance IoT",
        "smart factory solutions",
        "IIoT development company",
        "edge computing IoT",
        "real-time industrial monitoring",
        "IoT device integration",
        "industrial automation software",
        "cloud IoT architecture",
        "IoT analytics platform",
        "asset tracking IoT",
        "logistics IoT solutions",
        "energy monitoring IoT",
        "enterprise IoT development"
    ],
    openGraph: {
        title: "IIoT Development Services | Quantamise Code",
        description: "Transform your business with scalable, high-performance IIoT solutions developed by our expert engineers.",
        url: "https://quantamise.com/services/IIoT",
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
        title: "IIoT Development Services | Quantamise Code",
        description: "Leading IIoT Development Company specializing in industrial IoT solutions.",
        images: ["/assets/iiotDevelopmentChooseImg.jpeg"], // Placeholder
    },
    alternates: {
        canonical: "https://quantamise.com/services/IIoT",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IIoT Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "Software Development",
    "areaServed": "Global",
    "description": "Custom IIoT development for industrial automation, smart factories, and connected enterprise solutions.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Custom",
        "availability": "https://schema.org/InStock"
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Industrial IoT (IIoT)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IIoT refers to connecting industrial devices and sensors to data networks to monitor, collect, and analyze operational data in real time for smarter decision-making."
            }
        },
        {
            "@type": "Question",
            "name": "How does IIoT differ from regular IoT?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IIoT is focused on industrial environments - manufacturing plants, logistics, energy grids - and emphasizes durability, real-time control, and deep analytics which differ from consumer-grade IoT."
            }
        },
        {
            "@type": "Question",
            "name": "What are common IIoT use cases?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Predictive maintenance, remote monitoring, quality tracking, energy management, and automation control are popular IIoT applications that drive efficiency."
            }
        },
        {
            "@type": "Question",
            "name": "What technologies are used in IIoT platforms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Technologies include edge computing, MQTT/OPC-UA, cloud services (AWS IoT, Azure IoT), AI analytics, and real-time dashboards."
            }
        },
        {
            "@type": "Question",
            "name": "How do I start an IIoT project?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Begin with a pilot - identify key assets, define KPIs, install sensors, connect infrastructure, and build analytics dashboards with a trusted development partner."
            }
        },
        {
            "@type": "Question",
            "name": "How quickly can I see ROI from an IIoT implementation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many clients see actionable insights within the first few weeks of deployment. By focusing on high-impact areas like energy monitoring or downtime reduction, measurable ROI is often achieved within 3-6 months."
            }
        }
    ]
};

export default function IiotDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

            {/* Related Services Section */}
            <RelatedServices currentService="iiot" />

            {/* CTA Section */}
            <ServicesCTA />

            <Footer />
        </main>
    );
}
