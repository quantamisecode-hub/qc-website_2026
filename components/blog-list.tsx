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

interface WpCategory {
    id: number;
    name: string;
    count: number;
    slug: string;
}

export default function BlogList() {
    const [posts, setPosts] = useState<WpPost[]>([]);
    const [categories, setCategories] = useState<WpCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://quantamisecode.com/blogs/wp-json/wp/v2/categories?per_page=100");
                if (!res.ok) throw new Error("Failed to fetch categories");
                const data = await res.json();
                const filteredCategories = data.filter((cat: WpCategory) => cat.count > 0);
                setCategories(filteredCategories);
            } catch (err) {
                console.error("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []);

    // Fetch Posts
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Add a timestamp to prevent caching
                const timestamp = new Date().getTime();
                let API_URL = `https://quantamisecode.com/blogs/wp-json/wp/v2/posts?_embed&per_page=12&t=${timestamp}`;

                if (selectedCategory) {
                    API_URL += `&categories=${selectedCategory}`;
                }

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
    }, [selectedCategory]);

    const handleCategoryClick = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
    };

    return (
        <section id="latest-posts" className="py-20 px-6 sm:px-12 lg:px-20 max-w-[1400px] mx-auto w-full min-h-[400px]">

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
                <button
                    onClick={() => handleCategoryClick(null)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === null
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                        }`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                            : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

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
                    <p className="text-slate-500 font-medium">No articles found in this category.</p>
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="mt-4 text-indigo-600 font-medium hover:underline"
                    >
                        View all articles
                    </button>
                </div>
            )}
        </section>
    );
}
