import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
import EcommerceHero from "@/components/ecommerce-hero";
import EcommerceWhyChooseUs from "@/components/ecommerce-why-choose-us";
import EcommerceBusinessApproach from "@/components/ecommerce-business-approach";
import EcommerceTechStack from "@/components/ecommerce-tech-stack";
import EcommerceRoadmap from "@/components/ecommerce-roadmap";
import EcommerceSecurity from "@/components/ecommerce-security";
import EcommerceCommunication from "@/components/ecommerce-communication";
import EcommerceIndustries from "@/components/ecommerce-industries";
import EcommerceEngagement from "@/components/ecommerce-engagement";
import EcommerceFAQ from "@/components/ecommerce-faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-commerce Development Services | Custom Online Stores & Marketplaces",
    description: "Expert E-commerce Development Company specializing in Shopify, WooCommerce, Magento, and custom headless commerce solutions.",
    keywords: [
        "E-commerce development company",
        "Online store development",
        "Shopify development services",
        "WooCommerce development",
        "Headless commerce",
        "Custom e-commerce solutions",
        "Magento development",
        "E-commerce web design",
    ],
    openGraph: {
        title: "E-commerce Development Services | Quantamise Code",
        description: "Scale your business with high-conversion e-commerce stores built by expert developers.",
        url: "https://quantamise.com/services/ecommerce-development",
        siteName: "Quantamise",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quantamise - E-Commerce Development",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "E-Commerce Development | Scalable Online Store Solutions",
        description: "Launch and grow your online business with Quantamise's expert E-Commerce development services using Shopify, WooCommerce, and custom solutions.",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "https://quantamise.com/services/ecommerce-development",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-commerce Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "E-commerce Development",
    "areaServed": "Global",
    "description": "Custom e-commerce development for Shopify, WooCommerce, and headless platforms.",
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
            "name": "Do you build custom e-commerce platforms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we develop fully customized and headless e-commerce platforms tailored to your business model and growth goals."
            }
        },
        {
            "@type": "Question",
            "name": "Can you migrate existing stores to new platforms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we handle secure migrations from legacy systems to modern platforms with zero data loss and minimal downtime."
            }
        },
        {
            "@type": "Question",
            "name": "How do you improve e-commerce conversion rates?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use data analytics, AI personalization, CRO testing, and user behavior tracking to increase sales and retention."
            }
        },
        {
            "@type": "Question",
            "name": "Do you integrate third-party tools and marketplaces?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we integrate payment gateways, shipping providers, ERP systems, CRM tools, and multi-channel marketplaces."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide post-launch maintenance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer continuous monitoring, security updates, performance optimization, and feature enhancements."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to build a custom e-commerce store?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The timeline varies based on complexity, typically ranging from 4-8 weeks for standard stores to 3-6 months for enterprise platforms."
            }
        }
    ]
};

export default function EcommerceDevelopmentPage() {
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

            <EcommerceHero />
            <EcommerceWhyChooseUs />
            <EcommerceBusinessApproach />
            <EcommerceTechStack />
            <EcommerceSecurity />
            <EcommerceRoadmap />
            <EcommerceCommunication />
            {/* <EcommerceIndustries /> */}
            <EcommerceEngagement />
            <EcommerceFAQ />
            {/* Related Services Section */}
            <RelatedServices currentService="ecommerce" />

            {/* CTA Section */}
            <ServicesCTA />

            <Footer />
        </main>
    );
}
