"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, ArrowRight, Linkedin } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-card p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden group border border-brand-blue/20 hover:border-brand-blue/40 transition-colors duration-500 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] group-hover:bg-brand-blue/20 transition-colors duration-500" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />

                        <div className="relative z-10 text-center">
                            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
                                Let's Build Together
                            </span>

                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                                Ready to scale your <span className="text-gradient">AdTech team?</span>
                            </h2>

                            <p className="font-sans text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                                Whether you need specialized talent or want to build your recruitment operations from scratch, let's talk.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <motion.a
                                    href="https://calendly.com/angie-bloomside/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 group/btn"
                                >
                                    <Calendar size={22} />
                                    Book a Discovery Call
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </motion.a>

                                <motion.a
                                    href="mailto:angie@bloomside.co"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto glass-card border-brand-blue/20 hover:border-brand-blue/40 text-white font-bold py-5 px-10 rounded-2xl transition-all flex items-center justify-center gap-3"
                                >
                                    <Mail size={22} className="text-brand-blue" />
                                    angie@bloomside.co
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/company/bloomside"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto glass-card border-brand-blue/20 hover:border-[#0077b5]/50 text-white font-bold py-5 px-10 rounded-2xl transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Linkedin size={22} className="text-[#0077b5] group-hover:scale-110 transition-transform" />
                                    Follow us
                                </motion.a>
                            </div>
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
