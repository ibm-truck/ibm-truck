import React from "react";
import TruckCard from "@/components/truck-card";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import ContactCard from "@/components/contact-card";
import { getTrucksSell } from "@/services/get";
import { conditon } from "@/lib/types";

export default async function Page() {
  const trucks = await getTrucksSell();

  return (
    <main className="bg-neutral-100">
      <header className="bg-black text-white">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="container mt-10 px-4 mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Available Trucks</h1>
        <p className="text-neutral-700 mb-5">
          This is our line-up of trucks available for sale, all have been
          properly refurbished and certified
        </p>
        <ContactCard />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {trucks.length > 0 ? (
            trucks.map((truck, index) => (
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
            <div>No truck uploaded yet</div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
