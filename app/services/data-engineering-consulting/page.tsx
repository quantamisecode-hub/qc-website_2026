
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import LinkedServices from "@/components/related-services";
import DataEngHero from "@/components/data-eng-hero";
import DataEngWhyChooseUs from "@/components/data-eng-why-choose-us";
import DataEngBusinessApproach from "@/components/data-eng-business-approach";
import DataEngTechStack from "@/components/data-eng-tech-stack";
import DataEngRoadmap from "@/components/data-eng-roadmap";
import DataEngSecurity from "@/components/data-eng-security";
import DataEngCommunication from "@/components/data-eng-communication";
import DataEngIndustries from "@/components/data-eng-industries";
import DataEngEngagement from "@/components/data-eng-engagement";
import DataEngFAQ from "@/components/data-eng-faq";
import RevealOnScroll from "@/components/reveal-on-scroll";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Engineering & Consulting Services",
    description: "Scalable data engineering and consulting services for analytics, AI readiness, and business intelligence. Build modern data platforms with Quantamise Code.",
    keywords: [
        "Data engineering services",
        "Data engineering consulting",
        "Data consulting company",
        "Big data solutions provider",
        "Enterprise data management services",
        "Data pipeline development",
        "Cloud data engineering",
        "Data warehouse consulting",
        "Business intelligence solutions",
        "AI data infrastructure",
        "Data analytics consulting",
        "ETL development services",
        "Data lake architecture"
    ],
    openGraph: {
        title: "Data Engineering Services | Quantamise Code",
        description: "Transform your raw information into actionable intelligence with our scalable data engineering solutions.",
        url: "https://www.quantamisecode.com/services/data-engineering-consulting",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/OG/og-image.png",
                width: 1200,
                height: 630,
                alt: "Data Engineering Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Engineering Services | Quantamise Code",
        description: "Leading Data Engineering Company specializing in cloud pipelines, data lakes, and BI solutions.",
        images: ["/OG/og-image.png"],
    },
    alternates: {
        canonical: "https://www.quantamisecode.com/services/data-engineering-consulting",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Engineering & Consulting Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://www.quantamisecode.com",
        "logo": "https://www.quantamisecode.com/assets/logo.png"
    },
    "serviceType": "Data Engineering",
    "areaServed": "Global",
    "description": "We design, build, and optimize scalable data platforms that transform raw information into actionable intelligence.",
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
            "name": "What is data engineering and why is it important?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Data engineering focuses on building scalable systems for collecting, processing, and managing data, enabling analytics, AI, and business intelligence."
            }
        },
        {
            "@type": "Question",
            "name": "Do you help with cloud data migration?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we migrate legacy and on-premise systems to modern cloud data platforms securely and efficiently."
            }
        },
        {
            "@type": "Question",
            "name": "Can you build real-time analytics platforms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we develop streaming pipelines and real-time dashboards for live data insights."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure data quality?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use automated validation, monitoring, and governance systems to maintain high data accuracy."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support AI initiatives?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we build AI-ready data pipelines, feature stores, and MLOps systems."
            }
        },
        {
            "@type": "Question",
            "name": "Which industries do you serve?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve FinTech, EdTech, Healthcare, SaaS, E-commerce, Manufacturing, and enterprises."
            }
        }
    ]
};

export default function DataEngineeringPage() {
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
            <RevealOnScroll>
                <DataEngHero />
            </RevealOnScroll>

            {/* Why Choose Us Section */}
            <RevealOnScroll>
                <DataEngWhyChooseUs />
            </RevealOnScroll>

            {/* Business Approach Section */}
            <RevealOnScroll>
                <DataEngBusinessApproach />
            </RevealOnScroll>

            {/* Tech Stack Section */}
            <RevealOnScroll>
                <DataEngTechStack />
            </RevealOnScroll>

            {/* Roadmap Section */}
            <RevealOnScroll>
                <DataEngRoadmap />
            </RevealOnScroll>

            {/* Security Section */}
            <RevealOnScroll>
                <DataEngSecurity />
            </RevealOnScroll>

            {/* Communication Section */}
            <RevealOnScroll>
                <DataEngCommunication />
            </RevealOnScroll>

            {/* Industries Section */}
            <RevealOnScroll>
                <DataEngIndustries />
            </RevealOnScroll>

            {/* Engagement Models */}
            <RevealOnScroll>
                <DataEngEngagement />
            </RevealOnScroll>

            {/* FAQ Section */}
            <RevealOnScroll>
                <DataEngFAQ />
            </RevealOnScroll>

            {/* Related Services Section */}
            <RevealOnScroll>
                <LinkedServices currentService="data-engineering" />
            </RevealOnScroll>

            {/* CTA Section */}
            <RevealOnScroll>
                <ServicesCTA />
            </RevealOnScroll>

            <Footer />
        </main>
    );
}
