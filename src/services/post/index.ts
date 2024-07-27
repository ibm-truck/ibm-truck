import { Idriver, Iparts, Itruck } from "@/lib/types";
import { BASE_URL } from "@/server/lib/api";
import axios from "axios";

export async function addTruck({
  condition,
  imageUrl,
  name,
  price,
  purpose,
}: Itruck) {
  try {
    const data: Itruck = {
      condition,
      imageUrl,
      name,
      price,
      purpose,
    };
    const res = await axios.post(`${BASE_URL}/api/trucks`, data);

    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function addPart({ condition, imageUrl, name, price }: Iparts) {
  try {
    const data: Iparts = {
      condition,
      imageUrl,
      name,
      price,
    };
    const res = await axios.post(`${BASE_URL}/api/parts`, data);

    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function addDriver({ imageUrl, name }: Idriver) {
  try {
    const data: Idriver = {
      imageUrl,
      name,
    };
    const res = await axios.post(`${BASE_URL}/api/driver`, data);

    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
