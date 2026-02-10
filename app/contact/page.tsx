import { Metadata } from 'next';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import ContactHero from '../../components/contact-hero';
import ContactGetInTouch from '../../components/contact-get-in-touch';
import ContactForm from '../../components/contact-form';
import ContactBusinessInfo from '../../components/contact-business-info';
import ContactServiceAreas from '../../components/contact-service-areas';
import ContactPrivacy from '../../components/contact-privacy';
import ContactFaq from '../../components/contact-faq';
import ContactCta from '../../components/contact-cta';
import RevealOnScroll from '../../components/reveal-on-scroll';

export const metadata: Metadata = {
    title: 'Contact Us | Quantamise Code - Let’s Discuss Your Project',
    description: 'Get in touch with Quantamise Code for expert software development services.',
    keywords: [
        'Contact Quantamise Code',
        'Hire developers',
        'Software consultation',
        'Web development inquiry',
        'App development quote'
    ],
    openGraph: {
        title: 'Contact Us | Quantamise Code',
        description: 'Ready to build something great? Contact our team for a free consultation.',
        url: 'https://www.quantamisecode.com/contact',
        siteName: 'Quantamise Code',
        images: [
            {
                url: '/assets/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact Quantamise Code',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.quantamisecode.com/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <Nav />

            <main>
                <RevealOnScroll>
                    <ContactHero />
                </RevealOnScroll>

                <RevealOnScroll>
                    <ContactGetInTouch />
                </RevealOnScroll>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20" id="contact-form">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <RevealOnScroll delay={0.2}>
                            <ContactForm />
                        </RevealOnScroll>
                        <div className="flex flex-col gap-10">
                            <RevealOnScroll delay={0.4}>
                                <ContactBusinessInfo />
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>

                <RevealOnScroll>
                    <ContactPrivacy />
                </RevealOnScroll>

                <RevealOnScroll>
                    <ContactFaq />
                </RevealOnScroll>

                <RevealOnScroll>
                    <ContactCta />
                </RevealOnScroll>
            </main>

            <Footer />
        </div>
    );
}
