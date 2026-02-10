
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
import DedicatedTeamHero from "@/components/dedicated-team-hero";
import DedicatedTeamRoadmap from "@/components/dedicated-team-roadmap";
import DedicatedTeamTechStack from "@/components/dedicated-team-tech-stack";
import DedicatedTeamSecurity from "@/components/dedicated-team-security";
import DedicatedTeamCommunication from "@/components/dedicated-team-communication";
import DedicatedTeamFAQ from "@/components/dedicated-team-faq";
import DedicatedTeamIndustries from "@/components/dedicated-team-industries";
import DedicatedTeamEngagement from "@/components/dedicated-team-engagement";
import DedicatedTeamWhyChooseUs from "@/components/dedicated-team-why-choose-us";
import DedicatedTeamBusinessApproach from "@/components/dedicated-team-business-approach";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hire Dedicated Development Team",
    description: "Build your extended engineering team with dedicated developers, AI specialists, and full-stack experts from Quantamise Code.",
    keywords: [
        "Dedicated development team",
        "Dedicated software development team",
        "Hire dedicated developers",
        "Offshore development team",
        "Remote development team services",
        "Dedicated engineering team",
        "Hire remote developers in India",
        "Dedicated SaaS development team",
        "AI development team outsourcing",
        "Agile development team services",
        "Dedicated full-stack developers",
        "Long-term development partnership",
        "Staff augmentation services",
        "Virtual development teams"
    ],
    openGraph: {
        title: "Dedicated Development Teams for Scalable, High-Performance Digital Products",
        description: "Build your extended engineering team with pre-vetted, full-time developers, architects, and AI specialists.",
        url: "https://www.quantamisecode.com/services/dedicated-development-team",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/fullStackDevelopmentChooseImg.jpeg",
                width: 1200,
                height: 630,
                alt: "Dedicated Development Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dedicated Development Teams for Scalable, High-Performance Digital Products",
        description: "Build your extended engineering team with pre-vetted, full-time developers, architects, and AI specialists.",
        images: ["/assets/fullStackDevelopmentChooseImg.jpeg"],
    },
    alternates: {
        canonical: "https://www.quantamisecode.com/services/dedicated-development-team",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dedicated Development Teams",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://www.quantamisecode.com",
        "logo": "https://www.quantamisecode.com/assets/logo.png"
    },
    "serviceType": "Software Development Outsourcing",
    "areaServed": "Global",
    "description": "Build your extended engineering team with pre-vetted, full-time developers, architects, and AI specialists.",
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
            "name": "What is a dedicated development team?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A dedicated development team is a group of full-time professionals working exclusively on your project."
            }
        },
        {
            "@type": "Question",
            "name": "How is it different from project outsourcing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dedicated teams provide long-term collaboration, flexible scope, and full client control."
            }
        },
        {
            "@type": "Question",
            "name": "Can I interview developers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can interview and approve every team member."
            }
        },
        {
            "@type": "Question",
            "name": "How fast can onboarding happen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Onboarding usually takes 2 to 4 weeks."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide IP protection?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide strict IP protection and NDAs."
            }
        },
        {
            "@type": "Question",
            "name": "Can I scale the team?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, team size can be adjusted anytime."
            }
        },
        {
            "@type": "Question",
            "name": "Do you support AI and SaaS teams?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we build dedicated teams for AI and SaaS platforms."
            }
        }
    ]
};

export default function DedicatedTeamPage() {
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
            <DedicatedTeamHero />

            {/* Why Choose Us Section */}
            <DedicatedTeamWhyChooseUs />

            {/* Business Focused Approach Section */}
            <DedicatedTeamBusinessApproach />

            {/* Tech Stack Section */}
            <DedicatedTeamTechStack />

            {/* Roadmap Section */}
            <DedicatedTeamRoadmap />

            {/* Security Section */}
            <DedicatedTeamSecurity />

            {/* Communication Section */}
            <DedicatedTeamCommunication />

            {/* Industries Section */}
            <DedicatedTeamIndustries />

            {/* Engagement Models Section */}
            <DedicatedTeamEngagement />

            {/* FAQ Section */}
            <DedicatedTeamFAQ />

            {/* Related Services Section */}
            <RelatedServices currentService="dedicated-team" />

            {/* CTA Section */}
            <ServicesCTA />

            <Footer />
        </main>
    );
}
