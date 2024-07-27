import React from "react";
import {
  CiBadgeDollar,
  CiDeliveryTruck,
  CiMemoPad,
  CiMonitor,
  CiShoppingBasket,
  CiUser,
} from "react-icons/ci";

export default function WhatWeDo() {
  return (
    <section className="text-black container text-center py-20">
      <p className="text-primary font-bold" data-aos="fade-in">
        WHAT WE DO
      </p>
      <h1
        data-aos="fade-in"
        className="text-3xl sm:text-5xl font-bold title_we_offer relative after:-bottom-10 after:bg-slate-300"
      >
        We offer the <span className="span_through">best trucking services</span> in the country
      </h1>
      <div className="grid grid-cols-1 overflow-x-hidden md:grid-cols-2 md:grid-rows-3 grid-rows-6 mt-20 sm:mt-32 text-left gap-10">
        <div data-aos="fade-right" data-aos-delay="500" className="flex gap-5">
          <div>
            <CiDeliveryTruck size={70} className="text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl">Trucks for sale</h1>
            <p className="text-neutral-600">
              Discover our range of top-quality trucks available for purchase,
              designed to meet various business needs. Our trucks are reliable,
              efficient, and built to last.
            </p>
          </div>
        </div> 
        <div data-aos="fade-left" data-aos-delay="500" className="flex gap-5">
          <div>
            <CiShoppingBasket size={70} className="text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl">Truck engines for sale</h1>
            <p className="text-neutral-600">
              We provide a variety of truck engines that are powerful, durable,
              and suitable for different truck models. Our engines ensure
              optimal performance and longevity.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="750" className="flex gap-5">
          <div>
            <CiMemoPad size={70} className="text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl">Hire a truck</h1>
            <p className="text-neutral-600">
              Our truck hiring service offers a wide selection of trucks for
              various logistics needs. Whether for short-term or long-term use,
              we have the right truck for you.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="750" className="flex gap-5">
          <div>
            <CiUser size={70} className="text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl">Hire a truck driver</h1>
            <p className="text-neutral-600">
              Need a professional truck driver? We connect you with experienced
              and skilled drivers who ensure your goods are transported safely
              and efficiently.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="1000" className="flex gap-5">
          <div>
            <CiMonitor size={70} className="text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl">Learn truck driving</h1>
            <p className="text-neutral-600">
              Our comprehensive training programs teach you the skills needed to
              become a proficient truck driver. Learn from experts and get
              certified to drive heavy vehicles.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="1000" className="flex gap-5">
          <div>
            <CiBadgeDollar size={70} className="text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl">Truck parts for sale</h1>
            <p className="text-neutral-600">
              We offer a wide range of high-quality truck parts for various
              models and makes. Our parts are durable and reliable, ensuring
              your trucks remain in optimal condition and perform efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
