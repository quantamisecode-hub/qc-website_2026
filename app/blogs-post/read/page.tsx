"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Loader2, AlertCircle } from "lucide-react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";
import logo from "@/public/assets/logo.png";
import RevealOnScroll from "@/components/reveal-on-scroll";

interface WpPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    slug: string;
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        author?: Array<{
            name: string;
        }>;
    };
}

function BlogContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const slug = searchParams.get("slug");

    const [post, setPost] = useState<WpPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) {
            setIsLoading(false);
            return;
        }

        const fetchPost = async () => {
            try {
                // Add timestamp to prevent caching
                const timestamp = new Date().getTime();
                const API_URL = `https://www.quantamisecode.com/blogs/wp-json/wp/v2/posts?slug=${slug}&_embed&t=${timestamp}`;

                const res = await fetch(API_URL, {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch post");
                }

                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    setPost(data[0]);
                    // Update document title for basic UX (SEO limited in pure CSR on static export)
                    document.title = `${data[0].title.rendered} | Quantamise Code`;
                } else {
                    setError("Post not found");
                }
            } catch (err) {
                console.error("Error fetching blog post:", err);
                setError("Failed to load article");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (isLoading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[60vh]">
                <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
                <p className="text-slate-500 font-medium">Loading article...</p>
            </div>
        );
    }

    if (!slug || error || !post) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[60vh] px-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-6 text-slate-400">
                    <AlertCircle className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mb-4">Article Not Found</h1>
                <p className="text-slate-500 max-w-md mx-auto mb-8">
                    The article you are looking for does not exist or could not be loaded.
                </p>
                <a
                    href="/blogs-post"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors"
                >
                    Back to Insights
                </a>
            </div>
        );
    }

    const authorName = post._embedded?.author?.[0]?.name || "Quantamise Code";
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const words = post.content.rendered.replace(/<[^>]*>/g, "").trim().split(/\s+/).length;
    const readTime = Math.ceil(words / 200);

    return (
        <main className="pt-32 wp-content">
            {/* Clean Header Section */}
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-6 mb-12">
                    <a
                        href="/blogs-post"
                        className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:text-indigo-500 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Insights
                    </a>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3A0F67] mb-8 leading-tight tracking-tight"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div className="flex flex-wrap items-center gap-8 text-slate-500 text-sm md:text-base font-medium pb-8 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-indigo-500" />
                            <span>{authorName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-purple-500" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-emerald-500" />
                            <span>{readTime} min read</span>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Article Content */}
            <RevealOnScroll>
                <article className="max-w-4xl mx-auto px-6 pb-24">
                    <div
                        className="prose prose-lg md:prose-xl max-w-none 

  prose-headings:text-[#1a1a1a] 
  prose-headings:font-semibold 
  prose-headings:tracking-tight

  prose-h1:text-6xl md:prose-h1:text-7xl prose-h1:mb-14
  prose-h2:text-5xl md:prose-h2:text-6xl prose-h2:mt-24 prose-h2:mb-12
  prose-h3:text-4xl md:prose-h3:text-5xl prose-h3:mt-16 prose-h3:mb-10
  prose-h4:text-3xl md:prose-h4:text-4xl prose-h4:mt-12 prose-h4:mb-8

  prose-p:text-[#333333] prose-p:leading-relaxed prose-p:mb-10 prose-p:text-left

  prose-a:text-indigo-600 prose-a:font-bold hover:prose-a:text-indigo-500 prose-a:no-underline hover:prose-a:underline

  prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-20 prose-img:mx-auto

  prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none

  prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-slate-50 prose-blockquote:py-8 prose-blockquote:px-12 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:my-14

  prose-ul:list-none prose-ul:pl-0 prose-ul:mb-10
  prose-li:relative prose-li:pl-8 prose-li:text-[#333333] prose-li:mb-4
  prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.6em] prose-li:before:w-3 prose-li:before:h-3 prose-li:before:border-2 prose-li:before:border-slate-400 prose-li:before:rounded-full"
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered
                                .replace(/<p>(What Is .*?)<\/p>/g, "<h2>$1</h2>")
                                .replace(/<p>(Where .*?)<\/p>/g, "<h2>$1</h2>")
                                .replace(/<p>(How .*?)<\/p>/g, "<h2>$1</h2>")
                        }}

                    />


                    <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-5">
                            <Image
                                src={logo}
                                alt="Quantamise Code Logo"
                                width={60}
                                height={60}
                                className="object-contain"
                            />

                            <div>
                                <p className="font-bold text-[#3A0F67] text-lg">By {authorName}</p>
                                <p className="text-slate-500">Transforming ideas into digital reality.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/blogs-post"
                                className="px-8 py-4 bg-slate-100 rounded-lg font-bold text-slate-700 hover:bg-slate-200 transition-all active:scale-95"
                            >
                                More Articles
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                            >
                                Start a Conversation
                            </a>
                        </div>
                    </div>
                </article>
            </RevealOnScroll>

            <RevealOnScroll>
                <ServicesCTA />
            </RevealOnScroll>
        </main>
    );
}

export default function BlogReaderPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Nav />
            <Suspense fallback={
                <div className="flex justify-center items-center min-h-screen">
                    <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                </div>
            }>
                <BlogContent />
            </Suspense>
            <Footer />
        </div>
    );
}
