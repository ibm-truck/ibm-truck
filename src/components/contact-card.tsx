import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactCard() {
  return (
    <div className="flex items-center gap-2">
      <p
        data-aos="fade-right"
        className="text-blue-900 bg-blue-300 inline-block text-sm px-3 py-1 rounded-sm mb-5"
      >
        Call: <span className="text-black">+1 (920) 815-8385</span>
      </p>
      <Link href={"https://wa.me/message/HKZJXFRZRDTMN1"}>
        <div
          data-aos="fade-right"
          className="text-white bg-green-600 inline-flex items-center gap-1 text-sm px-3 py-1 rounded-sm mb-5"
        >
          <FaWhatsapp />
          <p>Whatsapp</p>
        </div>
      </Link>
    </div>
  );
}
