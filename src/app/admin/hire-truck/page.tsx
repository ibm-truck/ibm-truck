import AdminNav from "@/components/navigation/admin-nav";
import TruckCard from "@/components/truck-card";
import { Button } from "@/components/ui/button";
import { conditon } from "@/lib/types";
import { getTrucksHire } from "@/services/get";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const trucks = await getTrucksHire();
  return (
    <main>
      <AdminNav />
      <section className="container mt-10 px-4 mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Available Trucks for Hire
        </h1>
        <p className="text-neutral-700 mb-5">
          Truck added here will reflect in the truck for hire list on the public
          site
        </p>
        <Link href={"/admin/hire-truck/new"}>
          <Button className="mb-5">Add New</Button>
        </Link>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {trucks.length > 0 ? (
            trucks.map((truck, index) => (
              <TruckCard
                id={truck.id}
                deletefn
                key={index}
                name={truck.name}
                price={truck.price}
                imageUrl={truck.imageUrl}
                condition={truck.condition as conditon}
              />
            ))
          ) : (
            <div>No Truck for hire uploaded yet</div>
          )}
        </div>
      </section>
    </main>
  );
}
