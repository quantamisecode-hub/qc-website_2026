import { Metadata } from 'next';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import AboutHero from '@/components/about-hero';
import AboutWhoWeAre from '@/components/about-who-we-are';
import AboutMissionVision from '@/components/about-mission-vision';
import AboutCoreValues from '@/components/about-core-values';
import AboutExpertise from '@/components/about-expertise';
import AboutApproach from '@/components/about-approach';
import AboutIndustries from '@/components/about-industries';
import AboutWhyChooseUs from '@/components/about-why-choose-us';
import AboutCta from '@/components/about-cta';

export const metadata: Metadata = {
    title: 'About Us | Quantamise Code - Building Intelligent Digital Solutions',
    description: 'Learn about Quantamise Code, a technology consulting firm specializing in AI, SaaS, cloud engineering, and modern web platforms. Discover our mission, vision, and expertise.',
};

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <Nav />

            <main>
                <AboutHero />
                <AboutWhoWeAre />
                <AboutMissionVision />
                <AboutCoreValues />
                <AboutExpertise />
                <AboutApproach />
                <AboutIndustries />
                <AboutWhyChooseUs />
                <AboutCta />
            </main>

            <Footer />
        </div>
    );
}
