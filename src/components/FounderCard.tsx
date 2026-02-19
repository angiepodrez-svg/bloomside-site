"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface FounderCardProps {
    name: string;
    role: string;
    bio: string;
    linkedinUrl: string;
    imageAlt: string;
    index: number;
}

export default function FounderCard({ name, role, bio, linkedinUrl, imageAlt, index }: FounderCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group transition-all hover:border-brand-blue/30"
        >
            <div className="relative mb-6">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-brand-blue/20 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:border-brand-blue/50 transition-colors">
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-3xl font-bold text-slate-600">
                        {name.split(' ').map(n => n[0]).join('')}
                    </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-blue p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 text-white">{name}</h3>
            <p className="text-brand-blue-light text-sm font-semibold mb-4 tracking-wide uppercase">{role}</p>

            <p className="text-slate-400 leading-relaxed max-w-sm">
                {bio}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800/50 w-full">
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-brand-blue transition-colors"
                >
                    View LinkedIn Profile
                </a>
            </div>
        </motion.div>
    );
}
