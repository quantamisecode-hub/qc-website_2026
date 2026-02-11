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
import AboutFaq from '@/components/about-faq';
import AboutCta from '@/components/about-cta';

export const metadata: Metadata = {
    title: 'About Us | Quantamise Code - Building Intelligent Digital Solutions',
    description: 'Learn about Quantamise Code, a technology consulting firm specializing in AI, SaaS, cloud engineering, and modern web platforms. Discover our mission, vision, and expertise.',
    openGraph: {
        title: 'About Us | Quantamise Code - Building Intelligent Digital Solutions',
        description: 'Learn about Quantamise Code, a technology consulting firm specializing in AI, SaaS, cloud engineering, and modern web platforms. Discover our mission, vision, and expertise.',
        url: 'https://www.quantamisecode.com/about',
        siteName: 'Quantamise Code',
        images: [
            {
                url: '/assets/logo.png',
                width: 1200,
                height: 630,
                alt: 'About Quantamise Code',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.quantamisecode.com/about',
    },
};

export default function AboutPage() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us | Quantamise Code",
        "url": "https://www.quantamisecode.com/about",
        "description": "Learn about Quantamise Code, a technology consulting firm specializing in AI, SaaS, cloud engineering, and modern web platforms.",
        "publisher": {
            "@type": "Organization",
            "name": "Quantamise Code",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.quantamisecode.com/assets/logo.png"
            }
        }
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Quantamise Code",
        "url": "https://www.quantamisecode.com",
        "logo": "https://www.quantamisecode.com/assets/logo.png",
        "sameAs": [
            "https://www.linkedin.com/company/quantamise",
            "https://twitter.com/quantamise",
            "https://www.facebook.com/quantamise",
            "https://www.instagram.com/quantamise"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "080-29554662",
            "contactType": "customer service",
            "areaServed": "Global",
            "availableLanguage": "English"
        },
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "A-207, KSSIDC Complex, Phase 1, Electronics City",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560100",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Ground Floor, #5, Victoria Terrace, Gorkey Sadan",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "postalCode": "700020",
                "addressCountry": "IN"
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
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
                <AboutFaq />
                <AboutCta />
            </main>

            <Footer />
        </div>
    );
}
