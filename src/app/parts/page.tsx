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
    name: "Volvo Engine",
    price: 120000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4N7dqmEf11QftjFjaS1FrI-3U3Or7jaucfg&s",
  },
  {
    condition: "New",
    name: "Mercedes-Benz OM366A engine",
    price: 115000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qXXdKvRDJy6_bUH_dY105vqf0WtjsHsxaAungBrUOX5qZOjTfdmXPPG2TEpEcZWToLk&usqp=CAU",
  },
  {
    condition: "New",
    name: "OM366A Engine Mercedes-Benz",
    price: 130000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYyEPL7KzfgbeJJIr31x1RRG51akAF7fYoq1zxyfLE7jLP27noFsJRq0oCYMJOOre296I&usqp=CAU",
  },
  {
    condition: "Used",
    name: "Quality Truck Tires Brand New",
    price: 125000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpozCxrYnbTRmuJrL290aJBZ9yigHNi76yJg&s",
  },
  {
    condition: "Used",
    name: "Truck Headlamp Tail Full Light",
    price: 110000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1I7TAkB06DVuN82trf11ixYE2ARWHQanlw&s",
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
        <h1 data-aos="fade-right" className="text-2xl sm:text-3xl font-bold">
          Available Truck Parts
        </h1>
        <p data-aos="fade-right" className="text-neutral-700 mb-5">
          The parts were sourced from a reputable source and is guranteed a
          lengthy lifespan, used parts have been vetted too
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
