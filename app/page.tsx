import Nav from "@/components/nav";
import Hero from "@/components/hero";
import TrustedBy from "@/components/trusted-by";
import About from "@/components/about";
import Industries from "@/components/industries";
import Services from "@/components/services";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import WhyChooseUs from "@/components/why-choose-us";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <TrustedBy />
      <About />
      <Industries />
      <Services />
      <Process />
      <TechStack />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
