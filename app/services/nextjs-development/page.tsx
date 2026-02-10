import Nav from "@/components/nav";
import Footer from "@/components/footer";
import NextJsCTA from "@/components/nextjs-cta";
import RelatedServices from "@/components/related-services";
import NextJsHero from "@/components/nextjs-hero";
import NextJsRoadmap from "@/components/nextjs-roadmap";
import NextJsTechStack from "@/components/nextjs-tech-stack";
import NextJsCommunication from "@/components/nextjs-communication";
import NextJsFAQ from "@/components/nextjs-faq";
import NextJsIndustries from "@/components/nextjs-industries";
import NextJsEngagement from "@/components/nextjs-engagement";
import NextJsWhyChooseUs from "@/components/nextjs-why-choose-us";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js Development Services for Scalable Web Apps",
    description: "Custom Next.js development services for high-performance, SEO-friendly, and scalable SaaS and enterprise web applications by Quantamise Code.",
    keywords: [
        "Next.js development company",
        "Next.js development services",
        "Hire Next.js developers",
        "Custom Next.js development",
        "Next.js web development agency",
        "React & Next.js development",
        "SEO-friendly web development",
        "Headless CMS with Next.js",
        "High-performance web applications",
        "Server-side rendering services",
        "JAMstack development company"
    ],
    openGraph: {
        title: "Next.js Development Services | Quantamise Code",
        description: "Transform your ideas into high-performance, SEO-optimized web applications with our expert Next.js developers.",
        url: "https://www.quantamise.com/services/nextjs-development",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/fullStackDevelopmentChooseImg.jpeg", // Using same image for now
                width: 1200,
                height: 630,
                alt: "Next.js Development Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Development Services | Quantamise Code",
        description: "Leading Next.js Development Company specializing in App Router, SSR, and Vercel deployments.",
        images: ["/assets/fullStackDevelopmentChooseImg.jpeg"],
    },
    alternates: {
        canonical: "https://www.quantamise.com/services/nextjs-development",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Next.js Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "Web Development",
    "areaServed": "Global",
    "description": "Custom Next.js development for high-performance web applications, e-commerce, and enterprise platforms.",
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
            "name": "Do you offer custom Next.js web development services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we build fully customized Next.js applications tailored to business goals, performance needs, and scalability requirements."
            }
        },
        {
            "@type": "Question",
            "name": "Can you migrate my existing website to Next.js?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide seamless migration from legacy systems, WordPress, and React to Next.js without SEO loss."
            }
        },
        {
            "@type": "Question",
            "name": "Is Next.js suitable for SaaS platforms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Next.js is ideal for building scalable and high-performance SaaS dashboards and platforms."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure SEO optimization?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement SSR, SSG, structured data, canonical tags, optimized metadata, and automated sitemaps."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide post-launch support?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer continuous maintenance, optimization, and feature upgrades."
            }
        },
        {
            "@type": "Question",
            "name": "Which industries do you serve?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve SaaS, FinTech, EdTech, HealthTech, E-commerce, and Enterprise clients."
            }
        }
    ]
};

export default function NextJsDevelopmentPage() {
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
            <NextJsHero />

            {/* Why Choose Us Section - Expanded with Features */}
            <NextJsWhyChooseUs />

            {/* Tech Stack Section */}
            <NextJsTechStack />

            {/* Roadmap Section */}
            <NextJsRoadmap />

            {/* Communication Section */}
            <NextJsCommunication />

            {/* Industries Section */}
            <NextJsIndustries />

            {/* Engagement Models Section */}
            <NextJsEngagement />

            {/* FAQ Section */}
            <NextJsFAQ />

            {/* Related Services Section - Updating prop to nextjs if supported or just keeping as related */}
            <RelatedServices currentService="nextjs" />

            {/* CTA Section */}
            <NextJsCTA />

            <Footer />
        </main>
    );
}
