
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
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
        canonical: "https://www.quantamise.com/services/mobile-app-development",
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

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you develop for both iOS and Android?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we develop native and cross-platform mobile applications for iOS and Android using modern frameworks and best practices."
            }
        },
        {
            "@type": "Question",
            "name": "Can you build AI-powered mobile applications?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We integrate machine learning, automation, analytics, and personalization features into mobile apps based on your business needs."
            }
        },
        {
            "@type": "Question",
            "name": "Do you help startups build MVP mobile apps?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in MVP development for startups, enabling rapid validation, investor pitching, and scalable growth."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure mobile app performance and scalability?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use cloud-native architecture, optimized APIs, caching systems, and automated testing to ensure high performance under heavy load."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide app maintenance and post-launch support?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer continuous monitoring, updates, security patches, and feature enhancements after launch."
            }
        },
        {
            "@type": "Question",
            "name": "Can you assist with App Store and Play Store deployment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we handle complete app publishing, compliance checks, store optimization, and version management."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to build a mobile application?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timelines depend on complexity, but most projects range from 8 to 24 weeks, including design, development, testing, and deployment."
            }
        },
        {
            "@type": "Question",
            "name": "Do I own the source code and intellectual property of the app?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, once the project is completed and ongoing payments are settled, you retain 100% ownership of the source code, design assets, and intellectual property."
            }
        }
    ]
};

export default function MobileDevelopmentPage() {
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

            {/* Related Services Section */}
            <RelatedServices currentService="mobile" />

            {/* CTA Section */}
            <ServicesCTA />

            <Footer />
        </main>
    );
}
