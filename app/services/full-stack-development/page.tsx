
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import RelatedServices from "@/components/related-services";
import FullStackHero from "@/components/full-stack-hero";
import FullStackRoadmap from "@/components/full-stack-roadmap";
import FullStackTechStack from "@/components/full-stack-tech-stack";
import FullStackSecurity from "@/components/full-stack-security";
import FullStackCommunication from "@/components/full-stack-communication";
import FullStackFAQ from "@/components/full-stack-faq";
import FullStackIndustries from "@/components/full-stack-industries";
import FullStackEngagement from "@/components/full-stack-engagement";
import FullStackWhyChooseUs from "@/components/full-stack-why-choose-us";
import FullStackBusinessApproach from "@/components/full-stack-business-approach";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Full Stack Development Services | Quantamise Code",
    description: "Custom full stack development services using React, Node.js & cloud technologies. We build scalable, secure and high-performance web applications.",
    keywords: [
        "Full Stack Development Company",
        "Full-stack development company",
        "Full-stack development services",
        "Custom web application development",
        "Software development company",
        "Full-stack developers in India",
        "SaaS development",
        "Enterprise software development",
        "Web and mobile development",
        "Scalable web applications",
        "Cloud-based application development"
    ],
    openGraph: {
        title: "Full-Stack Development Services | Quantamise Code",
        description: "Transform your business with scalable, high-performance web and mobile applications developed by our expert full-stack engineers.",
        url: "https://www.quantamisecode.com/services/full-stack-development",
        siteName: "Quantamise Code",
        images: [
            {
                url: "/assets/fullStackDevelopmentChooseImg.jpeg",
                width: 1200,
                height: 630,
                alt: "Full Stack Development Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Full-Stack Development Services | Quantamise Code",
        description: "Leading Full-Stack Development Company specializing in custom web applications and SaaS.",
        images: ["/assets/fullStackDevelopmentChooseImg.jpeg"],
    },
    alternates: {
        canonical: "https://www.quantamisecode.com/services/full-stack-development",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full-Stack Development Services",
    "provider": {
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://www.quantamisecode.com",
        "logo": "https://www.quantamisecode.com/assets/logo.png"
    },
    "serviceType": "Software Development",
    "areaServed": "Global",
    "description": "Custom full-stack development for web and mobile applications, SaaS platforms, and enterprise solutions.",
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
            "name": "Why choose full-stack development over separate frontend and backend?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Full-stack development ensures tighter integration, faster communication, and a unified vision for your project. It reduces overhead, streamlines deployment, and often results in faster time-to-market compared to managing separate teams."
            }
        },
        {
            "@type": "Question",
            "name": "How do you ensure scalability in full-stack applications?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We design with scalability in mind from day one, using microservices or modular monolith architectures, efficient database indexing, caching strategies (Redis), and cloud-native solutions like modular serverless functions."
            }
        },
        {
            "@type": "Question",
            "name": "What is your preferred tech stack for a new startup?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For most startups, we recommend the MERN (MongoDB, Express, React, Node) or T3 (Next.js, TypeScript, Tailwind, Prisma) stack. These provide rapid development, huge community support, and easy scalability."
            }
        },
        {
            "@type": "Question",
            "name": "Do you handle DevOps and deployment?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we handle the entire CI/CD pipeline. We configure automated testing, Docker containerization, and seamless deployment to cloud providers like AWS, Vercel, or Azure."
            }
        },
        {
            "@type": "Question",
            "name": "Can you migrate my legacy application to a modern full-stack architecture?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We specialize in legacy modernization, breaking down monolithic applications into modern, manageable microservices or migrating them to newer frameworks like Next.js without data loss."
            }
        },
        {
            "@type": "Question",
            "name": "How do you handle data security and API protection?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Security is paramount. We implement JWT/OAuth authentication, role-based access control (RBAC), data encryption at rest and in transit, and strictly follow OWASP security guidelines."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide post-launch maintenance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer tailored maintenance packages including 24/7 monitoring, security patches, performance optimization, and feature updates to keep your application running smoothly."
            }
        },
        {
            "@type": "Question",
            "name": "What is the typical timeline for an MVP?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A typical MVP timeline ranges from 4 to 8 weeks, depending on complexity. We focus on core features first to get your product to market quickly for user feedback."
            }
        }
    ]
};

export default function FullStackDevelopmentPage() {
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
            <FullStackHero />

            {/* Why Choose Us Section */}
            <FullStackWhyChooseUs />

            {/* Business Focused Approach Section */}
            <FullStackBusinessApproach />

            {/* Tech Stack Section */}
            <FullStackTechStack />

            {/* Roadmap Section */}
            <FullStackRoadmap />

            {/* Security Section */}
            <FullStackSecurity />

            {/* Communication Section */}
            <FullStackCommunication />

            {/* Industries Section */}
            <FullStackIndustries />

            {/* Engagement Models Section */}
            <FullStackEngagement />

            {/* FAQ Section */}
            <FullStackFAQ />

            {/* Related Services Section */}
            <RelatedServices currentService="full-stack" />

            {/* CTA Section */}
            <ServicesCTA />

            <Footer />
        </main>
    );
}
