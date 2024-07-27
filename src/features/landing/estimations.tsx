/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useRef } from "react";
import { FaLaughBeam } from "react-icons/fa";
import { FaAward, FaTruckFast } from "react-icons/fa6";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { CountUp } from "countup.js";

export default function Estimations() {
  const awardRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    AOS.init(); // Initialize AOS

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const awardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const awardCount = new CountUp("awardsCount", 24);
          if (!awardCount.error) {
            awardCount.start();
          }
          awardObserver.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, options);

    const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const servicesCount = new CountUp("servicesCount", 2500);
          if (!servicesCount.error) {
            servicesCount.start();
          }
          servicesObserver.unobserve(entry.target);
        }
      });
    }, options);

    const clientsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const clientsCount = new CountUp("clientsCount", 123121);
          if (!clientsCount.error) {
            clientsCount.start();
          }
          clientsObserver.unobserve(entry.target);
        }
      });
    }, options);

    if (awardRef.current) awardObserver.observe(awardRef.current);
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    if (clientsRef.current) clientsObserver.observe(clientsRef.current);

    // Cleanup function to unobserve elements
    return () => {
      if (awardRef.current) awardObserver.unobserve(awardRef.current);
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
      if (clientsRef.current) clientsObserver.unobserve(clientsRef.current);
    };
  }, []);

  return (
    <section className="bg-primary py-20 text-white">
      <div className="container">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-5xl font-bold text-center pb-10 border-b border-b-neutral-100/50"
        >
          IBM has served a wide range of customers across the country
        </h2>
        <h2 className="text-base text-center mt-10 text-blue-950">
          IBM Trucking Company has been proudly operating in Tampa, Florida for the
          past two years, delivering exceptional quality service across the
          country. Our commitment to <span className="rainbow-energetic">excellence</span> and customer satisfaction has
          made us a trusted partner for countless businesses and individuals.
        </h2>
        <div className="flex flex-wrap mt-10 justify-center gap-5">
          <div
            ref={awardRef} // Attach ref for observer
            className="border rounded-md h-[300px] w-[300px] grid place-content-center text-center"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            <div className="mb-10">
              <FaAward size={60} className="mx-auto" />
            </div>
            <h1 className="text-5xl font-bold" id="awardsCount">
              0
            </h1>
            <p className="text-2xl text-blue-950 font-bold">Awards Received</p>
          </div>
          <div
            ref={servicesRef} // Attach ref for observer
            className="border rounded-md h-[300px] w-[300px] grid place-content-center text-center"
            data-aos-delay="1000"
            data-aos="fade-up"
          >
            <div className="mb-10">
              <FaTruckFast size={60} className="mx-auto" />
            </div>
            <h1 className="text-5xl font-bold" id="servicesCount">
              0
            </h1>
            <p className="text-2xl text-blue-950 font-bold">
              Services Rendered
            </p>
          </div>
          <div
            ref={clientsRef} // Attach ref for observer
            className="border rounded-md h-[300px] w-[300px] grid place-content-center text-center"
            data-aos-delay="1500"
            data-aos="fade-up"
          >
            <div className="mb-10">
              <FaLaughBeam size={60} className="mx-auto" />
            </div>
            <h1 className="text-5xl font-bold" id="clientsCount">
              0
            </h1>
            <p className="text-2xl text-blue-950 font-bold">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
