import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import UiUxHero from "@/components/ui-ux-hero";
import UiUxRoadmap from "@/components/ui-ux-roadmap";
import UiUxTechStack from "@/components/ui-ux-tech-stack";
import UiUxSecurity from "@/components/ui-ux-security";
import UiUxCommunication from "@/components/ui-ux-communication";
import UiUxFAQ from "@/components/ui-ux-faq";
import UiUxIndustries from "@/components/ui-ux-industries";
import UiUxEngagement from "@/components/ui-ux-engagement";
import UiUxWhyChooseUs from "@/components/ui-ux-why-choose-us";
import UiUxBusinessApproach from "@/components/ui-ux-business-approach";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "UX/UI Design Services | Custom Web & App Solutions",
    description: "Leading UX/UI Design Agency specializing in custom web applications, SaaS, and enterprise software. Hire expert designers in India.",
    keywords: [
        "UX/UI Design company",
        "UX/UI Design services",
        "Custom web design",
        "Software design company",
        "Key designers in India",
        "SaaS design",
        "Enterprise software design",
        "Web and mobile design",
        "Scalable web applications",
        "User experience design"
    ],
    openGraph: {
        title: "UX/UI Design Services | Quantamise Code",
        description: "Transform your business with scalable, high-performance web and mobile applications designed by our expert designers.",
        url: "https://quantamise.com/services/ui-ux-design",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/fullStackDevelopmentChooseImg.jpeg", // Placeholder image
                width: 1200,
                height: 630,
                alt: "UX/UI Design Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UX/UI Design Services | Quantamise Code",
        description: "Leading UX/UI Design Agency specializing in custom web applications and SaaS.",
        images: ["/assets/fullStackDevelopmentChooseImg.jpeg"],
    },
    alternates: {
        canonical: "https://quantamise.com/services/ui-ux-design",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UX/UI Design Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "Design",
    "areaServed": "Global",
    "description": "Custom UX/UI Design for web and mobile applications, SaaS platforms, and enterprise solutions.",
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Custom",
        "availability": "https://schema.org/InStock"
    }
};

export default function UiUxDesignPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Nav />
            <br /><br /><br />

            {/* Hero Section */}
            <UiUxHero />

            {/* Why Choose Us Section */}
            <UiUxWhyChooseUs />

            {/* Business Focused Approach Section */}
            <UiUxBusinessApproach />

            {/* Tech Stack Section */}
            <UiUxTechStack />

            {/* Roadmap Section */}
            <UiUxRoadmap />

            {/* Security Section (Design Security) */}
            <UiUxSecurity />

            {/* Communication Section */}
            <UiUxCommunication />

            {/* Industries Section */}
            <UiUxIndustries />

            {/* Engagement Models Section */}
            <UiUxEngagement />

            {/* FAQ Section */}
            <UiUxFAQ />

            {/* CTA Section */}
            <CTA />

            <Footer />
        </main>
    );
}
