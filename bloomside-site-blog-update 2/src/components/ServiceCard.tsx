"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="glass-card p-8 rounded-3xl flex flex-col h-full group hover:border-brand-blue/40 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
        >
            <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 border border-brand-blue/20 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300">
                <Icon className="text-brand-blue w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl font-bold mb-4 text-white group-hover:text-brand-blue-light transition-colors">
                {title}
            </h3>

            <p className="text-slate-400 leading-relaxed font-sans text-[15px]">
                {description}
            </p>

            <div className="mt-auto pt-8">
                <a 
                    href="#contact"
                    className="text-sm font-bold tracking-wider text-brand-blue hover:text-brand-blue-light transition-colors flex items-center gap-2 uppercase cursor-pointer"
                >
                    Learn More
                    <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        →
                    </motion.span>
                </a>
            </div>
        </motion.div>
    );
}
