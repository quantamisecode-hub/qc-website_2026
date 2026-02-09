import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";

// New SaaS Components
import SaasHero from "@/components/saas-hero";
import SaasTechStack from "@/components/saas-tech-stack";
import SaasWhyChooseUs from "@/components/saas-why-choose-us";
import SaasIndustries from "@/components/saas-industries";
import SaasRoadmap from "@/components/saas-roadmap";
import SaasBusinessApproach from "@/components/saas-business-approach";
import SaasEngagement from "@/components/saas-engagement";
import SaasSecurity from "@/components/saas-security";
import SaasCommunication from "@/components/saas-communication";
import SaasFAQ from "@/components/saas-faq";

export const metadata: Metadata = {
    title: "SaaS Product Development Company | Quantamise Code",
    description: "Build scalable SaaS platforms with secure architecture and cloud deployment. We help startups launch, grow and monetize software products.",
    keywords: [
        "SaaS Development Company",
        "SaaS Development",
        "Cloud Application Development",
        "Multi-tenant Architecture",
        "MVP Development",
        "SaaS Migration",
        "Next.js SaaS",
        "SaaS Product Development",
        "Enterprise SaaS Solutions",
        "Cloud Native Applications",
        "SaaS Consulting"
    ],
    openGraph: {
        title: "SaaS Development Company | Build Scalable Cloud Platforms | Quantamise Code",
        description: "Launch and scale your SaaS product with our expert development services. We build secure, multi-tenant cloud applications optimized for growth.",
        url: "https://www.quantamise.com/services/saas-development",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/saas-development-og.jpg",
                width: 1200,
                height: 630,
                alt: "SaaS Development Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Development Company | Build Scalable Cloud Platforms | Quantamise Code",
        description: "Launch and scale your SaaS product with our expert development services.",
        images: ["/assets/saas-development-og.jpg"],
    },
    alternates: {
        canonical: "https://www.quantamise.com/services/saas-development",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://www.quantamise.com",
        "logo": "https://www.quantamise.com/assets/logo.png"
    },
    "serviceType": "Software Development",
    "areaServed": "Global",
    "description": "Custom SaaS development services for building scalable, secure, and multi-tenant cloud applications.",
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
            "name": "Do you build custom SaaS platforms from scratch?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we develop fully customized SaaS products tailored to your business model, users, and growth plans."
            }
        },
        {
            "@type": "Question",
            "name": "Can you help startups launch MVPs quickly?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer rapid MVP programs designed to help founders validate ideas and secure early traction."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support billing and subscription systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We integrate secure billing, payment gateways, and usage-based pricing systems."
            }
        },
        {
            "@type": "Question",
            "name": "Can you migrate legacy software to SaaS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we modernize on-premises or legacy systems into cloud-based SaaS platforms."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide maintenance after launch?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer continuous support, upgrades, and performance optimization services."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure my SaaS platform can scale as I grow?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We design with scalability in mind from day one, using cloud-native architectures, microservices, and auto-scaling infrastructure to handle increased load seamlessly as your user base expands."
            }
        }
    ]
};

export default function SaasDevelopmentPage() {
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
            <SaasHero />
            <SaasWhyChooseUs />
            <SaasBusinessApproach />
            <SaasTechStack />
            <SaasRoadmap />
            <SaasSecurity />
            <SaasCommunication />
            <SaasIndustries />
            <SaasEngagement />
            <SaasFAQ />
            <RelatedServices currentService="saas" />
            <ServicesCTA />

            <Footer />
        </main>
    );
}
