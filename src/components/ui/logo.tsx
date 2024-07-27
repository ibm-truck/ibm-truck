import Image from "next/image";
import React from "react";
import logoIcon from "@/assets/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2">
        <Image src={logoIcon} alt="logo" height={30} />
        <h1 className="text-xl font-bold">IBM TRUCKS</h1>
      </div>
    </Link>
  );
}
