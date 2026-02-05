import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Industries from "@/components/industries";
import AiSolutionsHero from "@/components/ai-solutions-hero";
import AiSolutionsTechStack from "@/components/ai-solutions-tech-stack";
import AiSolutionsRoadmap from "@/components/ai-solutions-roadmap";
import AiSolutionsFaq from "@/components/ai-solutions-faq";

export default function AiSolutionsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <br /><br /><br />

            <AiSolutionsHero />
            <AiSolutionsTechStack />
            <AiSolutionsRoadmap />
            <Industries />
            <AiSolutionsFaq />
            <CTA />

            <Footer />
        </main>
    );
}
