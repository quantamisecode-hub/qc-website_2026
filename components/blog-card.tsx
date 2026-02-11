import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";


interface BlogPost {
    id: number;
    date: string;
    slug: string;
    link: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
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

export default function BlogCard({ post }: { post: BlogPost }) {
    const featuredImage =
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/assets/logo.png"; // Fallback image
    const authorName = post._embedded?.author?.[0]?.name || "Quantamise Code";

    return (
        <div className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
            {/* Image Section */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6">
                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#6366f1]" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#eb56f6]" />
                        <span>{authorName}</span>
                    </div>
                </div>

                {/* Title */}
                <h3
                    className="text-xl font-bold text-[#3A0F67] mb-3 line-clamp-2 group-hover:text-[#6366f1] transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                {/* Excerpt */}
                <div
                    className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                {/* Read More Link */}
                <div className="mt-auto">
                    <Link
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#eb56f6] hover:text-[#d035db] transition-colors"
                    >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
