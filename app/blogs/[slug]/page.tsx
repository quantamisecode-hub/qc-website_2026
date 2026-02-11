import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesCTA from "@/components/services-cta";

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

async function getPost(slug: string): Promise<WpPost | null> {
    const API_URL = `https://quantamisecode.com/blogs/wp-json/wp/v2/posts?slug=${slug}&_embed`;

    try {
        const res = await fetch(API_URL, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) return null;

        const posts = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error('[BlogPostFetchError]', error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title.rendered} | Quantamise Code`,
        description: post.content.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const authorName = post._embedded?.author?.[0]?.name || 'Quantamise Code';
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-white font-sans">
            <Nav />

            <main className="pt-32">
                {/* Clean Header Section */}
                <div className="max-w-4xl mx-auto px-6 mb-12">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:text-indigo-500 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Insights
                    </Link>

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
                            <span>
                                {(() => {
                                    const words = post.content.rendered.replace(/<[^>]*>/g, '').trim().split(/\s+/).length;
                                    return Math.ceil(words / 200);
                                })()} min read
                            </span>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <article className="max-w-4xl mx-auto px-6 pb-24">
                    <div
                        className="prose prose-lg md:prose-xl max-w-none 
                            prose-headings:text-[#3A0F67] prose-headings:font-extrabold
                            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                            prose-a:text-indigo-600 prose-a:font-bold hover:prose-a:text-indigo-500
                            prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-12
                            prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                            prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-slate-700"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />

                    <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-200">
                                QC
                            </div>
                            <div>
                                <p className="font-bold text-[#3A0F67] text-lg">By {authorName}</p>
                                <p className="text-slate-500">Transforming ideas into digital reality.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/blogs"
                                className="px-8 py-4 bg-slate-100 rounded-full font-bold text-slate-700 hover:bg-slate-200 transition-all active:scale-95"
                            >
                                More Articles
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                            >
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </article>

                <ServicesCTA />
            </main>

            <Footer />
        </div>
    );
}
