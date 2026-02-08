
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import MobileHero from "@/components/mobile-hero";
import MobileRoadmap from "@/components/mobile-roadmap";
import MobileTechStack from "@/components/mobile-tech-stack";
import MobileSecurity from "@/components/mobile-security";
import MobileCommunication from "@/components/mobile-communication";
import MobileFAQ from "@/components/mobile-faq";
import MobileIndustries from "@/components/mobile-industries";
import MobileEngagement from "@/components/mobile-engagement";
import MobileWhyChooseUs from "@/components/mobile-why-choose-us";
import MobileBusinessApproach from "@/components/mobile-business-approach";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mobile App Development Services | Custom iOS & Android Solutions",
    description: "Leading Mobile App Development Company specializing in custom iOS, Android, and Cross-Platform applications. Hire expert mobile developers to build scalable products.",
    keywords: [
        "Mobile app development company",
        "iOS app development services",
        "Android app development",
        "Cross-platform app development",
        "React Native development",
        "Flutter app development",
        "Mobile app developers in India",
        "Enterprise mobile solutions",
        "Custom mobile application development"
    ],
    openGraph: {
        title: "Mobile App Development Services | Quantamise Code",
        description: "Transform your business with intelligent, scalable mobile applications. Expert iOS, Android, and Cross-Platform development services.",
        url: "https://quantamise.com/services/mobile-app-development",
        siteName: "Quantamise Code",
        images: [
            {
                url: "https://quantamise.com/assets/mobile-development-og.jpg", // Assuming generic or specific image
                width: 1200,
                height: 630,
                alt: "Mobile App Development Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Services | Quantamise Code",
        description: "Leading Mobile App Development Company specializing in custom iOS, Android, and Cross-Platform applications.",
        images: ["https://quantamise.com/assets/mobile-development-og.jpg"],
    },
    alternates: {
        canonical: "https://quantamise.com/services/mobile-app-development",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "Software Development",
    "areaServed": "Global",
    "description": "Quantamise Code provides end-to-end mobile app development services, including iOS, Android, and cross-platform solutions.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Custom",
        "availability": "https://schema.org/InStock"
    }
};

export default function MobileDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Nav />
            <br /><br /><br />

            {/* Hero Section */}
            <MobileHero />

            {/* Why Choose Us Section */}
            <MobileWhyChooseUs />

            {/* Business Focused Approach Section */}
            <MobileBusinessApproach />

            {/* Tech Stack Section */}
            <MobileTechStack />

            {/* Roadmap Section */}
            <MobileRoadmap />

            {/* Security Section */}
            <MobileSecurity />

            {/* Communication Section */}
            <MobileCommunication />

            {/* Industries Section */}
            <MobileIndustries />

            {/* Engagement Models Section */}
            <MobileEngagement />

            {/* FAQ Section */}
            <MobileFAQ />

            {/* CTA Section */}
            <CTA />

            <Footer />
        </main>
    );
}
