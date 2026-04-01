import { Metadata } from 'next';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// Note: We use the @tailwindcss/typography plugin to automatically style the markdown content
// by wrapping it in the "prose" class.

// This helps Next.js statically generate the blog post routes at build time
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const postData = getPostData(resolvedParams.slug);
    if (!postData) {
        return { title: 'Post Not Found | Bloomside' };
    }
    return {
        title: `${postData.title} | Bloomside`,
        description: postData.excerpt,
    };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const postData = getPostData(resolvedParams.slug);

    if (!postData) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-24 relative">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-brand-blue/10 rounded-full blur-[128px] pointer-events-none" />

            <article className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="mb-12">
                    <Link href="/blog" className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors font-sans mb-8">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to all articles
                    </Link>

                    <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                        {postData.title}
                    </h1>

                    <div className="flex items-center text-slate-400 font-sans border-b border-slate-800/60 pb-8">
                        <Calendar size={16} className="mr-2" />
                        <time dateTime={postData.date}>
                            {new Date(postData.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg prose-slate max-w-none 
                        prose-headings:font-serif prose-headings:font-bold 
                        prose-a:text-brand-blue-light hover:prose-a:text-brand-blue
                        prose-img:rounded-xl prose-img:shadow-2xl">
                    <ReactMarkdown>
                        {postData.content}
                    </ReactMarkdown>
                </div>
            </article>
        </main>
    );
}
