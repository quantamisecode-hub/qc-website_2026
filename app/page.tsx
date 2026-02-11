import { Metadata } from "next";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import TrustedBy from "@/components/trusted-by";
import About from "@/components/about";
import Industries from "@/components/industries";
import Services from "@/components/services";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import WhyChooseUs from "@/components/why-choose-us";
import Blogs from "@/components/blogs";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

import Stats from "@/components/stats";
import RevealOnScroll from "@/components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Quantamise Code | Custom Software Development & AI Solutions",
  description: "Quantamise Code is a leading software development company specializing in Full-Stack, Mobile Apps, SaaS, AI Solutions, and IIoT. Build scalable, future-ready digital products with us.",
  keywords: [
    "Software development company",
    "Custom software development",
    "Mobile app development",
    "Full-stack development",
    "AI solutions provider",
    "SaaS development company",
    "IIoT solutions",
    "Web application development",
    "Hire dedicated developers",
    "Digital transformation services"
  ],
  openGraph: {
    title: "Quantamise Code | Custom Software Development & AI Solutions",
    description: "Partner with Quantamise Code for expert Full-Stack, Mobile, SaaS, and AI development services. Transforming ideas into scalable digital reality.",
    url: "https://www.quantamisecode.com",
    siteName: "Quantamise Code",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Quantamise Code - Software Development & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantamise Code | Custom Software Development & AI Solutions",
    description: "Expert software development services: AI, Mobile, SaaS, and Full-Stack. Build your future with Quantamise Code.",
    images: ["/assets/logo.png"],
  },
  alternates: {
    canonical: "https://www.quantamisecode.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Quantamise Code",
  "url": "https://www.quantamisecode.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.quantamisecode.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Quantamise Code",
  "url": "https://www.quantamisecode.com",
  "logo": "https://www.quantamisecode.com/assets/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210", // Replace with actaul number
    "contactType": "sales",
    "areaServed": "Global",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/quantamise",
    "https://twitter.com/quantamise",
    "https://www.facebook.com/quantamise",
    "https://www.instagram.com/quantamise"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide custom software development services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our solutions are fully customized based on business requirements. We don't believe in one-size-fits-all; we engineer software that fits your specific workflow and goals."
      }
    },
    {
      "@type": "Question",
      "name": "Do you follow secure coding practices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we implement industry-standard security and testing procedures. From secure architecture design to rigorous code reviews and penetration testing, security is embedded in our lifecycle."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we serve clients globally through remote and hybrid delivery models. Our team is experienced in collaborating across time zones to ensure smooth communication and delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide long-term maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer continuous support, updates, and optimization. We monitor your application's health, apply security patches, and ensure it adapts to evolving technologies."
      }
    },
    {
      "@type": "Question",
      "name": "How can I start a project with Quantamise Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us via our website to schedule a free consultation. We'll discuss your vision, analyze your requirements, and provide a tailored roadmap to bring your idea to life."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do you specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in Fintech, Healthcare, E-commerce, Logistics, and Real Estate. However, our agile development framework allows us to adapt to various other industries effectively."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer staff augmentation services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide dedicated development teams and staff augmentation services to help you scale your technical capabilities quickly without the overhead of hiring full-time employees."
      }
    },
    {
      "@type": "Question",
      "name": "What is your typical project timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary depending on complexity and scope. A simple MVP might take 4-6 weeks, while complex enterprise solutions can take several months. We provide a detailed timeline during the planning phase."
      }
    },
    {
      "@type": "Question",
      "name": "Do you sign a Non-Disclosure Agreement (NDA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We value confidentiality and intellectual property rights. We are happy to sign an NDA before discussing any sensitive project details."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use a modern tech stack including React, Next.js, Node.js, Python, and various cloud platforms like AWS and Azure, ensuring your software is scalable and future-proof."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <RevealOnScroll delay={0.1}>
        <Hero />
      </RevealOnScroll>
      <TrustedBy />


      <RevealOnScroll>
        <About />
      </RevealOnScroll>

      <RevealOnScroll>
        <Stats />
      </RevealOnScroll>

      <RevealOnScroll>
        <Industries />
      </RevealOnScroll>

      <RevealOnScroll>
        <Services />
      </RevealOnScroll>

      <RevealOnScroll>
        <Process />
      </RevealOnScroll>

      <RevealOnScroll>
        <TechStack />
      </RevealOnScroll>

      <RevealOnScroll>
        <WhyChooseUs />
      </RevealOnScroll>

      <RevealOnScroll>
        <Blogs />
      </RevealOnScroll>

      <RevealOnScroll>
        <FAQ />
      </RevealOnScroll>

      <RevealOnScroll>
        <CTA />
      </RevealOnScroll>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </div>
  );
}
