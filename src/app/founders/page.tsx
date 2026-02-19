"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FounderCard from '@/components/FounderCard';
import ContactCTA from '@/components/ContactCTA';

const founders = [
    {
        name: "Angeles Podrez",
        role: "Founder",
        bio: "A People and Recruiting leader with extensive experience supporting fast-growing AdTech teams. A trusted HR and recruiting partner to founders and leadership teams, bringing clarity, context, and a thoughtful approach to hiring.",
        linkedinUrl: "https://www.linkedin.com/in/angeles-pena-podrez/",
        imageAlt: "Angeles Podrez"
    },
    {
        name: "Ornella Castagnoli",
        role: "Co-founder",
        bio: "A tech recruiting professional with extensive experience in IT and technical hiring within consulting and high-growth environments. She specializes in end-to-end recruitment processes for complex technical roles and proactive headhunting.",
        linkedinUrl: "https://www.linkedin.com/in/ocastagnoli/",
        imageAlt: "Ornella Castagnoli"
    }
];

export default function FoundersPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 mesh-gradient overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                        Our Leadership
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
                        The Minds Behind Bloomside
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
                        Passionate recruiters dedicated to bridging the gap between elite talent and game-changing AdTech platforms.
                    </p>
                    <p className="max-w-3xl mx-auto text-slate-300 italic text-lg leading-relaxed border-l-2 border-brand-blue/30 pl-6 py-2">
                        "At Bloomside, we don't just fill seats. We believe in the power of community. Our mission is to connect talent in a way that creates long-term value and professional growth for everyone involved."
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {founders.map((founder, index) => (
                        <FounderCard
                            key={founder.name}
                            {...founder}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <ContactCTA />

            {/* Decorative background circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>
        </main>
    );
}
