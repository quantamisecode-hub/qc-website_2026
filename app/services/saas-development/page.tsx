import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

// New SaaS Components
import SaasHero from "@/components/saas-hero";
import SaasTechStack from "@/components/saas-tech-stack";
import SaasWhyChooseUs from "@/components/saas-why-choose-us";
import SaasIndustries from "@/components/saas-industries";
import SaasRoadmap from "@/components/saas-roadmap";
import SaasBusinessApproach from "@/components/saas-business-approach";
import SaasEngagement from "@/components/saas-engagement";
import SaasSecurity from "@/components/saas-security";
import SaasCommunication from "@/components/saas-communication";
import SaasFAQ from "@/components/saas-faq";

export const metadata: Metadata = {
    title: "SaaS Development Company | Build Scalable Cloud Platforms",
    description: "Launch and scale your SaaS product with our expert development services. We build secure, multi-tenant cloud applications optimized for growth.",
    keywords: ["SaaS Development", "Cloud Application Development", "Multi-tenant Architecture", "MVP Development", "SaaS Migration", "Next.js SaaS"],
    alternates: {
        canonical: "https://www.quantamisecode.com/services/saas-development"
    },
    openGraph: {
        url: "https://www.quantamisecode.com/services/saas-development",
        title: "SaaS Development Company | Build Scalable Cloud Platforms",
        description: "Launch and scale your SaaS product with our expert development services. We build secure, multi-tenant cloud applications optimized for growth."
    }
};

export default function SaasDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <SaasHero />
            <SaasTechStack />
            <SaasWhyChooseUs />
            <SaasIndustries />
            <SaasRoadmap />
            <SaasBusinessApproach />
            <SaasEngagement />
            <SaasSecurity />
            <SaasCommunication />
            <SaasFAQ />
            <CTA />

            <Footer />
        </main>
    );
}
