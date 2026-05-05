import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { BlogPost } from '@/lib/posts';

export default function BlogCard({ post }: { post: Omit<BlogPost, 'content'> }) {
    // Format the date for better readability if desired, or just display it
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="glass-card rounded-2xl p-6 h-full flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-blue/20">
                <h3 className="font-serif text-xl font-semibold mb-3 text-white group-hover:text-brand-blue-light transition-colors">
                    {post.title}
                </h3>

                <p className="font-sans text-slate-300 font-medium mb-6 flex-grow leading-relaxed text-xl">
                    {post.excerpt}
                </p>

                <div className="flex justify-between items-center text-sm mt-auto pt-4 border-t border-slate-800/60">
                    <span className="flex items-center text-slate-500 font-sans">
                        <Calendar size={14} className="mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </span>
                    <span className="text-brand-blue-light font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                        Read article &rarr;
                    </span>
                </div>
            </div>
        </Link>
    );
}
