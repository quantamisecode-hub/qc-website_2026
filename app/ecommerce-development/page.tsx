import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Industries from "@/components/industries";
import EcommerceHero from "@/components/ecommerce-hero";
import EcommerceTechStack from "@/components/ecommerce-tech-stack";
import EcommerceRoadmap from "@/components/ecommerce-roadmap";
import EcommerceFAQ from "@/components/ecommerce-faq";

export default function EcommerceDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Nav />
            <br /><br /><br />

            <EcommerceHero />
            <EcommerceTechStack />
            <EcommerceRoadmap />
            <Industries />
            <EcommerceFAQ />
            <CTA />

            <Footer />
        </main>
    );
}
