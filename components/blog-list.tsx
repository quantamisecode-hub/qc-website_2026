"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/blog-card";
import { AlertCircle, Loader2 } from "lucide-react";

interface WpPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    link: string;
    date: string;
    slug: string;
    _embedded?: any;
}

export default function BlogList() {
    const [posts, setPosts] = useState<WpPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch Posts
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Add a timestamp to prevent caching
                const timestamp = new Date().getTime();
                const API_URL = `https://www.quantamisecode.com/blogs/wp-json/wp/v2/posts?_embed&per_page=12&t=${timestamp}`;

                const res = await fetch(API_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error(`Failed to fetch posts: ${res.statusText}`);
                }

                const data = await res.json();

                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    throw new Error("Invalid API response format");
                }
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load articles.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section id="latest-posts" className="py-20 px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto w-full min-h-[400px]">
            {isLoading ? (
                <div className="flex justify-center items-center py-20 min-h-[400px]">
                    <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                    <span className="ml-3 text-slate-500 font-medium">Loading articles...</span>
                </div>
            ) : error ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4 text-slate-400">
                        <AlertCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Content Unavailable</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                        {error}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-6 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            ) : posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-50 rounded-2xl">
                    <p className="text-slate-500 font-medium">No articles found.</p>
                </div>
            )}
        </section>
    );
}
