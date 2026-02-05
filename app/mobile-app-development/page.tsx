import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Industries from "@/components/industries";
import MobileAppHero from "@/components/mobile-app-hero";
import MobileAppTechStack from "@/components/mobile-app-tech-stack";
import MobileAppRoadmap from "@/components/mobile-app-roadmap";
import MobileAppFaq from "@/components/mobile-app-faq";

export default function MobileAppDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <br /><br /><br />

            <MobileAppHero />
            <MobileAppTechStack />
            <MobileAppRoadmap />
            <Industries />
            <MobileAppFaq />
            <CTA />

            <Footer />
        </main>
    );
}
