
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import FullStackHero from "@/components/full-stack-hero";
import FullStackRoadmap from "@/components/full-stack-roadmap";
import FullStackTechStack from "@/components/full-stack-tech-stack";
import IndustriesInteractive from "@/components/industries-interactive";
import FullStackFAQ from "@/components/full-stack-faq";
import Industries from "@/components/industries";

export default function FullStackDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <br /><br /><br />

            {/* Hero Section */}
            <FullStackHero />

            {/* Tech Stack Section */}
            <FullStackTechStack />

            {/* Roadmap Section */}
            <FullStackRoadmap />

            {/* Industries Section */}
            <Industries />

            {/* FAQ Section */}
            <FullStackFAQ />

            {/* CTA Section */}
            <CTA />

            <Footer />
        </main>
    );
}
