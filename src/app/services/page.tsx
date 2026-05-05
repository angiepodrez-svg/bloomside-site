"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Database, Settings, BarChart3 } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ContactCTA from '@/components/ContactCTA';

const services = [
    {
        title: "End-to-End Recruiting",
        description: "We learn your company's stage, the role you're looking for, and how it fits your team. Then we find the right person.",
        icon: Users,
    },
    {
        title: "Talent Subscription",
        description: "Always have an open role? Subscribe and receive a curated shortlist of vetted candidates every week, without starting from scratch each time.",
        icon: Database,
    },
    {
        title: "LATAM Team Building",
        description: "For international companies looking to hire in LATAM. We help you build your team and set up your entire hiring structure from the ground up.",
        icon: Settings,
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
                        TALENT SOLUTIONS
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
                        Talent Solutions
                    </h1>
                    <p className="font-sans max-w-2xl mx-auto text-lg text-slate-400">
                        Every client gets access to our candidate community. We're constantly interviewing profiles across Tech, Data, Marketing, Product, Sales, Account Management, Design, and more.
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
