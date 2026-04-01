"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import ServiceCard from "@/components/ServiceCard";
import FounderCard from "@/components/FounderCard";
import { Users, Database, Settings, BarChart3 } from 'lucide-react';

const homeServices = [
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

const homeFounders = [
  {
    name: "Angeles Podrez",
    role: "Co-founder",
    bio: "A People and Recruiting leader with extensive experience supporting fast-growing AdTech teams. A trusted HR and recruiting partner to founders and leadership teams, bringing clarity, context, and a thoughtful approach to hiring.",
    linkedinUrl: "https://www.linkedin.com/in/angeles-pena-podrez/",
    imageAlt: "Angeles Podrez",
    imageUrl: "/images/founders/angeles.jpeg",
    objectPosition: "center 10%",
    imageScale: 1.1
  },
  {
    name: "Ornella Castagnoli",
    role: "Co-founder",
    bio: "A tech recruiting professional with extensive experience in IT and technical hiring within consulting and high-growth environments. She specializes in end-to-end recruitment processes for complex technical roles and proactive headhunting.",
    linkedinUrl: "https://www.linkedin.com/in/ocastagnoli/",
    imageAlt: "Ornella Castagnoli",
    imageUrl: "/images/founders/orne.jpeg",
    objectPosition: "center 10%",
    imageScale: 1.1
  }
];

export default function Home() {
  return (
    <main className="mesh-gradient min-h-screen">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
              Talent Infrastructure
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
              Our Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {homeServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 border border-brand-blue/20 rounded-full">
              Our Leadership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-4">
              The Minds Behind Bloomside
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {homeFounders.map((founder, index) => (
              <FounderCard
                key={founder.name}
                {...founder}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
