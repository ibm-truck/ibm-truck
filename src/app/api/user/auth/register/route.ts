import { db } from "@/lib/db";
import { formatPhoneNumber } from "@/lib/utils";
import { APIResponse, APIResponseWithData } from "@/server/lib/api";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { email, password }: { email: string; password: string } =
    await request.json();

  // checks if email and password is properly supplied
  // if (!email || !password) {
  //   return APIResponse("invalid credentials, ya a bad guy", 400);
  // }
  // // find the user based on their email or phone number

  // const User = await db.user.findFirst({
  //   where: {
  //     email: email.trim(),
  //   },
  // });

  // // if there is no user return user not found
  // if (User) {
  //   return APIResponse("User already exists", 404);
  // }

  // const Hashedpassword = await bcrypt.hash(password, 12);

  // const newUser = await db.user.create({
  //   data: {
  //     email: email.trim(),
  //     password: Hashedpassword,
  //   },
  // });

  // // if the password is invalid return invalid credentials

  // if (!newUser) {
  //   console.log(newUser);
  //   return APIResponse("An error occured while creating account", 400);
  // }

  return APIResponse("Error", 404);
}
