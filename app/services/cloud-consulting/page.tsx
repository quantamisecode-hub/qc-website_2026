
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
import CloudConsultingHero from "@/components/cloud-consulting-hero";
import CloudConsultingRoadmap from "@/components/cloud-consulting-roadmap";
import CloudConsultingTechStack from "@/components/cloud-consulting-tech-stack";
import CloudConsultingSecurity from "@/components/cloud-consulting-security";
import CloudConsultingCommunication from "@/components/cloud-consulting-communication";
import CloudConsultingFAQ from "@/components/cloud-consulting-faq";
import CloudConsultingIndustries from "@/components/cloud-consulting-industries";
import CloudConsultingEngagement from "@/components/cloud-consulting-engagement";
import CloudConsultingWhyChooseUs from "@/components/cloud-consulting-why-choose-us";
import CloudConsultingBusinessApproach from "@/components/cloud-consulting-business-approach";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Consulting Services for Secure, Scalable & Cost-Efficient Digital Transformation",
    description: "We help organizations design, migrate, and optimize cloud environments that support business growth, innovation, and operational excellence.",
    keywords: [
        "Cloud consulting services",
        "Cloud consulting company",
        "Cloud migration consulting",
        "Cloud strategy consulting",
        "Cloud architecture services",
        "Cloud transformation services",
        "AWS cloud consulting",
        "Azure cloud consulting",
        "Google Cloud consulting",
        "Hybrid cloud solutions",
        "Multi-cloud strategy",
        "Cloud infrastructure consulting",
        "Cloud cost optimization services",
        "Cloud governance consulting",
        "Enterprise cloud solutions"
    ],
    openGraph: {
        title: "Cloud Consulting Services for Secure, Scalable & Cost-Efficient Digital Transformation",
        description: "We help organizations design, migrate, and optimize cloud environments that support business growth, innovation, and operational excellence.",
        url: "https://www.quantamise.com/services/cloud-consulting",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/fullStackDevelopmentChooseImg.jpeg", // Placeholder
                width: 1200,
                height: 630,
                alt: "Cloud Consulting Services",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Consulting & Modernization Services",
        description: "Accelerate your cloud journey with our expert guidance.",
        images: ["/assets/fullStackDevelopmentChooseImg.jpeg"],
    },
    alternates: {
        canonical: "https://www.quantamise.com/services/cloud-consulting",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Consulting Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://quantamise.com",
        "logo": "https://quantamise.com/assets/logo.png"
    },
    "serviceType": "Cloud Computing Services",
    "areaServed": "Global",
    "description": "We help organizations design, migrate, and optimize cloud environments that support business growth, innovation, and operational excellence.",
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
            "name": "What are cloud consulting services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cloud consulting services help organizations design, migrate, govern, and optimize cloud environments."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support AWS, Azure, and Google Cloud?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide vendor-neutral consulting for major cloud platforms."
            }
        },
        {
            "@type": "Question",
            "name": "Can you migrate legacy systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we manage secure cloud migrations with minimal disruption."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure security?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement governance, encryption, and compliance monitoring frameworks."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer cost optimization?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use FinOps practices to improve cloud ROI."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support AI workloads?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design cloud environments optimized for AI and analytics."
            }
        }
    ]
};

export default function CloudConsultingPage() {
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

            <CloudConsultingHero />
            <CloudConsultingWhyChooseUs />
            <CloudConsultingBusinessApproach />
            <CloudConsultingTechStack />
            <CloudConsultingRoadmap />
            <CloudConsultingSecurity />
            <CloudConsultingCommunication />
            <CloudConsultingIndustries />
            <CloudConsultingEngagement />
            <CloudConsultingFAQ />
            <RelatedServices currentService="cloud-consulting" />
            <ServicesCTA />

            <Footer />
        </main>
    );
}
