
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
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

export default function FullStackDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
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

            {/* CTA Section */}
            <CTA />

            <Footer />
        </main>
    );
}
