import React from "react";
import BlogCard from "./blog-card";
import { AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface WpPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    date: string;
    slug: string;
    _embedded?: any;
}

async function getLatestPosts(): Promise<WpPost[]> {
    const API_URL = 'https://quantamisecode.com/blogs/wp-json/wp/v2/posts?_embed&per_page=3';

    try {
        const res = await fetch(API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) {
            console.error(`[HomeBlogFetchError] Status: ${res.status}`);
            return [];
        }

        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error(`[HomeBlogFetchError] ${error instanceof Error ? error.message : 'Unknown error'}`);
        return [];
    }
}

export default async function Blogs() {
    const posts = await getLatestPosts();

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#3A0F67] mb-6 leading-tight">
                            Latest <span className="text-[#6366f1]">Insights & Trends</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Stay updated with our latest thoughts on AI, software engineering, and digital transformation.
                            We share knowledge to help you scale faster.
                        </p>
                    </div>

                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-[#6366f1] transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-[#6366f1]/20 group"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post as any} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 text-slate-400">
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">Fresh Content Loading</h3>
                        <p className="text-slate-500 max-w-md mx-auto mb-8">
                            We are preparing some amazing insights for you. Please check back in a few moments or visit our dedicated blog page.
                        </p>
                        <Link
                            href="/blogs"
                            className="text-[#6366f1] font-bold hover:underline underline-offset-4"
                        >
                            Go to Blog Page →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
