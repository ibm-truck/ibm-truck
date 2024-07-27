import DriverCard from "@/components/driver-card";
import AdminNav from "@/components/navigation/admin-nav";
import { Button } from "@/components/ui/button";
import { getDrivers } from "@/services/get";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const drivers = await getDrivers();
  return (
    <main>
      <AdminNav />
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
          {drivers.length > 0 ? (
            drivers.map((driver, index) => (
              <DriverCard driver={driver} key={index} />
            ))
          ) : (
            <div>No driver data uplaoded yet</div>
          )}
        </div>
      </section>
    </main>
  );
}
