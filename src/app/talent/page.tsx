"use client";

import React from 'react';
import { motion } from 'framer-motion';
import TalentForm from '@/components/TalentForm';
import ContactCTA from '@/components/ContactCTA';

export default function TalentPage() {
    return (
        <main id="talent" className="min-h-screen pt-40 md:pt-48 pb-20 mesh-gradient relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                            Advance Your Career
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
                            Your career, powered by community.
                        </h1>
                        <p className="font-sans max-w-2xl mx-auto text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed mb-8">
                            We don't just match candidates. We build a community of high-performance talent across Tech, Data, Marketing, Product, Sales, Account Management, and Design.
                        </p>
                        <div className="max-w-4xl mx-auto text-slate-100 italic text-4xl md:text-5xl leading-relaxed border-l-4 border-brand-blue/50 pl-8 py-6 my-16 text-left">
                            <span className="block mb-4 font-bold text-brand-blue uppercase tracking-widest text-sm">The Bloomside Way</span>
                            "When you join our community, you get access to a global network of companies actively looking for people like you. We know your profile before a role even opens up."
                        </div>
                        <p className="font-sans max-w-2xl mx-auto text-base md:text-lg text-slate-400 font-normal leading-relaxed mb-20">
                            When you join our community, you aren't just entering a database. You're being represented by a team that proactively presents your profile to the right companies at the right time.
                        </p>
                    </motion.div>

                    <TalentForm />
                </div>
            </div>

            <ContactCTA />

            {/* Background radial effects */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
        </main>
    );
}
