"use client";
import Footer from "@/components/navigation/footer";
import BestTrucksAvailable from "@/features/landing/best-trucks-available";
import Estimations from "@/features/landing/estimations";
import Hero from "@/features/landing/hero";
import WhatWeDo from "@/features/landing/what-we-do";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <Hero />
      <Estimations />
      <WhatWeDo />
      <BestTrucksAvailable />
      <Footer />
    </main>
  );
}
