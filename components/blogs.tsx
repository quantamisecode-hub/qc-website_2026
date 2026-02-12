"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./blog-card";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";

interface WpPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    date: string;
    slug: string;
    _embedded?: any;
}

export default function Blogs() {
    const [posts, setPosts] = useState<WpPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLatestPosts = async () => {
            // Add a timestamp to prevent caching
            const timestamp = new Date().getTime();
            const API_URL = `https://quantamisecode.com/blogs/wp-json/wp/v2/posts?_embed&per_page=3&t=${timestamp}`;

            try {
                const res = await fetch(API_URL, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    cache: 'no-store'
                });

                if (!res.ok) {
                    console.error(`[HomeBlogFetchError] Status: ${res.status}`);
                    return;
                }

                const data = await res.json();
                if (Array.isArray(data)) {
                    // strictly limit to 3 posts as requested
                    setPosts(data.slice(0, 3));
                }
            } catch (error) {
                console.error(`[HomeBlogFetchError] ${error instanceof Error ? error.message : 'Unknown error'}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLatestPosts();
    }, []);

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

                    <a
                        href="/blogs-post"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-[#6366f1] transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-[#6366f1]/20 group"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-20 min-h-[400px]">
                        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                        <span className="ml-3 text-slate-500 font-medium">Fetching latest insights...</span>
                    </div>
                ) : posts.length > 0 ? (
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
                        <a
                            href="/blogs-post"
                            className="text-[#6366f1] font-bold hover:underline underline-offset-4"
                        >
                            Go to Blog Page →
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
