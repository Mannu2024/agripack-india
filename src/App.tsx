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
import Roadmap from "./components/Roadmap";
import Investors from "./components/Investors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-agri-green/30 selection:text-agri-green-dark">
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
        <Roadmap />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
