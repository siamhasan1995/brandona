/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustryWins } from './components/IndustryWins';
import { SuccessStories } from './components/SuccessStories';
import { SmartAi } from './components/SmartAi';
import { WhyUs } from './components/WhyUs';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ServicesPage } from './ServicesPage';
import { ProjectsPage } from './ProjectsPage';
import { ContactPage } from './ContactPage';
import { AboutPage } from './AboutPage';
import { TeamPage } from './TeamPage';
import { BlogPage } from './BlogPage';
import { BlogDetailsPage } from './BlogDetailsPage';
import { CareerPage } from './CareerPage';
import { Reveal } from './components/GSAPWrapper';
import { FloatingNav } from './components/FloatingNav';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <Reveal><IndustryWins /></Reveal>
      <Reveal><SuccessStories /></Reveal>
      <Reveal><SmartAi /></Reveal>
      <Reveal><WhyUs /></Reveal>
      <Reveal><PortfolioGrid /></Reveal>
      <Reveal><Benefits /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Comparison /></Reveal>
      <Reveal><Testimonials /></Reveal>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-primary selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
      <Footer />
      <FloatingNav />
    </div>
  );
}

