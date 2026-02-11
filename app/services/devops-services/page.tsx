
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
import DevOpsHero from "@/components/devops-hero";
import DevOpsWhyChooseUs from "@/components/devops-why-choose-us";
import DevOpsBusinessApproach from "@/components/devops-business-approach";
import DevOpsTechStack from "@/components/devops-tech-stack";
import DevOpsRoadmap from "@/components/devops-roadmap";
import DevOpsSecurity from "@/components/devops-security";
import DevOpsCommunication from "@/components/devops-communication";
import DevOpsIndustries from "@/components/devops-industries";
import DevOpsEngagement from "@/components/devops-engagement";
import DevOpsFAQ from "@/components/devops-faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DevOps Services & CI/CD Automation Experts",
    description: "Accelerate software delivery with DevOps automation, CI/CD pipelines, and reliability engineering from Quantamise Code.",
    keywords: [
        "DevOps Services",
        "DevOps Consulting",
        "CI/CD Implementation",
        "Infrastructure as Code",
        "Kubernetes Management",
        "Cloud Automation",
        "DevSecOps Services",
        "SRE Services",
        "AWS DevOps",
        "Azure DevOps"
    ],
    openGraph: {
        title: "DevOps Services | Quantamise Code",
        description: "Accelerate your software delivery with our expert DevOps services. Automation, Security, and Reliability at scale.",
        url: "https://www.quantamisecode.com/services/devops-services",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/logo.png",
                width: 1200,
                height: 630,
                alt: "DevOps Engineering Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "DevOps Services | Quantamise Code",
        description: "Accelerate your software delivery with our expert DevOps services.",
        images: ["/assets/logo.png"],
    },
    alternates: {
        canonical: "https://www.quantamisecode.com/services/devops-services",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DevOps Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://www.quantamisecode.com",
        "logo": "https://www.quantamisecode.com/assets/logo.png"
    },
    "serviceType": "IT Infrastructure Management",
    "areaServed": "Global",
    "description": "End-to-end DevOps services including CI/CD automation, cloud infrastructure management, and DevSecOps.",
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
            "name": "What is DevOps and why do I need it?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It shortens the systems development life cycle and provides continuous delivery with high software quality. You need it to release software faster, more reliably, and with fewer bugs."
            }
        },
        {
            "@type": "Question",
            "name": "Can you help migrate our legacy infrastructure to the cloud?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in cloud migration. We can move your on-premise or legacy infrastructure to AWS, Azure, or Google Cloud, optimizing it for cost, performance, and security during the process."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer 24/7 monitoring and support?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our Managed DevOps services include 24/7 monitoring, incident response, and ongoing support to ensure your systems are always up and running."
            }
        },
        {
            "@type": "Question",
            "name": "What tools do you use for CI/CD?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We are tool-agnostic but commonly use Jenkins, GitLab CI, GitHub Actions, CircleCI, and ArgoCD, depending on your existing stack and preferences."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure security in DevOps?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We practice DevSecOps, integrating security checks (SAST, DAST, container scanning) directly into the CI/CD pipeline. We also manage secrets securely and implement strict IAM policies."
            }
        },
        {
            "@type": "Question",
            "name": "Can you work with our existing development team?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We work as an extension of your team, collaborating closely with your developers to improve their workflows and remove infrastructure bottlenecks."
            }
        }
    ]
};


export default function DevOpsPage() {
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
            <DevOpsHero />

            {/* Why Choose Us Section */}
            <DevOpsWhyChooseUs />

            {/* Business Focused Approach Section */}
            <DevOpsBusinessApproach />

            {/* Tech Stack Section */}
            <DevOpsTechStack />

            {/* Roadmap Section */}
            <DevOpsRoadmap />

            {/* Security Section */}
            <DevOpsSecurity />

            {/* Communication Section */}
            <DevOpsCommunication />

            {/* Industries Section */}
            <DevOpsIndustries />

            {/* Engagement Models Section */}
            <DevOpsEngagement />

            {/* FAQ Section */}
            <DevOpsFAQ />

            {/* Related Services Section */}
            <RelatedServices currentService="devops" />

            {/* CTA Section */}
            <ServicesCTA />

            <Footer />
        </main>
    );
}
