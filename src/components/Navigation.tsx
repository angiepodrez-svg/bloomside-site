"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-10 py-4 rounded-full flex items-center space-x-10">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-brand-blue transition-colors">
          BLOOMSIDE
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-base font-medium text-slate-400">
          <Link href="/founders" className="hover:text-white transition-colors">Founders</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/talent" className="hover:text-white transition-colors">Talent</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        </div>
        <motion.a
          href="https://calendly.com/angie-bloomside/30min"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-blue hover:bg-brand-blue-light text-white px-6 py-2.5 rounded-full text-base font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
        >
          Get in Touch
        </motion.a>
      </div>
    </nav>
  );
}
