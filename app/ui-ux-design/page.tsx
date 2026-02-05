import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Industries from "@/components/industries";
import UiUxHero from "@/components/ui-ux-hero";
import UiUxTechStack from "@/components/ui-ux-tech-stack";
import UiUxRoadmap from "@/components/ui-ux-roadmap";
import UiUxFaq from "@/components/ui-ux-faq";

export default function UiUxDesignPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <br /><br /><br />

            <UiUxHero />
            <UiUxTechStack />
            <UiUxRoadmap />
            <Industries />
            <UiUxFaq />
            <CTA />

            <Footer />
        </main>
    );
}
