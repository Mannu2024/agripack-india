/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import Market from "./components/Market";
import WhyUs from "./components/WhyUs";
import Impact from "./components/Impact";
import BusinessModel from "./components/BusinessModel";
import TechStack from "./components/TechStack";
import Roadmap from "./components/Roadmap";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Investors from "./components/Investors";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#0A0A0F", color: "#A8B2C4" }}>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Products />
        <HowItWorks />
        <Market />
        <WhyUs />
        <Impact />
        <BusinessModel />
        <TechStack />
        <Roadmap />
        <Testimonials />
        <Pricing />
        <Investors />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
