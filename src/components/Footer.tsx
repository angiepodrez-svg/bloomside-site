"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-bold text-white shadow-lg shadow-brand-blue/20">
                            B
                        </div>
                        <span className="font-serif text-xl font-bold tracking-tight text-white">
                            BLOOMSIDE
                        </span>
                    </div>

                    <div className="flex items-center gap-8">
                        <motion.a
                            href="https://www.linkedin.com/company/bloomside"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-900 group-hover:bg-[#0077b5] transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <span className="text-sm font-semibold">Follow us on LinkedIn</span>
                        </motion.a>
                    </div>

                    <div className="text-slate-500 text-sm font-medium">
                        © {new Date().getFullYear()} Bloomside. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
