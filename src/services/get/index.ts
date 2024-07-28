import { Iparts, Itruck } from "@/lib/types";
import { BASE_URL } from "@/server/lib/api";
import { Driver, Part, Truck } from "@prisma/client";
// import axios from "axios";

export async function getTrucksSell() {
  try {
    const res = await fetch(`${BASE_URL}/api/trucks`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "x-purpose": "Sell" as Itruck["purpose"],
      },
    });

    const data = await res.json();

    return data as Truck[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTrucksHire() {
  try {
    const res = await fetch(`${BASE_URL}/api/trucks`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "x-purpose": "Hire" as Itruck["purpose"],
      },
    });
    const data = await res.json();

    return data as Truck[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getParts() {
  try {
    const res = await fetch(`${BASE_URL}/api/parts`, {
      cache: "no-store",
    });
    const data = await res.json();

    return data as Part[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getDrivers() {
  try {
    const res = await fetch(`${BASE_URL}/api/driver`, {
      cache: "no-store",
    });
    const data = await res.json();

    return data as Driver[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
