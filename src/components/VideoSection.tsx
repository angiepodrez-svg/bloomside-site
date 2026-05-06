"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                            The Bloomside Way
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Meet your <span className="text-gradient">talent partners</span>
                        </h2>
                        <p className="font-sans text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
                            We don't just fill seats. We connect the best talent with high-growth companies.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="glass-card p-2 md:p-4 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group border border-brand-blue/20 hover:border-brand-blue/40 transition-colors duration-500 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] transition-colors duration-500" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />

                        <div className="relative z-10 aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/t8Xd9sQSZ6o?autoplay=0&rel=0&modestbranding=1"
                                title="Bloomside Founders"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full object-cover"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
