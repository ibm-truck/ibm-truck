"use client";
import { Button } from "@/components/ui/button";
import handleSignOut from "@/features/auth/utils/signOut";
import Link from "next/link";
import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Page() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-primary text-2xl sm:text-3xl font-bold">
            Welcome, Admin
          </h1>
          <button
            onClick={async () => {
              await handleSignOut({
                callbackUrl: "/",
              });
            }}
            className="flex items-center gap-1 text-red-500 hover:underline"
          >
            <FaArrowRightToBracket />
            <p>Logout</p>
          </button>
          {/* <Link href={"/"} className=" ">
          </Link> */}
        </div>
        <p className="mb-8">
          This is the admin page, changes made here will affect the public site
          in realtime, take caution while making changes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Truck List</h2>
            <p>Manage and view all trucks in the system.</p>
            <Link href={"admin/trucks"}>
              <Button className="mt-4">View Trucks</Button>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Drivers for Hire</h2>
            <p>Manage and view all available drivers for hire.</p>
            <Link href={"admin/hire-driver"}>
              <Button className="mt-4">View Drivers</Button>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Truck Parts</h2>
            <p>Manage and view all available truck parts.</p>
            <Link href={"admin/parts"}>
              <Button className="mt-4">View Parts</Button>
            </Link>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Truck for Hire</h2>
            <p>Manage and view all trucks available for hire.</p>
            <Link href={"admin/hire-truck"}>
              <Button className="mt-4">View Trucks for Hire</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
