import type { Metadata } from 'next';
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog-card";
import ServicesCTA from "@/components/services-cta";
import BlogsHero from "@/components/blogs-hero";
import RevealOnScroll from '@/components/reveal-on-scroll';

export const metadata: Metadata = {
    title: "Our Blog | Quantamise Code",
    description: "Explore the latest insights, trends, and tutorials on AI, software development, and digital transformation.",
};


import BlogList from "@/components/blog-list";

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Nav />
            {/* <br /><br /><br /> */} {/* Spacing handled by Hero padding */}

            <main>
                <RevealOnScroll>
                    <BlogsHero />
                </RevealOnScroll>

                {/* Blog Grid - Client Side Fetched */}
                <RevealOnScroll>
                    <BlogList />
                </RevealOnScroll>

                <RevealOnScroll>
                    <ServicesCTA />
                </RevealOnScroll>
            </main>

            <Footer />
        </div>
    );
}
