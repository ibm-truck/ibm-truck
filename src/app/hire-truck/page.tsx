import React from "react";
import TruckCard from "@/components/truck-card";
import Navbar from "@/components/navigation/navbar";
import { conditon } from "@/lib/types";
import Footer from "@/components/navigation/footer";
import ContactCard from "@/components/contact-card";

interface Itruck {
  condition: conditon;
  name: string;
  price: number;
  imageUrl: string;
}

const trucks: Itruck[] = [
  {
    condition: "Used",
    name: "Volvo FH16",
    price: 120000,
    imageUrl:
      "https://nannews.ng/wp-content/uploads/2023/11/E987CEC7-BD7F-416A-997B-7B04A389BC6F.jpeg",
  },
  {
    condition: "New",
    name: "Scania R Series",
    price: 115000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKthwTC-GWZvVgbdHI1QslNmLAopAvXbhfg&s",
  },
  {
    condition: "New",
    name: "Mercedes-Benz Actros",
    price: 130000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiUQBPrCFPK6DFd-CcVuglgfCH4kMHAT-yQ&s",
  },
  {
    condition: "Used",
    name: "MAN TGX",
    price: 125000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkkStAmtzBxzkDUO8ZvGyZD47uvzg7T-Q-g&s",
  },
  {
    condition: "Used",
    name: "DAF XF",
    price: 110000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuG6lSkmMPDwbztyeVD17Rfv2GQ3j1CUo4iaY4a_zmlzgH0L5ZDhXFAo8WhahYq0B3YqI&usqp=CAU",
  },
];

export default function Page() {
  return (
    <main className="bg-neutral-100">
      <header className="bg-black text-white">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="container mt-10 px-4 mb-10">
        <h1 data-aos="fade-right" className="text-2xl sm:text-3xl font-bold">Trucks for Hire</h1>
        <p data-aos="fade-right" className="text-neutral-700 mb-5">
          These versatile trucks are available for lease and are perfectly
          suited for a wide range of jobs. Whether you need a reliable vehicle
          for long-haul transportation, construction, or specialized freight
          services, our fleet has the ideal solution.
        </p>
        <ContactCard />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {trucks.map((truck, index) => (
            <TruckCard
              key={index}
              name={truck.name}
              price={truck.price}
              imageUrl={truck.imageUrl}
              condition={truck.condition}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
