import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Industries from "@/components/industries";
import SaasHero from "@/components/saas-hero";
import SaasTechStack from "@/components/saas-tech-stack";
import SaasRoadmap from "@/components/saas-roadmap";
import SaasFAQ from "@/components/saas-faq";

export default function SaasDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <br /><br /><br />

            <SaasHero />
            <SaasTechStack />
            <SaasRoadmap />
            <Industries />
            <SaasFAQ />
            <CTA />

            <Footer />
        </main>
    );
}
