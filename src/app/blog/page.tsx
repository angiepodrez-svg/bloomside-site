import { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
    title: 'Blog | Bloomside',
    description: 'Insights and strategies for building elite AdTech teams.',
};

export default function BlogPage() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen pt-32 pb-24 relative overflow-hidden" id="blog">
            {/* Background Effects */}
            <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent opacity-50" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        <span className="text-gradient hover-glow">Hiring Insights.</span>
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl">
                        Trends, talent, and what's actually happening in recruiting right now.
                    </p>
                </div>

                {allPostsData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPostsData.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 glass-card rounded-2xl">
                        <p className="text-xl text-slate-400 font-sans">No articles published yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </main>
    );
}
