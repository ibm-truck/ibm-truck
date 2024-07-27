import { BASE_URL } from "@/server/lib/api";
import axios from "axios";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await axios.post(`${BASE_URL}/api/user/auth/login`, {
      email,
      password,
    });
    return res;
  } catch (error: any) {
    const typedError: {
      response: { data: { message: string }; status: number };
    } = error;
    console.error("Cather: ", error);
    return typedError.response;
  }
}
