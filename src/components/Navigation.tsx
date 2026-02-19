"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass px-8 py-3 rounded-full flex items-center space-x-8">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-brand-blue transition-colors">
          BLOOMSIDE
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-400">
          <Link href="/founders" className="hover:text-white transition-colors">Founders</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/talent" className="hover:text-white transition-colors">Talent</Link>
        </div>
        <motion.a
          href="https://calendly.com/angie-bloomside/30min"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-blue hover:bg-brand-blue-light text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
        >
          Get in Touch
        </motion.a>
      </div>
    </nav>
  );
}
