import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
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
    title: "UI/UX Design Services & Product Design | Quantamise Code",
    description: "User-centric UI/UX design services for web and mobile products. We create intuitive, engaging and conversion-focused digital experiences.",
    keywords: [
        "UI UX Design Agency",
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

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you design UI/UX for AI and SaaS products?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in designing user experiences for AI-powered platforms, analytics tools, and SaaS products."
            }
        },
        {
            "@type": "Question",
            "name": "Can you redesign existing SaaS products?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer UX audits, redesign services, and experience optimization for existing platforms."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure usability for complex systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use research-driven design, prototyping, and usability testing to simplify complex workflows."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide developer-ready designs?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we deliver complete design systems, Figma files, and implementation-ready specifications."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support mobile and web platforms?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design responsive and cross-platform experiences for web, tablets, and mobile users."
            }
        },
        {
            "@type": "Question",
            "name": "What is your typical design process?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our process involves discovery, user research, wireframing, high-fidelity prototyping, and iterative testing to ensure the final design meets user needs and business goals."
            }
        },
        {
            "@type": "Question",
            "name": "How long does a UI/UX project usually take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timelines vary based on scope, but a typical project can range from 4-8 weeks for an MVP to several months for a complex enterprise platform."
            }
        },
        {
            "@type": "Question",
            "name": "Do you work with startups or enterprise clients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We work with both! We help startups build MVPs and robust products from scratch, and we assist enterprises in scaling and modernizing their digital ecosystems."
            }
        },
        {
            "@type": "Question",
            "name": "What tools do you use for design and collaboration?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We primarily use Figma for design and prototyping. For communication and handoff, we use tools like Slack, Jira, and Zeplin to ensure seamless collaboration with developers."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer branding and logo design services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide comprehensive branding services, including logo design, visual identity systems, and brand guidelines to ensure a cohesive look and feel across all touchpoints."
            }
        }
    ]
};

export default function UiUxDesignPage() {
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

            {/* Related Services Section */}
            <RelatedServices currentService="ui-ux" />

            {/* CTA Section */}
            <ServicesCTA />

            <Footer />
        </main>
    );
}
