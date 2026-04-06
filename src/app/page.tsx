import React from 'react';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Features } from '../components/sections/Features';
import { ServiceArea } from '../components/sections/ServicesArea';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';
import { Footer } from '../components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <ServiceArea />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}