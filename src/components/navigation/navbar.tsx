"use client";
import React, { useState } from "react";
import Logo from "../ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathName = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const linkClasses = (path: string) =>
    pathName === path
      ? "text-primary transition-all duration-300"
      : "hover:text-primary transition-all duration-300";

  return (
    <>
      <nav className="flex items-center justify-between py-10">
        <Logo />
        <ul className="md:flex hidden items-center gap-10">
          <li className={linkClasses("/")}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={linkClasses("/about")}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={linkClasses("/services")}>
            <Link href={"/services"}>Services</Link>
          </li>
          <li className={linkClasses("/contact")}>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="flex items-center gap-2">
            <Link
              href={"/"}
              className="hover:animate-bounce transition-all duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"/"}
              className="hover:animate-bounce transition-all duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="hover:animate-bounce transition-all duration-300"
            >
              <FaWhatsapp />
            </Link>
          </li>
        </ul>
        <button
          className="md:hidden block"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <Menu />
        </button>
      </nav>
      <div
        className={cn(
          "w-full h-full fixed bg-white py-10 transition-all duration-500 top-0 z-50",
          navOpen ? "left-0" : "translate-x-full"
        )}
      >
        <div className="container">
          <div className="flex justify-end">
            <button
              className="md:hidden block text-black"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <X />
            </button>
          </div>
        </div>
        <ul className="flex flex-col items-center gap-10 text-black mt-10">
          <li className={linkClasses("/")}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={linkClasses("/about")}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={linkClasses("/services")}>
            <Link href={"/services"}>Services</Link>
          </li>
          <li className={linkClasses("/contact")}>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="flex items-center gap-5">
            <Link
              href={"/"}
              className="hover:animate-bounce transition-all duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"/"}
              className="hover:animate-bounce transition-all duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="hover:animate-bounce transition-all duration-300"
            >
              <FaWhatsapp />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
