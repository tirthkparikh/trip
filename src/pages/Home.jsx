import React from "react";
import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <FeaturedDestinations />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
