import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
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

export default function EcommerceDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <CTA />

            <Footer />
        </main>
    );
}
