import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
// import CTA from "@/components/cta"; // Removed

// New AI Components
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
import CTA from "@/components/cta";

export const metadata: Metadata = {
    title: "AI Solutions & Machine Learning Development | Quantamise Code",
    description: "Transform your business with custom AI solutions. From predictive analytics to generative AI, we build intelligent software that drives growth.",
    keywords: ["AI Development", "Machine Learning Solutions", "Generative AI", "NLP", "Computer Vision", "AI Consulting", "Enterprise AI"],
    alternates: {
        canonical: "https://www.quantamisecode.com/services/ai-solutions"
    },
    openGraph: {
        url: "https://www.quantamisecode.com/services/ai-solutions",
        title: "AI Solutions & Machine Learning Development | Quantamise Code",
        description: "Transform your business with custom AI solutions. From predictive analytics to generative AI, we build intelligent software that drives growth."
    }
};

export default function AiSolutionsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
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
            <CTA />
            <Footer />
        </main>
    );
}
