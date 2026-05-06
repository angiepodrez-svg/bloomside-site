"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import VideoSection from "@/components/VideoSection";
import ServiceCard from "@/components/ServiceCard";
import FounderCard from "@/components/FounderCard";
import { Users, Database, Settings, BarChart3 } from 'lucide-react';

const homeServices = [
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

const homeFounders = [
  {
    name: "Angeles Podrez",
    role: "Co-founder",
    bio: "A People and Recruiting leader with extensive experience building teams from the ground up. Former Head of People at Memorable, an AI company acquired by Reddit. A trusted HR and recruiting partner to founders and leadership teams, bringing clarity, context, and a thoughtful approach to hiring.",
    linkedinUrl: "https://www.linkedin.com/in/angeles-pena-podrez/",
    imageAlt: "Angeles Podrez",
    imageUrl: "/images/founders/angeles.jpeg",
    objectPosition: "center 10%",
    imageScale: 1.1
  },
  {
    name: "Ornella Castagnoli",
    role: "Co-founder",
    bio: "A recruiting professional with extensive experience in technical and non-technical hiring within consulting and high-growth environments. She specializes in end-to-end recruitment processes and proactive headhunting across a wide range of roles and seniority levels.",
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
      <VideoSection />

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
              TALENT SOLUTIONS
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
