"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
    //   easing: "ease-out-quad",
    //   offset: 120, // Change offset for triggering animations
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation can trigger multiple times
    });
  }, []);

  return null;
};
