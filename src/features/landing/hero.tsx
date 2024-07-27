import Navbar from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaAward } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-[url('../assets/hero-trucks.webp')] h-[700px] md:h-[1000px] relative bg-top bg-cover">
      <header className="text-white container">
        <Navbar />
        <div
          className="text-center mt-20 md:mt-40 space-y-5"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="sm:text-base text-sm px-4 py-2 rounded-full bg-blue-300 text-blue-900 inline-flex font-semibold items-center gap-2">
            <FaAward />
            <p>Your One-Stop Trucking Solution</p>
          </div>
          <h1 className="sm:text-4xl text-3xl font-semibold">
            Your Ultimate <span className="fancy">Trucking</span> Hub
          </h1>
          <p>
            Find and Purchase{" "}
            <span className="yellow_line">Quality Trucks</span> & Engines, Hire
            Reliable Trucks & Drivers, and Master Truck Driving with Our Expert
            Training. Whether you&apos;re <br />
            expanding your fleet or starting a career, we have{" "}
            <span className="underlined underline-clip">everything</span> you
            need
          </p>
          <Link href={"/trucks"}>
            <Button
              variant={"outline"}
              className="bg-transparent mt-2 rounded-lg py-5 px-10 transition-all duration-300"
            >
              Buy a Truck
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}
