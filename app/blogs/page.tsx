import type { Metadata } from 'next';
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog-card";
import ServicesCTA from "@/components/services-cta";
import BlogsHero from "@/components/blogs-hero";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Blog | Quantamise Code",
    description: "Explore the latest insights, trends, and tutorials on AI, software development, and digital transformation.",
};

// Define types for better type safety
interface WpPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    date: string;
    _embedded?: any;
}

// Function to sanitize input if needed, though mostly handled by WP API
// Secure fetch function with error handling and timeout
async function getPosts(): Promise<WpPost[]> {
    const API_URL = 'https://quantamisecode.com/blogs/wp-json/wp/v2/posts?_embed&per_page=12';

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

        const res = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any necessary API keys or tokens here if authenticated
            },
            next: {
                revalidate: 3600, // Revalidate every hour
                tags: ['posts']
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!res.ok) {
            // Log error securely server-side
            console.error(`[BlogFetchError] Status: ${res.status} ${res.statusText}`);
            return [];
        }

        const data = await res.json();

        // Basic validation to ensure we got an array
        if (!Array.isArray(data)) {
            console.error('[BlogFetchError] API response is not an array');
            return [];
        }

        return data;
    } catch (error) {
        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                console.error('[BlogFetchError] Request timed out');
            } else {
                console.error(`[BlogFetchError] ${error.message}`);
            }
        }
        return [];
    }
}

export default async function BlogsPage() {
    const posts = await getPosts();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Nav />
            {/* <br /><br /><br /> */} {/* Spacing handled by Hero padding */}

            <main>
                <BlogsHero />

                {/* Blog Grid */}
                <section id="latest-posts" className="py-20 px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto w-full min-h-[400px]">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <BlogCard key={post.id} post={post as any} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4 text-slate-400">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Content Unavailable</h3>
                            <p className="text-slate-500 max-w-md mx-auto">
                                We're currently unable to load the latest articles. Please try refreshing the page or check back later.
                            </p>
                        </div>
                    )}
                </section>

                <ServicesCTA />
            </main>

            <Footer />
        </div>
    );
}
