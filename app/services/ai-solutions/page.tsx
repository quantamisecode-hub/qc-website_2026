import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AiHero from "@/components/ai-hero";
import AiTechStack from "@/components/ai-tech-stack";
import AiWhyChooseUs from "@/components/ai-why-choose-us";
import AiIndustries from "@/components/ai-industries";
import AiRoadmap from "@/components/ai-roadmap";
import AiBusinessApproach from "@/components/ai-business-approach";
import AiEngagement from "@/components/ai-engagement";
import AiSecurity from "@/components/ai-security";
import AiCommunication from "@/components/ai-communication";
import AiFAQ from "@/components/ai-faq";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";

export const metadata: Metadata = {
    title: "AI Solutions & Machine Learning Development | Quantamise Code",
    description: "Custom AI & Machine Learning solutions using Generative AI, NLP & Computer Vision. We build intelligent, scalable, and business-focused AI systems.",
    keywords: [
        "AI Development",
        "Machine Learning Solutions",
        "Generative AI",
        "NLP",
        "Computer Vision",
        "AI Consulting",
        "Enterprise AI",
        "Custom AI Solutions",
        "Deep Learning",
        "Predictive Analytics"
    ],
    openGraph: {
        title: "AI Solutions & Machine Learning Development | Quantamise Code",
        description: "Transform your business with intelligent, scalable AI & Machine Learning solutions developed by our expert engineers.",
        url: "https://www.quantamise.com/services/ai-solutions",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/ai-solutions-og.jpg",
                width: 1200,
                height: 630,
                alt: "AI Solutions & Machine Learning Development",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Solutions & Machine Learning Development | Quantamise Code",
        description: "Leading AI Development Company specializing in custom Machine Learning, NLP, and Generative AI solutions.",
        images: ["/assets/ai-solutions-og.jpg"],
    },
    alternates: {
        canonical: "https://www.quantamise.com/services/ai-solutions",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Solutions & Machine Learning Development",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://www.quantamise.com",
        "logo": "https://www.quantamise.com/assets/logo.png"
    },
    "serviceType": "Software Development",
    "areaServed": "Global",
    "description": "Custom AI & Machine Learning development for predictive analytics, automation, and intelligent enterprise solutions.",
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
            "name": "What industries do you serve with AI solutions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We deliver AI systems for finance, healthcare, retail, logistics, manufacturing, and SaaS companies."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer custom AI model development?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design, train, and deploy custom machine learning and deep learning models tailored to specific business needs."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure data security in AI projects?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We implement encryption, access controls, compliance frameworks, and secure cloud environments across all AI systems."
            }
        },
        {
            "@type": "Question",
            "name": "Can you integrate AI into existing software?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We specialize in integrating AI capabilities into legacy systems, SaaS platforms, and enterprise applications."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide ongoing AI maintenance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer continuous monitoring, model retraining, and performance optimization services."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to implement an AI solution?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timelines depend on complexity, but typically a Proof of Concept (PoC) takes 4-6 weeks, while a full-scale production deployment can range from 3 to 6 months. We use agile sprints to ensure consistent progress and adaptation."
            }
        }
    ]
};

export default function AiSolutionsPage() {
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
            <AiHero />
            <AiWhyChooseUs />
            <AiBusinessApproach />
            <AiTechStack />
            <AiRoadmap />
            <AiSecurity />
            <AiCommunication />
            <AiIndustries />
            <AiEngagement />
            <AiFAQ />
            <RelatedServices currentService="ai" />
            <ServicesCTA />
            <Footer />
        </main>
    );
}
