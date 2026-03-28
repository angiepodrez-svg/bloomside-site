"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Database, Settings, BarChart3 } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ContactCTA from '@/components/ContactCTA';

const services = [
    {
        title: "Architecture Search",
        description: "End-to-end specialized headhunting for elite Programmatic, Product, and Data talent. We find the architects of your digital advertising ecosystem.",
        icon: Users,
    },
    {
        title: "The Bloomside Node",
        description: "A subscription-based model. Pay a monthly recurring fee to receive a curated, pre-vetted list of top-tier AdTech talent proactively, before you even need to hire.",
        icon: Database,
    },
    {
        title: "GTM & Tech Scaling Modules",
        description: "We build your recruiting machine from scratch. From ATS implementation and hiring manager training to designing end-to-end evaluation, interviewing, and closing processes. We scale your internal capabilities.",
        icon: Settings,
    },
    {
        title: "LATAM Talent Solutions",
        description: "Scale your teams efficiently by tapping into the high-performing AdTech talent pool in LATAM. We provide end-to-end recruitment support, helping you navigate local markets, salary benchmarks, and cultural fit to accelerate your regional growth.",
        icon: BarChart3,
    }
];

export default function ServicesPage() {
    return (
        <main id="services" className="min-h-screen pt-32 pb-20 mesh-gradient relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                        Our Expertise
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
                        Talent Infrastructure
                    </h1>
                    <p className="font-sans max-w-2xl mx-auto text-lg text-slate-400">
                        Strategic modules designed to scale your AdTech engine with domain precision, speed, and structural depth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <ContactCTA />

            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
        </main>
    );
}
