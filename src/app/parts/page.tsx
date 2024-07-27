import React from "react";
import TruckCard from "@/components/truck-card";
import Navbar from "@/components/navigation/navbar";
import { conditon } from "@/lib/types";
import Footer from "@/components/navigation/footer";
import ContactCard from "@/components/contact-card";
import { getParts } from "@/services/get";

export default async function Page() {
  const parts = await getParts();
  return (
    <main className="bg-neutral-100">
      <header className="bg-black text-white">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="container mt-10 px-4 mb-10">
        <h1 data-aos="fade-right" className="text-2xl sm:text-3xl font-bold">
          Available Truck Parts
        </h1>
        <p data-aos="fade-right" className="text-neutral-700 mb-5">
          The parts were sourced from a reputable source and is guranteed a
          lengthy lifespan, used parts have been vetted too
        </p>
        <ContactCard />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {parts.length > 0 ? (
            parts.map((truck, index) => (
              <TruckCard
                id={truck.id}
                key={index}
                name={truck.name}
                price={truck.price}
                imageUrl={truck.imageUrl}
                condition={truck.condition as conditon}
              />
            ))
          ) : (
            <div>No truck part uploaded yet</div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
