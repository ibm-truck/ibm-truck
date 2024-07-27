import { Idelete } from "@/lib/types";
import { BASE_URL } from "@/server/lib/api";
import axios from "axios";

export async function deleteDriver({ id }: Idelete) {
  try {
    const res = await axios.delete(`${BASE_URL}/api/driver`, {
      headers: {
        "Content-Type": "application/json",
        id,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function deleteTruck({ id }: Idelete) {
    try {
      const res = await axios.delete(`${BASE_URL}/api/trucks`, {
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });
  
      return res.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  export async function deletePart({ id }: Idelete) {
    try {
      const res = await axios.delete(`${BASE_URL}/api/parts`, {
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });
  
      return res.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
