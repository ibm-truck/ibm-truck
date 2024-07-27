import React from "react";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import Image from "next/image";
import ContactCard from "@/components/contact-card";
import { getDrivers } from "@/services/get";
import { Trash } from "lucide-react";

export default async function Page() {
  const drivers = await getDrivers();

  return (
    <main className="bg-neutral-100">
      <header className="bg-black text-white">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="container mt-10 px-4 mb-10">
        <h1 data-aos="fade-right" className="text-2xl sm:text-3xl font-bold">
          Driver for Hire
        </h1>
        <p data-aos="fade-right" className="text-neutral-700">
          Our professional drivers are available for hire, offering expertise
          and reliability for all your transportation needs. Whether for
          short-term projects or long-term commitments, our drivers ensure safe
          and timely deliveries every time.
        </p>
        <ContactCard />
        <div className="flex flex-col divide-y divide-neutral-400">
          {drivers.length > 0 ? (
            drivers.map((driver, index) => (
              <article key={index} className="flex gap-3 p-1">
                <div className="h-[100px] w-[100px] relative">
                  <Image
                    src={driver.imageUrl}
                    alt="Driver Image"
                    fill
                    unoptimized
                    className="relative h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between">
                  <h1>{driver.name}</h1>
                </div>
              </article>
            ))
          ) : (
            <div>No driver info uploaded yet</div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
