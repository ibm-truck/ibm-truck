import ContactCard from "@/components/contact-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IDriver {
  name: string;
  imageUrl: string;
}

const drivers: IDriver[] = [
  {
    name: "Bassey John David",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs20EoPRsAX43jfj7gRBiveymqSCHev1tKvg&s",
  },
  {
    name: "Chukwudi Okeke",
    imageUrl:
      "https://explorepartsunknown.com/wp-content/uploads/2017/10/005-area-boys-nigeria-tom-saater-8821.jpg?quality=95&strip=color&w=1280&h=0",
  },
  {
    name: "Abdul Musa",
    imageUrl: "https://i.ytimg.com/vi/YF8TFqKiKdQ/mqdefault.jpg",
  },
  {
    name: "Tunde Adebayo",
    imageUrl:
      "https://explorepartsunknown.com/wp-content/uploads/2017/10/007-area-boys-nigeria-tom-saater-8909.jpg?quality=95&strip=color&w=625&h=0",
  },
  {
    name: "Emeka Nwankwo",
    imageUrl:
      "https://cdn.pmnewsnigeria.com/wp-content/uploads/2022/02/SAMO-AGBERO.jpg",
  },
];

export default function Page() {
  return (
    <main>
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
        <Link href={"/admin/hire-driver/new"}>
          <Button className="mb-5">Add New</Button>
        </Link>
        <div className="flex flex-col divide-y divide-neutral-400">
          {drivers.map((driver, index) => (
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
              <div>
                <h1>{driver.name}</h1>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
