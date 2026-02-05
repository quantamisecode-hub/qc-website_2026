import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Industries from "@/components/industries";
import IiotHero from "@/components/iiot-hero";
import IiotTechStack from "@/components/iiot-tech-stack";
import IiotRoadmap from "@/components/iiot-roadmap";
import IiotFAQ from "@/components/iiot-faq";

export default function IiotDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <br /><br /><br />

            <IiotHero />
            <IiotTechStack />
            <IiotRoadmap />
            <Industries />
            <IiotFAQ />
            <CTA />

            <Footer />
        </main>
    );
}
