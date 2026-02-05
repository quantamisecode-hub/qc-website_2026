import Nav from "@/components/nav";
import Hero from "@/components/hero";
import InfinityMarquee from "@/components/infinity-marquee";
import TrustedBy from "@/components/trusted-by";
import About from "@/components/about";
import Industries from "@/components/industries";
import Services from "@/components/services";
import ServicesShowcase from "@/components/services-showcase";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import WhyChooseUs from "@/components/why-choose-us";
import Blogs from "@/components/blogs";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

import Stats from "@/components/stats";
import RevealOnScroll from "@/components/reveal-on-scroll";

export default function Home() {
  return (
    <div className="bg-white">
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

      <RevealOnScroll delay={0.2}>
        <InfinityMarquee />
      </RevealOnScroll>

      <RevealOnScroll>
        <Services />
      </RevealOnScroll>

      {/* <RevealOnScroll>
        <ServicesShowcase />
      </RevealOnScroll> */}

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
