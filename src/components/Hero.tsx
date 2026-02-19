"use client";

import React from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden mesh-gradient">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[96px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                        The Future of AdTech Recruitment
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-gradient">
                        AdTech Talent, <br />
                        Decoded.
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                        Beyond fast hiring, we build lasting AdTech communities. Bridging the gap between elite Programmatic/Product talent and world-class AdTech platforms.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/services#services" className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 block text-center">
                            Hire Elite Talent
                        </Link>
                        <Link href="/talent#talent" className="w-full sm:w-auto px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all block text-center">
                            I'm a Candidate
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative "Data Flow" elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
        </section>
    );
}
