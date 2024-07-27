import { db } from "@/lib/db";
import { APIResponse } from "@/server/lib/api";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // checks if email and password is properly supplied
  if (!email || !password) {
    return APIResponse("invalid credentials, ya a bad guy", 400);
  }
  // find the user based on their email or phone number

  const User = await db.user.findFirst({
    where: {
      email: email.toString().trim(),
    },
  });

  // if there is no user return user not found
  if (!User) {
    return APIResponse("User not found, Please sign up", 404);
  }

  // checks if the password is valid
  const isPasswordValid = await bcrypt.compare(
    password,
    User.password as string
  );

  // if the password is invalid return invalid credentials

  if (!isPasswordValid) {
    return APIResponse("Invalid credentials", 400);
  }

  return APIResponse("Login Successful", 200);
}
