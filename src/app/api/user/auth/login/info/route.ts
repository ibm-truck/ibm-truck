import { db } from "@/lib/db";
import { formatPhoneNumber } from "@/lib/utils";
import { APIResponse, APIResponseWithData } from "@/server/lib/api";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return APIResponse("Invalid credentials", 400);
  }

  try {
    // find the user based on their email or phone number

    const User = await db.user.findFirst({
      where: {
        email: email.trim(),
      },
    });

    if (!User) {
      return APIResponse("User not found", 404);
    }

    const userInfo = {
      id: User.id,
      email: User.email,
    };

    return APIResponseWithData({
      data: userInfo,
      status: 200,
    });
  } catch (error) {
    return APIResponse("Failed to login", 500);
  }
}
